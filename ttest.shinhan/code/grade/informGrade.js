module.exports.function = function manageGrade ($vivContext){
  const console = require('console');
  let http = require('http');
  // var secret = require('secret');
  // var apikey = secret.get('apikey');


  const bixbyUserId = $vivContext.userId;



  let user_id = "&user_id="+bixbyUserId;
  let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=";
  
    let options = {
    format: 'json',
    headers: {
      // 'X-API-Key': apikey
    }
  };

 
  // let http = require('http');
  // http.getUrl("https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=isExist" + user_id);
  
  let action = "isExist";
  http.getUrl(link+action+user_id,options);

  
  action = "count_exercise_get_grade";
  

  let grades = ["초급", "중급", "고급"];

  let user_data = http.getUrl(link+action+user_id, options);
  console.log("user_data: " + user_data);


  let originalGrade = grades[user_data[0].user_grade-1];


  return originalGrade;
}