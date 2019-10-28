var countAudio = require('./countAudio.js')
var console = require('console')
var fail = require('fail')

module.exports.function = function findCount(power, searchTerm, setNum) { //searchTerm이 11회, 12회, 13회가 됨
  const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
  let countAudioFound = []

  if(!searchTerm){
    console.log("searchTerm")
    countAudioFound = countAudio.audioItems[0]
    return countAudioFound

  }else{
    searchTerm = searchTerm.toLowerCase()
    if(searchTerm<10 || searchTerm>15){
      console.log(searchTerm)
      throw fail.checkedError('myError', 'UnsupportedCondition',{})
    
    }else {
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
  }
}