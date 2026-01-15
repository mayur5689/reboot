import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        // Basic validation
        if (!name || !email || !message) {
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
            replyTo: email,
            subject: `Contact Form Submission: ${subject || 'New Message'}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone || 'Not provided'}
                Subject: ${subject || 'General Inquiry'}
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
                            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
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

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
