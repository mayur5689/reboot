import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  source?: string;
  recovery?: string;
  startWhen?: string;
  callTime?: string;
};

async function appendInquiryToSheet(payload: {
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  recovery: string;
  startWhen: string;
  callTime: string;
  message: string;
  source: string;
}) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return { skipped: true as const };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Sheet webhook failed (${res.status}): ${text || res.statusText}`);
  }

  return { skipped: false as const };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;
    const {
      name,
      email,
      phone,
      subject,
      message,
      source,
      recovery,
      startWhen,
      callTime,
    } = body;

    if (!name || !message || (!email && !phone)) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info.r3boot@gmail.com',
      ...(email ? { replyTo: email } : {}),
      subject: `Contact Form Submission: ${subject || 'New Message'}`,
      text: `
                Name: ${name}
                Email: ${email || 'Not provided'}
                Phone: ${phone || 'Not provided'}
                Subject: ${subject || 'General Inquiry'}
                Recovering from: ${recovery || 'Not provided'}
                Want to start: ${startWhen || 'Not provided'}
                Best time to call: ${callTime || 'Not provided'}
                Message: ${message}
            `,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
                    <div style="background-color: #513394; padding: 20px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">New Inquiry Received</h1>
                    </div>
                    <div style="padding: 30px;">
                        <p style="margin-bottom: 20px; font-size: 16px;">You have received a new message from the R3boot website contact form.</p>
                        
                        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                            <p style="margin: 5px 0;"><strong>Email:</strong> ${email || 'Not provided'}</p>
                            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
                            ${recovery ? `<p style="margin: 5px 0;"><strong>Recovering from:</strong> ${recovery}</p>` : ''}
                            ${startWhen ? `<p style="margin: 5px 0;"><strong>Want to start:</strong> ${startWhen}</p>` : ''}
                            ${callTime ? `<p style="margin: 5px 0;"><strong>Best time to call:</strong> ${callTime}</p>` : ''}
                        </div>

                        <p style="font-weight: bold; margin-bottom: 10px;">Message:</p>
                        <p style="line-height: 1.6; white-space: pre-wrap; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">${message}</p>
                    </div>
                    <div style="background-color: #f4f4f4; padding: 15px; text-align: center; color: #777; font-size: 12px;">
                        This email was sent from the R3boot Website Contact Form.
                    </div>
                </div>
            `,
    };

    await transporter.sendMail(mailOptions);

    try {
      await appendInquiryToSheet({
        timestamp: new Date().toISOString(),
        name,
        email: email || '',
        phone: phone || '',
        subject: subject || 'General Inquiry',
        recovery: recovery || '',
        startWhen: startWhen || '',
        callTime: callTime || '',
        message,
        source: source || 'contact',
      });
    } catch (sheetError: unknown) {
      const sheetMessage =
        sheetError instanceof Error ? sheetError.message : 'Unknown sheet error';
      console.error('Failed to append inquiry to Google Sheet:', sheetMessage);
      // Email already sent — do not fail the request if sheet sync fails
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending email:', errorMessage);
    console.error('Full error:', error);
    return NextResponse.json({ message: `Failed to send email: ${errorMessage}` }, { status: 500 });
  }
}
