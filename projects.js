/* Portfolio content: reorder the entries in PROJECTS to rearrange the grid. */
const SITE = {email: "", instagram: "", intro: "Costume design & styling for moving images.", about: "Mirela Vasileva is a costume designer and stylist working across commercials, film and music videos. Based in Sofia, Bulgaria, she creates distinctive visual worlds through clothing, character and detail."};
const PROJECTS = [
  {
    "slug": "calgon-new-promise",
    "title": "CALGON — NEW PROMISE",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/calgon-new-promise.jpg",
    "video": "https://player.vimeo.com/video/1234984546",
    "credits": [
      "Client — Calgon, Vestacy",
      "Agency — BETC",
      "Production Company — Shutterstock Studios",
      "Director — Bram FJ Van Alphen",
      "DOP — Nenad Boroevich",
      "Service Company — handplayed"
    ]
  },
  {
    "slug": "the-league-never-settle",
    "title": "THE LEAGUE — NEVER SETTLE",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/league.jpg",
    "video": "https://player.vimeo.com/video/937725691",
    "credits": [
      "Client — The League",
      "Creative & Production — handplayed",
      "Director — Viktor Ivanov",
      "DOP — Alexander Stanishev",
      "Production Designer — Andrea Popova",
      "Stylist — Mirela Vasileva",
      "Producer — Virginia Venkova"
    ]
  },
  {
    "slug": "spee-power-caps",
    "title": "SPEE — POWER CAPS",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/spee.jpg",
    "video": "https://player.vimeo.com/video/987304753",
    "credits": [
      "Client — Henkel",
      "Agency — TBWA",
      "Production Company — Goodhouse Films",
      "Director — J Marlow",
      "DOP — Adric Watson",
      "Production Designer — Lyubika Georgieva",
      "Costume Designer — Mirela Vasileva"
    ]
  },
  {
    "slug": "paypal-summer-moments",
    "title": "PAYPAL — SUMMER MOMENTS",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/paypal.jpg",
    "video": "https://player.vimeo.com/video/937724312",
    "credits": [
      "Client — PayPal",
      "Agency — RAPP, London",
      "Director — Viktor Ivanov",
      "DOP — Anton Ognyanov",
      "Production Designer — Ketty Marinova",
      "Stylist — Mirela Vasileva",
      "Costume Assistant — Katrin Dimitrova",
      "Production — handplayed"
    ]
  },
  {
    "slug": "gamrfirst",
    "title": "GAMRFIRST",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/gamrfirst.jpg",
    "video": "https://player.vimeo.com/video/987306810",
    "credits": [
      "Client — Gamrfirst",
      "Agency — Family",
      "Production Company — Papaya Films",
      "Director — Lonan Garcia",
      "DOP — Rafael Reparaz",
      "Production Designer — Lyubika Georgieva",
      "Costume Designer — Mirela Vasileva",
      "Service Company — Film Fixers Balkans"
    ]
  },
  {
    "slug": "strepsils-01",
    "title": "STREPSILS",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/strepsils-one.jpg",
    "video": "https://player.vimeo.com/video/1233343430",
    "credits": [
      "Client — Strepsils, Reckitt Benckiser",
      "Agency — Havas Germany",
      "Production Company — Shutterstock Studios",
      "Director — Michael J Ferns",
      "DOP — Alistair Little",
      "Service Company — handplayed"
    ]
  },
  {
    "slug": "yankee-candle-the-scent",
    "title": "YANKEE CANDLE — THE SCENT YOU’VE BEEN SEEKING",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/yankee.jpg",
    "video": "https://www.youtube-nocookie.com/embed/tmOqR5rAT3M",
    "credits": [
      "Client — Yankee Candle",
      "Agency — Terri Sandy",
      "Production Company — Logan",
      "Director — Pascal Heiduk",
      "Service Production — Solent Film"
    ]
  },
  {
    "slug": "aquafresh-matador",
    "title": "AQUAFRESH — MATADOR",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/aquafresh.jpg",
    "video": "https://player.vimeo.com/video/1097860193",
    "credits": [
      "Client — Aquafresh",
      "Director — Aidan Gibons",
      "Production Company — Not Just Any"
    ]
  },
  {
    "slug": "the-fork-all-set",
    "title": "THE FORK — YOU ARE ALL SET",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/fork.jpg",
    "video": "https://www.youtube-nocookie.com/embed/jjFT314X2aU",
    "credits": [
      "Client — The Fork",
      "Agency — Droga5",
      "Director — Craig Ainsley",
      "Production Company — Arts and Sciences",
      "Service Production — Solent Film"
    ]
  },
  {
    "slug": "tetra-pak-slice-of-life",
    "title": "TETRA PAK — SLICE OF LIFE",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/tetra.jpg",
    "video": "https://player.vimeo.com/video/937727638",
    "credits": [
      "Client — Tetra Pak",
      "Production Company — Shutterstock",
      "Service Production — handplayed",
      "Director — Vlady Gerasimov",
      "DOP — Nikola Damov",
      "Production Designer — Ketty Prohorova",
      "Styling — Mirela Vasileva",
      "Styling Assistant — Hristina Taseva",
      "Producer — Rachael Williams"
    ]
  },
  {
    "slug": "foo-fighters-window",
    "title": "FOO FIGHTERS — WINDOW",
    "category": "music-videos",
    "type": "Music Video",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/foo-fighters.jpg",
    "video": "https://player.vimeo.com/video/1233346636",
    "credits": [
      "Artist — Foo Fighters",
      "Starring — Craig Parkinson",
      "Director — Jake Erland",
      "Production Company — Park Pictures",
      "Producer — Chris Murdoch",
      "DOP — Jack Exton",
      "Production Designer — Lyubika Georgieva",
      "Stylist — Mirela Vasileva",
      "Assistant Stylist — Hristina Taseva",
      "Service Company — Film Fixers Balkans"
    ]
  },
  {
    "slug": "ubb-mobile-tvcs",
    "title": "UBB — MOBILE TVCs",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/ubb.jpg",
    "video": "https://player.vimeo.com/video/313819138",
    "credits": [
      "Client — UBB",
      "Agency — guts&brains DDB",
      "Director — Dimitris Georgiev",
      "DOP — Georgi Andreev",
      "Art Director — Andrea Popova",
      "Stylist — Mirela Vasileva",
      "Producer — Virginia Venkova",
      "Production — handplayed"
    ]
  },
  {
    "slug": "devin-spring-directors-cut",
    "title": "DEVIN — SPRING",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/devin.jpg",
    "video": "https://player.vimeo.com/video/1051815257",
    "credits": [
      "Client — Devin",
      "Agency — The Smarts",
      "Production Company — handplayed",
      "Director — Martin Iliev"
    ]
  },
  {
    "slug": "strepsils-02",
    "title": "STREPSILS",
    "category": "commercials",
    "type": "Commercial",
    "year": "",
    "size": "wide",
    "color": "#aaa39b",
    "photo": "images/strepsils-two.jpg",
    "video": "https://player.vimeo.com/video/1233341259",
    "credits": [
      "Client — Strepsils, Reckitt Benckiser",
      "Agency — Havas Germany",
      "Production Company — Shutterstock Studios",
      "Director — Michael J Ferns",
      "DOP — Alistair Little",
      "Service Company — handplayed"
    ]
  }
];
