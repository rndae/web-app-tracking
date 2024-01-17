function updateSheetColumn() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sent Emails");
  var dataValues = sheet.getDataRange().getValues();
  var headers = dataValues[0];
  var emailIdIndex = headers.indexOf("EmailID");
  var openedIndex = headers.indexOf("Opened");

  var url = "https://script.google.com/macros/s/AKfycbzX9c0wATshwj7d9qmqlDNhi2tKQb3QWq13BgDUKy0hAMrIavcik_QrUORr853qzErV/exec?secret=arbolitosecreto";
  var response = UrlFetchApp.fetch(url);
  var jsonData = JSON.parse(response.getContentText());
  
  for (var i = 1; i < dataValues.length; i++) {
    var emailId = dataValues[i][emailIdIndex];
    var count = 0;
    for (var j = 0; j < jsonData.length; j++) {
      if (jsonData[j].includes(emailId)) {
        count++;
      }
    }
    Logger.log(count + " - " + emailId)
    sheet.getRange(i + 1, openedIndex + 1).setValue(count);
  }
}
