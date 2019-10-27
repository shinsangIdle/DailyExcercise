// module.exports.function = function yesterdayExercise (recent,$vivContext) {
module.exports.function = function yesterdayExercise($vivContext) {
  const console = require('console');
  let http = require('http')
  let result = null
  const bixbyUserId = $vivContext.userId;

  let user_id = "&user_id=" + bixbyUserId;

 var secret=require('secret');
  var apikey=secret.get('apikey');
  var config = require('config');
  var baseUrl=config.get('baseUrl');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey
    }
  };


  http.getUrl(baseUrl+"isExist&user_id=" + user_id,options)

  result = http.getUrl(baseUrl+"recent&userid=" + user_id, options);

  console.log("http : " + http);
  console.log("result : " + result);


  let exlist = [];
  let date = "";
  for (let i = 0; i < result.length; ++i) {
    let obj = result[i];

    console.log(obj.name);
    exlist.push({
      exerciseID: obj.exe_id,
      exerciseName: obj.name,
      exercisePart: obj.part,
      exerciseGrade: obj.grade,
      exerciseImgUrl: getImg(obj.part),

    })
  }
  if (result.length > 0) {
    let date = result[0].date;
  }


  return {
    exercise: exlist,
    date: date
  };
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
