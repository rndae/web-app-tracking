function doGet(request) {
  if(request.parameter.secret != PropertiesService.getScriptProperties().getProperty("secret")) {
    //log in request
    PropertiesService.getScriptProperties().setProperty(Date.now(), "Email #" + request.parameter.cigarmailid + " was opened on " + Date());
    return ContentService.createTextOutput("error, image not found");
  }
  var props = PropertiesService.getScriptProperties().getKeys();
  var finalArray = [];
  for (i in props) {
    finalArray.push(PropertiesService.getScriptProperties().getProperty(props[i]))
  }
  return ContentService.createTextOutput(JSON.stringify(finalArray)).setMimeType(ContentService.MimeType.JSON);
}
