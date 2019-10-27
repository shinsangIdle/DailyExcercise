module.exports.function = function nextExePlay ($vivContext, exercise) {
  var secret=require('secret');
  var apikey=secret.get('apikey');
  var baseUrl=secret.get('baseUrl');
  let options = {
    format: 'json',
    cacheTime: 0,
    headers: {
      'X-API-Key': apikey
    }
  };

  let http = require('http');
  //insert rocord
  action = "insertExeRocord";
 // let link = "https://hd3agys9gh.execute-api.ap-northeast-2.amazonaws.com/default/bixbygatewayapi?action="
  var exe_id = "&exe_id=" + exercise.exerciseID;
  let user_id = "&user_id="+$vivContext.userId;
  var grade = "&grade=" + exercise.exerciseGrade;
  http.getUrl(baseUrl+action+exe_id+user_id+grade ,options );


  let setNum=exercise.exerciseSet;
  let searchTerm= exercise.exerciseCnt;

  var countAudio = require('audioForCount/countAudio.js');

  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName'];
  let countAudioFound = [];

  var temp = function (audioItem) {
      return keysToSearchOn.some(function (key) {
        return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm);
      })
    }
  countAudioFound = countAudio.audioItems.filter(temp);

  let flag  = countAudioFound;

  for(var i = 0; i< setNum-1;i++){
    countAudioFound.push(countAudio.audioItems[10])
    countAudioFound.push(flag[0])
  }
  return countAudioFound;
}