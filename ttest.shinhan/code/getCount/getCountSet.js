module.exports.function = function getCountSet ($vivContext,countCom, exeName){
  // if bixby id == null >> insert 
  var secret = require('secret');
  var apikey = secret.get('apikey');
  
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      // 'X-API-Key': apikey
    }
  };
 
  const bixbyUserId = $vivContext.userId;
  let http = require('http');
  http.getUrl("https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action=isExist&user_id="+bixbyUserId ,options);


  //----------------------------------------------------------------------------------------------
  //My Logic

  const console = require('console');

  let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action="
  let user_id = "&user_id="+bixbyUserId;
  let action = "count_exercise_get_grade";
  let user_data = http.getUrl(link+action+user_id, options );

  let user_grade = user_data[0].user_grade;

  let name = "&name=" + exeName;
  action="count_exercise_get_exercise";
  var enc = encodeURI(link+action+name);
  let exercise = http.getUrl(enc, options );

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


  //------------------------------------------------------------------------------------------------------------------
  //insert rocord

  action = "insertExeRocord";
  var exe_id = "&exe_id=" + exercise[0].exe_id;
  var grade = "&grade=" + user_grade;
  http.getUrl(link+action+exe_id+user_id+grade ,options );

  //-------------------------------------------------------------------------------------------------------------------
  //return countAudio 
  var countAudio = require('audioForCount/countAudio.js')

  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let countAudioFound = []

  var temp = function (audioItem) {
      return keysToSearchOn.some(function (key) {
        return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
      })
    }
  countAudioFound = countAudio.audioItems.filter(temp)

  let flag  = countAudioFound;

  for(var i = 0; i< setNum-1;i++){
    countAudioFound.push(countAudio.audioItems[10])
    countAudioFound.push(flag[0])
  }
  return countAudioFound
}