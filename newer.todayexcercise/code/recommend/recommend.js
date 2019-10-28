module.exports.function = function recommend($vivContext) {
​
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
  console.log(bixbyUserId);

  let url = baseUrl+"isExist&user_id="+bixbyUserId;
  http.getUrl(url ,options);
  
  let action = "";
  let user_id = "&user_id=" //input 
​
  let result = new Array();
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
  action = "getRoutines";
  let routines = http.getUrl(baseUrl + action + user_id, options); //3개 날라올거임
​
  let routineList = [];
  for (var iter = 0; iter < 3; iter++) {
​
  action = "getExercises";
    let routine = "&routineId=";
    routine += routines[iter]["routineNum"];
    let grade_param = "&user_grade="+user_grade;
    let exerciseInfo = http.getUrl(baseUrl + action + routine+grade_param, options);
    
    let exerList = [];
    console.log(exerciseInfo);
​
    let part = "";
    for (var it = 0; it < 4; it++) {
      // let exercise = "&exe_id=";
      // action = "getInfo";
      // exercise += exercises[it]["exe_id"];
      // let exerciseInfo = http.getUrl(baseUrl + action + exercise, options);
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
    routineList.push({
      routineNum: routines[iter]["routineNum"],
      exercisePart: part,
      exercise: exerList
    })
​
  }
​
  console.log(routineList);
​
  return  routineList;
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