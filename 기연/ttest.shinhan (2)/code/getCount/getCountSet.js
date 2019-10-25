module.exports.function = function getCountSet ($vivContext,countCom, exeName){
  const bixbyUserId = $vivContext.userId;
  const console = require('console');

  let http = require('http');
  let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action="
  let action = "";
  let user_id = "&user_id="
  let name = "&name=";

  user_id += bixbyUserId;
  action = "count_exercise_get_grade";
  //console.log(link+action+user_id);
  let user_data = http.getUrl(link+action+user_id, {format : 'json'});
  console.log("user_data: " + user_data);


  let user_grade = user_data[0].user_grade;

  name += exeName;
  action="count_exercise_get_exercise";
  //console.log(link+action+name);
  let exercise = http.getUrl(link+action+name, {format : 'json'});
  console.log("exercise: " + exercise);

  let exerciseName, exercisePart, setNum, searchTerm;

  exercisePart = exercise[0].part;
  exerciseName = exercise[0].name;
  if(user_grade==1){
    console.log(1);
    setNum = exercise[0].im_set;
    searchTerm = exercise[0].im_cnt;
  }else if(user_grade==2){
    console.log(2);
    setNum = exercise[0].ad_set;
    searchTerm = exercise[0].ad_cnt;
  }else{
    console.log(3);
    setNum = exercise[0].pro_set;
    searchTerm = exercise[0].pro_cnt;
  }
  console.log("setNum: "+setNum+", searchTerm: "+searchTerm);
  //return resultCountSet;
  /////////////////////////////////////////////////////////
  var countAudio = require('audioForCount/countAudio.js')

  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let countAudioFound = []
  // 뭐로 찾을지 들어온다면 Play kitten과 같이
  // 긴거 틀어줘 와 같이 특정 단어가 들어온다면 title, artist, subtitle, albunName에서 긴거를 찾고 틀어줌
  //searchTerm = searchTerm.toLowerCase()

  var temp = function (audioItem) {
      return keysToSearchOn.some(function (key) {
        return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
      })
    }
  countAudioFound = countAudio.audioItems.filter(temp)


  for(var i = 0; i< setNum-1;i++){
    countAudioFound.push(countAudio.audioItems[10])
    countAudioFound.push(flag[0])
  }
  return countAudioFound
}