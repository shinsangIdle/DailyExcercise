module.exports.function = function nextExePlay (exercise) {
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