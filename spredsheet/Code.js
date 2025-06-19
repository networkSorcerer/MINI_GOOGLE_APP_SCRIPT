function myFunction() {
  Logger.log(
    "Hello World"
  )
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(1,2).getValue());
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(3,2).getValue());
  Logger.log(SpreadsheetApp.getActiveSheet().getRange(4,3).getValue());

  let name 
  name = SpreadsheetApp.getActiveSheet().getRange(4,3).getValue()
  let role = SpreadsheetApp.getActiveSheet().getRange(4,4).getValue()

  Logger.log(name)
  let mainTitle = name + role +" 안녕하세요"
  Logger.log(mainTitle)

  let email
  email = SpreadsheetApp.getActiveSheet().getRange(4,2).getValue()
  Logger.log(email)
  
  let numOfmem
  numOfmem = SpreadsheetApp.getActiveSheet().getRange(2,4).getValue()
  let factor = 2
  Logger.log(numOfmem + factor)



  Logger.log(3 * 5)
  Logger.log(3 + 5)


  let one = 1
  let two = 2

  Logger.log(one + two)
  Logger.log(typeof(two))


let name2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(4, 3).getValue();
let role2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(4, 4).getValue();

// let mailTitle = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일내용").getRange(3, 3).getValue();

let mailTitle2 = name2 + " " + role2 + "님. 반갑습니다. "
let mailBody = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일내용").getRange(3, 4).getValue();

Logger.log(mailTitle2 +" "+ mailBody);


let testing = 'Success'

Logger.log(testing)

let first = 1
let second = '2'

Logger.log(first + second)


let mailAddress = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(4,2).getValue();

let name3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(4,3).getValue();

let role3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("후원자정보").getRange(4,4).getValue();

let mailTitle3 = name3 + ' ' + role3 + '님, 반갑습니다.';
mailTitle3 += SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일내용").getRange(3,3).getValue();

let mailBody2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("이메일내용").getRange(3,4).getValue();

Logger.log(mailAddress + ' ' + mailTitle3 + ' ' + mailBody2);


MailApp.sendEmail(mailAddress, mailTitle3, mailBody2)




























}
