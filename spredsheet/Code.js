function myFunction() {
  Logger.log('Hello World');
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(1, 2).getValue());
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(3, 2).getValue());
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(4, 3).getValue());
}
