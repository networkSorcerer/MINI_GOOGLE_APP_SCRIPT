function myFunction() {
  Logger.log(
    "Hello World"
  )
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(1,2).getValue());
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(3,2).getValue());
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(4,3).getValue());

  let name 
  name = SpreadsheetApp.getActiveSheet().getRange(4,3).getValue()
  Logger.log(name)

  let email
  email = SpreadsheetApp.getActiveSheet().getRange(4,2).getValue()
  Logger.log(email)
  
  let numOfmem
  numOfmem = SpreadsheetApp.getActiveSheet().getRange(2,4).getValue()
  let factor = 2
  Logger.log(numOfmem + factor)


}
