module.exports.function = function recommendPart($vivContext, partInput) {

  var secret = require('secret');
  var apikey = secret.get('apikey');
  var config = require('config');
  var baseUrl = config.get('baseUrl');
  let http = require('http');
  let console = require('console');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey
    }
  };
  const bixbyUserId = $vivContext.userId;
  let url = baseUrl + "isExist&user_id=" + bixbyUserId;
  http.getUrl(url, options);
  //////////////////////////////////////////////////////////가장 기본이 되는 코드///////////////////////////////////////////

  // let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=";
  let action = "";
  let user_id = "&user_id=" //input 

  let result = new Array();

  user_id += bixbyUserId;
  action = "count_exercise_get_grade";
  console.log(baseUrl + action + user_id);
  let user_data = http.getUrl(baseUrl + action + user_id, options);
  console.log("user_data: " + user_data);

  let grade = user_data[0].user_grade;
  let user_grade = "&user_grade=" + grade;

  action = "recommed_part"
  let exerciseInfo = http.getUrl(baseUrl + action + user_grade, options);
  console.log(exerciseInfo.length);

  let routineList = [];
  for (var iter = 0; iter < exerciseInfo.length / 4; iter++) {

    let exerList = [];
    for (var it = 0; it < 4; iter++) {

      exerList.push({
        exerciseID: exerciseInfo[iter * 4 + it].exe_id,
        exerciseName: exerciseInfo[iter * 4 + it].name,
        exercisePart: exerciseInfo[iter * 4 + it].partInput,
        exerciseGrade: user_grade,
        exerciseSet: exerciseInfo[iter * 4 + it],
        exerciseCnt: exerciseInfo[iter * 4 + it],
        exerciseImgUrl: getImg(exerciseInfo[iter * 4 + it].partInput)
      })

    }

    console.log(exerList);
    routineList.push({
      routineNum: iter,
      exercisePart: partInput,
      exercise: exerList
    })

  }

  console.log(routineList);

  return {
    exerciseGrade: user_grade,
    routine: routineList
  };
}


function getCnt(exInfo, grade) {
  switch (grade) {
    case "1":
      return exInfo.im_cnt;
    case "2":
      return exInfo.ad_cnt;
    case "3":
      return exInfo.pro_cnt;

  }

}

function getSet(exInfo, grade) {
  switch (grade) {
    case "1":
      return exInfo.im_set;
    case "2":
      return exInfo.ad_set;
    case "3":
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