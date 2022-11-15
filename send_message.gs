function check() {
  const sheetId = ""
  const cell = ""
  const message_cell =""

  //こっから先は触らないでください


  const sheet = SpreadsheetApp.openById(sheetId)
  const range = sheet.getRange(cell)
  const values = range.getValues()
  //console.log(values)
  const myRange = sheet.getRange(message_cell+values)
  if(myRange.isBlank()){
    return
  }else{
    send(myRange.getValue())
    range.setValue(Number(values) + 1)
  }
}


function send(str){
  let postUrl  = "https://230rv1xwj1.execute-api.ap-northeast-1.amazonaws.com/default/makeimage"
  let userName = "rumi"

  let jsonData = {
    "username" : userName,
    "text" : str
  }

  console.log(jsonData);
  let payload = JSON.stringify(jsonData)
  let options ={
   "method" : "post",
   "contentType" : "application/json",
   "payload" : payload
  };
  UrlFetchApp.fetch(postUrl, options);
}
