module.exports.function = function manageGrade ($vivContext){
  const console = require('console');

  let http = require('http');
  let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action="
  let action = "count_exercise_get_grade";
  let user_id = "&user_id="+$vivContext.userId;;
  
  // var secret = require('secret');
  // var apikey = secret.get('apikey');
  let grades = ["초급", "중급", "고급"];
  let options = {
    format: 'json',
    headers: {
      // 'X-API-Key': apikey
    }
  };
  let user_data = http.getUrl(link+action+user_id, options);
  console.log("user_data: " + user_data);


  let originalGrade = grades[user_data[0].user_grade];


  return originalGrade;
}