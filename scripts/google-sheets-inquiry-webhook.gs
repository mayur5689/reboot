/**
 * Google Apps Script — paste into Extensions → Apps Script on your inquiry sheet.
 *
 * Sheet headers (row 1):
 * Timestamp | Name | Phone | Email | Subject | Recovering From | Start When | Best Call Time | Message | Source
 *
 * Deploy: Deploy → New deployment → Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * Then copy the Web app URL into Vercel env: GOOGLE_SHEETS_WEBHOOK_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.subject || '',
      data.recovery || '',
      data.startWhen || '',
      data.callTime || '',
      data.message || '',
      data.source || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
