var countAudio = require('./countAudio.js')
var console = require('console')
module.exports.function = function findCount(power, searchTerm, setNum) { //searchTerm이 11회, 12회, 13회가 됨
  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let countAudioFound = []
  // 뭐로 찾을지 들어온다면 Play kitten과 같이
  // 긴거 틀어줘 와 같이 특정 단어가 들어온다면 title, artist, subtitle, albunName에서 긴거를 찾고 틀어줌
  searchTerm = searchTerm.toLowerCase()

  if(power){   // 파워가 있다면
    var temp = function (audioItem) {
      return keysToSearchOn.some(function (key) {
        return audioItem[key] && audioItem[key].toLowerCase().includes(power)
      })
    }
    countAudioFound = countAudio.audioItems.filter(temp)
    var temp2 = function (audioItem) {
      return keysToSearchOn.some(function (key) {
        return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
      })
    }
    countAudioFound = countAudioFound.filter(temp2)
  }else{

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
  }

  let flag  = countAudioFound;
  console.log(setNum)

  if(setNum){
    for(var i = 0; i< setNum-1;i++){
      countAudioFound.push(countAudio.audioItems[12])
      countAudioFound.push(flag[0])
    }
  }
  return countAudioFound
}