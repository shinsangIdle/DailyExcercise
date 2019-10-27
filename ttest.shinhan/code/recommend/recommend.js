module.exports.function = function recommend($vivContext) {
  var secret = require('secret');
  var apikey = secret.get('apikey');
  let http = require('http');
  let options={
    format : 'json',
    cacheTime : 0,
    headers:{
      'X-API-Key' : apikey
    }
  };
  const bixbyUserId = $vivContext.userId;
  http.getUrl("https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=isExist&user_id="+bixbyUserId ,options);
  //////////////////////////////////////////////////////////가장 기본이 되는 코드///////////////////////////////////////////
  
  let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=";
  let action = "";
  let console = require('console');
  let user_id = "&user_id=" //input 
  user_id+=bixbyUserId;

  let result = new Array();
  let user_grade = "1";

  action = "getRoutines";
  let routines = http.getUrl(link + action + user_id, options); //3개 날라올거임

  let routineList = [];
  for (var iter = 0; iter < 3; iter++) {

  action = "getExercises";
    let routine = "&routineId=";
    routine += routines[iter]["routineNum"];
    let exerList = [];
    let exercises = http.getUrl(link + action + routine, options);

    for (var it = 0; it < 4; it++) {
      let exercise = "&exe_id=";
      action = "getInfo";
      exercise += exercises[it]["exe_id"];
      let exerciseInfo = http.getUrl(link + action + exercise, options);
      console.log(exerciseInfo);
      exerList.push({
        exerciseName: exerciseInfo[0].name,
        exercisePart: exerciseInfo[0].part,
        exerciseGrade: user_grade,
        exerciseSet: getSet(exerciseInfo[0], user_grade),
        exerciseCnt: getCnt(exerciseInfo[0], user_grade),
        exerciseImgUrl: getImg(exerciseInfo[0].part)
      })

    }
    routineList.push({
      routineNum: 1,
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



//결과
// {유저 등급: 등급,
//  루틴 리스트: [{루틴 번호: 1,
                  // 운동리스트: [{운동ID:1,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png},
                  //             {운동ID:2,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png},
                  //             {운동ID:3,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png}]},
                  // {루틴 번호:2,
                  // 운동리스트: [{운동ID:1,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png},
                  //             {운동ID:2,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png},
                  //             {운동ID:3,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png}]},
                  //  {루틴 번호: 3,
                  // 운동리스트: [{운동ID:1,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png},
                  //             {운동ID:2,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png},
                  //             {운동ID:3,
                  //             운동명:사이드~~~,
                  //             파트: 상체,
                  //             세트: 3
                  //             횟수: 10,
                  //             이미지: upper.png}]}           

//  }]
// }