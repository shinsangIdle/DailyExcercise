module.exports.function = function getCountSet ($vivContext,exerciseName){
  // if bixby id == null >> insert 
  var secret = require('secret');
  var apikey = secret.get('apikey');
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
 
  console.log(baseUrl);
  const bixbyUserId = $vivContext.bixbyUserId;
  let http = require('http');
  http.getUrl(baseUrl+"isExist&user_id="+bixbyUserId ,options);


  //----------------------------------------------------------------------------------------------
  //My Logic

  let user_id = "&user_id="+bixbyUserId;
  let action = "count_exercise_get_grade";
  let user_data = http.getUrl(baseUrl+action+user_id, options );

  let user_grade = user_data[0].user_grade;

  let name = "&name=" + exerciseName;
  action="count_exercise_get_exercise";
  var enc = encodeURI(baseUrl+action+name);
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
  http.getUrl(baseUrl+action+exe_id+user_id+grade ,options );

  //-------------------------------------------------------------------------------------------------------------------
  //return countAudio 
  var countAudio = require('audioForCount/countAudio.js')

  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let countAudioFound = []

  var temp = function (audioItem) {
      return keysToSearchOn.some(function (key) {
        return audioItem[key] && audioItem[key].toLowerCase().includes('천천히')
      })
    }
    countAudioFound = countAudio.audioItems.filter(temp)

    var temp2 = function (audioItem) {
      return keysToSearchOn.some(function (key) {
        return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
      })
    }
    countAudioFound = countAudioFound.filter(temp2)

  let flag  = countAudioFound;

  for(var i = 0; i< setNum-1;i++){
    countAudioFound.push(countAudio.audioItems[12])
    countAudioFound.push(flag[0])
  }
  return countAudioFound
}