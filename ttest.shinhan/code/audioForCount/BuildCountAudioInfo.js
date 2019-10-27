module.exports.function = function buildCountAudioInfo(countAudio) {
  var audioInfo = {};
  /* 오디오 인포 만드는 곳임 */
  audioInfo.audioItem = countAudio.map(function (audioItem) {
    let audioItemStructure = { // 오디오 아이템에 필요한 속성들
      id: audioItem.id,
      stream: audioItem.stream,
      title: audioItem.title,
      artist:audioItem.artist,
      albumArtUrl: audioItem.albumArtUrl,
      duration: audioItem.duration
    } 

    //오디오 아이템의 추가 설정하는 부분
    if (audioItem.subtitle) {
      audioItemStructure.subtitle = audioItem.subtitle
    }
    if (audioItem.albumName) {
      audioItemStructure.albumName = audioItem.albumName
    }
    if (audioItem.duration) {
      audioItemStructure.duration = audioItem.duration
    }
    return audioItemStructure
  });

  audioInfo.category = 'RADIO';
  audioInfo.displayName = 'Count Capsule';
  audioInfo.repeatMode = 'OFF';  //오디오 반복모드
  audioInfo.doNotWaitForTTS = false;  //오디오가 빅스비의 말을 끝나고 할지(false) 빅스비말이랑 같이 시작할지(true)
  return {
    audioInfo:audioInfo,
    exercise: exerciseList
};
}

