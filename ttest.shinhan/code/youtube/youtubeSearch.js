module.exports.function = function youtubeSearch (keyword) {
 
  const console = require('console');
  const http = require('http');

  var optionParams={
    q:keyword,
    part:"snippet",
    key:"AIzaSyD_QZMRiFxZNzC23zfDT-6gw-MiJwKaPHo",
};   


optionParams.q = encodeURI(optionParams.q);

var url="https://www.googleapis.com/youtube/v3/search?";
for(var option in optionParams){
    url+=option+"="+optionParams[option]+"&";
}
url=url.substr(0, url.length-1);
  console.log("url : " + url);


let data = http.getUrl(url, {
    format: 'json'
  });

  console.log(data);


let items = data.items;

console.log(items[0].kind);


//if (!data.list) {
  //  throw "영상을 얻어오지 못했어요.";
  //}

let videoList = [];

for (let i=0; i<items.length; i++) {
    let item = items[i];
    videoList.push({
      videoUrl:"https://www.youtube.com/watch?v="+item.id.videoId,
     videoTitle: item.snippet.title,
     thumbnailUrl: item.snippet.thumbnails.high.url,
     channelTitle: item.snippet.channelTitle
    }
    )
  }

return {
    youtubeVideo: videoList,
    keyword: keyword
  };
}