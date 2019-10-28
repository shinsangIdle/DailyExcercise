module.exports.function = function saveRoutine ($vivContext,routine) {
  var secret = require('secret');
  var apikey = secret.get('apikey');
  let console = require('console');
  var config = require('config');
  var baseUrl=config.get('baseUrl');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey
    }
  };
  let http = require('http');
  

  //insert rocord
  action = "insertRouRocord";
  let user_id = "&user_id="+$vivContext.userId;
  var routine_id = "&routine_id=" + routine.routineNum;
  http.getUrl(baseUrl+action+user_id+routine_id ,options );

  console.log(baseUrl+action+user_id+routine_id ,options );
  return routine;
}