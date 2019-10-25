module.exports.function = function yesterdayExercise (recent) {
  const console = require('console');

  let http = require('http')
  let result = null
  result = http.getUrl("https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=recent", {format : 'json'});
  
  console.log("http : " + http);
  console.log("result : " + result);


let exlist = [];
let date="";
for (let i=0; i<result.length; ++i) {
    let obj = result[i];
    
    console.log(obj.name);
    exlist.push({
      exerciseName: obj.name,
      exercisePart: obj.part,
      exerciseGrade: obj.grade,
      exerciseImgUrl: getImg(obj.part),
      
    })
  }
  if (result.length>0){
    let tmpDate = result[0].date;
    console.log(tmpDate);
    date=tmpDate.substr(0, 4)+"년 "+tmpDate.substr(3,5)+"월 "+tmpDate.substr(8, 10)+"일";
  }


  return {
    exercise:exlist,
    date: date
  };
}

  function getImg(part){

    switch (part){
      case "상체":
        return "images/upper.png";
      case "하체":
        return "images/lower.png";
      case "코어":
        return "images/core.png";
    }
  }
