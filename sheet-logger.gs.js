// Google Apps Script — paste this into Extensions > Apps Script on the target
// Google Sheet, then Deploy > New deployment > type "Web app" > execute as
// "Me" > access "Anyone" > Deploy. Copy the resulting URL (ends in /exec)
// into the SHEET_WEBHOOK_URL constant near the top of PICC/index.html.
//
// Every row (trial or session-summary) is appended in this fixed column
// order; any key missing from a given payload is just left blank.

const HEADERS = [
  'timestamp', 'sessionId', 'playNumber', 'rowType', 'chapter',
  'trialNumber', 'trueValue', 'response', 'reactionTimeMs',
  'age', 'gender', 'nfcScore', 'ch1Drift', 'ch2Drift',
];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  const data = JSON.parse(e.postData.contents);
  const rows = Array.isArray(data) ? data : [data];
  rows.forEach(row => {
    sheet.appendRow(HEADERS.map(h => (row[h] !== undefined ? row[h] : '')));
  });
  return ContentService.createTextOutput('OK');
}
