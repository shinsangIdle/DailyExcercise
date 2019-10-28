const audioItems = [{  //하나의 오디오 아이템들을 여러개 묶은 구조체
    id: 1,
    stream: [
      {
        url: "https://docs.google.com/uc?id=129DAyh7cQcP865YBflM5nah1879zuajR&export=dowload", 
        format: "mp3"
      }
    ],
    title: "천천히",  //제목
    subtitle: "10",
    artist: "hajung",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/ten.PNG"
  },
  {
    id: 2,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1TOkAOhur_wrI-ZenK6hqJej-a_44K2Y1&export=dowload",
        format: "mp3"
      }
    ],
    title: "천천히",
    subtitle: "11",
    artist: "hajung",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/eleven.PNG"
  },
  {
    id: 3,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1KsuPzymXmAahgw793TrNloSuOwX1nT_R&export=dowload",  
        format: "mp3"
      }
    ],
    title: "천천히",
    subtitle: "12",
    artist: "hajung",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/twelve.PNG"
  },
  {
    id: 4,
    stream: [
      {
        url: "https://docs.google.com/uc?id=14NCk2RDS5k1CK43oQAXLo_Uq09D5JZzG_R&export=dowload",  
        format: "mp3"
      }
    ],
    title: "천천히",
    subtitle: "13",
    artist: "hajung",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/thirteen.PNG"
  },
  {
    id: 5,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1H0cRiDcY6tbd30nTDH7p3HBvzlE7tnu2&export=dowload", 
        format: "mp3"
      }
    ],
    title: "천천히",
    subtitle: "14",
    artist: "hajung",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/fourteen.PNG"
  },
  {
    id: 6,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1lfhVAtsyVQYYiqRXzbDhkN0KgX44Jmfc&export=dowload", 
        format: "mp3"
      }
    ],
    title: "천천히",
    subtitle: "15",
    artist: "hajung",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/fifteen.PNG"
  },
  {
    id: 7,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1J7pnj0bRG1l4zgzORS28TSkSDx37xEG2&export=dowload", 
        format: "mp3"
      }
    ],
    title: "빠르게",
    subtitle: "10",
    artist: "sangyeop",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/ten.PNG"
  },
  {
    id: 8,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1yOjS0VaCB-TdOqEk6UEOzk13si2nI6iw&export=dowload",
        format: "mp3"
      }
    ],
    title: "빠르게",
    subtitle: "11",
    artist: "sangyeop",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/eleven.PNG"
  },
  {
    id: 9,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1FVD6HSdEPLNIFD5pk8Ue44L-MwV75YNR&export=dowload",  
        format: "mp3"
      }
    ],
    title: "빠르게",
    subtitle: "12",
    artist: "sangyeop",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/twelve.PNG"
  },
  {
    id: 10,
    stream: [
      {
        url: "https://docs.google.com/uc?id=12rOIajxOCOW6QW8Aw3HCBSzGu5LxIG72&export=dowload",  
        format: "mp3"
      }
    ],
    title: "빠르게",
    subtitle: "13",
    artist: "sangyeop",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/thirteen.PNG"
  },
  {
    id: 11,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1BjbjSn3VSwEM5zZBXQ4c1iLDypH9NWVk&export=dowload", 
        format: "mp3"
      }
    ],
    title: "빠르게",
    subtitle: "14",
    artist: "sangyeop",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/fourteen.PNG"
  },
  {
    id: 12,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1sNznkiFN8uu670NtNn-vP8AOeJBihgdA&export=dowload", 
        format: "mp3"
      }
    ],
    title: "빠르게",
    subtitle: "15",
    artist: "sangyeop",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/fifteen.PNG"
  },
  {
    id: 13,
    stream: [
      {
        url: "https://docs.google.com/uc?id=1buW7D0mjMRx79QtQb0ZBYQabkWKyAGKX&export=dowload",  
        format: "mp3"
      }
    ],
    title: "rest",
    subtitle: "home-base-groove",//구글 무료 오디오 라이브러리
    artist: "kevin-macleod",
    albumArtUrl: "https://raw.githubusercontent.com/shinsangIdle/DailyExcercise/master/img/album/logo.png"
  }
  ]

  exports.audioItems = audioItems