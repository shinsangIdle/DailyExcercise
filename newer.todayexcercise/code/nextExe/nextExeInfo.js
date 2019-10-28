module.exports.function = function nextExe($vivContext) {
  var secret = require('secret');
  var apikey = secret.get('apikey');
  var config = require('config');
  var baseUrl = config.get('baseUrl');
  const console = require('console');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey
    }
  };

  // if bixby id == null >> insert 
  const bixbyUserId = $vivContext.bixbyUserId;
  let http = require('http');
  http.getUrl(baseUrl + "isExist&user_id=" + bixbyUserId, options);

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------

  //My Logic

  let user_id = "&user_id=" + bixbyUserId;
  let action = "count_exercise_get_grade";
  let user_data = http.getUrl(baseUrl + action + user_id, options);

  let user_grade = user_data[0].user_grade;


  action = "nextExe";
  let exerciseInfo = http.getUrl(baseUrl + action + user_id, options);

  let exerList = [];
  for (var it = 0; it < exerciseInfo.length; it++) {
    exerList.push({
      exerciseID: exerciseInfo[it].exe_id,
      exerciseName: exerciseInfo[it].name,
      exercisePart: exerciseInfo[it].part,
      exerciseGrade: user_grade,
      exerciseSet: getSet(exerciseInfo[it], user_grade),
      exerciseCnt: getCnt(exerciseInfo[it], user_grade),
      exerciseImgUrl: exerciseInfo[it].img
    })
  }
  console.log(exerList);
  return exerList;
}

function getCnt(exInfo, grade) {
  switch (grade) {
    case 1:
      return exInfo.im_cnt;
    case 2:
      return exInfo.ad_cnt;
    case 3:
      return exInfo.pro_cnt;
  }
}

function getSet(exInfo, grade) {
  switch (grade) {
    case 1:
      return exInfo.im_set;
    case 2:
      return exInfo.ad_set;
    case 3:
      return exInfo.pro_set;

  }

}
