module.exports.function = function manageGrade($vivContext) {
  const console = require('console');
  let http = require('http');
  var secret = require('secret');
  var apikey = secret.get('apikey');

  var config = require('config');
  var baseUrl = config.get('baseUrl');

  const bixbyUserId = $vivContext.userId;

  let user_id = "&user_id=" + bixbyUserId;
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey
    }
  };


  // let http = require('http');
  // http.getUrl("https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=isExist" + user_id);

  let action = "isExist";
  http.getUrl(baseUrl + action + user_id, options);

  console.log("여기까지는 오나?");
  action = "count_exercise_get_grade";


  let grades = ["초급", "중급", "상급"];

  let user_data = http.getUrl(baseUrl + action + user_id, options);
  console.log("user_data: " + user_data);


  let originalGrade = grades[user_data[0].user_grade - 1];


  return originalGrade;
}