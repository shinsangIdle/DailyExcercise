module.exports.function = function getRoutine($vivContext, routineNum) {

  var secret=require('secret');
  var apikey=secret.get('apikey');
  var config = require('config');
  var baseUrl=config.get('baseUrl');
  let http = require('http');
  let console = require('console');
  let options={
    format : 'json',
    cacheTime : 0,
    headers:{
      'X-API-Key' : apikey
    }
  };
  const bixbyUserId = $vivContext.bixbyUserId;
  let url = baseUrl+"isExist&user_id="+bixbyUserId;
  http.getUrl(url ,options);
  
  let action = "";
  let user_id = "&user_id=" //input 
​
  user_id += bixbyUserId;
  action = "count_exercise_get_grade";
  console.log(baseUrl+action+user_id);
  let user_data = http.getUrl(baseUrl+action+user_id, options );
  console.log( user_data);
​
  let user_grade = user_data[0].user_grade;
​
  console.log("user_grade: " + user_grade);
  
  action = "getExercises";
    let routine = "&routineId=";
    routine += routineNum;
    let grade_param = "&user_grade="+user_grade;
    let exerciseInfo = http.getUrl(baseUrl + action + routine+grade_param, options);
    
    let exerList = [];
    console.log(exerciseInfo);
​
    let part = "";
    for (var it = 0; it < 4; it++) {
     
      part = exerciseInfo[it].part;
      exerList.push({
        exerciseID: exerciseInfo[it].exe_id,
        exerciseName: exerciseInfo[it].name,
        exercisePart: exerciseInfo[it].part,
        exerciseGrade: user_grade,
        exerciseSet: exerciseInfo[it].sett,
        exerciseCnt: exerciseInfo[it].cnt,
        exerciseImgUrl: exerciseInfo[it].img
      })
​
    }
    
    console.log(exerList);
    return {
      routineNum: routineNum,
      exercisePart: part,
      exercise: exerList
    };
}
​
​
function getCnt(exInfo, grade) {
  switch (grade) {
    case 1:
      return exInfo.im_cnt;
    case 2:
      return exInfo.ad_cnt;
    case 3:
      return exInfo.pro_cnt;
​
  }
​
}
​
function getSet(exInfo, grade) {
  switch (grade) {
    case 1:
      return exInfo.im_set;
    case 2:
      return exInfo.ad_set;
    case 3:
      return exInfo.pro_set;
​
  }
​
}