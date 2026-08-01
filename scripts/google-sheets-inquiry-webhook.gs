/**
 * Google Apps Script for R3BOOT inquiry sheet
 *
 * 1. Replace SHEET_ID below with your spreadsheet ID from the URL:
 *    https://docs.google.com/spreadsheets/d/SHEET_ID/edit
 * 2. Save
 * 3. Deploy → New deployment → Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. After ANY code change: Deploy → Manage deployments → pencil → New version → Deploy
 * 5. Put the /exec URL in Vercel as GOOGLE_SHEETS_WEBHOOK_URL and redeploy the site
 *
 * Sheet headers (row 1):
 * Timestamp | Name | Phone | Email | Subject | Recovering From | Start When | Best Call Time | Message | Source
 */

var SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json_({ ok: false, error: 'No post data received' });
    }

    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];

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

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, message: 'R3BOOT inquiry webhook is live. Use POST from the website.' });
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
