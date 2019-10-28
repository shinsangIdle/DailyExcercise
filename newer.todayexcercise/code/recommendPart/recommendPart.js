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
  const bixbyUserId = $vivContext.bixbyUserId;
  let url = baseUrl + "isExist&user_id=" + bixbyUserId;
  http.getUrl(url, options);
  let action = "";
  let user_id = "&user_id=" //input 

  let result = new Array();

  user_id += bixbyUserId;
  action = "count_exercise_get_grade";
  
  // console.log(baseUrl + action + user_id);
  let user_data = http.getUrl(baseUrl + action + user_id, options);
  console.log("user_data: " + user_data[0].user_grade);

  let grade = user_data[0].user_grade;
  let user_grade = "&user_grade=" + grade;
  let part_param = "&part="+partInput;

  action = "recommend_part";
  let encUrl = encodeURI(baseUrl + action + user_grade + part_param);
  let exerciseInfo = http.getUrl(encUrl, options);
  console.log(exerciseInfo);

  let routineList = [];
  for (var iter = 0; iter < exerciseInfo.length/4; iter++) {

    let exerList = [];
    for (var it = 0; it < 4; it++) {
      // console.log(iter*4 + it)
      // console.log(exerciseInfo[iter * 4 + it])
      
      
      exerList.push({
        exerciseID: exerciseInfo[iter * 4 + it].exe_id,
        exerciseName: exerciseInfo[iter * 4 + it].name,
        exercisePart: partInput,
        exerciseGrade: grade,
        exerciseSet: exerciseInfo[iter * 4 + it].setn,
        exerciseCnt: exerciseInfo[iter * 4 + it].cnt,
        exerciseImgUrl: exerciseInfo[iter * 4 + it].img
      })

    }

     console.log(exerList);
     console.log(partInput);
    routineList.push({
      routineNum: exerciseInfo[iter*4].routine_id,
      exercisePart: partInput,
      exercise: exerList
    })

  }

  console.log(routineList);

  return routineList;
  
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

