module.exports.function = function saveRoutine ($vivContext,routine) {
  var secret = require('secret');
  var apikey = secret.get('apikey');
  let console = require('console');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      // 'X-API-Key': apikey
    }
  };
  let http = require('http');
  

  //insert rocord
  action = "insertRouRocord";
  let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action="
  let user_id = "&user_id="+$vivContext.userId;
  var routine_id = "&routine_id=" + routine.routineNum;
  http.getUrl(link+action+user_id+routine_id ,options );

  console.log("저장함")
  return routine;
}