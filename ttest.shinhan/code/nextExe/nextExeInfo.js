module.exports.function = function nextExe ($vivContext) {
  var secret=require('secret');
  var apikey=secret.get('apikey');
  var config = require('config');
  var baseUrl=config.get('baseUrl');
  const console = require('console');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey
    }
  };
 
  // if bixby id == null >> insert 
  const bixbyUserId = $vivContext.userId;
  let http = require('http');
  http.getUrl(baseUrl+"isExist&user_id="+bixbyUserId ,options);
  
  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //My Logic
  //let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action="
  let user_id = "&user_id="+bixbyUserId;
  let action = "count_exercise_get_grade";
  let user_data = http.getUrl(baseUrl+action+user_id, options );

  let user_grade = user_data[0].user_grade;

 // var link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=";
  action = "nextExe";  
  let exerciseInfo = http.getUrl(baseUrl+action+user_id,options);
  
  let exerList = [];
  exerList.push({
    exerciseID: exerciseInfo[0].exe_id,
    exerciseName: exerciseInfo[0].name,
    exercisePart: exerciseInfo[0].part,
    exerciseGrade: user_grade,
    exerciseSet: getSet(exerciseInfo[0], user_grade),
    exerciseCnt: getCnt(exerciseInfo[0], user_grade),
    exerciseImgUrl: exerciseInfo[0].img
  })
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

function getImg(part) {
  switch (part) {
    case "상체":
      return "images/upper.png";
    case "하체":
      return "images/lower.png";
    case "코어":
      return "images/core.png";
  }
}