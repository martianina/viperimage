/* =======================  CONFIG  ======================= */
// Google Sheet column headers for product review
const EMAIL_LABEL = 'Email Address';
const COLOR_SAMPLE = 'Color Sample';
const USAGE_DETAILS = 'Usage Details';
const EFFECTIVENESS = 'Effectiveness';
const TOLERANCE = 'Tolerance';
const LOOK_AND_FEEL = 'Look and Feel';
const SMELL = 'Smell';
const FINAL_RATING = 'Final Rating';
const WOULD_RECOMMEND = 'Would Recommend';
const WOULD_BUY = 'Would Buy';
const ADDITIONAL_COMMENTS = 'Additional Comments';
const STICKER_BEFORE = 'Sticker Before Photo';
const STICKER_AFTER = 'Sticker After Photo';
const FADE_TIME = 'Fade Time';
const LASTED_UNTIL_FADE = 'Lasted Until Fade';

// Google Drive folder for JSON files
const DRIVE_FOLDER_ID = '1vy7le5zEl0cWIzRQ8gM_LYgnZ2k14xWw';
/* ======================================================== */

function onFormSubmit(e) {
  try {
    Logger.log('Product review trigger fired! Event: ' + JSON.stringify(e));
    
    // Get the active sheet and find the latest row
    const sheet = SpreadsheetApp.getActiveSheet();
    const lastRow = sheet.getLastRow();
    
    Logger.log('Last row: ' + lastRow);
    
    // Only process if we have data beyond headers
    if (lastRow <= 1) {
      Logger.log('No data rows found');
      return;
    }
    
    // Get the latest row data
    const rowData = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    Logger.log('Row data: ' + JSON.stringify(rowData));
    Logger.log('Headers: ' + JSON.stringify(headers));
    
    /* helper → get value from row data */
    const get = (label) => {
      const columnIndex = headers.indexOf(label);
      return columnIndex >= 0 ? rowData[columnIndex] : '';
    };

    /* ---------- 1. write de-identified JSON to Drive ---------- */
    const reviewData = {
      timestamp: get('Timestamp'),
      // De-identified metadata only - no PII
      review_date: new Date().toISOString(),
      color_sample: get(COLOR_SAMPLE),
      usage_details: get(USAGE_DETAILS),
      effectiveness: get(EFFECTIVENESS),
      tolerance: get(TOLERANCE),
      look_and_feel: get(LOOK_AND_FEEL),
      smell: get(SMELL),
      final_rating: get(FINAL_RATING),
      would_recommend: get(WOULD_RECOMMEND),
      would_buy: get(WOULD_BUY),
      additional_comments: get(ADDITIONAL_COMMENTS) || '',
      sticker_before_uploaded: get(STICKER_BEFORE) ? true : false,
      sticker_after_uploaded: get(STICKER_AFTER) ? true : false,
      fade_time: get(FADE_TIME) || '',
      lasted_until_fade: get(LASTED_UNTIL_FADE) || '',
      // No email or PII in JSON
    };

    DriveApp.getFolderById(DRIVE_FOLDER_ID)
            .createFile(
              `product-review-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
              JSON.stringify(reviewData, null, 2),
              MimeType.PLAIN_TEXT
            );

    Logger.log('Product review JSON created successfully');
    
  } catch (error) {
    Logger.log('Error in product review onFormSubmit: ' + error.toString());
    Logger.log('Error stack: ' + error.stack);
  }
}

 