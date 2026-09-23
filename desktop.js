/* салон desktop — SalonTemplate reference build. Mobile bundle is intentionally untouched. */
(function(){
  'use strict';
  const desktopDevice=window.__BR_DESKTOP_DEVICE__===true || (!('__BR_DESKTOP_DEVICE__' in window) && !!window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches);
  if(!desktopDevice) return;

  const PHONE='+7 (926) 614-33-00';
  const ADDRESS='Солнечная ул., 6, Люберцы';
  const YANDEX_REVIEWS='https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/reviews/';
  const ROUTE='https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B';
  const WHATSAPP_URL='https://t.me/+79266143300';
  const DESKTOP_REAL_REVIEWS=[["Мария Густова","Хочу сказать большое спасибо мастеру Лауре, подстригла мне челку аккуратно и именно по тому запросу с которым я пришла. В салоне приятная атмосфера, так же хочу сказать спасибо администратору, оперативно подобрали время и записали на стрижку!"],["Danil Andryuk","Был у мастера Валерии на коррекции, все очень понравилось, сделала аккуратную форму и восстановила рост волосков в нужном направлении, действительно профессионал. Сама студия приятная и уютная, всем советую!"],["Анастасия Л.","Нужно было сделать вечерние локоны. Записали быстро и срочно. Сделали шикарную прическу, подарили комплименты и приятное общение с мастером❤️ Очень хороший салон. Приду еще."],["an.braa","Была на бровках у Надежды, очень приятная девушка, классный салон, в одном доме со мной, остались только положительные впечатления от персонала, так же была у мастера Елены (хозяйка студии) подстригла каре, всё так как я хотела, золотые руки🌷"],["татьяна к","Ходим с ребенком на стрижку к мастеру Любе. Очень довольны, Любовь хорошо находит общий язык с детьми, всегда приветлива, стрижку делает быстро и качественно. Я тоже делала стрижку и осталась довольна. Теперь мы ваши постоянные клиенты😊"],["Ольга Беляева","Благодарю замечательного мастера Асмик! Обслуживаюсь уже много лет, все года довольна результатом. Асмик большой профессионал парикмахерского искусства, достойный колорист, результат всегда на высоте! Благодарю за красоту волос, за душевное и теплое отношение!"],["Ксения Лунина","Отличная студия! Всегда тепло и приветливо! Постоянно тут стригусь и теперь крашусь) Дочку здесь собирали на важное мероприятие все на 100 баллов! Так же делала брови, просто блеск! Спасибо огромное что Вы есть)))) всем советую мастеров этой студии, все ваши пожелания и мечты будут воплощены в жизнь) 💗"],["Александра Родина","Была на педикюре и сложном окрашивании (мелирование + тонирование) + стрижка. Очень приятные девушки. Сделали все потрясающе. Я очень довольна результатом. Однозначно рекомендую салон! Просто находка, да еще и рядом с домом. Также, хочу отметить, что в салоне очень комфортно, уютно и чисто.","23 января 2024"],["ВЕНЕРА ДУРМАНОВА","Очень понравился сервис и работа мастера Елены. Делала мелирование/тонирование. Мастер сориентировала по стоимости и предложила варианты работ. Результат очень понравился! У мастера золотые руки! В салоне чистота, порядок. Рекомендация к посещению 100 %."]];
  const PORTFOLIO=[
  {
    "type": "video",
    "src": "galery1.MP4",
    "alt": "Видео студии"
  },
  {
    "src": "galery00004.webp",
    "alt": "Работа студии"
  },
  {
    "src": "galery00007.webp",
    "alt": "Работа студии"
  },
  {
    "src": "galery00010.webp",
    "alt": "Работа студии"
  },
  {
    "src": "galery00008.webp",
    "alt": "Работа студии"
  },
  {
    "src": "galery00014.webp",
    "alt": "Работа студии"
  },
  {
    "src": "galery00016.webp",
    "alt": "Работа студии"
  }
];
  const DESKTOP_GALLERY_GROUPS={
  "Салон": [
    {
      "type": "video",
      "src": "galery1.MP4",
      "alt": "Видео студии"
    },
    {
      "src": "salon1.webp",
      "alt": "Фото студии"
    },
    {
      "src": "salon2.webp",
      "alt": "Фото студии"
    },
    {
      "src": "salon3.webp",
      "alt": "Фото студии"
    },
    {
      "src": "salon4.webp",
      "alt": "Фото студии"
    },
    {
      "src": "salon5.webp",
      "alt": "Фото студии"
    },
    {
      "src": "salon6.webp",
      "alt": "Фото студии"
    }
  ],
  "Волосы": [
    {
      "src": "galery00001.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00002.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00003.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00004.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00005.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00006.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00007.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00009.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00014.webp",
      "alt": "Работа с волосами"
    },
    {
      "src": "galery00016.webp",
      "alt": "Работа с волосами"
    }
  ],
  "Ногти": [
    {
      "src": "galery00010.webp",
      "alt": "Работа мастера ногтевого сервиса"
    },
    {
      "src": "galery00011.webp",
      "alt": "Работа мастера ногтевого сервиса"
    },
    {
      "src": "galery00012.webp",
      "alt": "Работа мастера ногтевого сервиса"
    },
    {
      "src": "galery00013.webp",
      "alt": "Работа мастера ногтевого сервиса"
    },
    {
      "src": "galery00015.webp",
      "alt": "Работа мастера ногтевого сервиса"
    }
  ],
  "Брови и ресницы": [
    {
      "src": "salon7.webp",
      "alt": "Процедура для бровей и ресниц"
    }
  ],
  "Макияж": [
    {
      "src": "galery00008.webp",
      "alt": "Макияж"
    }
  ]
};
  const DESKTOP_ALL_MEDIA=[...new Map(Object.values(DESKTOP_GALLERY_GROUPS).flat().map(item=>[item.src,item])).values()];
  const DESKTOP_GALLERY=DESKTOP_ALL_MEDIA.map(x=>x.src);
  const SERVICE_DATA={
  "Окрашивание": [
    [
      "Экспресс тонирование",
      "3000 ₽",
      "",
      [],
      ""
    ],
    [
      "Окрашивание 1 тон — длина 1 (короткие)",
      "4000 ₽",
      "",
      [],
      ""
    ],
    [
      "Окрашивание 1 тон — длина 2 (средние)",
      "5000 ₽",
      "",
      [],
      ""
    ],
    [
      "Окрашивание 1 тон — длина 3 (длинные)",
      "6000 ₽",
      "",
      [],
      ""
    ],
    [
      "Окрашивание 1 тон — длина 4 (очень длинные)",
      "8000 ₽",
      "",
      [],
      ""
    ],
    [
      "Сложное окрашивание 2 тона",
      "10000 ₽",
      "",
      [],
      ""
    ],
    [
      "Контуринг у лица",
      "5000 ₽",
      "",
      [],
      ""
    ],
    [
      "2 яркие пряди у лица",
      "4000 ₽",
      "",
      [],
      ""
    ],
    [
      "Микромелирование + тонирование — длина 2 (каре)",
      "10000 ₽",
      "",
      [],
      ""
    ],
    [
      "Микромелирование + тонирование — длина 3",
      "13000 ₽",
      "",
      [],
      ""
    ],
    [
      "Окрашивание — длина 4",
      "15000 ₽",
      "",
      [],
      ""
    ],
    [
      "Выход из черного — длина 4 (очень длинные)",
      "15000 ₽",
      "",
      [],
      ""
    ],
  ],
  "Стрижки": [
    [
      "Стрижка женская — длина 1 (короткие)",
      "1500 ₽",
      "",
      [],
      ""
    ],
    [
      "Стрижка женская — длина 2 (средние), каре",
      "2500 ₽",
      "",
      [],
      ""
    ],
    [
      "Стрижка женская — длина 3 (длинные)",
      "3000 ₽",
      "",
      [],
      ""
    ],
    [
      "Стрижка женская — длина 4 (очень длинные)",
      "3500 ₽",
      "",
      [],
      ""
    ],
    [
      "Стрижка челки",
      "500 ₽",
      "",
      [],
      ""
    ],
  ],
  "Укладки": [
    [
      "Локоны на плойку",
      "2500 ₽",
      "По прайсу: 2500–5000 ₽",
      [],
      ""
    ],
    [
      "Укладка",
      "3000 ₽",
      "По прайсу: 2000–5000 ₽",
      [],
      ""
    ],
    [
      "Плетение косичек",
      "1000 ₽",
      "",
      [],
      ""
    ]
  ],
  "Уход и кератин": [
    [
      "Ботокс волос до плеч",
      "4000 ₽",
      "",
      [],
      ""
    ],
    [
      "Ботокс волос до лопаток",
      "4500 ₽",
      "",
      [],
      ""
    ],
    [
      "Ботокс волос ниже лопаток",
      "5000 ₽",
      "",
      [],
      ""
    ],
    [
      "Ботокс волос до талии",
      "5500 ₽",
      "",
      [],
      ""
    ],
    [
      "Ботокс волос до поясницы",
      "6000 ₽",
      "",
      [],
      ""
    ],
    [
      "Ботокс волос ниже поясницы",
      "6500 ₽",
      "",
      [],
      ""
    ],
    [
      "Плюс к густоте волос",
      "от 1000 ₽",
      "По прайсу: 1000–1500 ₽",
      [],
      ""
    ],
    [
      "Кератиновое выпрямление до плеч",
      "5000 ₽",
      "",
      [],
      ""
    ],
    [
      "Кератиновое выпрямление до лопаток",
      "7000 ₽",
      "",
      [],
      ""
    ],
    [
      "Кератиновое выпрямление ниже лопаток",
      "7500 ₽",
      "",
      [],
      ""
    ],
    [
      "Кератиновое выпрямление до талии",
      "8000 ₽",
      "",
      [],
      ""
    ],
    ],
  "Брови и ресницы": [
    [
      "Архитектура бровей (коррекция + окрашивание хна/краска)",
      "1800 ₽",
      "",
      [],
      ""
    ],
    [
      "Долговременная укладка бровей + коррекция + окрашивание",
      "3500 ₽",
      "",
      [],
      ""
    ],
    [
      "Долговременная укладка бровей (без окрашивания)",
      "2000 ₽",
      "",
      [],
      ""
    ],
    [
      "Окрашивание бровей",
      "1000 ₽",
      "",
      [],
      ""
    ],
    [
      "Коррекция бровей (воск / пинцет)",
      "1000 ₽",
      "",
      [],
      ""
    ],
    [
      "Коррекция бровей (с прореживанием)",
      "1200 ₽",
      "",
      [],
      ""
    ],
    [
      "Счастье для бровей",
      "1000 ₽",
      "",
      [],
      ""
    ],
    [
      "Долговременная укладка бровей (биофиксация) + коррекция",
      "2500 ₽",
      "",
      [],
      ""
    ],
    [
      "Ботокс для бровей",
      "1000 ₽",
      "",
      [],
      ""
    ],
    [
      "Мужская коррекция бровей",
      "1500 ₽",
      "",
      [],
      ""
    ],
    [
      "Удаление пушка над верхней губой",
      "600 ₽",
      "",
      [],
      ""
    ],
    [
      "Ламинирование ресниц без окрашивания",
      "2000 ₽",
      "",
      [],
      ""
    ],
    [
      "Ламинирование ресниц с окрашиванием",
      "2700 ₽",
      "",
      [],
      ""
    ],
    [
      "Окрашивание ресниц",
      "800 ₽",
      "",
      [],
      ""
    ],
    [
      "Снятие нарощенных ресниц",
      "1000 ₽",
      "",
      [],
      ""
    ],
    [
      "Ламинирование бровей + ресниц (с окрашиванием и коррекцией)",
      "5000 ₽",
      "",
      [],
      ""
    ],
    [
      "Ламинирование бровей с окрашиванием + ламинирование ресниц (без окрашивания)",
      "4500 ₽",
      "",
      [],
      ""
    ],
    [
      "Ламинирование ресниц + архитектура бровей с окрашиванием",
      "3500 ₽",
      "",
      [],
      ""
    ]
  ],
  "Макияж": [
  ]
};
  const SERVICE_CATEGORIES=Object.keys(SERVICE_DATA);
  const TEAM_MASTERS=[
  {
    "id": "elena",
    "name": "Елена",
    "role": "Основатель студии · колорист",
    "about": "Основатель Студии Колористики Елены Багдасарян. В отзывах клиенты отмечают работу Елены с окрашиванием, тонированием и стрижками.",
    "cats": [
      "Окрашивание",
      "Стрижки"
    ],
    "work": []
  },
  {
    "id": "asmik",
    "name": "Асмик",
    "role": "Колорист",
    "about": "Мастер по волосам и колорист. Клиенты отмечают многолетний опыт работы с Асмик и стабильный результат.",
    "cats": [
      "Окрашивание",
      "Стрижки"
    ],
    "work": []
  },
  {
    "id": "laura",
    "name": "Лаура",
    "role": "Мастер по волосам",
    "about": "Мастер по стрижкам. В отзывах отдельно отмечают аккуратную работу с челкой и точное выполнение запроса.",
    "cats": [
      "Стрижки"
    ],
    "work": []
  },
  {
    "id": "lyubov",
    "name": "Любовь",
    "role": "Мастер по стрижкам",
    "about": "Мастер по стрижкам для взрослых и детей. Клиенты отмечают аккуратность, скорость и умение находить общий язык с детьми.",
    "cats": [
      "Стрижки"
    ],
    "work": []
  },
  {
    "id": "nadezhda",
    "name": "Надежда",
    "role": "Бровист",
    "about": "Мастер направления бровей. Упоминается клиентами в отзывах студии.",
    "cats": [
      "Брови и ресницы"
    ],
    "work": []
  },
  {
    "id": "valeria",
    "name": "Валерия",
    "role": "Бровист",
    "about": "Мастер направления бровей. В отзывах отмечают аккуратную форму и работу с направлением роста волосков.",
    "cats": [
      "Брови и ресницы"
    ],
    "work": []
  }
];
  const TEAM_AVATAR='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="11" fill="currentColor"></circle><path d="M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17" fill="currentColor"></path></svg>';

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap';
  document.head.appendChild(font);
  const desktopStyle=document.createElement('style');
  desktopStyle.id='salon-desktop-styles';
  desktopStyle.textContent=String.raw`
/* Consolidated desktop CSS: identical selectors/media have their superseded declarations removed. */
@media(min-width:768px){
  html,body{
    margin:0!important;
    padding:0!important;
    background:#f7f2eb!important;
    color:#171513!important;
    overflow-x:hidden;
  }
  body>main.shell,body>.booking-island{
    display:none!important;
  }
  body>.desktop{
    display:none!important;
  }
  #salon-desktop-v1{
    --purple:#715b53;
    --purple2:#8b7167;
    --ink:#17171a;
    --muted:#6d6b73;
    --line:#ecebee;
    display:block;
    width:100%;
    min-height:100vh;
    background:#fff;
    font-family:"Manrope",Arial,sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  #salon-desktop-v1 *{
    box-sizing:border-box;
  }
  #salon-desktop-v1 a,#salon-desktop-v1 button{
    font:inherit;
    color:inherit;
  }
  #salon-desktop-v1 a{
    text-decoration:none;
  }
  #salon-desktop-v1 button{
    cursor:pointer;
  }
  .std-header{
    width:100%;
    display:flex;
    align-items:center;
    z-index:20;
  }
  .std-header-brand{
    display:flex;
    flex-direction:column;
    justify-content:center;
    color:#211d1a!important;
    text-decoration:none!important;
    line-height:1;
  }
  .std-header-brand-main{
    font:500 31px/.9 "Cormorant Garamond",Georgia,serif;
    text-transform:uppercase;
  }
  .std-header-crown{
    display:block;
    width:132px;
    height:70px;
    object-fit:contain;
    object-position:left center;
  }
  .std-header-brand-sub{
    font:600 9px/1 "Manrope",Arial,sans-serif;
    text-transform:uppercase;
    color:#5f534d;
  }
  .std-nav{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    display:flex;
    align-items:center;
    gap:37px;
    white-space:nowrap;
  }
  .std-nav a{
    font-size:14px;
    font-weight:500;
    line-height:1;
    text-shadow:none;
  }
  .std-nav a:hover{
    opacity:.52;
  }
  .std-header-right{
    display:flex;
    align-items:center;
  }
  .std-phone{
    margin-left:0;
    width:auto;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:11px;
    border-radius:0;
    background:transparent;
    color:#211d1a!important;
    box-shadow:none;
    font-weight:500;
    letter-spacing:0;
    text-shadow:none;
    white-space:nowrap;
  }
  .std-phone svg{
    width:21px;
    height:21px;
    flex:0 0 21px;
  }
  .std-header-book{
    padding:0 22px;
    border:0;
    border-radius:999px;
    background:#9c7967;
    color:#fff!important;
    font:500 15px/1 "Manrope",Arial,sans-serif!important;
    box-shadow:none;
    transition:transform .18s ease,background .18s ease;
  }
  .std-header-book:hover{
    transform:translateY(-1px);
    background:#8f6d5c;
    box-shadow:0 10px 24px rgba(104,78,65,.20);
  }
  .std-hero{
    margin:0;
  }
  .std-hero-copy{
    display:flex;
  }
  .std-copy-inner{
    width:min(100%,470px);
  }
  .std-hero-kicker{
    font:600 12px/1 "Manrope",Arial,sans-serif;
    text-transform:uppercase;
  }
  .std-logo{
    font-family:"Cormorant Garamond",Georgia,serif;
    font-weight:500;
    text-transform:uppercase;
  }
  .std-logo-sub{
    font-family:"Manrope",Arial,sans-serif;
    line-height:1;
    font-weight:600;
    text-transform:uppercase;
    white-space:nowrap;
  }
  .std-tagline{
    font-family:"Manrope",Arial,sans-serif;
    font-weight:400;
    letter-spacing:-.022em;
  }
  .std-meta{
    align-items:center;
  }
  .std-meta-divider{
    width:1px;
    background:rgba(75,61,54,.18);
  }
  .std-meta-item{
    display:flex;
    align-items:center;
    gap:14px;
    min-width:0;
  }
  .std-meta-icon{
    flex:0 0 59px;
    display:grid;
    place-items:center;
    border:1px solid rgba(75,61,54,.16);
    border-radius:50%;
    color:#2b2623;
  }
  .std-meta-text{
    min-width:0;
    letter-spacing:-.02em;
    color:#4f4540;
    text-align:left;
  }
  .std-status-main{
    display:block;
    color:#a45e64;
    font-weight:500;
  }
  .std-status-sub{
    display:block;
    color:#554b46;
  }
  .std-address{
    display:block;
    color:#423a36;
  }
  .std-btn{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:18px;
    font-weight:500;
    border:1px solid rgba(126,95,79,.46);
    background:rgba(255,255,255,.08);
    color:#332c28!important;
    transition:transform .15s ease,box-shadow .15s ease,background .15s ease;
  }
  .std-btn:not(.std-btn-primary){
    color:#332c28!important;
  }
  .std-sparkles{
    color:#8e6e5e!important;
  }
  .std-btn:hover{
    transform:translateY(-1px);
    background:rgba(255,255,255,.34);
  }
  .std-btn:active{
    transform:translateY(0);
  }
  .std-btn-primary{
    position:relative;
    overflow:hidden;
    color:#fff!important;
    box-shadow:none;
  }
  .std-btn-primary:after{
    content:'';
    position:absolute;
    top:-35%;
    bottom:-35%;
    left:-34%;
    width:24%;
    pointer-events:none;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.30),transparent);
    transform:skewX(-22deg);
    animation:stdBookShine 4.2s ease-in-out infinite;
  }
  @keyframes stdBookShine{
    0%,68%{
      left:-34%;
    }
    100%{
      left:132%;
    }
  }
  @media(prefers-reduced-motion:reduce){
    .std-btn-primary:after{
      animation:none!important;
    }
  }
  .std-btn-primary:hover{
    box-shadow:0 10px 26px rgba(104,78,65,.22);
  }
  .std-btn svg{
    width:24px;
    height:24px;
    flex:0 0 24px;
  }
  .std-sparkles{
    width:25px;
    height:25px;
    position:relative;
    display:inline-grid;
    place-items:center;
    font-size:25px;
    line-height:1;
  }
  .std-scroll-hint{
    font:600 10px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.34em;
    text-transform:uppercase;
    will-change:transform;
  }
  .std-scroll-hint span{
    font-size:22px;
    line-height:1;
    letter-spacing:0;
    font-weight:300;
  }
  @keyframes stdScrollHintFloat{
    0%,100%{
      transform:translateY(0);
    }
    50%{
      transform:translateY(7px);
    }
  }
  @media(prefers-reduced-motion:reduce){
    .std-scroll-hint{
      animation:none!important;
    }
  }
  .std-hero-photo video,
      .std-hero-photo img{
    border:0;
    margin:0;
    padding:0;
    background:#e7ddd4;
  }
  .std-hero:after{
    content:'';
    position:absolute;
    z-index:5;
    left:0;
    pointer-events:none;
    background:linear-gradient(180deg,rgba(239,231,224,0) 0%,rgba(239,231,224,.28) 45%,#f0e8e1 100%);
  }
  .std-portfolio{
    position:relative;
    overflow:hidden;
    min-height:auto;
  }
  .std-portfolio:before,
      .std-portfolio:after{
    content:'';
    position:absolute;
    pointer-events:none;
    border-radius:50%;
    z-index:0;
    filter:blur(28px);
  }
  .std-portfolio:before{
    width:560px;
    height:420px;
    left:-210px;
    bottom:-165px;
    background:radial-gradient(circle,rgba(169,132,112,.13) 0%,rgba(169,132,112,.07) 38%,rgba(169,132,112,.025) 62%,transparent 78%);
  }
  .std-portfolio:after{
    width:560px;
    height:420px;
    right:-210px;
    top:-165px;
    background:radial-gradient(circle,rgba(178,142,122,.12) 0%,rgba(178,142,122,.065) 38%,rgba(178,142,122,.022) 62%,transparent 78%);
  }
  .std-portfolio-inner{
    position:relative;
    z-index:1;
    max-width:none;
    margin:0 auto;
  }
  .std-portfolio-head{
    width:auto;
    margin:0;
    padding:0;
    text-align:center;
  }
  .std-portfolio-kicker{
    margin:0;
    font:600 12px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.31em;
    text-transform:uppercase;
  }
  .std-portfolio-title{
    margin:20px 0 0;
    font:500 76px/.92 "Cormorant Garamond",Georgia,serif;
    letter-spacing:-.045em;
  }
  .std-portfolio-copy{
    width:min(100%,760px);
    max-width:760px;
    margin:20px auto 0;
    font:400 17px/1.45 "Manrope",Arial,sans-serif;
    white-space:normal;
    text-align:center;
  }
  .std-portfolio-grid{
    display:grid;
    grid-template-columns:330px repeat(3,minmax(0,1fr));
    grid-template-rows:276px 304px;
    gap:12px;
    margin-top:28px;
    padding:0;
  }
  .std-work{
    border:0;
    padding:0;
    border-radius:13px;
    overflow:hidden;
    background:#e7e4e8;
    box-shadow:none;
  }
  .std-work:first-child{
    grid-row:1 / span 2;
  }
  .std-work img,.std-work video{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    transition:transform .35s cubic-bezier(.2,.7,.2,1);
  }
  .std-work:hover img{
    transform:scale(1.018);
  }
  .std-work-video{
    pointer-events:auto;
    cursor:pointer;
  }
  .std-portfolio-more{
    max-width:calc(100% - 84px);
    padding:0 28px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:static;
    left:auto;
    transition:background .18s ease,transform .18s ease,box-shadow .18s ease;
  }
  .std-services{
    position:relative;
    overflow:hidden;
  }
  .std-services-inner{
    grid-template-columns:minmax(0,.98fr) 1px minmax(0,1.12fr);
    gap:58px;
    align-items:start;
  }
  .std-services-divider{
    width:1px;
    min-height:770px;
    background:rgba(255,255,255,.16);
  }
  .std-services-left{
    min-width:0;
  }
  .std-services-right{
    min-width:0;
    overflow:hidden;
  }
  .std-services-kicker{
    font:600 12px/1 "Manrope",Arial,sans-serif;
  }
  .std-price-wrap{
    width:min(100%,530px);
  }
  .std-price-card{
    position:relative;
    width:100%;
    height:auto;
    border-radius:9px;
    overflow:hidden;
    background:#f0ece7;
    box-shadow:0 18px 50px rgba(0,0,0,.17);
  }
  .std-price-card img{
    width:100%;
    height:auto;
    display:block;
    object-fit:contain;
    background:#f4f0ea;
  }
  .std-price-count{
    position:absolute;
    top:14px;
    right:17px;
    z-index:2;
    padding:4px 8px;
    border-radius:999px;
    background:rgba(248,245,240,.82);
    color:#57515c;
    font:600 10px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.08em;
    backdrop-filter:blur(8px);
  }
  .std-price-arrow{
    position:absolute;
    z-index:3;
    top:50%;
    transform:translateY(-50%);
    width:44px;
    height:64px;
    border:0;
    background:transparent;
    color:#17151a!important;
    font:300 47px/1 Arial,sans-serif!important;
    text-shadow:0 1px 8px rgba(255,255,255,.55);
  }
  .std-price-prev{
    left:0;
  }
  .std-price-next{
    right:0;
  }
  .std-price-dots{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:11px;
    margin-top:23px;
  }
  .std-price-dot{
    width:10px;
    height:10px;
    padding:0;
    border:0;
    border-radius:50%;
    background:rgba(255,255,255,.22);
  }
  .std-price-dot.active{
    background:#8b7167;
    box-shadow:0 0 13px rgba(151,73,227,.34);
  }
  .std-price-open{
    display:block;
    width:min(100%,390px);
    height:60px;
    margin:30px auto 0;
    border:1px solid rgba(181,148,130,.30);
    border-radius:999px;
    background:linear-gradient(135deg,#715b53,#5d4841);
    color:#fff!important;
    box-shadow:0 10px 28px rgba(65,48,42,.22);
    font:500 15px/1 "Manrope",Arial,sans-serif;
    transition:background .18s ease,box-shadow .18s ease,transform .18s ease;
  }
  .std-price-open:hover{
    background:linear-gradient(135deg,#80675e,#694f48);
    box-shadow:0 12px 30px rgba(65,48,42,.27);
    transform:translateY(-1px);
  }
  .std-service-tabs{
    flex-wrap:nowrap;
    align-items:center;
    overflow-y:hidden;
    overscroll-behavior-inline:contain;
    -webkit-overflow-scrolling:touch;
    cursor:grab;
    user-select:none;
  }
  .std-service-tabs.dragging{
    cursor:grabbing;
  }
  .std-service-tab{
    font:500 14px/1 "Manrope",Arial,sans-serif;
    white-space:nowrap;
  }
  .std-service-list{
    border-top:1px solid rgba(255,255,255,.12);
  }
  .std-service-row{
    padding:23px 3px 23px 5px;
    border-bottom:1px solid rgba(255,255,255,.13);
  }
  .std-service-head{
    display:grid;
    grid-template-columns:minmax(0,1fr) auto;
    gap:24px;
    align-items:baseline;
  }
  .std-service-name{
    font:500 27px/1.05 "Cormorant Garamond",Georgia,serif;
    color:#f6f2f7;
  }
  .std-service-price{
    font:600 27px/1 "Cormorant Garamond",Georgia,serif;
    color:#f7f3f8;
    white-space:nowrap;
  }
  .std-service-detail{
    display:block;
    margin-top:9px;
    font:400 15.5px/1.45 "Manrope",Arial,sans-serif;
    color:#b9b2bd;
  }
  .std-service-variants{
    display:grid;
    gap:8px;
    margin-top:13px;
  }
  .std-service-variant{
    display:grid;
    grid-template-columns:minmax(0,1fr) auto;
    gap:18px;
    align-items:baseline;
    font:400 15.5px/1.4 "Manrope",Arial,sans-serif;
    color:#c9c1cc;
  }
  .std-service-variant b{
    font:600 23px/1 "Cormorant Garamond",Georgia,serif;
    color:#f7f3f8;
    white-space:nowrap;
  }
  .std-service-note{
    display:block;
    margin-top:10px;
    font:400 13px/1.5 "Manrope",Arial,sans-serif;
    color:#aaa2ad;
  }
  .std-service-more{
    margin-top:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:13px;
    font:500 14px/1 "Manrope",Arial,sans-serif;
  }
  .std-service-more:hover{
    background:rgba(255,255,255,.055);
  }
  .std-services-count{
    font:500 11px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.06em;
  }
  .std-price-viewer{
    position:fixed;
    inset:0;
    z-index:340;
    display:none;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    width:100vw;
    height:100dvh;
    padding:22px 88px 50px;
    overflow:hidden;
    background:rgba(16,14,18,.97);
    backdrop-filter:blur(10px);
  }
  .std-price-viewer.open{
    display:flex;
  }
  .std-price-viewer-stage{
    position:relative;
    width:min(calc(100vw - 176px),1120px);
    height:calc(100dvh - 72px);
    max-height:880px;
    display:grid;
    place-items:center;
    touch-action:pan-y;
    user-select:none;
  }
  .std-price-viewer-img{
    display:block;
    max-width:100%;
    max-height:calc(100dvh - 92px);
    width:auto;
    height:auto;
    object-fit:contain;
    border-radius:8px;
    box-shadow:0 24px 80px rgba(0,0,0,.35);
    -webkit-user-drag:none;
    user-select:none;
  }
  .std-price-viewer-close{
    position:absolute;
    top:22px;
    right:27px;
    width:46px;
    height:46px;
    border:1px solid rgba(255,255,255,.17);
    border-radius:50%;
    background:rgba(255,255,255,.07);
    color:#fff!important;
    font-size:27px;
    line-height:1;
  }
  .std-price-viewer-nav{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:54px;
    height:72px;
    border:0;
    background:transparent;
    color:#fff!important;
    font:300 54px/1 Arial,sans-serif!important;
  }
  .std-price-viewer-prev{
    left:-70px;
  }
  .std-price-viewer-next{
    right:-70px;
  }
  .std-price-viewer-count{
    position:absolute;
    left:50%;
    bottom:-37px;
    transform:translateX(-50%);
    color:rgba(255,255,255,.72);
    font:500 12px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.08em;
  }
  .std-about{
    position:relative;
    overflow:hidden;
  }
  .std-about-kicker{
    margin:0 0 27px;
    font:600 11px/1 "Manrope",Arial,sans-serif;
    text-transform:uppercase;
  }
  .std-about-visual{
    position:relative;
    min-width:0;
    background:#342338;
  }
  .std-about-visual:after{
    content:'';
    position:absolute;
    inset:0;
    pointer-events:none;
  }
  .std-about-visual img{
    display:block;
    object-position:center center;
  }
  .std-about-rating{
    position:absolute;
    z-index:2;
    border:1px solid rgba(255,255,255,.25);
    border-radius:999px;
    backdrop-filter:blur(12px);
    display:flex;
    align-items:center;
    gap:13px;
    box-shadow:0 8px 22px rgba(26,18,29,.16);
  }
  .std-about-rating-star{
    color:#f0c45d;
    font-size:25px;
    line-height:1;
  }
  .std-about-rating strong{
    font:600 25px/1 "Manrope",Arial,sans-serif;
    color:#fff;
  }
  .std-about-rating span{
    font:500 15px/1 "Manrope",Arial,sans-serif;
    color:rgba(255,255,255,.72);
    white-space:nowrap;
  }
  .std-about-copy{
    min-width:0;
  }
  .std-about-text{
    font:400 20px/1.5 "Manrope",Arial,sans-serif;
  }
  .std-about-fact{
    font:500 17px/1.35 "Manrope",Arial,sans-serif;
    box-shadow:none;
  }
  .std-team{
    position:relative;
    overflow:hidden;
    min-height:610px;
    padding:58px 49px 44px;
    background:
          radial-gradient(420px 310px at 108% 8%,rgba(139,113,103,.17),transparent 67%),
          radial-gradient(300px 230px at -14% 88%,rgba(113,91,83,.10),transparent 72%),
          #242424;
    color:#f7f3f8;
  }
  .std-team-inner{
    width:min(100%,1335px);
    margin:0 auto;
  }
  .std-team-kicker{
    margin:0;
    font:600 13px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.31em;
    text-transform:uppercase;
    color:#aaa2ad;
  }
  .std-team-title{
    margin:14px 0 0;
    font:500 52px/.92 "Cormorant Garamond",Georgia,serif;
    letter-spacing:-.035em;
    color:#f7f3f8;
  }
  .std-team-subtitle{
    margin:16px 0 0;
    font:400 14px/1.4 "Manrope",Arial,sans-serif;
    color:#aaa2ad;
  }
  .std-team-window{
    position:relative;
    width:100%;
    margin-top:32px;
    overflow:hidden;
  }
  .std-team-track{
    display:flex;
    align-items:flex-start;
    gap:58px;
    width:max-content;
    min-width:100%;
    overflow-x:auto;
    padding:0 0 10px;
    scrollbar-width:none;
    overscroll-behavior-inline:contain;
    -webkit-overflow-scrolling:touch;
    scroll-snap-type:x proximity;
  }
  .std-team-track::-webkit-scrollbar{
    display:none;
  }
  .std-master{
    flex:0 0 230px;
    scroll-snap-align:start;
    margin:0;
    text-align:center;
    color:#f7f3f8;
  }
  .std-master-avatar{
    width:224px;
    height:224px;
    margin:0 auto;
    border-radius:50%;
    display:grid;
    place-items:center;
    color:#cbbfd0;
    background:
          radial-gradient(circle at 42% 30%,rgba(255,255,255,.07),transparent 45%),
          linear-gradient(145deg,#3c3641,#302b34);
    border:1px solid rgba(255,255,255,.085);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 16px 42px rgba(0,0,0,.10);
  }
  .std-master-avatar svg{
    width:64px;
    height:64px;
    opacity:.92;
  }
  .std-master-name{
    display:block;
    margin-top:18px;
    font:500 25px/1 "Cormorant Garamond",Georgia,serif;
    color:#f7f3f8;
  }
  .std-master-role{
    display:block;
    margin-top:9px;
    font:400 12px/1.3 "Manrope",Arial,sans-serif;
    color:#b9b2bd;
  }
  .std-team-hint{
    margin-top:37px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:12px;
    font:500 10px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.22em;
    text-transform:uppercase;
    color:#aaa2ad;
  }
  .std-team-hint span{
    font-size:22px;
    line-height:1;
    letter-spacing:0;
    transform:translateY(-1px);
  }
  .std-contact{
    position:relative;
    box-sizing:border-box;
    overflow:hidden;
  }
  .std-contact-inner{
    position:relative;
    margin:0 auto;
    display:grid;
    align-items:start;
  }
  .std-contact-status{
    position:absolute;
    z-index:3;
    top:0;
    right:0;
    height:58px;
    padding:0 26px 0 22px;
    border:1px solid rgba(255,124,139,.32);
    border-radius:999px;
    backdrop-filter:blur(12px);
    display:flex;
    align-items:center;
    gap:11px;
    font:500 17px/1 "Manrope",Arial,sans-serif;
    white-space:nowrap;
  }
  .std-contact-status svg{
    width:25px;
    height:25px;
    fill:none;
    stroke:currentColor;
    stroke-width:1.9;
    stroke-linecap:round;
    stroke-linejoin:round;
  }
  .std-contact-kicker{
    margin:0;
    font:500 16px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.34em;
    text-transform:uppercase;
  }
  .std-contact-title{
    margin:8px 0 42px;
    font:500 78px/.88 "Cormorant Garamond",Georgia,serif;
    letter-spacing:-.035em;
  }
  .std-contact-list{
    display:grid;
    gap:10px;
  }
  .std-contact-card{
    box-sizing:border-box;
    width:100%;
    padding:0 22px;
    border:1px solid rgba(255,255,255,.11);
    border-radius:18px;
    display:grid;
    grid-template-columns:78px minmax(0,1fr);
    align-items:center;
    text-decoration:none!important;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.025);
    transition:border-color .18s ease,background .18s ease;
  }
  .std-contact-card.static{
    cursor:default;
  }
  .std-contact-card-icon{
    width:49px;
    height:49px;
    display:grid;
    place-items:center;
  }
  .std-contact-card-icon svg{
    width:36px;
    height:36px;
    fill:none;
    stroke:currentColor;
    stroke-width:1.8;
    stroke-linecap:round;
    stroke-linejoin:round;
  }
  .std-contact-brand-icon.viber svg,
      .std-contact-brand-icon.max svg{
    fill:currentColor;
    stroke:none;
  }
  .std-contact-brand-icon.phone svg{
    fill:none;
    stroke:currentColor;
  }
  .std-contact-card-copy{
    min-width:0;
  }
  .std-contact-card-title{
    display:block;
    font:500 25px/1.05 "Cormorant Garamond",Georgia,serif;
  }
  .std-contact-card-sub{
    display:block;
    margin-top:7px;
    font:400 13.5px/1.18 "Manrope",Arial,sans-serif;
  }
  .std-contact-right{
    min-width:0;
  }
  .std-contact-map{
    position:relative;
    width:100%;
  }
  .std-contact-map iframe{
    display:block;
    width:100%;
    height:100%;
    border:0;
    filter:saturate(.88) contrast(.98);
  }
  .std-contact-actions{
    display:none!important;
  }
  .std-contact-action{
    box-sizing:border-box;
    height:82px;
    border-radius:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff!important;
    text-decoration:none!important;
    font:500 29px/1 "Cormorant Garamond",Georgia,serif;
    transition:filter .18s ease,transform .18s ease;
  }
  .std-contact-action:hover{
    filter:brightness(1.05);
    transform:translateY(-1px);
  }
  .std-contact-call{
    border:1px solid rgba(255,255,255,.12);
    background:rgba(30,28,36,.92);
  }
  .std-contact-route{
    border:1px solid rgba(199,120,238,.35);
    background:linear-gradient(105deg,#715b53 0%,#8b7167 100%);
    box-shadow:0 8px 30px rgba(117,57,145,.12);
  }
  .std-contact-bottom{
    width:auto;
    margin:32px -84px 0;
    border-top:1px solid rgba(255,255,255,.16);
    padding-top:27px;
    padding-bottom:6px;
  }
  .std-contact-brand{
    margin:0 auto;
    flex-direction:column;
  }
  .std-contact-brand-mark{
    width:36px;
    height:36px;
    border:1px solid rgba(255,255,255,.24);
    border-radius:9px;
    display:grid;
    place-items:center;
    font:500 27px/1 "Cormorant Garamond",Georgia,serif;
    box-shadow:0 4px 14px rgba(0,0,0,.10);
  }
  .std-contact-brand-text{
    letter-spacing:0;
  }
  @media(max-width:1280px){
    .std-contact{
      min-height:0;
      padding:34px 40px 34px;
    }
    .std-contact-inner{
      grid-template-columns:500px minmax(0,1fr);
      gap:28px;
    }
    .std-contact-title{
      font-size:72px;
      margin-bottom:37px;
    }
    .std-contact-right{
      padding-top:119px;
    }
    .std-contact-card{
      grid-template-columns:78px minmax(0,1fr);
    }
    .std-contact-card-title{
      font-size:25px;
    }
    .std-contact-card-sub{
      font-size:13px;
    }
    .std-contact-action{
      font-size:25px;
    }
    .std-contact-map{
      height:510px;
    }
    .std-contact-bottom{
      margin-left:-40px;
      margin-right:-40px;
    }
  }
  .std-gallery{
    position:fixed;
    inset:0;
    display:none;
    align-items:center;
    justify-content:center;
    box-sizing:border-box;
    width:100vw;
    height:100dvh;
    overflow:hidden;
  }
  .std-gallery.open{
    display:flex;
  }
  .std-gallery-close{
    position:absolute;
    top:24px;
    right:28px;
    width:46px;
    height:46px;
    border:1px solid rgba(255,255,255,.17);
    border-radius:50%;
    background:rgba(255,255,255,.07);
    color:#fff!important;
    font-size:27px;
    line-height:1;
  }
  .std-gallery-stage{
    position:relative;
    display:grid;
    place-items:center;
    user-select:none;
  }
  .std-gallery-image{
    display:block;
    -webkit-user-drag:none;
    user-select:none;
  }
  .std-gallery-nav{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    color:#fff!important;
    font:300 52px/1 Arial,sans-serif!important;
    opacity:.82;
  }
  .std-gallery-nav:hover{
    opacity:1;
  }
  .std-gallery-count{
    position:absolute;
  }
  .std-gallery-browser{
    position:fixed;
    inset:0;
    z-index:350;
    width:100vw;
    height:100dvh;
    overflow:auto;
  }
  .std-gallery-browser.open{
    display:block;
  }
  .std-gallery-browser-shell{
    box-sizing:border-box;
    min-height:100%;
    margin:0 auto;
  }
  .std-gallery-browser-top{
    display:grid;
    grid-template-columns:54px 1fr 54px;
    align-items:center;
  }
  .std-gallery-browser-title{
    text-align:center;
  }
  .std-gallery-browser-title strong{
    display:block;
  }
  .std-gallery-browser-title span{
    display:block;
    font:500 10px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.34em;
    text-transform:uppercase;
  }
  .std-gallery-browser-tabs{
    display:flex;
    justify-content:center;
    margin:27px auto 0;
    overflow-x:auto;
    scrollbar-width:none;
  }
  .std-gallery-browser-tabs::-webkit-scrollbar{
    display:none;
  }
  .std-gallery-browser-tab{
    flex:0 0 auto;
    border-radius:999px;
    font:500 11px/1 "Manrope",Arial,sans-serif!important;
  }
  .std-gallery-browser-grid{
    display:grid;
  }
  .std-gallery-browser-tile{
    padding:0;
    border:0;
    overflow:hidden;
    background:#302b34;
  }
  .std-gallery-browser-tile img,.std-gallery-browser-tile video{
    display:block;
    width:100%;
    height:100%;
    object-fit:cover;
    -webkit-user-drag:none;
    user-select:none;
  }
  @media(max-width:1100px){
    .std-gallery-browser-grid{
      grid-template-columns:repeat(3,minmax(0,1fr));
    }
  }
  #salonDesktopTeam .std-team-track{
    min-width:0!important;
    justify-content:space-between!important;
  }
  #salonDesktopTeam .std-team-hint{
    margin-top:18px!important;
    font-size:9px!important;
  }
  #salonDesktopTeam .std-team-hint span{
    font-size:19px!important;
  }
  @media(max-width:1180px){
    .std-header-brand{
      width:190px;
      min-width:190px;
    }
    .std-header-brand-main{
      font-size:27px;
    }
    .std-nav a{
      font-size:13px;
    }
    .std-header-right{
      transform:translateX(12px);
    }
    .std-phone{
      width:auto;
    }
    .std-header-book{
      width:132px;
      min-width:132px;
      padding:0 18px;
    }
    .std-hero{
      grid-template-columns:49% 51%;
    }
    .std-hero-copy{
      padding-inline:28px;
    }
    .std-copy-inner{
      width:min(100%,430px);
      margin-top:92px;
    }
    .std-logo{
      font-size:58px;
      letter-spacing:.055em;
      white-space:nowrap;
    }
    .std-logo-sub{
      font-size:11px;
      margin-left:0;
    }
    .std-tagline{
      font-size:21px;
    }
    .std-meta{
      gap:14px;
    }
    .std-meta-icon{
      width:52px;
      height:52px;
      flex-basis:52px;
    }
    .std-meta-text{
      font-size:14px;
    }
    .std-scroll-hint{
      right:-68px;
    }
  }
}
@media(min-width:768px){
  .std-book-overlay{
    position:fixed;
    inset:0;
    z-index:360;
    display:none;
    align-items:center;
    justify-content:center;
    padding:28px;
    background:rgba(18,16,15,.62);
    backdrop-filter:blur(8px);
  }
  .std-book-overlay.open{
    display:flex;
  }
  .std-book-panel{
    position:relative;
    width:min(100%,560px);
    padding:34px;
    border-radius:22px;
    background:#f7f2eb;
    color:#211d1a;
    box-shadow:0 28px 90px rgba(0,0,0,.28);
    animation:stdEsBookIn .32s cubic-bezier(.16,1,.3,1);
  }
  @keyframes stdEsBookIn{
    from{
      opacity:0;
      transform:translateY(22px) scale(.985);
    }
    to{
      opacity:1;
      transform:none;
    }
  }
  .std-book-close{
    position:absolute;
    right:18px;
    top:18px;
    width:42px;
    height:42px;
    border:1px solid rgba(61,49,43,.13);
    border-radius:50%;
    background:#fff;
    color:#221e1b;
    font-size:23px;
  }
  .std-book-panel h3{
    margin:16px 52px 0 0;
    font:500 40px/.95 "Cormorant Garamond",Georgia,serif;
  }
  .std-book-panel>p:not(.std-services-kicker){
    margin:13px 0 0;
    color:#756a63;
    font:400 13px/1.5 "Manrope",Arial,sans-serif;
  }
  .std-book-options{
    display:grid;
    gap:9px;
    margin-top:24px;
  }
  .std-book-options a{
    min-height:62px;
    padding:0 17px;
    border:1px solid rgba(61,49,43,.12);
    border-radius:14px;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#211d1a!important;
    font:600 13px/1 "Manrope",Arial,sans-serif;
  }
  .std-book-options a span:last-child{
    color:#82766f;
    font-size:11px;
  }
}
@media(min-width:768px){
  #salon-desktop-v1{
    --br-bg:#f8f4ee;
    --br-section:#f7f2eb;
    --br-warm:#e9e2da;
    --br-team:#f6f1e9;
    --br-ink:#171513;
    --br-soft:#746c66;
    --br-line:rgba(62,51,44,.12);
    --br-taupe:#8f7167;
  }
  .std-copy-inner{
    width:min(100%,560px)!important;
  }
  .std-meta{
    margin-top:2px!important;
    margin-bottom:34px!important;
  }
  .std-hero-copy:before{
    bottom:0!important;
    background-image:none!important;
    background-repeat:no-repeat!important;
    background-size:1648px auto!important;
    background-position:left bottom!important;
  }
  .std-portfolio{
    padding-top:82px!important;
  }
  .std-gallery-browser-back{
    border-color:rgba(62,51,44,.16)!important;
  }
  .std-gallery-browser-tab{
    font-size:12.7px!important;
  }
  .std-services-head-ref{
    column-gap:clamp(54px,7vw,110px)!important;
  }
  .std-services-kicker{
    margin:0!important;
    font-size:12px!important;
    font-weight:600!important;
    letter-spacing:.24em!important;
    text-transform:uppercase!important;
  }
  .std-services-title{
    margin:12px 0 0!important;
    font:500 clamp(64px,5.6vw,82px)/.90 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.045em!important;
  }
  .std-price-hidden{
    clip:rect(0 0 0 0)!important;
  }
  .std-services-right{
    width:100%!important;
  }
  .std-service-tabs{
    max-width:none!important;
    margin-top:38px!important;
    scrollbar-width:none!important;
  }
  .std-service-tabs::-webkit-scrollbar{
    display:none!important;
  }
  .std-service-tab{
    transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease!important;
  }
  .std-service-category-ref + .std-service-category-ref{
    margin-top:38px!important;
  }
  .std-service-category-heading-ref{
    display:flex!important;
    min-height:34px!important;
    align-items:center!important;
    gap:12px!important;
    margin:0 0 14px!important;
    color:#705a52!important;
    font-size:13px!important;
    font-weight:600!important;
    letter-spacing:.12em!important;
    text-transform:uppercase!important;
  }
  .std-service-category-heading-ref:before{
    width:34px!important;
    height:1px!important;
    flex:0 0 34px!important;
    background:rgba(104,79,70,.28)!important;
    content:""!important;
  }
  .std-service-category-heading-ref i{
    height:1px!important;
    flex:1 1 auto!important;
    background:linear-gradient(90deg,rgba(104,79,70,.18),transparent)!important;
  }
  .std-service-grid-ref{
    position:relative!important;
  }
  .std-service-grid-ref:after{
    position:absolute!important;
    top:0!important;
    bottom:0!important;
    left:50%!important;
    width:1px!important;
    background:linear-gradient(180deg,transparent,rgba(100,77,68,.14) 8%,rgba(100,77,68,.14) 92%,transparent)!important;
    content:""!important;
    transform:translateX(-.5px)!important;
    pointer-events:none!important;
  }
  .std-service-card-ref{
    width:100%!important;
    align-items:stretch!important;
    overflow:hidden!important;
    transition:transform 200ms ease,border-color 200ms ease,box-shadow 200ms ease,background 200ms ease!important;
  }
  .std-service-card-ref:hover:after{
    background:#171513!important;
    color:#fff!important;
  }
  .std-service-card-title-ref{
    max-width:100%!important;
  }
  .std-service-card-bottom-ref span{
    font-weight:600!important;
  }
  .std-about-kicker{
    font-size:12px!important;
    letter-spacing:.24em!important;
  }
  .std-about-lead{
    font-size:clamp(55px,4.6vw,72px)!important;
    line-height:.98!important;
  }
  .std-about-text{
    margin-top:30px!important;
  }
  .std-about-fact{
    flex-direction:column!important;
    color:#171513!important;
  }
  .std-about-fact span{
    margin-top:7px!important;
    color:#81766f!important;
    font-size:10px!important;
  }
  .std-about-visual img{
    width:100%!important;
    height:100%!important;
  }
  #salonDesktopTeam .std-team-kicker{
    font-size:12px!important;
  }
  #salonDesktopTeam .std-team-title{
    margin-top:14px!important;
    font-size:64px!important;
    line-height:.93!important;
  }
  #salonDesktopTeam .std-team-window{
    position:relative!important;
    margin-top:46px!important;
    padding:0 52px!important;
    overflow:hidden!important;
  }
  #salonDesktopTeam .std-team-track{
    overflow-x:auto!important;
    overflow-y:hidden!important;
    scrollbar-width:none!important;
    scroll-snap-type:x mandatory!important;
    scroll-behavior:smooth!important;
  }
  #salonDesktopTeam .std-team-track::-webkit-scrollbar{
    display:none!important;
  }
  #salonDesktopTeam .std-master{
    flex:0 0 calc((100% - 90px)/4)!important;
    cursor:pointer!important;
    scroll-snap-align:start!important;
  }
  #salonDesktopTeam .std-master-arrow{
    z-index:2!important;
    font-size:14px!important;
  }
  #salonDesktopTeam .std-team-nav{
    position:absolute!important;
    z-index:5!important;
    top:42%!important;
    width:40px!important;
    height:40px!important;
    border:1px solid rgba(62,51,44,.14)!important;
    border-radius:50%!important;
    background:rgba(255,255,255,.82)!important;
    color:#171513!important;
    font:300 25px/1 Arial,sans-serif!important;
    display:grid!important;
    place-items:center!important;
  }
  #salonDesktopTeam .std-team-prev{
    left:3px!important;
  }
  #salonDesktopTeam .std-team-next{
    right:3px!important;
  }
  #salonDesktopTeam .std-team-pages{
    display:flex!important;
    justify-content:center!important;
    gap:7px!important;
    margin-top:16px!important;
  }
  #salonDesktopTeam .std-team-pages span{
    width:6px!important;
    height:6px!important;
    border-radius:50%!important;
    background:rgba(23,21,19,.22)!important;
  }
  #salonDesktopTeam .std-team-pages span.active{
    width:18px!important;
    border-radius:999px!important;
    background:#171513!important;
  }
  #salonDesktopReviews .std-review-avatar{
    border-color:rgba(66,55,49,.10)!important;
  }
  #salonDesktopReviews .std-reviews-all{
    border-color:rgba(66,55,49,.18)!important;
  }
  .std-contact-brand{
    min-width:280px!important;
  }
  .std-contact-brand-mark{
    background:#8f7167!important;
    color:#fff!important;
  }
  .std-master-overlay{
    position:fixed!important;
    z-index:390!important;
    inset:0!important;
    display:block!important;
    overflow:auto!important;
    background:#f8f4ee!important;
    color:#171513!important;
    visibility:hidden!important;
    opacity:0!important;
    pointer-events:none!important;
    transition:opacity .34s ease,visibility 0s linear .42s!important;
  }
  .std-master-overlay.open{
    visibility:visible!important;
    opacity:1!important;
    pointer-events:auto!important;
    transition-delay:0s!important;
  }
  .std-master-page-panel{
    width:min(100%,1120px)!important;
    min-height:100vh!important;
    margin:0 auto!important;
    padding:24px 48px 120px!important;
    transform:translateY(28px)!important;
    transition:transform .46s cubic-bezier(.16,1,.3,1)!important;
  }
  .std-master-overlay.open .std-master-page-panel{
    transform:none!important;
  }
  .std-master-page-top{
    display:grid!important;
    grid-template-columns:48px 1fr 48px!important;
    align-items:center!important;
    text-align:center!important;
  }
  .std-master-page-top span{
    font-size:14px!important;
    font-weight:600!important;
    letter-spacing:.28em!important;
  }
  .std-master-page-top i{
    width:48px!important;
    height:48px!important;
  }
  .std-master-page-close{
    width:48px!important;
    height:48px!important;
    font-size:27px!important;
  }
  .std-master-profile{
    text-align:center!important;
    margin-top:28px!important;
  }
  .std-master-profile .std-master-avatar{
    width:158px!important;
    height:158px!important;
    margin:0 auto!important;
    border-radius:50%!important;
    display:grid!important;
    place-items:center!important;
    background:linear-gradient(145deg,#e9e3dc,#d7cec6)!important;
    color:#9b9088!important;
  }
  .std-master-profile .std-master-avatar svg{
    width:72px!important;
    height:72px!important;
  }
  .std-master-profile h2{
    margin:18px 0 0!important;
    font:500 54px/.95 "Cormorant Garamond",Georgia,serif!important;
  }
  .std-master-profile p{
    margin:8px 0 0!important;
    color:#837970!important;
    font-size:14px!important;
  }
  .std-master-profile-rating{
    margin-top:10px!important;
    font-size:12px!important;
    font-weight:600!important;
  }
  .std-master-profile-rating b{
    color:#b78d4f!important;
  }
  .std-master-page-grid{
    display:grid!important;
    grid-template-columns:1.1fr .9fr!important;
    gap:34px!important;
    margin-top:38px!important;
  }
  .std-master-page-block{
    padding:26px!important;
    border:1px solid rgba(63,50,44,.10)!important;
    border-radius:20px!important;
    background:rgba(255,255,255,.38)!important;
  }
  .std-master-page-block h3{
    margin:0 0 16px!important;
    font:500 31px/1 "Cormorant Garamond",Georgia,serif!important;
  }
  .std-master-page-service{
    display:flex!important;
    justify-content:space-between!important;
    gap:18px!important;
    padding:14px 0!important;
    border-bottom:1px solid rgba(63,50,44,.10)!important;
  }
  .std-master-page-service:last-child{
    border-bottom:0!important;
  }
  .std-master-page-service strong{
    font-size:13px!important;
  }
  .std-master-page-service span{
    color:#81766f!important;
    font-size:11px!important;
  }
  .std-master-page-works img{
    width:100%!important;
    aspect-ratio:1.25/1!important;
    object-fit:cover!important;
    border-radius:12px!important;
  }
  .std-master-page-empty{
    color:#81766f!important;
    font-size:12px!important;
    line-height:1.55!important;
  }
  .std-master-page-book{
    position:fixed!important;
    z-index:395!important;
    left:50%!important;
    bottom:22px!important;
    width:min(620px,calc(100% - 64px))!important;
    height:58px!important;
    transform:translateX(-50%)!important;
    border:0!important;
    border-radius:14px!important;
    background:#171513!important;
    color:#fff!important;
    font-size:14px!important;
    font-weight:600!important;
    box-shadow:0 16px 38px rgba(23,21,19,.18)!important;
  }
}
@media(min-width:768px){
  #salon-desktop-v1{
    --br-bg:#f8f4ee;
    --br-light:#f7f2eb;
    --br-warm:#e9e2da;
    --br-dark:#2f2926;
    --br-ink:#171513;
    --br-soft:#746c66;
    --br-taupe:#8b7167;
    --br-line:rgba(62,51,44,.12);
    background:var(--br-bg)!important;
    color:var(--br-ink)!important;
  }
  .std-portfolio-title,.std-services-title,.std-about-title,#salonDesktopTeam .std-team-title,
  #salonDesktopReviews .std-reviews-title,.std-contact-title{
    margin-top:14px!important;
    font:500 clamp(54px,4.35vw,68px)/.94 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.035em!important;
  }
  .std-portfolio-kicker,.std-services-kicker,.std-about-kicker,#salonDesktopTeam .std-team-kicker,
  #salonDesktopReviews .std-reviews-kicker,.std-contact-kicker{
    font:600 12px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.26em!important;
    text-transform:uppercase!important;
  }
  .std-lang-switch{
    height:42px;
    display:flex;
    align-items:center;
    gap:4px;
    padding:0 4px;
  }
  .std-lang-switch button{
    min-width:28px;
    height:34px;
    padding:0 3px;
    border:0;
    background:transparent;
    color:#8b817b;
    font:600 11px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.04em;
  }
  .std-lang-switch button.active{
    color:#171513!important;
  }
  .std-lang-switch .sep{
    color:#c7bbb3;
    font-size:10px;
    pointer-events:none;
  }
  .std-copy-inner{
    width:min(100%,560px)!important;
  }
  .std-hero-kicker{
    margin-bottom:31px!important;
  }
  .std-logo-sub{
    margin-top:20px!important;
  }
  .std-scroll-hint span{
    color:#fff!important;
  }
  .std-portfolio{
    padding:82px 42px 78px!important;
    background:#f7f2eb!important;
    color:#171513!important;
  }
  .std-portfolio-inner{
    width:min(calc(100% - 24px),1400px)!important;
  }
  .std-portfolio-kicker{
    color:#746c66!important;
  }
  .std-portfolio-title{
    color:#171513!important;
  }
  .std-portfolio-copy{
    margin-top:17px!important;
    color:#746c66!important;
    font-size:15px!important;
    line-height:1.55!important;
  }
  .std-portfolio-more{
    width:min(100%,520px)!important;
    height:56px!important;
    margin:34px auto 0!important;
    border:1px solid rgba(64,52,46,.18)!important;
    border-radius:10px!important;
    background:transparent!important;
    color:#1a1715!important;
    box-shadow:none!important;
    font:500 14px/1 "Manrope",Arial,sans-serif!important;
    gap:12px!important;
  }
  .std-portfolio-more:hover{
    background:rgba(255,255,255,.32)!important;
    box-shadow:none!important;
    transform:translateY(-1px)!important;
  }
  .std-gallery-browser{
    background:#f7f2eb!important;
    color:#171513!important;
  }
  .std-gallery-browser-shell{
    width:min(100%,1320px)!important;
    padding:32px 42px 60px!important;
    background:#f7f2eb!important;
  }
  .std-gallery-browser-back{
    color:#171513!important;
    font:300 36px/1 Arial,sans-serif!important;
  }
  .std-gallery-browser-title strong{
    font:500 clamp(54px,4vw,64px)/.9 "Cormorant Garamond",Georgia,serif!important;
    color:#171513!important;
  }
  .std-gallery-browser-title span{
    color:#746c66!important;
  }
  .std-gallery-browser-tab{
    border-color:rgba(55,44,39,.12)!important;
  }
  .std-gallery-browser-grid{
    grid-template-columns:repeat(4,minmax(0,1fr))!important;
    gap:9px!important;
    margin-top:20px!important;
  }
  .std-gallery-browser-tile{
    aspect-ratio:1/1!important;
    border-radius:11px!important;
  }
  .std-gallery{
    z-index:450!important;
    padding:22px!important;
    background:rgba(27,20,20,.90)!important;
    backdrop-filter:blur(9px)!important;
  }
  .std-gallery-stage{
    width:min(calc(100vw - 130px),980px)!important;
    height:min(78dvh,760px)!important;
    max-height:none!important;
    touch-action:none!important;
    overflow:visible!important;
  }
  .std-gallery-canvas{
    position:absolute;
    inset:0;
    overflow:hidden;
    border-radius:14px;
    background:#151312;
    box-shadow:0 18px 54px rgba(0,0,0,.28);
    touch-action:none;
  }
  .std-gallery-image{
    position:absolute!important;
    inset:0!important;
    width:100%!important;
    height:100%!important;
    max-width:none!important;
    max-height:none!important;
    object-fit:contain!important;
    border-radius:0!important;
    box-shadow:none!important;
    transform:translate3d(0,0,0) scale(1);
    transform-origin:center;
    will-change:transform;
  }
  .std-gallery-hint{
    position:absolute;
  }
  .std-gallery-nav{
    width:34px!important;
    height:54px!important;
    border:0!important;
    background:transparent!important;
    font-size:39px!important;
  }
  .std-gallery-prev{
    left:-48px!important;
  }
  .std-gallery-next{
    right:-48px!important;
  }
  .std-gallery-count{
    font-size:10px!important;
  }
  .std-view-gallery{
    position:absolute;
    bottom:-54px;
    transform:translateX(-50%);
    height:42px;
    padding:0 18px;
    border:1px solid rgba(255,255,255,.34);
    border-radius:999px;
    background:rgba(22,18,16,.74);
    backdrop-filter:blur(12px);
    color:#fff!important;
    font:600 11px/1 "Manrope",Arial,sans-serif!important;
    white-space:nowrap;
  }
  .std-gallery:not([data-source="portfolio"]) .std-view-gallery{
    display:none!important;
  }
  .std-services{
    min-height:0!important;
    padding:88px 0 94px!important;
    background:#2f2926!important;
    color:#f7f3f0!important;
  }
  .std-services-inner{
    width:min(calc(100% - 96px),1360px)!important;
    margin:0 auto!important;
    display:block!important;
  }
  .std-services-head-ref{
    display:grid!important;
    grid-template-columns:minmax(340px,.88fr) minmax(360px,1.12fr)!important;
    align-items:end!important;
    gap:68px!important;
  }
  .std-services-kicker{
    color:#b8ada7!important;
  }
  .std-services-title{
    color:#f7f3f0!important;
  }
  .std-services-intro{
    max-width:570px!important;
    margin:0 0 5px!important;
    color:#b9ada7!important;
    font-size:15px!important;
    line-height:1.65!important;
  }
  .std-price-hidden{
    position:absolute!important;
    width:1px!important;
    height:1px!important;
    overflow:hidden!important;
    clip-path:inset(50%)!important;
  }
  .std-service-tabs{
    width:100%!important;
    margin:34px 0 0!important;
    padding:0 0 8px!important;
    display:flex!important;
    gap:8px!important;
    overflow-x:auto!important;
    border:0!important;
    border-radius:0!important;
    background:transparent!important;
    box-shadow:none!important;
    -webkit-mask-image:none!important;
    mask-image:none!important;
  }
  .std-service-tab{
    flex:0 0 auto!important;
    min-height:38px!important;
    padding:0 16px!important;
    border:1px solid rgba(255,255,255,.18)!important;
    border-radius:999px!important;
    background:transparent!important;
    color:#cfc5bf!important;
    font-size:11px!important;
    font-weight:500!important;
  }
  .std-service-tab:hover{
    transform:translateY(-2px)!important;
    background:rgba(255,255,255,.06)!important;
  }
  .std-service-tab.active{
    background:#8b7167!important;
    border-color:#8b7167!important;
    color:#fff!important;
    box-shadow:none!important;
  }
  .std-service-list{
    display:block!important;
    width:100%!important;
    margin-top:24px!important;
    border:0!important;
  }
  .std-service-grid-ref{
    display:grid!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:12px!important;
  }
  .std-service-grid-ref:after{
    display:none!important;
  }
  .std-service-card-ref{
    position:relative!important;
    display:flex!important;
    min-height:142px!important;
    flex-direction:column!important;
    padding:23px 68px 20px 23px!important;
    border:1px solid rgba(255,255,255,.12)!important;
    border-radius:17px!important;
    background:rgba(255,255,255,.045)!important;
    box-shadow:none!important;
    color:#f7f3f0!important;
    text-align:left!important;
  }
  .std-service-card-ref:after{
    position:absolute!important;
    top:20px!important;
    right:18px!important;
    display:grid!important;
    width:38px!important;
    height:38px!important;
    place-items:center!important;
    border:1px solid rgba(255,255,255,.16)!important;
    border-radius:50%!important;
    background:rgba(255,255,255,.06)!important;
    color:#d8b7aa!important;
    content:"↗"!important;
    font:500 15px/1 "Manrope",Arial,sans-serif!important;
  }
  .std-service-card-ref:hover{
    transform:translateY(-3px)!important;
    border-color:rgba(255,255,255,.22)!important;
    background:rgba(255,255,255,.07)!important;
    box-shadow:none!important;
  }
  .std-service-card-title-ref{
    color:#f7f3f0!important;
    font:500 clamp(23px,1.55vw,27px)/1.08 "Cormorant Garamond",Georgia,serif!important;
  }
  .std-service-card-detail-ref{
    margin-top:9px!important;
    color:#b9ada7!important;
    font-size:11px!important;
    line-height:1.5!important;
  }
  .std-service-card-bottom-ref{
    display:flex!important;
    align-items:end!important;
    justify-content:space-between!important;
    gap:12px!important;
    margin-top:auto!important;
    padding-top:20px!important;
  }
  .std-service-card-bottom-ref span{
    display:inline-flex!important;
    min-height:25px!important;
    align-items:center!important;
    padding:0 9px!important;
    border-radius:999px!important;
    background:rgba(255,255,255,.07)!important;
    color:#c9bdb6!important;
    font-size:9px!important;
  }
  .std-service-card-bottom-ref b{
    color:#f7f3f0!important;
    font:500 17px/1 "Cormorant Garamond",Georgia,serif!important;
  }
  .std-service-all-grid{
    position:relative;
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    column-gap:50px;
  }
  .std-service-all-grid:after{
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    left:50%;
    width:1px;
    background:rgba(255,255,255,.13);
    transform:translateX(-.5px);
  }
  .std-service-all-row{
    min-height:92px;
    padding:20px 5px;
    border:0;
    border-bottom:1px solid rgba(255,255,255,.14);
    background:transparent;
    color:#f7f3f0!important;
    display:grid;
    grid-template-columns:minmax(0,1fr) auto;
    gap:20px;
    align-items:center;
    text-align:left;
  }
  .std-service-all-title{
    display:block;
    color:#f7f3f0;
    font:500 24px/1.08 "Cormorant Garamond",Georgia,serif;
  }
  .std-service-all-cat{
    display:block;
    margin-top:7px;
    color:#a99e98;
    font:500 9.5px/1 "Manrope",Arial,sans-serif;
    letter-spacing:.08em;
    text-transform:uppercase;
  }
  .std-service-all-action{
    color:#d8b7aa;
    font:500 11px/1 "Manrope",Arial,sans-serif;
    white-space:nowrap;
  }
  .std-service-more{
    width:min(100%,390px)!important;
    height:52px!important;
    margin:28px auto 0!important;
    border:1px solid rgba(255,255,255,.22)!important;
    border-radius:8px!important;
    background:rgba(255,255,255,.06)!important;
    color:#f4eeea!important;
  }
  .std-service-more[hidden]{
    display:none!important;
  }
  .std-services-count{
    margin-top:13px!important;
    text-align:center!important;
    color:#938984!important;
    font-size:10px!important;
  }
  .std-about{
    min-height:0!important;
    padding:88px 70px 96px!important;
    background:#f7f2eb!important;
    color:#171513!important;
  }
  .std-about-inner{
    width:min(100%,1360px)!important;
    margin:0 auto!important;
  }
  .std-about-kicker{
    color:#88786e!important;
  }
  .std-about-title{
    color:#171513!important;
  }
  .std-about-grid{
    margin-top:38px!important;
    padding:18px!important;
    display:grid!important;
    grid-template-columns:minmax(0,.94fr) minmax(0,1.06fr)!important;
    gap:54px!important;
    align-items:stretch!important;
    border:1px solid rgba(66,55,49,.11)!important;
    border-radius:28px!important;
    background:#eee7df!important;
    box-shadow:0 14px 34px rgba(47,37,31,.08)!important;
  }
  .std-about-visual{
    height:auto!important;
    min-height:500px!important;
    border-radius:20px!important;
    overflow:hidden!important;
    box-shadow:none!important;
    order:0!important;
  }
  .std-about-visual:after{
    background:none!important;
  }
  .std-about-visual img{
    filter:none!important;
    object-fit:cover!important;
  }
  .std-about-rating{
    left:18px!important;
    bottom:18px!important;
    height:42px!important;
    padding:0 14px!important;
    background:rgba(18,17,16,.72)!important;
    color:#fff!important;
    border-color:rgba(255,255,255,.28)!important;
  }
  .std-about-rating strong,.std-about-rating span{
    color:#fff!important;
  }
  .std-about-copy{
    padding:38px 34px 34px 0!important;
    display:flex!important;
    flex-direction:column!important;
    justify-content:center!important;
  }
  .std-about-lead{
    margin:0!important;
    max-width:670px!important;
    color:#1d1a18!important;
    font:500 clamp(31px,2.55vw,40px)/1.12 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.025em!important;
  }
  .std-about-text{
    max-width:660px!important;
    margin:23px 0 0!important;
    color:#58504a!important;
    font-size:15px!important;
    line-height:1.68!important;
  }
  .std-about-facts{
    display:grid!important;
    grid-template-columns:1fr!important;
    gap:0!important;
    margin-top:29px!important;
    border-top:1px solid rgba(66,55,49,.12)!important;
  }
  .std-about-fact{
    min-height:57px!important;
    padding:0!important;
    border:0!important;
    border-bottom:1px solid rgba(66,55,49,.12)!important;
    border-radius:0!important;
    background:transparent!important;
    display:flex!important;
    align-items:center!important;
    justify-content:flex-start!important;
    text-align:left!important;
  }
  .std-about-fact strong{
    color:#2b2724!important;
    font:500 16px/1.2 "Manrope",Arial,sans-serif!important;
    white-space:nowrap!important;
  }
  #salonDesktopTeam.std-team{
    min-height:0!important;
    padding:84px 70px 88px!important;
    background:#2f2926!important;
    color:#f7f3f0!important;
  }
  #salonDesktopTeam .std-team-inner{
    width:min(100%,1360px)!important;
  }
  #salonDesktopTeam .std-team-subtitle{
    margin-top:14px!important;
  }
  #salonDesktopTeam .std-master-arrow{
    position:absolute!important;
    top:13px!important;
    right:13px!important;
    width:34px!important;
    height:34px!important;
    border:1px solid rgba(255,255,255,.14)!important;
    border-radius:50%!important;
    background:rgba(255,255,255,.05)!important;
    color:#d8b7aa!important;
    place-items:center!important;
  }
  .std-master-cats{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:6px;
    margin-top:13px;
  }
  .std-master-cat{
    display:inline-flex;
    min-height:25px;
    align-items:center;
    padding:0 9px;
    border:1px solid rgba(255,255,255,.11);
    border-radius:999px;
    color:#d8cdc6;
    font:500 9px/1 "Manrope",Arial,sans-serif;
  }
  #salonDesktopReviews .std-reviews-count{
    font-size:13px!important;
  }
  #salonDesktopReviews .std-review-card{
    border-color:rgba(66,55,49,.15)!important;
  }
  #salonDesktopReviews .std-review-text{
    margin-top:22px!important;
    font-size:14px!important;
    line-height:1.5!important;
  }
  .std-contact{
    min-height:0!important;
    padding:82px 70px 46px!important;
    background:#2f2926!important;
    color:#f7f3f0!important;
  }
  .std-contact-inner{
    width:min(100%,1360px)!important;
    grid-template-columns:500px minmax(0,1fr)!important;
    gap:42px!important;
  }
  .std-contact-kicker{
    color:#b8ada7!important;
  }
  .std-contact-title{
    color:#f7f3f0!important;
    margin-bottom:32px!important;
  }
  .std-contact-right{
    padding-top:94px!important;
  }
  .std-contact-card{
    min-height:76px!important;
    border-color:rgba(255,255,255,.13)!important;
    background:rgba(255,255,255,.06)!important;
    color:#f7f3f0!important;
  }
  .std-contact-card:hover{
    border-color:rgba(255,255,255,.22)!important;
    background:rgba(255,255,255,.085)!important;
  }
  .std-contact-card-title{
    color:#f7f3f0!important;
    font-size:21px!important;
  }
  .std-contact-card-sub{
    color:#c7bbb4!important;
    font-size:11px!important;
  }
  .std-contact-card-icon{
    color:#f0e8e3!important;
  }
  .std-contact-map{
    height:430px!important;
    border:1px solid rgba(255,255,255,.12)!important;
    border-radius:18px!important;
    overflow:hidden!important;
    background:#423a36!important;
  }
  .std-contact-status{
    border-color:rgba(255,255,255,.16)!important;
    background:#493336!important;
    color:#d59a9f!important;
  }
  .std-contact-status.open{
    background:#2e4133!important;
    border-color:#4d6752!important;
    color:#a9d5b0!important;
  }
  .std-contact-bottom{
    margin-top:34px!important;
    display:flex!important;
    justify-content:center!important;
  }
  .std-contact-brand{
    width:min(100%,480px)!important;
    min-height:76px!important;
    padding:0 24px!important;
    border-radius:14px!important;
    background:#171513!important;
    color:#fff!important;
    display:flex!important;
    align-items:center!important;
    justify-content:space-between!important;
    gap:24px!important;
    box-shadow:none!important;
    text-decoration:none!important;
  }
  .std-contact-brand strong{
    font:500 23px/1 "Cormorant Garamond",Georgia,serif!important;
    color:#fff!important;
    white-space:nowrap;
  }
  .std-contact-brand-text{
    max-width:220px!important;
    text-align:right!important;
    color:#d6cec8!important;
    font:400 10px/1.35 "Manrope",Arial,sans-serif!important;
  }
  .std-master-page-close{
    border:0!important;
    border-radius:0!important;
    background:transparent!important;
    box-shadow:none!important;
  }
  .std-master-profile-cats{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:7px;
    margin-top:12px;
  }
  .std-master-profile-cats span{
    display:inline-flex;
    min-height:28px;
    align-items:center;
    padding:0 10px;
    border:1px solid rgba(61,49,43,.12);
    border-radius:999px;
    color:#71665f;
    font-size:10px;
  }
  .std-master-tabs{
    display:flex!important;
    justify-content:center!important;
    gap:7px!important;
    margin:24px auto 0!important;
    overflow-x:auto!important;
  }
  .std-master-tabs button{
    height:42px!important;
    padding:0 17px!important;
    border:1px solid rgba(61,49,43,.12)!important;
    border-radius:999px!important;
    background:transparent!important;
    color:#615851!important;
    font-size:11px!important;
  }
  .std-master-tabs button.active{
    background:#171513!important;
    color:#fff!important;
    border-color:#171513!important;
  }
  .std-master-tab-content{
    margin-top:28px!important;
  }
  .std-master-tab-content h3{
    margin:0 0 14px!important;
    font:500 31px/1 "Cormorant Garamond",Georgia,serif!important;
  }
  .std-master-about-copy{
    max-width:660px;
    margin:0 auto;
    color:#514a45;
    font-size:13px;
    line-height:1.65;
    text-align:center;
  }
  .std-master-page-works{
    display:grid!important;
    grid-template-columns:repeat(3,minmax(0,1fr))!important;
    gap:8px!important;
  }
  .std-master-page-work{
    border:0;
    padding:0;
    background:none;
  }
  .std-master-page-work img{
    width:100%!important;
    aspect-ratio:1.15!important;
    object-fit:cover!important;
    border-radius:11px!important;
  }
  .std-section-reveal{
    opacity:0;
    transform:translate3d(0,28px,0);
    transition:opacity .72s ease,transform .82s cubic-bezier(.16,1,.3,1);
  }
  .std-section-reveal.in-view{
    opacity:1;
    transform:none;
  }
  @media(prefers-reduced-motion:reduce){
    .std-section-reveal{
      opacity:1!important;
      transform:none!important;
      transition:none!important;
    }
  }
  @media(max-width:1180px){
    .std-header{
      padding:0 30px!important;
    }
    .std-nav{
      gap:19px!important;
    }
    .std-header-right{
      gap:9px!important;
    }
    .std-phone{
      font-size:14px!important;
    }
    .std-lang-switch{
      gap:1px;
    }
    .std-lang-switch button{
      min-width:23px;
      font-size:10px!important;
    }
    .std-services-inner{
      width:min(calc(100% - 56px),1360px)!important;
    }
    .std-services-head-ref{
      gap:40px!important;
    }
    .std-about{
      padding-left:42px!important;
      padding-right:42px!important;
    }
    .std-about-grid{
      gap:36px!important;
    }
    .std-about-copy{
      padding-right:18px!important;
    }
    #salonDesktopTeam.std-team{
      padding-left:42px!important;
      padding-right:42px!important;
    }
    #salonDesktopTeam .std-team-track{
      gap:16px!important;
    }
    .std-contact{
      padding-left:42px!important;
      padding-right:42px!important;
    }
    .std-contact-inner{
      grid-template-columns:430px minmax(0,1fr)!important;
    }
    .std-about-fact strong{
      font-size:14px!important;
    }
  }
  @media(max-width:930px){
    .std-nav{
      display:none!important;
    }
    .std-services-head-ref{
      grid-template-columns:1fr!important;
      gap:20px!important;
    }
    .std-service-grid-ref,.std-service-all-grid{
      grid-template-columns:1fr!important;
    }
    .std-service-all-grid:after{
      display:none!important;
    }
    .std-about-grid{
      grid-template-columns:1fr!important;
    }
    .std-about-visual{
      min-height:390px!important;
    }
    .std-about-copy{
      padding:24px 18px 30px!important;
    }
    #salonDesktopTeam .std-team-track{
      grid-template-columns:repeat(2,minmax(0,1fr))!important;
    }
    .std-contact-inner{
      grid-template-columns:1fr!important;
    }
    .std-contact-right{
      padding-top:0!important;
    }
    .std-contact-map{
      height:360px!important;
    }
    .std-gallery-browser-grid{
      grid-template-columns:repeat(3,minmax(0,1fr))!important;
    }
  }
}
@media(min-width:768px){
  .std-hero-frame{
    border-bottom:0!important;
  }
  .std-hero-frame:after{
    content:""!important;
    position:absolute!important;
    z-index:4!important;
    left:-26px!important;
    right:-26px!important;
    bottom:-2px!important;
    height:150px!important;
    background:linear-gradient(180deg,rgba(240,232,22—) 0%,rgba(240,232,225,.60) 48%,#f0e8e1 90%,#f0e8e1 100%)!important;
    pointer-events:none!important;
  }
  .std-copy-inner{
    width:min(100% - 64px,560px)!important;
    margin-top:116px!important;
  }
  .std-scroll-hint{
    position:absolute!important;
    z-index:7!important;
    left:50%!important;
    right:auto!important;
    bottom:24px!important;
    transform:translateX(-50%)!important;
    flex-direction:column!important;
    align-items:center!important;
    gap:9px!important;
    padding:0!important;
    border:0!important;
    border-radius:0!important;
    background:transparent!important;
    box-shadow:none!important;
    backdrop-filter:none!important;
    color:#65564e!important;
    text-decoration:none!important;
    animation:none!important;
  }
  .std-scroll-label{
    display:block!important;
    color:#7d6d65!important;
    font:600 9px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.30em!important;
    text-transform:uppercase!important;
    white-space:nowrap!important;
  }
  .std-scroll-circle{
    display:grid!important;
    width:54px!important;
    height:54px!important;
    place-items:center!important;
    border:1px solid rgba(255,255,255,.24)!important;
    border-radius:50%!important;
    background:#715b53!important;
    color:#fff!important;
    box-shadow:0 12px 28px rgba(74,54,47,.22)!important;
    font:300 24px/1 Arial,sans-serif!important;
    letter-spacing:0!important;
    animation:stdScrollCircleFloat 2.5s ease-in-out infinite!important;
  }
  @keyframes stdScrollCircleFloat{
    0%,100%{
      transform:translateY(0);
    }
    50%{
      transform:translateY(5px);
    }
  }
  @media(prefers-reduced-motion:reduce){
    .std-scroll-circle{
      animation:none!important;
    }
  }
  #salonDesktopServices.mct-prices{
    color:#f7f3f0!important;
  }
  #salonDesktopServices.mct-prices>.mct-shell{
    position:relative!important;
  }
  #salonDesktopServices .mct-price-head{
    text-align:left!important;
  }
  #salonDesktopServices .mct-price-head:after{
    position:absolute!important;
    content:""!important;
  }
  #salonDesktopServices .mct-section-kicker{
    margin:0!important;
    color:#b8ada7!important;
    font:600 12px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.24em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopServices .mct-price-head h2{
    width:auto!important;
    margin:12px 0 0!important;
    color:#f7f3f0!important;
    font:500 clamp(49.5px,4.125vw,63.8px)/.94 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.035em!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .mct-price-head>span{
    display:block!important;
    width:auto!important;
    max-width:374px!important;
    margin:26px 0 0!important;
    color:#b9ada7!important;
    font-size:14.3px!important;
    line-height:1.72!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    min-width:0!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tabs-track{
    box-sizing:border-box!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    font:600 14px/1 "Manrope",Arial,sans-serif!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .mct-tab:not(.is-active):hover{
    border-color:rgba(255,255,255,.28)!important;
    background:rgba(255,255,255,.08)!important;
    transform:translateY(-2px)!important;
  }
  #salonDesktopServices .mct-tab.is-active{
    border-color:#8b7167!important;
    background:#8b7167!important;
    color:#fff!important;
    box-shadow:0 14px 30px rgba(0,0,0,.16)!important;
  }
  #salonDesktopServices .dct-service-category+.dct-service-category{
    margin-top:30px!important;
  }
  #salonDesktopServices .dct-service-category-heading{
    display:flex!important;
    min-height:30px!important;
    align-items:center!important;
    gap:12px!important;
    margin:0 0 10px!important;
    color:#d8b7aa!important;
    font-size:13px!important;
    font-weight:600!important;
    letter-spacing:.12em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopServices .dct-service-category-heading:before{
    width:34px!important;
    height:1px!important;
    flex:0 0 34px!important;
    background:rgba(216,183,170,.38)!important;
    content:""!important;
  }
  #salonDesktopServices .dct-service-category-heading i{
    height:1px!important;
    flex:1 1 auto!important;
    background:linear-gradient(90deg,rgba(216,183,170,.26),transparent)!important;
  }
  #salonDesktopServices .dct-service-category-list{
    display:grid!important;
    gap:11px!important;
  }
  #salonDesktopServices .dct-service-card,
  #salonDesktopServices .dct-service-card.has-description{
    position:relative!important;
    display:block!important;
    width:100%!important;
    min-height:104px!important;
    padding:18px 24px!important;
    overflow:hidden!important;
    border:1px solid rgba(255,255,255,.12)!important;
    border-radius:20px!important;
    background:rgba(255,255,255,.045)!important;
    box-shadow:0 10px 26px rgba(0,0,0,.06)!important;
    color:#f7f3f0!important;
    text-align:left!important;
    text-decoration:none!important;
    transition:transform 200ms ease,border-color 200ms ease,box-shadow 200ms ease,background 200ms ease!important;
  }
  #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
    display:grid!important;
    min-height:68px!important;
    grid-template-columns:minmax(0,1fr) 112px 150px!important;
    grid-template-rows:1fr!important;
    align-items:center!important;
    column-gap:18px!important;
  }
  #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-title{
    grid-column:1!important;
    grid-row:1!important;
    align-self:center!important;
    margin:0!important;
    color:#f7f3f0!important;
    font:500 clamp(24px,1.8vw,30px)/1.04 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-body{
    min-height:84px!important;
    grid-template-rows:auto auto!important;
    align-content:center!important;
  }
  #salonDesktopServices .dct-service-card:not(.has-variants).has-description .dct-service-card-title{
    grid-row:1!important;
    align-self:end!important;
  }
  #salonDesktopServices .dct-service-card-description{
    grid-column:1!important;
    grid-row:2!important;
    align-self:start!important;
    max-width:95%!important;
    margin:7px 0 0!important;
    color:#b9ada7!important;
  }
  #salonDesktopServices .dct-service-card-description.is-empty{
    display:none!important;
  }
  #salonDesktopServices .dct-service-card-description p{
    margin:0!important;
    color:#b9ada7!important;
    font-size:11.5px!important;
    line-height:1.48!important;
  }
  #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-meta{
    display:contents!important;
  }
  #salonDesktopServices .dct-service-card-meta>small{
    grid-column:2!important;
    grid-row:1!important;
    align-self:center!important;
    justify-self:start!important;
    display:inline-flex!important;
    min-height:30px!important;
    align-items:center!important;
    padding:0 10px!important;
    border:1px solid rgba(255,255,255,.10)!important;
    border-radius:999px!important;
    background:rgba(255,255,255,.06)!important;
    color:#c9bdb6!important;
    font-size:11px!important;
    font-weight:650!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .dct-service-card-meta>small:before{
    margin-right:6px!important;
    content:"◷"!important;
    font-size:12px!important;
  }
  #salonDesktopServices .dct-service-card-meta>b{
    grid-column:3!important;
    grid-row:1!important;
    align-self:center!important;
    justify-self:end!important;
    width:150px!important;
    min-width:150px!important;
    color:#f7f3f0!important;
    font:600 23px/1 "Cormorant Garamond",Georgia,serif!important;
    text-align:right!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .mct-more-services{
    display:flex!important;
    width:320px!important;
    min-height:58px!important;
    align-items:center!important;
    justify-content:center!important;
    gap:9px!important;
    border:1px solid rgba(255,255,255,.22)!important;
    border-radius:10px!important;
    background:rgba(255,255,255,.06)!important;
    color:#f4eeea!important;
    font:600 13px/1 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopServices .mct-more-services[hidden]{
    display:none!important;
  }
  #salonDesktopServices .mct-more-services svg{
    transition:transform .2s ease!important;
  }
  #salonDesktopServices .mct-more-services.is-open svg{
    transform:rotate(180deg)!important;
  }
  #salonDesktopServices .mct-more-services-mobile-copy{
    display:none!important;
  }
  #salonDesktopServices .mct-more-services-desktop-copy{
    display:inline!important;
  }
  #salonDesktopAbout.mct-about{
    padding:84px 0 88px!important;
    background:radial-gradient(circle at 88% 18%,rgba(193,158,145,.13),transparent 31%),linear-gradient(180deg,#f8f3ef 0%,#f4ebe5 100%)!important;
    color:#171513!important;
  }
  #salonDesktopAbout>.mct-shell{
    width:min(calc(100% - 96px),1360px)!important;
    margin:0 auto!important;
  }
  #salonDesktopAbout .mct-about-head{
    align-items:end!important;
    justify-content:space-between!important;
    gap:24px!important;
  }
  #salonDesktopAbout .mct-section-kicker{
    margin:0!important;
    color:#88786e!important;
    font:600 12px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.22em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopAbout .mct-about-head h2{
    margin:13px 0 0!important;
    color:#171513!important;
    font:500 clamp(54px,4.35vw,68px)/.94 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.035em!important;
  }
  #salonDesktopAbout .mct-about-monogram{
    color:rgba(113,91,83,.22)!important;
    font:500 76px/.8 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap{
    position:relative!important;
  }
  #salonDesktopAbout .mct-about-portrait{
    width:100%!important;
    margin:0!important;
    overflow:hidden!important;
  }
  #salonDesktopAbout .mct-about-portrait img{
    display:block!important;
    object-position:center 20%!important;
  }
  #salonDesktopAbout .mct-about-copy>p:not(.mct-about-lead){
    font-size:13.5px!important;
    line-height:1.62!important;
  }
  #salonDesktopAbout .mct-about-list{
    display:none!important;
  }
  #salonDesktopAbout .dct-about-amenities{
    display:block!important;
    border-top:1px solid rgba(83,63,55,.11)!important;
  }
  #salonDesktopAbout .dct-about-amenities-head{
    display:flex!important;
    align-items:center!important;
    justify-content:space-between!important;
    gap:22px!important;
  }
  #salonDesktopAbout .dct-about-amenities-head>span{
    color:#716a66!important;
    font-size:10px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid{
    margin-top:16px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid article+article{
    padding-left:15px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid strong,
  #salonDesktopAbout .dct-about-amenities-grid span{
    display:block!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid strong{
    color:#373331!important;
    font:600 22px/1.08 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid span{
    color:#716a66!important;
  }
  #salonDesktopTeam .std-master{
    position:relative!important;
  }
  #salonDesktopTeam .std-master-arrow{
    display:none!important;
  }
  #salonDesktopTeam .std-master-cats{
    gap:8px!important;
  }
  #salonDesktopTeam .std-master-cat{
    min-height:0!important;
    border-radius:0!important;
  }
  #salonDesktopReviews.std-reviews{
    position:relative!important;
    box-sizing:border-box!important;
    width:100%!important;
    height:auto!important;
    min-height:760px!important;
    overflow:hidden!important;
    padding:65px 0 52px!important;
    background:#e9e2da!important;
    color:#171513!important;
  }
  #salonDesktopReviews .std-reviews-head{
    width:min(calc(100% - 128px),1408px)!important;
    margin:0 auto!important;
    text-align:center!important;
  }
  #salonDesktopReviews .std-reviews-kicker{
    margin:0!important;
    color:#746c66!important;
    font:500 17px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.30em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopReviews .std-reviews-title{
    margin:22px 0 0!important;
    color:#151517!important;
    font:500 76px/.92 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.035em!important;
  }
  #salonDesktopReviews .std-reviews-score{
    margin-top:44px!important;
    text-align:center!important;
  }
  #salonDesktopReviews .std-reviews-score>strong{
    display:block!important;
    margin:0!important;
    color:#151517!important;
    font:500 88px/.78 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.045em!important;
  }
  #salonDesktopReviews .std-reviews-stars{
    display:block!important;
    margin-top:21px!important;
    color:#b78d4f!important;
    font-size:34px!important;
    line-height:1!important;
    letter-spacing:6px!important;
  }
  #salonDesktopReviews .std-reviews-count{
    margin-top:20px!important;
    color:#716862!important;
    font:400 18px/1 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopReviews .std-reviews-viewport{
    position:relative!important;
    box-sizing:border-box!important;
    width:100%!important;
    margin-top:35px!important;
    padding:0 64px 4px!important;
    overflow:hidden!important;
    cursor:grab!important;
  }
  #salonDesktopReviews .std-reviews-loop{
    display:flex!important;
    align-items:stretch!important;
    gap:16px!important;
    width:max-content!important;
    will-change:transform!important;
  }
  #salonDesktopReviews .std-reviews-set{
    display:flex!important;
    flex:0 0 auto!important;
    align-items:stretch!important;
    gap:16px!important;
  }
  #salonDesktopReviews .std-review-card{
    box-sizing:border-box!important;
    flex:0 0 459px!important;
    width:459px!important;
    height:320px!important;
    min-width:459px!important;
    min-height:320px!important;
    max-width:none!important;
    padding:31px 30px 28px!important;
    border:1px solid rgba(66,55,49,.15)!important;
    border-radius:12px!important;
    background:rgba(255,255,255,.34)!important;
    color:#19191b!important;
    text-decoration:none!important;
    box-shadow:none!important;
  }
  #salonDesktopReviews .std-review-head{
    display:grid!important;
    grid-template-columns:70px minmax(0,1fr)!important;
    gap:24px!important;
    align-items:center!important;
  }
  #salonDesktopReviews .std-review-avatar{
    width:70px!important;
    height:70px!important;
    border-radius:50%!important;
    display:grid!important;
    place-items:center!important;
    background:#d7cec6!important;
    border:1px solid rgba(66,55,49,.10)!important;
    color:#514943!important;
    font:500 32px/1 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopReviews .std-review-name{
    display:block!important;
    margin:0!important;
    color:#2a2522!important;
    font:600 25px/1 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopReviews .std-review-meta{
    display:block!important;
    margin-top:7px!important;
    color:#818087!important;
    font:500 11px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.13em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopReviews .std-review-stars{
    display:block!important;
    margin-top:8px!important;
    color:#b78d4f!important;
    font-size:16px!important;
    line-height:1!important;
    letter-spacing:1.5px!important;
  }
  #salonDesktopReviews .std-review-text{
    display:-webkit-box!important;
    margin:31px 0 0!important;
    min-height:95px!important;
    overflow:hidden!important;
    color:#4f4843!important;
    font:400 16px/1.52 "Manrope",Arial,sans-serif!important;
    -webkit-box-orient:vertical!important;
    -webkit-line-clamp:4!important;
  }
  #salonDesktopReviews .std-review-more{
    display:block!important;
    margin-top:18px!important;
    color:#67666c!important;
    font:400 12px/1 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopReviews .std-reviews-actions{
    display:flex!important;
    justify-content:center!important;
    margin-top:27px!important;
  }
  #salonDesktopReviews .std-reviews-all{
    width:458px!important;
    height:55px!important;
    border:1px solid rgba(66,55,49,.18)!important;
    border-radius:7px!important;
    background:rgba(255,255,255,.18)!important;
    display:flex!important;
    align-items:center!important;
    justify-content:center!important;
    color:#242327!important;
    font:500 14px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.14em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopContacts.std-contact{
    background:#2f2926!important;
    color:#f7f3f0!important;
  }
  #salonDesktopContacts .std-contact-inner{
    display:block!important;
  }
  #salonDesktopContacts .std-contact-head{
    display:flex!important;
    align-items:flex-end!important;
    justify-content:space-between!important;
    gap:28px!important;
  }
  #salonDesktopContacts .std-contact-kicker{
    color:#b8ada7!important;
  }
  #salonDesktopContacts .std-contact-title{
    margin:14px 0 0!important;
    color:#f7f3f0!important;
  }
  #salonDesktopContacts .std-contact-status{
    position:static!important;
    display:inline-flex!important;
    align-items:center!important;
    border:1px solid rgba(255,255,255,.16)!important;
    border-radius:999px!important;
    background:#493336!important;
    color:#d59a9f!important;
  }
  #salonDesktopContacts .std-contact-status.open{
    background:#2e4133!important;
    border-color:#4d6752!important;
    color:#a9d5b0!important;
  }
  #salonDesktopContacts .std-contact-body{
    display:grid!important;
    grid-template-columns:minmax(420px,.9fr) minmax(0,1.1fr)!important;
    align-items:stretch!important;
  }
  #salonDesktopContacts .std-contact-list{
    display:grid!important;
    margin:0!important;
  }
  #salonDesktopContacts .std-contact-card{
    grid-template-columns:46px minmax(0,1fr)!important;
    gap:13px!important;
    border:1px solid rgba(255,255,255,.13)!important;
    border-radius:14px!important;
    background:rgba(255,255,255,.06)!important;
    color:#f7f3f0!important;
  }
  #salonDesktopContacts .std-contact-card-icon{
    width:40px!important;
    height:40px!important;
    display:grid!important;
    place-items:center!important;
    border-radius:50%!important;
    background:rgba(255,255,255,.08)!important;
    color:#f0e8e3!important;
  }
  #salonDesktopContacts .std-contact-card-title{
    color:#f7f3f0!important;
    font:500 19px/1.15 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopContacts .std-contact-card-sub{
    color:#c7bbb4!important;
  }
  #salonDesktopContacts .std-contact-right{
    display:flex!important;
    flex-direction:column!important;
    padding:0!important;
  }
  #salonDesktopContacts .std-contact-map{
    height:100%!important;
    border:1px solid rgba(255,255,255,.12)!important;
    border-radius:18px!important;
    overflow:hidden!important;
    background:#423a36!important;
  }
  #salonDesktopContacts .std-contact-actions{
    display:grid!important;
    grid-template-columns:1fr 1.15fr!important;
  }
  #salonDesktopContacts .std-contact-action-btn{
    display:flex!important;
    align-items:center!important;
    justify-content:center!important;
    text-decoration:none!important;
    font:500 12px/1 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopContacts .std-contact-call{
    border:1px solid rgba(255,255,255,.22)!important;
    color:#f7f3f0!important;
  }
  #salonDesktopContacts .std-contact-route{
    background:#f4ede8!important;
    color:#2b2522!important;
  }
  #salonDesktopContacts .std-contact-brand{
    color:#fff!important;
  }
  #salonDesktopContacts .br-tanem-copy strong{
    display:inline!important;
    font:500 15px/1 "Cormorant Garamond",Georgia,serif!important;
  }
  @media(max-width:1199px){
    #salonDesktopServices.mct-prices>.mct-shell{
      width:min(calc(100% - 56px),1360px)!important;
      grid-template-columns:minmax(255px,.68fr) minmax(0,1.52fr)!important;
      column-gap:34px!important;
    }
    #salonDesktopServices .mct-price-head{
      top:96px!important;
    }
    #salonDesktopServices .mct-price-head h2{
      font-size:47.3px!important;
    }
    #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
      grid-template-columns:minmax(0,1fr) 98px 132px!important;
      column-gap:14px!important;
    }
    #salonDesktopServices .dct-service-card-meta>b{
      width:132px!important;
      min-width:132px!important;
    }
    #salonDesktopAbout>.mct-shell{
      width:min(calc(100% - 56px),1360px)!important;
    }
    #salonDesktopAbout .mct-about-card{
      grid-template-columns:minmax(330px,.84fr) minmax(0,1.16fr)!important;
    }
    #salonDesktopContacts.std-contact{
      padding-left:42px!important;
      padding-right:42px!important;
    }
    #salonDesktopContacts .std-contact-bottom{
      width:calc(100% + 84px)!important;
      margin-left:-42px!important;
      margin-right:-42px!important;
    }
  }
  @media(max-width:930px){
    .std-hero-frame{
      margin-top:18px!important;
    }
    .std-copy-inner{
      width:min(100% - 44px,540px)!important;
      margin-top:90px!important;
    }
    #salonDesktopServices.mct-prices>.mct-shell{
      grid-template-columns:1fr!important;
      row-gap:26px!important;
    }
    #salonDesktopServices .mct-price-head{
      position:relative!important;
      top:auto!important;
      grid-column:1!important;
      padding:0!important;
      transform:none!important;
    }
    #salonDesktopServices .mct-price-head:after{
      display:none!important;
    }
    #salonDesktopServices .mct-tabs-ribbon-wrap,
    #salonDesktopServices .dct-service-groups,
    #salonDesktopServices .mct-more-services{
      grid-column:1!important;
    }
    #salonDesktopServices .dct-service-groups{
      margin-top:0!important;
    }
    #salonDesktopAbout .mct-about-card{
      grid-template-columns:1fr!important;
      height:auto!important;
    }
    #salonDesktopAbout .mct-about-portrait-wrap{
      min-height:390px!important;
    }
    #salonDesktopAbout .dct-about-amenities-grid{
      grid-template-columns:1fr!important;
      gap:12px!important;
    }
    #salonDesktopAbout .dct-about-amenities-grid article+article{
      padding-left:0!important;
      border-left:0!important;
    }
    #salonDesktopContacts .std-contact-body{
      grid-template-columns:1fr!important;
    }
    #salonDesktopContacts .std-contact-map{
      min-height:330px!important;
    }
  }
}
@media(min-width:768px){
  html,body{
    scroll-behavior:auto!important;
  }
  .std-hero-copy{
    min-height:0!important;
  }
  #salonDesktopPortfolio,#salonDesktopServices,#salonDesktopAbout,#salonDesktopTeam,#salonDesktopReviews,#salonDesktopContacts{
    scroll-margin-top:80px!important;
  }
}
@media(min-width:768px) and (max-height:820px){
  .std-hero-frame{
    margin-top:18px!important;
  }
  .std-copy-inner{
    width:min(100% - 56px,540px)!important;
  }
  .std-scroll-hint{
    bottom:14px!important;
  }
  .std-scroll-circle{
    width:46px!important;
    height:46px!important;
  }
}
@media(min-width:768px){
  .std-header{
    height:80px!important;
    padding:0 48px!important;
  }
  .std-header-brand{
    width:auto!important;
    min-width:0!important;
    align-items:flex-start!important;
  }
  .std-header-brand-main{
    font-size:31px!important;
    letter-spacing:.075em!important;
  }
  .std-header-brand-sub{
    margin-top:7px!important;
    font-size:8px!important;
    letter-spacing:.38em!important;
    padding-left:2px!important;
  }
  .std-header-right{
    gap:19px!important;
  }
  .std-phone{
    font-size:16px!important;
  }
  .std-header-book{
    width:158px!important;
    min-width:158px!important;
    height:48px!important;
    font-size:15px!important;
  }
  .std-hero{
    position:relative!important;
    isolation:isolate!important;
    display:grid!important;
    grid-template-columns:46.5% 53.5%!important;
    height:calc(100dvh - 80px)!important;
    min-height:690px!important;
    overflow:hidden!important;
  }
  .std-hero:before,
  .std-hero:after{
    content:""!important;
    position:absolute!important;
    z-index:0!important;
    width:1040px!important;
    height:1040px!important;
    border:1px solid rgba(151,112,91,.17)!important;
    border-radius:50%!important;
    pointer-events:none!important;
    background:transparent!important;
  }
  .std-hero:after{
    width:820px!important;
    height:820px!important;
  }
  .std-hero-copy{
    z-index:2!important;
    min-width:0!important;
    align-items:stretch!important;
    justify-content:flex-start!important;
    padding:0 40px 0 78px!important;
    overflow:visible!important;
    background:transparent!important;
  }
  .std-hero-copy:before{
    content:""!important;
    position:absolute!important;
    z-index:0!important;
    width:540px!important;
    height:540px!important;
    border:1px solid rgba(151,112,91,.10)!important;
    border-radius:50%!important;
    opacity:1!important;
    filter:none!important;
    transform:none!important;
    background:transparent!important;
    -webkit-mask-image:none!important;
    mask-image:none!important;
    pointer-events:none!important;
  }
  .std-hero-copy:after{
    content:"Красота — это уверенность\Aв себе каждый день."!important;
    white-space:pre!important;
    position:absolute!important;
    left:78px!important;
    bottom:44px!important;
    z-index:3!important;
    padding-left:58px!important;
    color:#9b7768!important;
    font:500 italic 19px/1.24 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:.01em!important;
    background:linear-gradient(#9b7768,#9b7768) left 9px/38px 1px no-repeat!important;
    pointer-events:none!important;
  }
  .std-hero-frame{
    z-index:2!important;
    height:100%!important;
    min-height:0!important;
    margin:0!important;
    border:0!important;
    border-radius:0!important;
    background:transparent!important;
    box-shadow:none!important;
    display:flex!important;
    overflow:visible!important;
  }
  .std-hero-frame:after{
    display:none!important;
  }
  .std-copy-inner{
    width:min(100%,570px)!important;
  }
  .std-hero-kicker{
    margin:0 0 28px!important;
    color:#9b7768!important;
    font-size:12px!important;
    letter-spacing:.43em!important;
    text-align:left!important;
  }
  .std-logo{
    max-width:100%!important;
    margin:0!important;
    color:#211d1a!important;
    font-size:clamp(64px,5.35vw,88px)!important;
    line-height:.84!important;
    letter-spacing:.055em!important;
    text-indent:0!important;
    text-align:left!important;
  }
  .std-logo-sub{
    width:min(100%,540px)!important;
    margin:22px 0 38px!important;
    color:#4f443f!important;
    font-size:12px!important;
    letter-spacing:.43em!important;
    text-indent:0!important;
    text-align:center!important;
  }
  .std-tagline{
    max-width:540px!important;
    margin:0 0 34px!important;
    color:#2d2724!important;
    font-size:23px!important;
    line-height:1.35!important;
    text-align:left!important;
  }
  .std-meta{
    width:min(100%,540px)!important;
    display:grid!important;
    grid-template-columns:1fr 1px 1.13fr!important;
    gap:20px!important;
    margin:0 0 30px!important;
  }
  .std-meta-icon{
    width:56px!important;
    height:56px!important;
    flex-basis:56px!important;
    background:rgba(255,255,255,.20)!important;
    border-color:rgba(103,78,65,.15)!important;
  }
  .std-meta-icon svg{
    width:24px!important;
    height:24px!important;
  }
  .std-meta-text{
    font-size:15px!important;
    line-height:1.38!important;
  }
  .std-meta-divider{
    height:58px!important;
  }
  .std-btn{
    height:62px!important;
    border-radius:9px!important;
    font-size:16px!important;
  }
  .std-btn-primary{
    background:#a58270!important;
    border-color:#a58270!important;
  }
  .std-btn-primary:hover{
    background:#967361!important;
  }
  .std-scroll-hint{
    display:none!important;
  }
  .std-hero-photo{
    position:relative!important;
    z-index:3!important;
    min-width:0!important;
    height:auto!important;
    overflow:hidden!important;
    border:1px solid rgba(109,82,68,.16)!important;
    border-radius:28px!important;
    background:#e7ddd4!important;
    cursor:pointer!important;
  }
  .std-hero-photo:before{
    content:""!important;
    position:absolute!important;
    inset:0!important;
    z-index:2!important;
    pointer-events:none!important;
    border-radius:inherit!important;
  }
  .std-hero-photo video,
  .std-hero-photo img{
    position:absolute!important;
    inset:0!important;
    width:100%!important;
    height:100%!important;
    object-fit:cover!important;
    object-position:center center!important;
    border-radius:inherit!important;
    display:block!important;
  }
  .std-hero-photo video{
    pointer-events:auto!important;
    cursor:pointer!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  .std-header{
    padding:0 28px!important;
  }
  .std-header-brand-main{
    font-size:27px!important;
  }
  .std-header-right{
    gap:10px!important;
  }
  .std-header-book{
    width:132px!important;
    min-width:132px!important;
  }
  .std-hero{
    grid-template-columns:48% 52%!important;
  }
  .std-hero-copy:after{
    left:42px!important;
  }
  .std-copy-inner{
    width:min(100%,500px)!important;
    margin-top:clamp(58px,8vh,86px)!important;
  }
  .std-logo{
    font-size:clamp(52px,5.1vw,66px)!important;
  }
  .std-logo-sub{
    margin-bottom:27px!important;
  }
  .std-tagline{
    font-size:20px!important;
    margin-bottom:26px!important;
  }
  .std-meta{
    gap:13px!important;
    margin-bottom:24px!important;
  }
  .std-meta-icon{
    width:50px!important;
    height:50px!important;
    flex-basis:50px!important;
  }
  .std-meta-text{
    font-size:13px!important;
  }
  .std-btn{
    height:56px!important;
    font-size:14px!important;
  }
  .std-hero-photo{
    border-radius:22px!important;
  }
}
@media(min-width:768px) and (max-height:820px){
  .std-copy-inner{
    margin-top:48px!important;
  }
  .std-hero-kicker{
    margin-bottom:18px!important;
  }
  .std-logo-sub{
    margin-top:15px!important;
    margin-bottom:20px!important;
  }
  .std-tagline{
    margin-bottom:20px!important;
    font-size:19px!important;
  }
  .std-meta{
    margin-bottom:18px!important;
  }
  .std-meta-icon{
    width:48px!important;
    height:48px!important;
    flex-basis:48px!important;
  }
  .std-btn{
    height:54px!important;
  }
  .std-hero-copy:after{
    bottom:24px!important;
    font-size:17px!important;
  }
  .std-hero-photo{
    margin-top:24px!important;
    margin-bottom:24px!important;
  }
}
@media(min-width:768px){
  html{
    scrollbar-width:none!important;
  }
  html::-webkit-scrollbar,body::-webkit-scrollbar{
    width:0!important;
    height:0!important;
    display:none!important;
  }
  .std-header{
    padding-left:36px!important;
    padding-right:36px!important;
  }
  .std-header-right{
    margin-left:auto!important;
    transform:translateX(0)!important;
  }
  .std-hero{
    background:
      radial-gradient(330px 470px at -4% 24%,rgba(88,61,49,.115) 0%,rgba(125,92,74,.065) 18%,transparent 66%),
      radial-gradient(420px 560px at 104% 82%,rgba(93,65,52,.115) 0%,rgba(137,101,80,.06) 19%,transparent 66%),
      radial-gradient(520px 320px at 69% 2%,rgba(170,129,104,.085),transparent 72%),
      radial-gradient(650px 500px at 25% 50%,rgba(255,255,255,.55),transparent 70%),
      linear-gradient(118deg,#f9f5ef 0%,#f6efe9 53%,#f1e7df 100%)!important;
  }
  .std-hero:before{
    left:30%!important;
    top:-620px!important;
    border-color:rgba(146,106,85,.20)!important;
    box-shadow:0 0 90px rgba(150,112,91,.035)!important;
  }
  .std-hero:after{
    right:-395px!important;
    bottom:-525px!important;
    border-color:rgba(146,106,85,.16)!important;
    box-shadow:0 0 100px rgba(150,112,91,.04)!important;
  }
  .std-hero-copy:before{
    left:-355px!important;
    top:88px!important;
    border-color:rgba(146,106,85,.12)!important;
    box-shadow:0 0 80px rgba(108,77,61,.035)!important;
  }
  .std-copy-inner{
    width:100%!important;
  }
  .std-hero-kicker,
  .std-logo,
  .std-logo-sub,
  .std-tagline{
    text-align:center!important;
  }
  .std-logo-sub,
  .std-tagline,
  .std-meta,
  .std-actions{
    margin-left:auto!important;
    margin-right:auto!important;
  }
  .std-meta-item{
    text-align:left!important;
  }
  .std-actions{
    justify-content:center!important;
  }
  .std-hero-photo{
    margin:36px 36px 36px 0!important;
    border-color:rgba(112,83,68,.20)!important;
    box-shadow:
      0 34px 82px rgba(71,48,38,.18),
      -18px 10px 42px rgba(91,64,51,.075),
      18px 10px 42px rgba(91,64,51,.07),
      0 0 0 7px rgba(255,255,255,.16),
      inset 0 0 0 1px rgba(255,255,255,.24)!important;
  }
  .std-hero-photo:before{
    box-shadow:
      inset 0 0 0 1px rgba(255,255,255,.18),
      inset 0 -34px 70px rgba(55,39,31,.035)!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  .std-header{
    padding-left:26px!important;
    padding-right:26px!important;
  }
  .std-hero-photo{
    margin:26px 26px 26px 0!important;
  }
}
@media(min-width:768px){
  .std-hero-copy{
    padding-left:0!important;
    padding-right:0!important;
  }
  .std-hero-frame{
    width:100%!important;
    max-width:none!important;
    justify-content:center!important;
  }
  .std-copy-inner{
    width:min(calc(100% - 72px),570px)!important;
    margin-left:auto!important;
    margin-right:auto!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  .std-hero-copy{
    padding-left:0!important;
    padding-right:0!important;
  }
  .std-copy-inner{
    width:min(calc(100% - 52px),500px)!important;
  }
}
@media(min-width:768px){
  .std-hero-copy{
    position:static!important;
  }
  .std-hero-frame{
    position:static!important;
  }
  .std-copy-inner{
    position:absolute!important;
    z-index:4!important;
    top:0!important;
    width:46.5%!important;
    max-width:none!important;
    height:100%!important;
    margin:0!important;
    padding:clamp(72px,10.5vh,120px) 36px 118px!important;
    box-sizing:border-box!important;
    display:flex!important;
    flex-direction:column!important;
    justify-content:flex-start!important;
  }
  .std-hero-kicker,.std-logo,.std-logo-sub,.std-tagline{
    width:100%!important;
  }
  .std-logo{
    margin-left:auto!important;
    margin-right:auto!important;
    white-space:nowrap!important;
  }
  .std-logo-sub,.std-tagline,.std-meta,.std-actions{
    margin-left:auto!important;
    margin-right:auto!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  .std-copy-inner{
    width:48%!important;
    padding:clamp(58px,8vh,86px) 26px 100px!important;
  }
}
@media(min-width:768px) and (max-height:820px){
  .std-copy-inner{
    padding-top:48px!important;
    padding-bottom:82px!important;
  }
}
@media(min-width:768px){
  .std-hero{
    --hero-video-start:46.5%;
  }
  .std-copy-inner{
    left:0!important;
    width:var(--hero-video-start)!important;
    padding-left:36px!important;
    padding-right:36px!important;
    transform:none!important;
    align-items:center!important;
    text-align:center!important;
  }
  .std-copy-inner > *{
    margin-left:auto!important;
    margin-right:auto!important;
  }
  .std-hero-kicker,.std-logo,.std-logo-sub,.std-tagline{
    text-align:center!important;
  }
  .std-meta{
    justify-content:center!important;
    justify-items:center!important;
  }
  .std-meta-item{
    justify-content:center!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  .std-hero{
    --hero-video-start:48%;
  }
  .std-copy-inner{
    width:var(--hero-video-start)!important;
    padding-left:26px!important;
    padding-right:26px!important;
    transform:none!important;
  }
}
@media(min-width:768px){
  .std-actions{
    display:grid!important;
    grid-template-columns:1fr!important;
    width:min(100%,540px)!important;
    gap:11px!important;
  }
  .std-actions .std-btn{
    width:100%!important;
    min-width:0!important;
    height:62px!important;
    padding:0 28px!important;
    font-size:16px!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  .std-actions{
    width:min(100%,500px)!important;
  }
  .std-actions .std-btn{
    width:100%!important;
    height:58px!important;
    padding:0 26px!important;
    font-size:15px!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop .std-actions{
    display:flex!important;
    flex-direction:column!important;
    align-items:stretch!important;
    justify-content:flex-start!important;
    width:540px!important;
    max-width:calc(100% - 72px)!important;
    gap:12px!important;
  }
  #salonDesktopTop .std-actions > #stdBookBtn,
  #salonDesktopTop .std-actions > a.std-btn{
    display:flex!important;
    flex:0 0 auto!important;
    width:100%!important;
    max-width:none!important;
    min-width:0!important;
    box-sizing:border-box!important;
    margin:0!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  #salonDesktopTop .std-actions{
    width:500px!important;
    max-width:calc(100% - 52px)!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop .std-copy-inner{
    top:calc(50% + 36px - 1.5cm)!important;
    bottom:auto!important;
    height:auto!important;
    padding-top:0!important;
    padding-bottom:0!important;
    transform:translateY(-50%)!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop .std-hero-kicker{
    box-sizing:border-box!important;
  }
  #salonDesktopTop .std-meta-text{
    font-size:17.1735px!important;
  }
  #salonDesktopTop .std-actions > #stdBookBtn,
  #salonDesktopTop .std-actions > a.std-btn{
    height:70.9838px!important;
    font-size:18.3184px!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  #salonDesktopTop .std-hero-kicker{
    width:min(100%,500px)!important;
  }
  #salonDesktopTop .std-meta-text{
    font-size:14.8837px!important;
  }
  #salonDesktopTop .std-actions > #stdBookBtn,
  #salonDesktopTop .std-actions > a.std-btn{
    height:66.4042px!important;
    font-size:17.1735px!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop .std-logo-sub{
    font-size:15.5364px!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  #salonDesktopTop .std-logo-sub{
    font-size:18.1258px!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop .std-logo{
    font-size:clamp(59.52px,4.9755vw,81.84px)!important;
  }
  #salonDesktopTop .std-hero-kicker{
    width:max-content!important;
    max-width:100%!important;
    align-self:center!important;
    margin-left:auto!important;
    margin-right:auto!important;
    text-align:center!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  #salonDesktopTop .std-logo{
    font-size:clamp(48.36px,4.743vw,61.38px)!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop.std-hero:before{
    box-shadow:none!important;
  }
  #salonDesktopTop.std-hero:after{
    box-shadow:none!important;
  }
  #salonDesktopTop .std-hero-copy:before{
    box-shadow:none!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop .std-hero-copy,
  #salonDesktopTop .std-hero-frame,
  #salonDesktopTop .std-copy-inner{
    background:transparent!important;
  }
  #salonDesktopTop.std-hero:before{
    content:""!important;
    position:absolute!important;
    z-index:1!important;
    width:1040px!important;
    height:1040px!important;
    left:31%!important;
    top:-610px!important;
    border:1px solid rgba(151,112,91,.18)!important;
    border-radius:50%!important;
    background:transparent!important;
    pointer-events:none!important;
  }
  #salonDesktopTop .std-hero-copy:before{
    content:""!important;
    position:absolute!important;
    z-index:0!important;
    width:540px!important;
    height:540px!important;
    left:-365px!important;
    top:70px!important;
    border:1px solid rgba(151,112,91,.10)!important;
    border-radius:50%!important;
    background:transparent!important;
    opacity:1!important;
    filter:none!important;
    transform:none!important;
    pointer-events:none!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop.std-hero{
    background:
      radial-gradient(ellipse 185px 610px at -1% 43%,rgba(83,57,45,.24) 0%,rgba(105,74,58,.15) 25%,rgba(133,96,76,.065) 48%,transparent 76%),
      radial-gradient(ellipse 360px 640px at 101% 70%,rgba(119,84,67,.105) 0%,rgba(151,112,91,.045) 34%,transparent 76%),
      radial-gradient(ellipse 720px 500px at 35% 45%,rgba(255,255,255,.52) 0%,rgba(255,255,255,.22) 48%,transparent 78%),
      linear-gradient(102deg,#f3ebe3 0%,#f4eee7 47%,#eee3da 100%)!important;
  }
}
@media(min-width:768px){
  .std-header{
    position:relative!important;
    overflow:visible!important;
  }
  .std-lang-switch-under-brand{
    position:absolute!important;
    left:calc(36px - 0.1cm)!important;
    top:calc(66px + 0.6cm)!important;
    z-index:20!important;
    display:flex!important;
    align-items:center!important;
    gap:4px!important;
    margin:0!important;
  }
  .std-lang-switch-under-brand button{
    min-width:28px!important;
    height:28px!important;
    padding:0 3px!important;
    font-size:13px!important;
    font-weight:500!important;
    letter-spacing:0!important;
  }
  .std-lang-switch-under-brand .sep{
    font-size:13px!important;
  }
  .std-lang-switch-placeholder{
    display:none!important;
  }
}
@media(min-width:768px) and (max-width:1180px){
  .std-lang-switch-under-brand{
    left:calc(26px - 0.1cm)!important;
    gap:2px!important;
  }
  .std-lang-switch-under-brand button{
    min-width:25px!important;
    font-size:13px!important;
  }
}
@media(min-width:768px){
  .std-lang-switch-under-brand:before{
    content:"🌐"!important;
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    width:20px!important;
    height:28px!important;
    font-size:16px!important;
    line-height:1!important;
    filter:grayscale(1)!important;
  }
}
@media(min-width:768px){
  .std-lang-switch-under-brand{
    box-sizing:border-box!important;
    padding:4px 10px 4px 8px!important;
    height:38px!important;
    border:1px solid rgba(72,68,65,.16)!important;
    border-radius:13px!important;
    backdrop-filter:blur(9px)!important;
    -webkit-backdrop-filter:blur(9px)!important;
  }
  .std-lang-switch-under-brand:before{
    margin-right:6px!important;
  }
}
@media(min-width:768px){
  .std-header{
    background:rgba(239,230,221,.92)!important;
    border-bottom:1px solid rgba(103,82,70,.10)!important;
    box-shadow:0 7px 24px rgba(73,55,46,.035)!important;
  }
  .std-lang-switch-under-brand{
    transform:translateY(.1cm)!important;
  }
  .std-lang-switch-under-brand button{
    position:relative!important;
    border-radius:7px!important;
    transition:background .18s ease,color .18s ease,font-weight .18s ease,transform .18s ease!important;
  }
  .std-lang-switch-under-brand button:hover{
    background:rgba(64,58,54,.08)!important;
    color:#201c1a!important;
    transform:translateY(-1px)!important;
  }
  .std-lang-switch-under-brand button.active{
    color:#171412!important;
  }
  .std-nav a{
    position:relative!important;
    transition:color .18s ease!important;
  }
  .std-nav a:after{
    content:""!important;
    position:absolute!important;
    left:50%!important;
    right:50%!important;
    bottom:-7px!important;
    height:1px!important;
    background:currentColor!important;
    opacity:.65!important;
    transition:left .2s ease,right .2s ease!important;
  }
  .std-nav a:hover:after{
    left:0!important;
    right:0!important;
  }
  #salonDesktopTop .std-tagline{
    font-family:"Cormorant Garamond",Georgia,serif!important;
    font-weight:500!important;
    letter-spacing:.005em!important;
    font-style:italic!important;
  }
}
@media(min-width:768px){
  .std-lang-switch-under-brand button.active{
    background:rgba(61,55,51,.075)!important;
    box-shadow:inset 0 0 0 1px rgba(56,49,45,.045)!important;
    font-weight:650!important;
  }
  .std-lang-switch-under-brand .sep{
    color:rgba(43,38,35,.42)!important;
    font-weight:400!important;
  }
  .std-nav a{
    color:#332d29!important;
  }
  .std-nav a:hover{
    color:#1f1b19!important;
  }
  html,body{
    scroll-snap-type:none!important;
    overscroll-behavior-y:auto!important;
  }
}
@media(min-width:768px){
  .std-lang-switch-under-brand{
    background:rgba(125,125,125,.095)!important;
    border-color:rgba(72,68,65,.125)!important;
    box-shadow:0 6px 18px rgba(55,48,44,.045),inset 0 1px 0 rgba(255,255,255,.46)!important;
  }
  html,body,#salon-desktop-v1{
    scroll-behavior:auto!important;
    scroll-snap-type:none!important;
    overscroll-behavior:auto!important;
  }
  .std-section-reveal,.std-section-reveal.in-view,.std-section-reveal.is-visible{
    opacity:1!important;
    transform:none!important;
    transition:none!important;
  }
  #salon-desktop-v1 section{
    scroll-snap-align:none!important;
    scroll-snap-stop:normal!important;
  }
  #salonDesktopTop.std-hero:after{
    content:""!important;
    position:absolute!important;
    z-index:4!important;
    left:0!important;
    right:0!important;
    bottom:-1px!important;
    width:auto!important;
    height:150px!important;
    border:0!important;
    border-radius:0!important;
    background:linear-gradient(180deg,rgba(243,235,227,0) 0%,rgba(243,235,227,.46) 45%,#f3ebe3 100%)!important;
    pointer-events:none!important;
  }
  #salonDesktopPortfolio .std-portfolio-kicker{
    color:#62564f!important;
  }
  #salonDesktopPortfolio .std-portfolio-title{
    color:#211c19!important;
  }
  #salonDesktopPortfolio .std-portfolio-copy{
    color:#655b55!important;
  }
  #salonDesktopPortfolio .std-work{
    border:1px solid rgba(93,70,59,.10)!important;
  }
  #salonDesktopPortfolio .std-portfolio-more{
    border-color:rgba(80,61,52,.17)!important;
    backdrop-filter:blur(8px)!important;
    -webkit-backdrop-filter:blur(8px)!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop.std-hero:after{
    display:none!important;
  }
  #salonDesktopPortfolio.std-portfolio{
    margin-top:0!important;
    background:
    radial-gradient(ellipse 185px 610px at -1% 38%,rgba(83,57,45,.18) 0%,rgba(105,74,58,.105) 25%,rgba(133,96,76,.05) 48%,transparent 76%),
    radial-gradient(ellipse 360px 640px at 101% 68%,rgba(119,84,67,.09) 0%,rgba(151,112,91,.04) 34%,transparent 76%),
    radial-gradient(ellipse 720px 500px at 35% 34%,rgba(255,255,255,.42) 0%,rgba(255,255,255,.17) 48%,transparent 78%),
    linear-gradient(102deg,#f3ebe3 0%,#f4eee7 47%,#eee3da 100%)!important;
  }
  #salonDesktopPortfolio.std-portfolio:before{
    border-radius:50%!important;
    filter:none!important;
  }
  #salonDesktopPortfolio.std-portfolio:after{
    border-radius:50%!important;
    filter:none!important;
  }
  #salonDesktopPortfolio .std-portfolio-inner{
    padding-top:8px!important;
  }
  #salonDesktopPortfolio .std-portfolio-grid{
    filter:drop-shadow(0 18px 30px rgba(71,52,44,.055))!important;
  }
}
@media(min-width:768px){
  #salonDesktopPortfolio.std-portfolio{
    padding-top:calc(92px - .7cm)!important;
  }
  #salonDesktopPortfolio .std-work{
    box-shadow:0 20px 46px rgba(66,48,40,.105)!important;
  }
  #salonDesktopPortfolio .std-portfolio-more{
    width:min(100%,650px)!important;
    height:72px!important;
    margin:54px auto 48px!important;
    border-radius:14px!important;
    font-size:17.5px!important;
    gap:16px!important;
    background:rgba(255,255,255,.25)!important;
    box-shadow:0 14px 34px rgba(68,49,41,.09)!important;
    transition:transform .22s cubic-bezier(.2,.75,.25,1),box-shadow .22s ease,background .22s ease,border-color .22s ease!important;
  }
  #salonDesktopPortfolio .std-portfolio-more:hover{
    transform:translateY(-3px) scale(1.012)!important;
    background:rgba(255,255,255,.39)!important;
    border-color:rgba(75,55,47,.25)!important;
    box-shadow:0 20px 42px rgba(68,49,41,.14)!important;
  }
  #salonDesktopPortfolio .std-portfolio-more span{
    transition:transform .22s ease!important;
  }
  #salonDesktopPortfolio .std-portfolio-more:hover span{
    transform:translateX(5px)!important;
  }
  .std-gallery-browser{
    display:block!important;
    opacity:0!important;
    visibility:hidden!important;
    pointer-events:none!important;
    transform:translate3d(0,16px,0) scale(.992)!important;
    transition:opacity .34s ease,transform .42s cubic-bezier(.16,1,.3,1),visibility .42s!important;
  }
  .std-gallery-browser.open{
    opacity:1!important;
    visibility:visible!important;
    pointer-events:auto!important;
    transform:none!important;
  }
  .std-gallery-browser-shell{
    opacity:0!important;
    transform:translateY(12px)!important;
    transition:opacity .32s ease .06s,transform .42s cubic-bezier(.16,1,.3,1) .06s!important;
  }
  .std-gallery-browser.open .std-gallery-browser-shell{
    opacity:1!important;
    transform:none!important;
  }
  .std-gallery-browser-title strong{
    font-size:clamp(59.4px,4.4vw,70.4px)!important;
  }
  .std-gallery-browser-title span{
    font-size:11.55px!important;
  }
  .std-gallery-browser-back{
    width:50px!important;
    height:50px!important;
    border:1px solid rgba(64,52,46,.18)!important;
    border-radius:50%!important;
    background:rgba(255,255,255,.34)!important;
    box-shadow:0 8px 22px rgba(70,51,43,.08)!important;
    transition:transform .18s ease,background .18s ease,box-shadow .18s ease!important;
  }
  .std-gallery-browser-back:hover{
    transform:translateX(-2px)!important;
    background:rgba(255,255,255,.58)!important;
    box-shadow:0 11px 26px rgba(70,51,43,.12)!important;
  }
  .std-gallery-browser-tabs{
    gap:11px!important;
  }
  .std-gallery-browser-tab{
    min-width:116px!important;
    height:46px!important;
    padding:0 25px!important;
    border:1px solid rgba(72,57,49,.17)!important;
    background:#e7ddd4!important;
    color:#4f4540!important;
    box-shadow:0 5px 14px rgba(65,48,41,.045)!important;
    transition:transform .18s ease,background .18s ease,box-shadow .18s ease!important;
  }
  .std-gallery-browser-tab:hover{
    transform:translateY(-2px)!important;
    background:#ded0c5!important;
    box-shadow:0 9px 20px rgba(65,48,41,.08)!important;
  }
  .std-gallery-browser-tab.active{
    background:#302825!important;
    border-color:#302825!important;
    color:#fff!important;
    box-shadow:0 8px 18px rgba(48,40,37,.14)!important;
  }
}
@media(min-width:768px){
  #salonDesktopTop.std-hero,
#salonDesktopPortfolio.std-portfolio{
    background:
    radial-gradient(ellipse 185px 610px at -1% 43%,rgba(83,57,45,.24) 0%,rgba(105,74,58,.15) 25%,rgba(133,96,76,.065) 48%,transparent 76%),
    radial-gradient(ellipse 360px 640px at 101% 70%,rgba(119,84,67,.105) 0%,rgba(151,112,91,.045) 34%,transparent 76%),
    radial-gradient(ellipse 720px 500px at 35% 45%,rgba(255,255,255,.52) 0%,rgba(255,255,255,.22) 48%,transparent 78%),
    linear-gradient(102deg,#f3ebe3 0%,#f4eee7 47%,#eee3da 100%)!important;
  }
  #salonDesktopTop.std-hero{
    box-shadow:inset 0 0 90px rgba(83,57,45,.035)!important;
  }
  #salonDesktopPortfolio.std-portfolio{
    border-top:0!important;
    box-shadow:inset 0 26px 52px -50px rgba(69,49,41,.28),inset 0 -32px 62px -58px rgba(69,49,41,.20)!important;
  }
  #salonDesktopPortfolio.std-portfolio:before{
    width:540px!important;
    height:540px!important;
    left:-365px!important;
    top:70px!important;
    bottom:auto!important;
    border:1px solid rgba(151,112,91,.10)!important;
    background:transparent!important;
  }
  #salonDesktopPortfolio.std-portfolio:after{
    width:820px!important;
    height:820px!important;
    right:-410px!important;
    bottom:-540px!important;
    top:auto!important;
    border:1px solid rgba(151,112,91,.10)!important;
    background:transparent!important;
  }
  .std-gallery-browser-title span{
    margin-top:calc(9px + .2cm)!important;
  }
  .std-gallery-browser-tabs{
    overflow:visible!important;
    padding:8px 10px 12px!important;
    margin-top:19px!important;
  }
  .std-gallery-browser-tab{
    overflow:visible!important;
  }
  .std-gallery-browser-tab:hover,
.std-gallery-browser-tab.active{
    transform:translateY(-2px)!important;
  }
  .std-gallery-browser-shell{
    overflow:visible!important;
  }
  .std-gallery-hint{
    top:-45px!important;
    left:0!important;
    padding:8px 12px!important;
    border:1px solid rgba(255,255,255,.15)!important;
    border-radius:9px!important;
    background:rgba(24,20,18,.56)!important;
    backdrop-filter:blur(10px)!important;
    -webkit-backdrop-filter:blur(10px)!important;
    color:rgba(255,255,255,.88)!important;
    font:500 12px/1.2 "Manrope",Arial,sans-serif!important;
    letter-spacing:.01em!important;
  }
  .std-gallery-count{
    left:calc(50% + 132px)!important;
    bottom:-54px!important;
    transform:none!important;
    min-width:76px!important;
    height:42px!important;
    padding:0 13px!important;
    display:flex!important;
    align-items:center!important;
    justify-content:center!important;
    border:1px solid rgba(255,255,255,.25)!important;
    border-radius:999px!important;
    background:rgba(22,18,16,.66)!important;
    backdrop-filter:blur(12px)!important;
    -webkit-backdrop-filter:blur(12px)!important;
    color:#fff!important;
    font:600 11px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.08em!important;
  }
  .std-view-gallery{
    left:calc(50% - 48px)!important;
  }
}
@media(min-width:768px){
  #salon-desktop-v1{
    opacity:0;
    transform:none;
  }
  #salon-desktop-v1.desktop-ready{
    opacity:1;
    transform:none;
  }
}
@media(prefers-reduced-motion:reduce){
  #salon-desktop-v1{
    opacity:1!important;
    transform:none!important;
    transition:none!important;
  }
}
@media(min-width:768px){
  #salon-desktop-v1{
    transition:opacity .45s cubic-bezier(.22,.72,.28,1)!important;
  }
  #salonDesktopServices .dct-service-sticky-kicker{
    display:block!important;
    margin:0 0 12px!important;
    font:600 11px/1 "Manrope",Arial,sans-serif!important;
    text-transform:uppercase!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong{
    letter-spacing:-.03em!important;
  }
  #salonDesktopServices .dct-service-sticky-row{
    display:grid!important;
    grid-template-columns:42px minmax(0,1fr)!important;
    align-items:center!important;
  }
  #salonDesktopServices .dct-service-sticky-icon{
    display:grid!important;
    place-items:center!important;
    border:1px solid rgba(103,78,65,.13)!important;
    border-radius:50%!important;
    color:#715b53!important;
  }
  #salonDesktopServices .dct-service-sticky-icon svg{
    fill:none!important;
    stroke:currentColor!important;
    stroke-width:1.7!important;
    stroke-linecap:round!important;
    stroke-linejoin:round!important;
  }
  #salonDesktopServices .dct-service-sticky-copy{
    min-width:0!important;
    display:block!important;
  }
  #salonDesktopServices .dct-service-sticky-copy b{
    display:block!important;
    overflow:hidden!important;
    color:#302925!important;
    font:600 12px/1.15 "Manrope",Arial,sans-serif!important;
    text-overflow:ellipsis!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .dct-service-sticky-copy small{
    display:block!important;
    overflow:hidden!important;
    font:500 10px/1.25 "Manrope",Arial,sans-serif!important;
    text-overflow:ellipsis!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .dct-service-sticky-book{
    width:100%!important;
    height:56px!important;
    padding:0 22px!important;
    border-radius:999px!important;
    display:flex!important;
    align-items:center!important;
    justify-content:space-between!important;
    font:600 12px/1 "Manrope",Arial,sans-serif!important;
    transition:background .18s ease,box-shadow .18s ease!important;
  }
  #salonDesktopServices .dct-service-sticky-book:hover{
    background:#8f6d5c!important;
    box-shadow:0 12px 28px rgba(104,78,65,.24)!important;
  }
  #salonDesktopServices .dct-services-right-head{
    grid-column:2!important;
    width:min(100%,780px)!important;
    margin:0 0 22px!important;
    padding:0!important;
  }
  #salonDesktopServices .dct-services-right-head .mct-section-kicker{
    margin:0!important;
    color:#b8ada7!important;
    font:600 12px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.24em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopServices .dct-services-right-head h2{
    margin:12px 0 0!important;
    color:#f7f3f0!important;
    font:500 clamp(50px,4.2vw,64px)/.94 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.035em!important;
  }
  #salonDesktopServices .dct-services-right-head>span{
    display:block!important;
    max-width:620px!important;
    margin-top:20px!important;
    color:#b9ada7!important;
    font:400 14px/1.7 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopServices .mct-tab:hover,
  #salonDesktopServices .mct-tab-all:hover{
    transform:none!important;
    background:rgba(255,255,255,.085)!important;
    border-color:rgba(255,255,255,.25)!important;
  }
  #stdGalleryBrowser.std-gallery-browser{
    overflow-y:scroll!important;
    scrollbar-gutter:stable both-edges!important;
  }
  #stdGalleryBrowser .std-gallery-browser-shell{
    width:100%!important;
    min-width:0!important;
    margin-left:auto!important;
    margin-right:auto!important;
  }
  #stdGalleryBrowser .std-gallery-browser-top,
  #stdGalleryBrowser .std-gallery-browser-tabs,
  #stdGalleryBrowser .std-gallery-browser-grid{
    box-sizing:border-box!important;
  }
  #salon-desktop-v1 .std-section-reveal{
    opacity:1!important;
    transform:none!important;
    transition:none!important;
  }
}
@media(min-width:768px) and (max-width:930px){
  #salonDesktopServices .mct-price-head{
    position:relative!important;
    top:auto!important;
    grid-column:1!important;
    grid-row:auto!important;
  }
  #salonDesktopServices .dct-services-right-head{
    grid-column:1!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    width:100%!important;
  }
  #salonDesktopServices .mct-tabs{
    padding-right:0!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    max-width:none!important;
  }
}
@media(min-width:768px){
  #salonDesktopPortfolio,
  #salonDesktopAbout,
  #salonDesktopReviews,
  #salonDesktopContacts{
    content-visibility:auto;
    contain-intrinsic-size:auto 900px;
  }
  #salonDesktopServices .dct-service-sticky-card{
    isolation:isolate!important;
    color:#211d1a!important;
  }
  #salonDesktopServices .dct-service-sticky-card:before,
  #salonDesktopServices .dct-service-sticky-card:after{
    position:absolute!important;
    z-index:-1!important;
    border:1px solid rgba(139,101,81,.14)!important;
    border-radius:50%!important;
    content:""!important;
    pointer-events:none!important;
  }
  #salonDesktopServices .dct-service-sticky-card:before{
    left:-250px!important;
    top:-115px!important;
  }
  #salonDesktopServices .dct-service-sticky-card:after{
    width:300px!important;
    height:300px!important;
    right:-218px!important;
    bottom:-128px!important;
  }
  #salonDesktopServices .dct-service-sticky-kicker{
    margin-bottom:16px!important;
    color:#8f7167!important;
    font-size:12px!important;
    letter-spacing:.25em!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong{
    font-size:46px!important;
    line-height:.94!important;
  }
  #salonDesktopServices .dct-service-sticky-book,
  #salonDesktopServices .dct-service-sticky-work{
    padding:0 24px!important;
    display:flex!important;
    align-items:center!important;
    justify-content:space-between!important;
    text-decoration:none!important;
    font:600 13px/1 "Manrope",Arial,sans-serif!important;
    transition:transform .18s ease,background .18s ease,border-color .18s ease,box-shadow .18s ease!important;
  }
  #salonDesktopServices .dct-service-sticky-book:hover,
  #salonDesktopServices .dct-service-sticky-work:hover{
    transform:translateY(-2px)!important;
    box-shadow:0 14px 28px rgba(63,47,40,.14)!important;
  }
  #salonDesktopServices .dct-services-right-head{
    display:none!important;
  }
  #salonDesktopServices .mct-tabs{
    overflow:visible!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{
    border:1px solid rgba(255,255,255,.19)!important;
    background:rgba(255,255,255,.045)!important;
    color:#d5cbc5!important;
    box-shadow:none!important;
    transform:none!important;
    transition:transform .18s ease,background .18s ease,border-color .18s ease,color .18s ease,box-shadow .18s ease!important;
  }
  #salonDesktopServices .mct-tab:not(.is-active):hover,
  #salonDesktopServices .mct-tab-all:not(.is-active):hover{
    transform:translateY(-3px)!important;
    border-color:rgba(255,255,255,.36)!important;
    background:rgba(255,255,255,.10)!important;
    color:#fff!important;
    box-shadow:0 10px 22px rgba(0,0,0,.14)!important;
  }
  #salonDesktopAbout>.br-about-team-shell{
    display:grid!important;
  }
  #salonDesktopAbout .mct-about-head{
    display:block!important;
  }
  #salonDesktopAbout .mct-about-head h2,
  #salonDesktopTeam .std-team-title{
    margin:14px 0 0!important;
    font:500 clamp(50px,4.1vw,64px)/.94 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.035em!important;
  }
  #salonDesktopAbout .mct-about-lead{
    font-size:clamp(29px,2.4vw,37px)!important;
  }
  #salonDesktopTeam.br-team-panel{
    border-radius:28px!important;
  }
  #salonDesktopTeam .std-master{
    text-align:center!important;
  }
  #salonDesktopTeam .std-master-avatar{
    aspect-ratio:1!important;
    margin:0 auto!important;
    border-radius:50%!important;
    transition:transform .2s ease,box-shadow .2s ease!important;
  }
  #salonDesktopTeam .std-master:hover .std-master-avatar{
    transform:translateY(-4px)!important;
    box-shadow:0 14px 28px rgba(0,0,0,.16)!important;
  }
  #salonDesktopTeam .std-master-cats{
    display:none!important;
  }
  #salonDesktopContacts .std-contact-status{
    min-width:208px!important;
    min-height:48px!important;
    justify-content:center!important;
    gap:9px!important;
    padding:10px 18px!important;
    font-size:13px!important;
  }
  #salonDesktopContacts .std-contact-status svg{
    width:19px!important;
    height:19px!important;
  }
  #salonDesktopContacts .std-contact-body{
    gap:46px!important;
    margin-top:42px!important;
  }
  #salonDesktopContacts .std-contact-list{
    gap:14px!important;
  }
  #salonDesktopContacts .std-contact-map{
    min-height:382px!important;
  }
  #salonDesktopContacts .std-contact-actions{
    gap:14px!important;
    margin-top:16px!important;
  }
  #salonDesktopContacts .std-contact-action-btn{
    height:66px!important;
    border-radius:13px!important;
    font-size:15px!important;
    transition:transform .18s ease,filter .18s ease,background .18s ease!important;
  }
  #salonDesktopContacts .std-contact-action-btn:hover{
    filter:brightness(1.05)!important;
  }
}
@media(min-width:768px) and (max-width:1199px){
  #salonDesktopServices .dct-service-sticky-card{
    min-height:470px!important;
  }
  #salonDesktopTeam.br-team-panel{
    padding:36px 28px!important;
  }
}
@media(min-width:768px){
  #salonDesktopServices.mct-prices{
    padding-top:54px!important;
  }
  #salonDesktopServices .mct-price-head{
    justify-content:stretch!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    padding-top:28px!important;
  }
  #salonDesktopServices .dct-services-main-title{
    letter-spacing:-.03em!important;
  }
  #salonDesktopServices .mct-tabs{
    overscroll-behavior-x:contain!important;
    scroll-snap-type:x proximity!important;
  }
  #salonDesktopServices .mct-tabs::-webkit-scrollbar{
    display:none!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tabs-track{
    display:flex!important;
    width:max-content!important;
    min-width:max-content!important;
    flex-wrap:nowrap!important;
    gap:10px!important;
    padding:0!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab,
  #salonDesktopServices .mct-tabs-ribbon-wrap.is-many .mct-tab-all{
    flex:0 0 auto!important;
    width:auto!important;
    min-width:max-content!important;
    min-height:49px!important;
    padding:0 22px!important;
    border-radius:999px!important;
    scroll-snap-align:start!important;
  }
  #salonDesktopServices.mct-prices{
    overflow-x:hidden!important;
  }
  #salonDesktopServices.mct-prices>.mct-shell{
    margin-left:1cm!important;
    margin-right:1cm!important;
  }
  #salonDesktopServices .mct-price-head{
    padding-right:0!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    border-color:rgba(153,112,91,.24)!important;
  }
  #salonDesktopServices .dct-services-main-title{
    align-self:start!important;
  }
  #salonDesktopServices .dct-service-sticky-benefits{
    display:grid!important;
    grid-template-columns:1fr 1fr!important;
    gap:12px!important;
    margin-top:12px!important;
  }
  #salonDesktopServices .dct-service-sticky-benefits>span{
    min-height:68px!important;
    padding:13px 14px!important;
    border:1px solid rgba(112,82,68,.10)!important;
    border-radius:16px!important;
    background:rgba(255,255,255,.34)!important;
  }
  #salonDesktopServices .dct-service-sticky-benefits b,
  #salonDesktopServices .dct-service-sticky-benefits small{
    display:block!important;
  }
  #salonDesktopServices .dct-service-sticky-benefits b{
    color:#302925!important;
    font:650 11px/1.25 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopServices .dct-service-sticky-benefits small{
    margin-top:5px!important;
    color:#8b7c74!important;
    font:500 9px/1.45 "Manrope",Arial,sans-serif!important;
  }
  @keyframes brServiceBookGlow{
    0%,100%{
      background-position:0 50%;
      box-shadow:0 12px 28px rgba(147,102,80,.20);
    }
    50%{
      background-position:100% 50%;
      box-shadow:0 16px 36px rgba(147,102,80,.34);
    }
  }
  @keyframes brServiceBookShine{
    0%,62%{
      left:-35%;
      opacity:0;
    }
    68%{
      opacity:1;
    }
    82%{
      left:120%;
      opacity:0;
    }
    100%{
      left:120%;
      opacity:0;
    }
  }
  #salonDesktopServices .dct-service-groups,
  #salonDesktopServices .mct-more-services{
    grid-column:2!important;
  }
  #salonDesktopAbout{
    position:relative!important;
  }
  #salonDesktopAbout>.br-about-team-headings{
    width:min(calc(100% - 72px),1460px)!important;
    margin:0 auto 24px!important;
    display:grid!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:72px!important;
    position:relative!important;
  }
  #salonDesktopAbout>.br-about-team-headings:after{
    position:absolute!important;
    left:50%!important;
    top:4px!important;
    width:1px!important;
    height:76px!important;
    content:""!important;
    background:linear-gradient(to bottom,transparent,rgba(116,90,78,.26),transparent)!important;
  }
  #salonDesktopAbout>.br-about-team-headings h2:last-child{
    color:#2e2724!important;
  }
  #salonDesktopAbout>.br-about-team-shell{
    width:min(calc(100% - 72px),1460px)!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:72px!important;
  }
  #salonDesktopAbout>.br-about-team-shell:after{
    height:96%!important;
  }
  #salonDesktopAbout .br-about-column{
    display:flex!important;
    flex-direction:column!important;
    border-radius:28px!important;
  }
  #salonDesktopAbout .mct-about-head,
  #salonDesktopTeam .std-team-title{
    display:none!important;
  }
  #salonDesktopAbout .mct-about-card{
    flex:1 1 auto!important;
    margin-top:0!important;
  }
  #salonDesktopTeam .std-team-title{
    color:#f7f3f0!important;
  }
  #salonDesktopTeam .std-team-track{
    margin-top:28px!important;
  }
  #salonDesktopTeam .std-master{
    box-sizing:border-box!important;
  }
  #salonDesktopServices .dct-services-main-title{
    align-items:flex-start!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    margin-left:-.7cm!important;
    margin-top:32px!important;
  }
  #salonDesktopServices .mct-tabs{
    padding-left:.7cm!important;
    padding-right:1cm!important;
  }
  #salonDesktopServices .mct-tab.is-active,
  #salonDesktopServices .mct-tab-all.is-active{
    border-color:#d8b7aa!important;
    background:#d8b7aa!important;
    color:#2f2926!important;
    box-shadow:0 13px 30px rgba(216,183,170,.24)!important;
  }
  #salonDesktopServices .dct-service-category,
  #salonDesktopServices .dct-service-category-list{
    width:100%!important;
    min-width:0!important;
  }
  #salonDesktopServices .dct-service-card,
  #salonDesktopServices .dct-service-card-body{
    box-sizing:border-box!important;
    max-width:100%!important;
    min-width:0!important;
  }
  #salonDesktopServices .dct-service-sticky-book:after{
    z-index:0!important;
    opacity:0!important;
  }
  @keyframes brHeroLikePulse{
    0%,100%{
      filter:brightness(1);
      transform:translateY(0);
      box-shadow:0 12px 28px rgba(147,102,80,.22);
    }
    50%{
      filter:brightness(1.09);
      transform:translateY(-1px);
      box-shadow:0 17px 38px rgba(185,137,113,.38);
    }
  }
  @keyframes brHeroLikeShine{
    0%,48%{
      left:-48%;
      opacity:0;
    }
    54%{
      opacity:.9;
    }
    72%{
      left:118%;
      opacity:0;
    }
    100%{
      left:118%;
      opacity:0;
    }
  }
  #salonDesktopAbout>.br-about-team-headings,
  #salonDesktopAbout>.br-about-team-shell{
    gap:78px!important;
  }
  #salonDesktopAbout .mct-about-portrait,
  #salonDesktopAbout .mct-about-portrait img{
    width:100%!important;
    height:100%!important;
  }
  #stdMasterOverlay .std-master-page-top{
    grid-template-columns:58px 1fr 58px!important;
  }
  #stdMasterOverlay .std-master-page-top span{
    font-size:17px!important;
    letter-spacing:.3em!important;
  }
  #stdMasterOverlay .std-master-page-close{
    width:54px!important;
    height:54px!important;
    font-size:31px!important;
  }
  #stdMasterOverlay .std-master-profile{
    margin-top:34px!important;
  }
  #stdMasterOverlay .std-master-profile .std-master-avatar svg{
    width:86px!important;
    height:86px!important;
  }
  #stdMasterOverlay .std-master-profile h2{
    margin-top:22px!important;
  }
  #stdMasterOverlay .std-master-profile-rating{
    font-size:15px!important;
  }
  #stdMasterOverlay .std-master-page-grid{
    gap:42px!important;
    margin-top:46px!important;
  }
  #stdMasterOverlay .std-master-page-block{
    padding:34px!important;
    border-radius:24px!important;
  }
  #stdMasterOverlay .std-master-page-block h3{
    margin-bottom:21px!important;
  }
  #stdMasterOverlay .std-master-page-service{
    padding:18px 0!important;
  }
  #stdMasterOverlay .std-master-page-service span,
  #stdMasterOverlay .std-master-page-empty{
    font-size:14px!important;
  }
  #stdMasterOverlay .std-master-page-book{
    min-width:300px!important;
    height:66px!important;
    font-size:15px!important;
  }
  #salonDesktopContacts.std-contact{
    padding-top:54px!important;
  }
  #salonDesktopContacts a.std-contact-card:hover .std-contact-card-icon{
    transform:scale(1.08)!important;
    color:#e0bfae!important;
  }
  #salonDesktopContacts .std-contact-card-icon{
    transition:transform .22s ease,color .22s ease!important;
  }
  #salonDesktopContacts .std-contact-card-sub{
    margin-top:8px!important;
    line-height:1.28!important;
  }
  #salonDesktopContacts .br-tanem-mark{
    font-size:25px!important;
  }
  #salonDesktopContacts .br-tanem-copy{
    line-height:1.3!important;
  }
  #salonDesktopContacts .std-contact-bottom{
    border-top:1px solid rgba(23,21,19,.18)!important;
    display:flex!important;
    align-items:center!important;
    justify-content:center!important;
  }
  #salonDesktopContacts .std-contact-brand{
    max-width:none!important;
    border-radius:0!important;
  }
}
@media(min-width:768px) and (max-width:1199px){
  #salonDesktopServices.mct-prices>.mct-shell{
    max-width:1360px!important;
    margin-left:0.8cm!important;
    margin-right:auto!important;
  }
  #salonDesktopServices .mct-price-head{
    padding-right:28px!important;
  }
  #salonDesktopAbout>.br-about-team-shell{
    width:min(calc(100% - 56px),1360px)!important;
    gap:30px!important;
  }
  #salonDesktopAbout .br-about-column,
  #salonDesktopTeam.br-team-panel{
    padding:30px!important;
  }
  #salonDesktopTeam .std-master{
    min-height:248px!important;
  }
}
@media(min-width:768px){
  #salonDesktopServices.mct-prices>.mct-shell{
    display:grid!important;
    align-items:start!important;
  }
  #salonDesktopServices .mct-price-head{
    display:block!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    max-width:none!important;
    height:auto!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong{
    height:48px!important;
    margin:0!important;
    padding:0!important;
    font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .dct-services-main-title{
    height:48px!important;
    min-height:0!important;
    margin:0!important;
    padding:0!important;
    font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopServices .mct-tabs{
    box-sizing:border-box!important;
  }
  #salonDesktopServices .dct-service-groups{
    align-self:start!important;
  }
  #salonDesktopServices .dct-service-category,#salonDesktopServices .dct-service-category-list{
    box-sizing:border-box!important;
    width:100%!important;
    min-width:0!important;
    max-width:100%!important;
  }
  #salonDesktopServices .mct-more-services{
    align-self:start!important;
    margin-top:24px!important;
  }
  #salonDesktopServices .dct-service-sticky-lead{
    margin-top:15px!important;
  }
  #salonDesktopServices .dct-service-sticky-info{
    margin-top:18px!important;
  }
  #salonDesktopServices .dct-service-sticky-book{
    position:relative!important;
    isolation:isolate!important;
    overflow:hidden!important;
  }
  #salonDesktopServices .dct-service-sticky-book>span{
    position:relative!important;
    z-index:1!important;
  }
  @keyframes brV49BookPulse{
    0%,100%{
      filter:brightness(1);
    }
    50%{
      filter:brightness(1.13);
    }
  }
  @keyframes brV49BookShine{
    0%,48%{
      left:-50%;
      opacity:0;
    }
    55%{
      opacity:1;
    }
    74%{
      left:125%;
      opacity:0;
    }
    100%{
      left:125%;
      opacity:0;
    }
  }
  #salonDesktopAbout>.br-about-team-headings,#salonDesktopAbout>.br-about-team-shell{
    box-sizing:border-box!important;
    width:min(calc(100% - 64px),1500px)!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:76px!important;
  }
  #salonDesktopAbout .br-about-column,#salonDesktopTeam.br-team-panel{
    box-sizing:border-box!important;
    min-height:0!important;
    height:auto!important;
    padding:24px!important;
  }
  #salonDesktopAbout .mct-about-card{
    box-sizing:border-box!important;
    flex-direction:column!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap{
    width:100%!important;
    flex:0 0 420px!important;
    margin:0!important;
  }
  #salonDesktopAbout .mct-about-portrait,#salonDesktopAbout .mct-about-portrait img{
    display:block!important;
    width:100%!important;
    height:100%!important;
    object-fit:cover!important;
  }
  #stdMasterOverlay .std-master-page-panel{
    box-sizing:border-box!important;
    max-width:none!important;
  }
  #stdMasterOverlay .std-master-page-block h3{
    font-size:39px!important;
  }
  #salonDesktopContacts.std-contact{
    box-sizing:border-box!important;
    min-height:0!important;
    padding:58px 64px 0!important;
    overflow:visible!important;
  }
  #salonDesktopContacts .std-contact-inner{
    width:min(100%,1460px)!important;
    margin:0 auto!important;
    padding-bottom:50px!important;
  }
  #salonDesktopContacts .std-contact-card{
    padding:16px 25px!important;
    transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease,background .22s ease!important;
  }
  #salonDesktopContacts .br-tanem-mark{
    overflow:visible!important;
  }
  #salonDesktopContacts .br-tanem-copy{
    display:block!important;
    font-size:14px!important;
  }
}
@media(min-width:768px) and (max-width:1199px){
  #salonDesktopServices .dct-service-sticky-card{
    padding:0 18px 22px!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong,#salonDesktopServices .dct-services-main-title{
    font-size:40px!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    width:calc(100% + .5cm)!important;
    margin-left:-.5cm!important;
  }
  #salonDesktopServices .mct-tabs{
    padding-left:.5cm!important;
  }
  #salonDesktopAbout>.br-about-team-headings,#salonDesktopAbout>.br-about-team-shell{
    gap:34px!important;
  }
}
@media(prefers-reduced-motion:reduce){
  #salonDesktopServices .dct-service-sticky-book,#salonDesktopServices .dct-service-sticky-book:after{
    animation:none!important;
  }
}
@media(min-width:768px){
  #salonDesktopServices .dct-service-sticky-card{
    transform:none!important;
    box-sizing:border-box!important;
  }
  #salonDesktopServices .dct-service-groups{
    margin-top:0!important;
  }
  #salonDesktopServices .mct-tab[aria-selected="true"]{
    background:#d7b5a4!important;
    border-color:#ead1c4!important;
    color:#241d19!important;
    box-shadow:0 0 0 2px rgba(234,209,196,.16),0 14px 30px rgba(0,0,0,.16)!important;
    transform:translateY(-1px)!important;
  }
  #salonDesktopServices .dct-service-sticky-book{
    animation:brHeroLikePulse 3.4s ease-in-out infinite!important;
  }
  #salonDesktopServices .dct-service-sticky-book:after{
    content:""!important;
    display:block!important;
    position:absolute!important;
    pointer-events:none!important;
    top:-45%!important;
    left:-45%!important;
    width:32%!important;
    height:190%!important;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.72),transparent)!important;
    transform:rotate(18deg)!important;
    animation:brHeroLikeShine 3.4s ease-in-out infinite!important;
  }
  #salonDesktopAbout .br-about-column{
    min-height:760px!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap{
    height:100%!important;
    min-height:390px!important;
  }
  #salonDesktopAbout .mct-about-portrait{
    height:100%!important;
  }
  #salonDesktopAbout .mct-about-portrait img{
    width:100%!important;
    height:100%!important;
  }
  #salonDesktopTeam.br-team-panel{
    min-height:760px!important;
  }
  #salonDesktopTeam .std-team-track{
    align-content:space-evenly!important;
  }
  #stdMasterOverlay .std-master-page-panel{
    width:min(calc(100% - 64px),1380px)!important;
    padding:30px 56px 140px!important;
  }
  #stdMasterOverlay .std-master-profile .std-master-avatar{
    width:210px!important;
    height:210px!important;
  }
  #stdMasterOverlay .std-master-profile h2{
    font-size:72px!important;
  }
  #stdMasterOverlay .std-master-profile p{
    font-size:18px!important;
  }
  #stdMasterOverlay .std-master-profile-cats{
    gap:10px!important;
    margin-top:16px!important;
  }
  #stdMasterOverlay .std-master-profile-cats span{
    font-size:14px!important;
    padding:9px 15px!important;
  }
  #stdMasterOverlay .std-master-tabs{
    gap:12px!important;
    margin-top:34px!important;
  }
  #stdMasterOverlay .std-master-tabs button{
    min-height:58px!important;
    padding:0 26px!important;
    font-size:15px!important;
  }
  #stdMasterOverlay .std-master-tab-content{
    margin-top:30px!important;
  }
  #stdMasterOverlay .std-master-tab-content>h3,#stdMasterOverlay .std-master-page-block h3{
    font-size:42px!important;
  }
  #stdMasterOverlay .std-master-about-copy{
    font-size:18px!important;
    line-height:1.65!important;
  }
  #stdMasterOverlay .std-master-page-service strong{
    font-size:17px!important;
  }
  #stdMasterOverlay .std-master-page-service span{
    font-size:14px!important;
  }
  #salonDesktopContacts.std-contact{
    padding-bottom:0!important;
  }
  #salonDesktopContacts .std-contact-card{
    min-height:112px!important;
  }
  #salonDesktopContacts .std-contact-card-title{
    font-size:30px!important;
  }
  #salonDesktopContacts .std-contact-card-sub{
    font-size:15px!important;
  }
  #salonDesktopContacts a[href^="tel:"] .std-contact-card-title{
    font:500 21px/1.15 "Manrope",Arial,sans-serif!important;
    letter-spacing:.01em!important;
  }
  #salonDesktopContacts a.std-contact-card{
    transition:transform .22s ease,border-color .22s ease,background .22s ease,box-shadow .22s ease!important;
  }
  #salonDesktopContacts a.std-contact-card:hover{
    transform:translateY(-5px)!important;
    background:rgba(255,255,255,.09)!important;
    border-color:rgba(216,183,170,.44)!important;
    box-shadow:0 16px 38px rgba(0,0,0,.20)!important;
  }
  #salonDesktopContacts .std-contact-bottom{
    box-sizing:border-box!important;
  }
  #salonDesktopContacts .std-contact-brand{
    box-sizing:border-box!important;
    overflow:visible!important;
  }
}
@media(min-width:1200px){
  #salonDesktopServices.mct-prices>.mct-shell{
    width:calc(100% - 2cm)!important;
    margin:0 1cm!important;
    max-width:none!important;
    grid-template-columns:minmax(410px,470px) minmax(0,1fr)!important;
    column-gap:2cm!important;
    grid-template-rows:auto auto auto auto!important;
  }
  #salonDesktopServices .mct-price-head:after{
    right:-1cm!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    width:calc(100% + 1.7cm)!important;
    margin:34px 0 0 -.7cm!important;
    overflow:visible!important;
  }
  #salonDesktopServices .mct-tabs{
    padding:5px 1cm 15px .7cm!important;
  }
}
@media(min-width:768px){
  html[data-br-device="desktop"]{
    overflow-x:clip!important;
    overflow-y:auto!important;
  }
  html[data-br-device="desktop"] body{
    overflow-x:clip!important;
    overflow-y:visible!important;
  }
  #salonDesktopPortfolio.std-portfolio{
    padding-bottom:38px!important;
  }
  #salonDesktopPortfolio #stdOpenGallery{
    margin-bottom:0!important;
  }
  #salonDesktopServices.mct-prices{
    padding:58px 0 94px!important;
    overflow:visible!important;
    background:
      radial-gradient(720px 520px at 6% 12%,rgba(190,145,121,.14),transparent 68%),
      radial-gradient(760px 520px at 96% 92%,rgba(190,145,121,.08),transparent 72%),
      #2d2824!important;
  }
  #salonDesktopServices.mct-prices>.mct-shell{
    width:calc(100% - 2cm)!important;
    max-width:none!important;
    margin:0 1cm!important;
    grid-template-columns:minmax(410px,470px) minmax(0,1fr)!important;
    grid-template-rows:48px auto minmax(680px,auto) auto!important;
    column-gap:2cm!important;
    row-gap:0!important;
    overflow:visible!important;
  }
  #salonDesktopServices .mct-price-head{
    position:relative!important;
    top:auto!important;
    grid-column:1!important;
    grid-row:1 / 5!important;
    align-self:stretch!important;
    width:100%!important;
    height:100%!important;
    margin:0!important;
    padding:0!important;
    transform:none!important;
    z-index:5!important;
  }
  #salonDesktopServices .mct-price-head:after{
    top:0!important;
    right:-1cm!important;
    width:1px!important;
    height:min(74vh,700px)!important;
    background:linear-gradient(180deg,rgba(229,205,193,0),rgba(229,205,193,.22) 10%,rgba(229,205,193,.22) 88%,rgba(229,205,193,0))!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    position:sticky!important;
    top:94px!important;
    width:100%!important;
    min-height:0!important;
    margin:0!important;
    padding:0 28px 28px!important;
    overflow:hidden!important;
    border:1px solid rgba(255,255,255,.44)!important;
    border-radius:28px!important;
    background:
      radial-gradient(360px 260px at 100% 0%,rgba(255,255,255,.92),transparent 76%),
      linear-gradient(145deg,#fffaf5 0%,#f0e1d6 100%)!important;
    box-shadow:0 28px 70px rgba(8,6,5,.28),0 0 84px rgba(206,164,140,.09)!important;
  }
  #salonDesktopServices .dct-service-sticky-card:before{
    content:""!important;
    position:absolute!important;
    inset:auto -90px -125px auto!important;
    width:280px!important;
    height:280px!important;
    border:1px solid rgba(143,103,85,.09)!important;
    border-radius:50%!important;
    pointer-events:none!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong,
  #salonDesktopServices .dct-services-main-title{
    height:48px!important;
    min-height:48px!important;
    margin:0!important;
    padding:0!important;
    font:500 46px/.94 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.03em!important;
    white-space:nowrap!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong{
    display:block!important;
    color:#241d19!important;
  }
  #salonDesktopServices .dct-services-main-title{
    display:block!important;
    grid-column:2!important;
    grid-row:1!important;
    color:#f7f3f0!important;
  }
  #salonDesktopServices .dct-service-sticky-lead{
    margin:13px 0 0!important;
    max-width:390px!important;
    color:#6c5f58!important;
    font:400 12px/1.55 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopServices .dct-service-sticky-info{
    display:grid!important;
    grid-template-columns:1fr 1.08fr!important;
    gap:11px!important;
    margin:17px 0 0!important;
  }
  #salonDesktopServices .dct-service-sticky-row{
    min-width:0!important;
    min-height:68px!important;
    padding:11px 12px!important;
    gap:10px!important;
    border:1px solid rgba(84,61,51,.10)!important;
    border-radius:15px!important;
    background:rgba(255,255,255,.55)!important;
    transition:background .22s ease,border-color .22s ease,box-shadow .22s ease!important;
  }
  #salonDesktopServices .dct-service-sticky-icon{
    width:38px!important;
    height:38px!important;
    flex:0 0 38px!important;
    background:rgba(255,255,255,.64)!important;
  }
  #salonDesktopServices .dct-service-sticky-icon svg{
    width:18px!important;
    height:18px!important;
  }
  #salonDesktopServices .dct-service-sticky-copy b{
    font-size:12px!important;
  }
  #salonDesktopServices .dct-service-sticky-copy small{
    margin-top:4px!important;
    font-size:9.5px!important;
    color:#766a64!important;
  }
  #salonDesktopServices .dct-service-sticky-card.is-closed .dct-service-availability{
    border-color:rgba(167,79,86,.22)!important;
    background:rgba(255,240,239,.82)!important;
    box-shadow:inset 3px 0 0 rgba(167,79,86,.56)!important;
  }
  #salonDesktopServices .dct-service-sticky-card.is-closed .dct-service-availability b,
  #salonDesktopServices .dct-service-sticky-card.is-closed .dct-service-availability svg{
    color:#a34f56!important;
    stroke:#a34f56!important;
  }
  #salonDesktopServices .dct-service-sticky-card.is-open .dct-service-availability{
    border-color:rgba(63,135,80,.20)!important;
    background:rgba(239,249,241,.84)!important;
    box-shadow:inset 3px 0 0 rgba(63,135,80,.55)!important;
  }
  #salonDesktopServices .dct-service-sticky-card.is-open .dct-service-availability b,
  #salonDesktopServices .dct-service-sticky-card.is-open .dct-service-availability svg{
    color:#3f8750!important;
    stroke:#3f8750!important;
  }
  #salonDesktopServices .dct-service-sticky-steps{
    margin-top:16px!important;
    padding:14px 0 13px!important;
    border-top:1px solid rgba(89,66,56,.11)!important;
    border-bottom:1px solid rgba(89,66,56,.11)!important;
  }
  #salonDesktopServices .dct-service-sticky-steps-title{
    display:block!important;
    margin-bottom:11px!important;
    color:#77675f!important;
    font:600 9px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.14em!important;
    text-transform:uppercase!important;
  }
  #salonDesktopServices .dct-service-sticky-steps ol{
    display:grid!important;
    grid-template-columns:repeat(3,minmax(0,1fr))!important;
    gap:0!important;
    margin:0!important;
    padding:0!important;
    list-style:none!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li{
    min-width:0!important;
    padding:0 11px!important;
    border-left:1px solid rgba(89,66,56,.11)!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li:first-child{
    padding-left:0!important;
    border-left:0!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li:last-child{
    padding-right:0!important;
  }
  #salonDesktopServices .dct-service-sticky-steps b{
    display:block!important;
    color:#a77f6c!important;
    font:600 9px/1 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li span{
    display:block!important;
    margin-top:6px!important;
    overflow:hidden!important;
    color:#352d29!important;
    font:600 10px/1.22 "Manrope",Arial,sans-serif!important;
    text-overflow:ellipsis!important;
  }
  #salonDesktopServices .dct-service-sticky-book,
  #salonDesktopServices .dct-service-sticky-work{
    width:100%!important;
    height:58px!important;
    border-radius:15px!important;
  }
  #salonDesktopServices .dct-service-sticky-book{
    margin-top:17px!important;
    border:1px solid rgba(255,255,255,.18)!important;
    background:linear-gradient(105deg,#8d6959 0%,#b68a73 45%,#8d6959 100%)!important;
    background-size:220% 100%!important;
    color:#fff!important;
    box-shadow:0 15px 30px rgba(108,72,56,.22)!important;
  }
  #salonDesktopServices .dct-service-sticky-work{
    margin-top:10px!important;
    border:1px solid rgba(85,62,52,.16)!important;
    background:rgba(255,255,255,.38)!important;
    color:#332b27!important;
  }
  #salonDesktopServices .dct-service-sticky-work:hover{
    background:#fff!important;
    transform:translateY(-2px)!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    position:relative!important;
    grid-column:2!important;
    grid-row:2!important;
    width:100%!important;
    max-width:none!important;
    margin:27px 0 0!important;
    padding:0 0 19px!important;
    overflow:hidden!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap:after{
    content:""!important;
    position:absolute!important;
    z-index:2!important;
    top:0!important;
    right:0!important;
    width:40px!important;
    height:58px!important;
    background:linear-gradient(90deg,transparent,#2d2824 88%)!important;
    pointer-events:none!important;
  }
  #salonDesktopServices .mct-tabs{
    width:100%!important;
    max-width:none!important;
    margin:0!important;
    padding:4px 0 10px!important;
    overflow-x:auto!important;
    overflow-y:hidden!important;
    clip-path:none!important;
    mask-image:none!important;
    -webkit-mask-image:none!important;
    scrollbar-width:none!important;
  }
  #salonDesktopServices .mct-tabs-track{
    display:flex!important;
    width:max-content!important;
    min-width:100%!important;
    flex-wrap:nowrap!important;
    gap:10px!important;
    padding-right:36px!important;
  }
  #salonDesktopServices .mct-tab{
    flex:0 0 auto!important;
    min-height:48px!important;
    padding:0 21px!important;
    border:1px solid rgba(255,255,255,.16)!important;
    border-radius:999px!important;
    background:rgba(255,255,255,.035)!important;
    color:#ded5cf!important;
    font-size:13px!important;
    transition:transform .2s ease,background .2s ease,border-color .2s ease,color .2s ease,box-shadow .2s ease!important;
  }
  #salonDesktopServices .mct-tab:hover{
    border-color:rgba(229,196,180,.34)!important;
    background:rgba(255,255,255,.08)!important;
    transform:translateY(-2px)!important;
  }
  #salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected="true"],
  #salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected="true"]{
    border-color:#e7c8b8!important;
    background:#d7b5a4!important;
    color:#241d19!important;
    box-shadow:0 10px 24px rgba(0,0,0,.18)!important;
    transform:none!important;
  }
  #salonDesktopServices .dct-service-groups{
    grid-column:2!important;
    grid-row:3!important;
    width:100%!important;
    min-width:0!important;
    min-height:680px!important;
    margin:0!important;
    padding:0!important;
  }
  #salonDesktopServices .dct-service-category-list{
    width:100%!important;
    max-width:none!important;
  }
  #salonDesktopServices .dct-service-card{
    width:100%!important;
    min-width:0!important;
    border-color:rgba(255,255,255,.12)!important;
    background:rgba(255,255,255,.035)!important;
    transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease!important;
  }
  #salonDesktopServices .dct-service-card:hover{
    border-color:rgba(225,191,174,.30)!important;
    background:rgba(255,255,255,.075)!important;
    box-shadow:0 18px 36px rgba(0,0,0,.14)!important;
    transform:translateY(-2px)!important;
  }
  #salonDesktopServices .mct-more-services{
    grid-column:2!important;
    grid-row:4!important;
    margin:26px auto 0!important;
  }
  #salonDesktopAbout.br-about-team{
    padding:88px 32px 102px!important;
    overflow:hidden!important;
    background:
      radial-gradient(700px 460px at 4% 12%,rgba(217,190,176,.15),transparent 70%),
      radial-gradient(660px 480px at 96% 88%,rgba(217,190,176,.11),transparent 72%),
      #f8f4ee!important;
  }
  #salonDesktopAbout>.br-about-team-headings,
  #salonDesktopAbout>.br-about-team-shell{
    width:min(100%,1500px)!important;
    margin-inline:auto!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    column-gap:72px!important;
  }
  #salonDesktopAbout>.br-about-team-headings{
    margin-bottom:27px!important;
  }
  #salonDesktopAbout>.br-about-team-headings h2{
    margin:0!important;
    color:#201b18!important;
    font:500 clamp(54px,4.5vw,68px)/.94 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.045em!important;
    text-align:center!important;
  }
  #salonDesktopAbout>.br-about-team-shell{
    position:relative!important;
    align-items:stretch!important;
  }
  #salonDesktopAbout>.br-about-team-shell:after{
    content:""!important;
    position:absolute!important;
    top:16px!important;
    bottom:16px!important;
    left:50%!important;
    width:1px!important;
    background:linear-gradient(180deg,transparent,rgba(78,58,49,.16) 12%,rgba(78,58,49,.16) 88%,transparent)!important;
    transform:translateX(-.5px)!important;
    pointer-events:none!important;
  }
  #salonDesktopAbout .br-about-column,
  #salonDesktopTeam.br-team-panel{
    box-sizing:border-box!important;
    width:100%!important;
    min-width:0!important;
    min-height:760px!important;
    height:760px!important;
    border-radius:30px!important;
  }
  #salonDesktopAbout .br-about-column{
    padding:20px!important;
    border:1px solid rgba(72,55,47,.10)!important;
    background:rgba(255,255,255,.46)!important;
    box-shadow:0 24px 60px rgba(69,50,42,.09)!important;
  }
  #salonDesktopAbout .mct-about-card{
    display:grid!important;
    width:100%!important;
    height:100%!important;
    min-height:0!important;
    grid-template-columns:minmax(0,1fr)!important;
    grid-template-rows:385px minmax(0,1fr)!important;
    gap:0!important;
    margin:0!important;
    padding:0!important;
    overflow:hidden!important;
    border:0!important;
    border-radius:22px!important;
    background:transparent!important;
    box-shadow:none!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap,
  #salonDesktopAbout .mct-about-portrait,
  #salonDesktopAbout .mct-about-portrait img{
    display:block!important;
    width:100%!important;
    height:385px!important;
    min-height:385px!important;
    margin:0!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap{
    overflow:hidden!important;
    border-radius:20px!important;
  }
  #salonDesktopAbout .mct-about-portrait img{
    object-fit:cover!important;
    transition:transform .8s cubic-bezier(.2,.7,.2,1)!important;
  }
  #salonDesktopAbout .br-about-column:hover .mct-about-portrait img{
    transform:scale(1.025)!important;
  }
  #salonDesktopAbout .mct-about-copy{
    display:flex!important;
    min-width:0!important;
    flex-direction:column!important;
    justify-content:flex-start!important;
    padding:24px 8px 2px!important;
    overflow:visible!important;
  }
  #salonDesktopAbout .mct-about-lead{
    margin:0!important;
    color:#241e1a!important;
    font:500 31px/1.02 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.025em!important;
  }
  #salonDesktopAbout .mct-about-copy>p:not(.mct-about-lead){
    margin:11px 0 0!important;
    color:#685f5a!important;
    font:400 13px/1.5 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopAbout .dct-about-amenities{
    margin-top:20px!important;
    padding-top:0!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid{
    display:grid!important;
    grid-template-columns:repeat(3,minmax(0,1fr))!important;
    gap:9px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid article{
    min-width:0!important;
    min-height:88px!important;
    padding:13px!important;
    border:1px solid rgba(81,60,51,.09)!important;
    border-radius:14px!important;
    background:rgba(255,255,255,.55)!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid article+article{
    border-left:1px solid rgba(81,60,51,.09)!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid strong{
    font-size:11.5px!important;
    line-height:1.2!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid span{
    margin-top:7px!important;
    font-size:8.8px!important;
    line-height:1.35!important;
  }
  #salonDesktopTeam.br-team-panel{
    display:flex!important;
    flex-direction:column!important;
    padding:34px 34px 30px!important;
    overflow:hidden!important;
    border:1px solid rgba(255,255,255,.08)!important;
    background:
      radial-gradient(460px 340px at 100% 0%,rgba(185,142,121,.14),transparent 72%),
      #302925!important;
    color:#f7f3f0!important;
    box-shadow:0 24px 60px rgba(38,27,22,.16)!important;
  }
  #salonDesktopTeam .std-team-kicker{
    display:block!important;
    margin:0!important;
    color:#d1c1b9!important;
    font:600 11px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.24em!important;
    text-align:center!important;
    text-transform:uppercase!important;
  }
  #salonDesktopTeam .std-team-subtitle{
    margin:12px auto 24px!important;
    max-width:460px!important;
    color:#ad9f98!important;
    font-size:11px!important;
    line-height:1.5!important;
    text-align:center!important;
  }
  #salonDesktopTeam .std-team-track{
    display:grid!important;
    width:100%!important;
    min-height:0!important;
    flex:1 1 auto!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    grid-template-rows:repeat(2,minmax(0,1fr))!important;
    gap:18px 28px!important;
    align-items:center!important;
    margin:0!important;
    padding:0!important;
    overflow:visible!important;
  }
  #salonDesktopTeam .std-master{
    display:flex!important;
    width:100%!important;
    min-width:0!important;
    min-height:0!important;
    height:100%!important;
    flex-direction:column!important;
    align-items:center!important;
    justify-content:center!important;
    padding:4px!important;
    border:0!important;
    border-radius:0!important;
    background:transparent!important;
    box-shadow:none!important;
    color:#f7f3f0!important;
    transition:transform .22s ease!important;
  }
  #salonDesktopTeam .std-master:hover{
    background:transparent!important;
    box-shadow:none!important;
    transform:translateY(-4px)!important;
  }
  #salonDesktopTeam .std-master-avatar{
    width:154px!important;
    height:154px!important;
    max-width:100%!important;
    border:1px solid rgba(255,255,255,.10)!important;
    background:radial-gradient(circle at 38% 28%,rgba(255,255,255,.12),transparent 43%),linear-gradient(145deg,#826d63,#5b4a43)!important;
    color:#eaded7!important;
    box-shadow:0 14px 34px rgba(0,0,0,.16)!important;
  }
  #salonDesktopTeam .std-master-avatar svg{
    width:58px!important;
    height:58px!important;
  }
  #salonDesktopTeam .std-master-name{
    margin-top:13px!important;
    color:#f7f3f0!important;
    font-size:25px!important;
    line-height:1!important;
  }
  #salonDesktopTeam .std-master-role{
    margin-top:7px!important;
    color:#baada6!important;
    font-size:10.5px!important;
  }
  #salonDesktopTeam .std-master-cats{
    margin-top:5px!important;
  }
  #salonDesktopTeam .std-master-cat{
    padding:0!important;
    border:0!important;
    background:transparent!important;
    color:#d3c5be!important;
    font-size:9px!important;
  }
  #salonDesktopContacts .std-contact-action-btn{
    border:1px solid rgba(244,237,232,.26)!important;
    background:#f4ede8!important;
    color:#2b2522!important;
    box-shadow:0 12px 28px rgba(0,0,0,.14)!important;
  }
  #salonDesktopContacts .std-contact-action-btn:hover{
    border-color:#fff!important;
    background:#fff!important;
    color:#211d1a!important;
    transform:translateY(-3px)!important;
  }
  #salonDesktopContacts .std-contact-bottom{
    width:100vw!important;
    min-height:118px!important;
    margin:42px calc(50% - 50vw) 0!important;
    padding:18px 24px!important;
    overflow:visible!important;
    background:#11100f!important;
  }
  #salonDesktopContacts .std-contact-brand{
    display:flex!important;
    width:auto!important;
    min-height:82px!important;
    margin:0 auto!important;
    padding:10px 24px!important;
    flex-direction:column!important;
    align-items:center!important;
    justify-content:center!important;
    gap:7px!important;
    border:0!important;
    background:transparent!important;
    box-shadow:none!important;
  }
  #salonDesktopContacts .br-tanem-mark{
    display:grid!important;
    width:31px!important;
    height:31px!important;
    flex:0 0 31px!important;
    place-items:center!important;
    border:1px solid rgba(255,255,255,.38)!important;
    border-radius:9px!important;
    color:#fff!important;
    font:600 20px/1 "Cormorant Garamond",Georgia,serif!important;
  }
  #salonDesktopContacts .br-tanem-copy{
    color:rgba(255,255,255,.72)!important;
    font:500 10px/1.2 "Manrope",Arial,sans-serif!important;
    letter-spacing:.04em!important;
    text-align:center!important;
  }
  #salonDesktopContacts .br-tanem-copy strong{
    color:#fff!important;
    font-size:11.5px!important;
    font-weight:600!important;
  }
}
@media(min-width:768px) and (max-width:1199px){
  #salonDesktopServices.mct-prices>.mct-shell{
    width:calc(100% - 56px)!important;
    margin:0 28px!important;
    grid-template-columns:minmax(310px,39%) minmax(0,1fr)!important;
    column-gap:44px!important;
  }
  #salonDesktopServices .mct-price-head:after{
    right:-22px!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    padding-inline:20px!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong,
  #salonDesktopServices .dct-services-main-title{
    font-size:40px!important;
  }
  #salonDesktopServices .dct-service-sticky-info{
    grid-template-columns:1fr!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li{
    padding-inline:7px!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li span{
    font-size:9px!important;
  }
  #salonDesktopAbout>.br-about-team-headings,
  #salonDesktopAbout>.br-about-team-shell{
    column-gap:42px!important;
  }
  #salonDesktopAbout .br-about-column,
  #salonDesktopTeam.br-team-panel{
    height:720px!important;
    min-height:720px!important;
  }
  #salonDesktopAbout .mct-about-card{
    grid-template-rows:340px minmax(0,1fr)!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap,
  #salonDesktopAbout .mct-about-portrait,
  #salonDesktopAbout .mct-about-portrait img{
    height:340px!important;
    min-height:340px!important;
  }
  #salonDesktopAbout .mct-about-lead{
    font-size:27px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid{
    grid-template-columns:1fr!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid article{
    min-height:54px!important;
  }
  #salonDesktopTeam .std-master-avatar{
    width:126px!important;
    height:126px!important;
  }
  #salonDesktopTeam .std-master-name{
    font-size:22px!important;
  }
}
@media(prefers-reduced-motion:reduce){
  #salonDesktopAbout .mct-about-portrait img,
  #salonDesktopTeam .std-master,
  #salonDesktopServices .mct-tab,
  #salonDesktopServices .dct-service-card{
    transition:none!important;
  }
}
@media(min-width:1024px){
  .std-btn-primary{
    height:58px!important;
    border:0!important;
    border-radius:8px!important;
    background:#715b53!important;
    color:#fff!important;
    box-shadow:0 12px 28px rgba(74,53,45,.20)!important;
    font:500 14px/1 "Manrope",Arial,sans-serif!important;
  }
  .std-btn-primary:hover{
    background:#654f48!important;
    transform:translateY(-1px)!important;
    box-shadow:0 16px 34px rgba(74,53,45,.27)!important;
  }
  .std-btn-primary:after,
  #salonDesktopServices .dct-service-sticky-book:after{
    content:""!important;
    position:absolute!important;
    top:-42%!important;
    left:-38%!important;
    width:25%!important;
    height:190%!important;
    pointer-events:none!important;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.46),transparent)!important;
    transform:skewX(-22deg)!important;
    animation:brDesktopBookShine 4.2s ease-in-out infinite!important;
  }
  @keyframes brDesktopBookShine{
    0%,66%{
      left:-38%;
      opacity:0;
    }
    70%{
      opacity:1;
    }
    100%{
      left:132%;
      opacity:0;
    }
  }
  #salonDesktopPortfolio.std-portfolio{
    padding-bottom:42px!important;
    box-shadow:inset 0 1px 0 rgba(255,255,255,.72),inset 0 -20px 42px rgba(124,91,74,.035)!important;
  }
  #salonDesktopPortfolio .std-work{
    box-shadow:0 18px 42px rgba(84,59,48,.13),0 4px 13px rgba(84,59,48,.08)!important;
  }
  #salonDesktopPortfolio .std-work:hover{
    box-shadow:0 22px 48px rgba(84,59,48,.17),0 5px 15px rgba(84,59,48,.10)!important;
  }
  #salonDesktopPortfolio .std-portfolio-more{
    box-shadow:0 14px 32px rgba(116,84,68,.12)!important;
  }
  #salonDesktopServices.mct-prices{
    padding-top:58px!important;
    background:#242424!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    padding:34px 28px 34px!important;
    background:radial-gradient(330px 230px at 100% 0%,rgba(255,255,255,.78),transparent 72%),linear-gradient(145deg,#f7f2eb 0%,#eaded4 100%)!important;
    border-color:rgba(66,55,49,.14)!important;
    box-shadow:0 28px 70px rgba(9,7,6,.25),0 0 46px rgba(190,145,121,.11)!important;
  }
  #salonDesktopServices .dct-service-sticky-card>strong{
    margin:0!important;
  }
  #salonDesktopServices .dct-service-sticky-lead{
    max-width:390px!important;
    margin:16px 0 0!important;
    color:#5f5752!important;
    font:400 12.5px/1.58 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopServices .dct-service-sticky-row:not(.dct-service-availability){
    border-color:rgba(109,101,95,.25)!important;
    background:rgba(238,235,232,.82)!important;
    box-shadow:inset 3px 0 0 rgba(137,129,123,.54)!important;
  }
  #salonDesktopServices .dct-service-sticky-row:not(.dct-service-availability) .dct-service-sticky-icon{
    border-color:rgba(109,101,95,.19)!important;
    background:rgba(255,255,255,.52)!important;
    color:#77706b!important;
  }
  #salonDesktopServices .dct-service-sticky-row:not(.dct-service-availability) .dct-service-sticky-copy b{
    color:#57514d!important;
  }
  #salonDesktopServices .dct-service-sticky-steps{
    margin-top:18px!important;
    padding:16px 0 15px!important;
  }
  #salonDesktopServices .dct-service-sticky-steps-title{
    margin-bottom:13px!important;
    color:#6f655f!important;
    letter-spacing:.16em!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li span{
    white-space:normal!important;
    overflow:visible!important;
    text-overflow:clip!important;
    color:#342e2a!important;
  }
  #salonDesktopServices .dct-service-sticky-book{
    width:100%!important;
    height:64px!important;
    margin-top:20px!important;
    border:0!important;
    border-radius:8px!important;
    background:#715b53!important;
    background-image:none!important;
    color:#fff!important;
    box-shadow:0 13px 30px rgba(74,53,45,.22)!important;
    animation:none!important;
    transition:transform .16s ease,background .16s ease,box-shadow .16s ease!important;
  }
  #salonDesktopServices .dct-service-sticky-book:hover{
    background:#654f48!important;
    transform:translateY(-1px)!important;
    box-shadow:0 17px 36px rgba(74,53,45,.30)!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    position:relative!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap:before,
  #salonDesktopServices .mct-tabs-ribbon-wrap:after{
    content:""!important;
    position:absolute!important;
    z-index:3!important;
    top:0!important;
    height:58px!important;
    pointer-events:none!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap:after{
    width:54px!important;
    background:linear-gradient(90deg,transparent,#242424 90%)!important;
  }
  #salonDesktopServices .dct-service-card-meta>b,
  #salonDesktopServices .dct-service-card-variant-meta>b{
    border:1px solid rgba(255,255,255,.92)!important;
    border-radius:999px!important;
    background:#f7f2eb!important;
    color:#171513!important;
    box-shadow:0 8px 18px rgba(0,0,0,.10)!important;
    font:600 12.5px/1 "Manrope",Arial,sans-serif!important;
    text-align:center!important;
    white-space:nowrap!important;
    transition:transform .18s ease,background .18s ease,box-shadow .18s ease!important;
  }
  #salonDesktopServices .dct-service-card:hover .dct-service-card-meta>b,
  #salonDesktopServices .dct-service-card:hover .dct-service-card-variant-meta>b{
    transform:translateY(-1px)!important;
    background:#fff!important;
    box-shadow:0 10px 22px rgba(0,0,0,.14)!important;
  }
  #salonDesktopTeam.br-team-panel{
    background:radial-gradient(circle at 88% 8%,rgba(255,255,255,.055),transparent 26%),radial-gradient(circle at 8% 96%,rgba(139,113,103,.12),transparent 32%),#242424!important;
  }
  #salonDesktopTeam .std-team-kicker{
    letter-spacing:.22em!important;
  }
  #salonDesktopTeam .std-master-avatar{
    background:linear-gradient(145deg,#4a4542,#34302e)!important;
    box-shadow:0 18px 38px rgba(0,0,0,.18)!important;
  }
  #salonDesktopTeam .std-master-avatar svg{
    width:78px!important;
    height:78px!important;
  }
  #salonDesktopTeam .std-master-name{
    margin-top:19px!important;
  }
  #salonDesktopTeam .std-master-role{
    margin-top:7px!important;
  }
  #salonDesktopContacts .std-contact-bottom{
    background:#11100f!important;
  }
  #salonDesktopContacts .std-contact-brand{
    background:#11100f!important;
  }
}
@media(prefers-reduced-motion:reduce){
  .std-btn-primary:after,#salonDesktopServices .dct-service-sticky-book:after{
    animation:none!important;
  }
}
@media(min-width:1024px){
  .std-header-book:hover{
    box-shadow:0 12px 28px rgba(74,53,45,.24)!important;
  }
  #salonDesktopServices .mct-tab-all:not(.is-active){
    background:rgba(255,255,255,.035)!important;
    box-shadow:none!important;
  }
  #salonDesktopServices .dct-service-card-meta>b,
  #salonDesktopServices .dct-service-card-variant-meta>b{
    position:relative!important;
    min-height:44px!important;
    font-weight:700!important;
  }
  #salonDesktopServices .dct-service-card-meta>b:before,
  #salonDesktopServices .dct-service-card-variant-meta>b:before{
    content:""!important;
    border-radius:50%!important;
    background:#171513!important;
    box-shadow:0 0 0 0 rgba(23,21,19,.32)!important;
  }
  @keyframes brServiceRadar{
    0%{
      box-shadow:0 0 0 0 rgba(23,21,19,.34);
    }
    72%{
      box-shadow:0 0 0 7px rgba(23,21,19,0);
    }
    100%{
      box-shadow:0 0 0 0 rgba(23,21,19,0);
    }
  }
  #salonDesktopServices .dct-service-category-list{
    min-height:0!important;
  }
  #salonDesktopTeam .std-team-subtitle{
    line-height:1.55!important;
  }
  #salonDesktopTeam .std-master-cat{
    font-size:13px!important;
  }
}
@media(prefers-reduced-motion:reduce){
  #salonDesktopServices .dct-service-card-meta>b:before,
  #salonDesktopServices .dct-service-card-variant-meta>b:before{
    animation:none!important;
  }
}
@media(min-width:1024px){
  .std-header-book{
    border:0!important;
    font-weight:500!important;
  }
  .std-header-book:hover{
    background:#654f48!important;
  }
  #salonDesktopServices.mct-prices{
    position:relative!important;
  }
  #salonDesktopServices .mct-tab{
    font-size:13.4px!important;
  }
  #salonDesktopContacts.std-contact{
    background:#242424!important;
  }
}
@media(min-width:1024px){
  .std-header-book{
    background:#715b53!important;
    border-color:#715b53!important;
    color:#fff!important;
    border-radius:8px!important;
    box-shadow:0 10px 24px rgba(74,53,45,.18)!important;
  }
  #salonDesktopServices .dct-service-sticky-card{
    top:58px!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    padding-left:0!important;
  }
  #salonDesktopServices .mct-tab-all{
    left:auto!important;
  }
  #salonDesktopServices.mct-prices>.mct-shell{
    grid-template-rows:48px auto auto auto!important;
  }
  #salonDesktopServices .dct-service-groups{
    min-height:491px!important;
  }
  #salonDesktopServices .dct-service-category,
  #salonDesktopServices .dct-service-category-list{
    min-height:0!important;
    height:auto!important;
  }
  #salonDesktopTeam .std-team-kicker{
    font-size:16px!important;
  }
  #salonDesktopTeam .std-team-subtitle{
    font-size:15.5px!important;
  }
  #salonDesktopTeam .std-master-name{
    font-size:30px!important;
  }
  #salonDesktopTeam .std-master-role{
    font-size:14px!important;
  }
  #salonDesktopContacts.std-contact,
  #salonDesktopContacts .std-contact-bottom,
  #salonDesktopContacts .std-contact-brand{
    background:#242424!important;
  }
}
@media(min-width:1024px){
  #salonDesktopServices .dct-service-sticky-copy b{
    font-size:14px!important;
  }
  #salonDesktopServices .dct-service-sticky-copy small{
    font-size:11px!important;
  }
  #salonDesktopServices .dct-service-sticky-steps-title{
    font-size:10.5px!important;
  }
  #salonDesktopServices .dct-service-sticky-book>span:first-child{
    font-size:15px!important;
    font-weight:600!important;
  }
  #salonDesktopServices .dct-service-sticky-work>span:first-child{
    font-size:13px!important;
    font-weight:600!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap:after{
    right:0!important;
  }
  #salonDesktopServices .mct-tab-all{
    position:relative!important;
    z-index:3!important;
  }
  #salonDesktopAbout.br-about-team{
    position:relative!important;
    padding-top:64px!important;
    background:
      radial-gradient(720px 460px at 8% 8%,rgba(255,255,255,.82),transparent 68%),
      radial-gradient(660px 500px at 94% 86%,rgba(176,137,119,.15),transparent 70%),
      linear-gradient(145deg,#f8f4ee 0%,#efe2da 52%,#f7f0eb 100%)!important;
  }
  #salonDesktopAbout.br-about-team:before{
    content:""!important;
    position:absolute!important;
    inset:0!important;
    pointer-events:none!important;
    background:
      linear-gradient(120deg,transparent 0 42%,rgba(255,255,255,.28) 42.2%,transparent 42.5%),
      radial-gradient(circle at 76% 20%,rgba(255,255,255,.44),transparent 19%)!important;
    opacity:.72!important;
  }
  #salonDesktopAbout>.br-about-team-headings,
  #salonDesktopAbout>.br-about-team-shell{
    position:relative!important;
    z-index:1!important;
  }
  #salonDesktopAbout .br-about-column{
    display:flex!important;
    flex-direction:column!important;
    padding:20px!important;
    border:1px solid rgba(72,55,47,.10)!important;
    border-radius:28px!important;
    box-shadow:0 24px 58px rgba(69,50,42,.11)!important;
  }
  #salonDesktopAbout .mct-about-card{
    display:grid!important;
    width:100%!important;
    height:100%!important;
    min-height:0!important;
    margin:0!important;
    padding:0!important;
    border:0!important;
    border-radius:22px!important;
    background:transparent!important;
    box-shadow:none!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap{
    border:0!important;
    border-radius:20px!important;
    background:rgba(255,255,255,.28)!important;
    box-shadow:none!important;
  }
  #salonDesktopAbout .mct-about-portrait{
    width:100%!important;
    height:100%!important;
  }
  #salonDesktopAbout .mct-about-lead{
    font-size:clamp(30px,2.3vw,38px)!important;
    line-height:1.02!important;
  }
  #salonDesktopAbout .mct-about-copy>p:not(.mct-about-lead){
    font-size:15.5px!important;
    line-height:1.62!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid{
    grid-template-columns:repeat(3,minmax(0,1fr))!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid article{
    border:1px solid rgba(81,60,51,.09)!important;
    border-radius:14px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid article+article{
    border-left:1px solid rgba(81,60,51,.09)!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid strong{
    line-height:1.2!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid span{
    margin-top:8px!important;
  }
  #salonDesktopTeam.br-team-panel{
    border-radius:28px!important;
    box-shadow:0 24px 58px rgba(54,41,35,.15)!important;
  }
  #salonDesktopContacts .std-contact-bottom,
  #salonDesktopContacts .std-contact-brand{
    background:#11100f!important;
  }
}
@media(min-width:1024px){
  #salonDesktopServices .dct-service-sticky-lead{
    font-size:13.5px!important;
    line-height:1.58!important;
  }
  #salonDesktopServices .dct-service-sticky-steps li span{
    font-size:13px!important;
    line-height:1.42!important;
    font-weight:550!important;
  }
  #salonDesktopServices .dct-service-card-meta>b:before,
  #salonDesktopServices .dct-service-card-variant-meta>b:before{
    width:7px!important;
    height:7px!important;
    animation:brServiceRadarFinal 1.25s ease-out infinite!important;
  }
  @keyframes brServiceRadarFinal{
    0%{
      opacity:1;
      box-shadow:0 0 0 0 rgba(23,21,19,.38);
    }
    55%{
      opacity:.48;
    }
    78%{
      opacity:1;
      box-shadow:0 0 0 6px rgba(23,21,19,0);
    }
    100%{
      opacity:1;
      box-shadow:0 0 0 0 rgba(23,21,19,0);
    }
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap:before{
    content:""!important;
    display:block!important;
    top:0!important;
    pointer-events:none!important;
  }
  #salonDesktopServices .dct-service-sticky-route{
    text-decoration:none!important;
    cursor:pointer!important;
  }
  #salonDesktopServices .dct-service-sticky-route:hover{
    transform:translateY(-1px)!important;
  }
  #salonDesktopAbout .br-about-column,
  #salonDesktopTeam.br-team-panel{
    box-shadow:
      0 30px 70px rgba(61,43,35,.16),
      0 7px 20px rgba(61,43,35,.10),
      inset 0 1px 0 rgba(255,255,255,.72)!important;
  }
  #salonDesktopAbout .mct-about-card{
    overflow:hidden!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap{
    height:385px!important;
    min-height:385px!important;
    overflow:hidden!important;
  }
  #salonDesktopAbout .mct-about-portrait img{
    width:100%!important;
    height:100%!important;
    object-fit:cover!important;
    object-position:center 44%!important;
    transform:none!important;
  }
  #salonDesktopAbout .br-about-column:hover .mct-about-portrait img{
    transform:none!important;
  }
  #salonDesktopAbout .mct-about-copy{
    display:flex!important;
    flex-direction:column!important;
  }
  #salonDesktopAbout .dct-about-amenities{
    margin-bottom:0!important;
    padding-bottom:0!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid{
    margin-bottom:0!important;
    padding-bottom:0!important;
  }
  #salonDesktopContacts .br-tanem-copy{
    font-size:11.5px!important;
    line-height:1.25!important;
  }
  #salonDesktopContacts .br-tanem-copy strong{
    font-size:16px!important;
  }
}
@media(min-width:1024px){
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    margin-left:-28px!important;
    width:calc(100% + 28px)!important;
    overflow:hidden!important;
  }
  #salonDesktopServices .mct-tabs{
    padding-left:28px!important;
    scroll-padding-left:28px!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap:before{
    left:0!important;
    width:28px!important;
    height:58px!important;
    z-index:30!important;
    background:linear-gradient(90deg,#242424 0%,rgba(36,36,36,.96) 24%,rgba(36,36,36,.68) 58%,transparent 100%)!important;
  }
  #salonDesktopServices .dct-service-card:not(.has-variants) .dct-service-card-body{
    grid-template-columns:minmax(0,1fr) 112px 136px!important;
  }
  #salonDesktopServices .dct-service-card-meta>b,
  #salonDesktopServices .dct-service-card-variant-meta>b{
    width:136px!important;
    min-width:136px!important;
    display:inline-flex!important;
    align-items:center!important;
    justify-content:center!important;
    gap:7px!important;
    padding:0 15px!important;
  }
  #salonDesktopServices .dct-service-card-meta>b:before,
  #salonDesktopServices .dct-service-card-variant-meta>b:before{
    position:relative!important;
    left:auto!important;
    top:auto!important;
    transform:none!important;
    flex:0 0 auto!important;
    margin:0!important;
  }
  @keyframes brStickySheen{
    0%,62%{
      left:-46%;
      opacity:0;
    }
    68%{
      opacity:1;
    }
    84%{
      left:118%;
      opacity:1;
    }
    85%,100%{
      left:118%;
      opacity:0;
    }
  }
  #salonDesktopAbout .br-about-column{
    background:#eee7df!important;
  }
  #salonDesktopAbout .br-about-column,
  #salonDesktopTeam.br-team-panel{
    min-height:820px!important;
    height:820px!important;
  }
  #salonDesktopAbout .mct-about-card{
    grid-template-rows:390px minmax(0,1fr)!important;
  }
  #salonDesktopAbout .mct-about-portrait-wrap,
  #salonDesktopAbout .mct-about-portrait{
    height:390px!important;
    min-height:390px!important;
  }
  #salonDesktopAbout .mct-about-portrait{
    position:relative!important;
  }
  #salonDesktopAbout .mct-about-lead{
    margin:0!important;
  }
  #salonDesktopAbout .dct-about-brand{
    display:block!important;
    color:#1d1a18!important;
    font:400 clamp(35px,2.75vw,43px)/1.04 "Cormorant Garamond",Georgia,serif!important;
    letter-spacing:-.032em!important;
  }
  #salonDesktopAbout .dct-about-kind{
    display:block!important;
    margin-top:8px!important;
    color:#58504a!important;
    font:500 14px/1.3 "Manrope",Arial,sans-serif!important;
    letter-spacing:0!important;
  }
  #salonDesktopAbout .dct-about-copy{
    margin:18px 0 0!important;
    color:#58504a!important;
    font:400 14px/1.62 "Manrope",Arial,sans-serif!important;
  }
  #salonDesktopAbout .dct-about-rating{
    position:absolute!important;
    left:14px!important;
    bottom:14px!important;
    height:36px!important;
    padding:0 12px!important;
    border:1px solid rgba(255,255,255,.28)!important;
    border-radius:999px!important;
    background:rgba(18,17,16,.72)!important;
    backdrop-filter:blur(10px)!important;
    display:flex!important;
    align-items:center!important;
    gap:7px!important;
    color:#fff!important;
    box-shadow:0 5px 14px rgba(0,0,0,.13)!important;
  }
  #salonDesktopAbout .dct-about-rating-star{
    font-size:12px!important;
    color:#d6ad6b!important;
  }
  #salonDesktopAbout .dct-about-rating strong{
    font:600 14px/1 "Manrope",Arial,sans-serif!important;
    color:#fff!important;
  }
  #salonDesktopAbout .dct-about-rating span:last-child{
    font:500 8px/1 "Manrope",Arial,sans-serif!important;
    letter-spacing:.035em!important;
    color:rgba(255,255,255,.72)!important;
  }
}
@media(min-width:1024px){
  #salonDesktopServices #stdServiceTabs .mct-tab.is-active[aria-selected="true"],
  #salonDesktopServices #stdServiceTabs .mct-tab-all.is-active[aria-selected="true"]{
    background:#eee7df!important;
    border-color:#eee7df!important;
    color:#2b2420!important;
    box-shadow:0 8px 20px rgba(0,0,0,.13)!important;
  }
  #salonDesktopServices .dct-service-sticky-book{
    position:relative!important;
    isolation:isolate!important;
    overflow:hidden!important;
  }
  #salonDesktopServices .dct-service-sticky-book>span{
    position:relative!important;
    z-index:2!important;
  }
  #salonDesktopServices .dct-service-sticky-book:after{
    content:""!important;
    display:block!important;
    position:absolute!important;
    z-index:1!important;
    top:-45%!important;
    bottom:-45%!important;
    left:-52%!important;
    width:38%!important;
    background:linear-gradient(105deg,transparent 0%,rgba(255,255,255,.08) 24%,rgba(255,255,255,.72) 50%,rgba(255,255,255,.10) 76%,transparent 100%)!important;
    transform:skewX(-20deg)!important;
    animation:brStickyBookGlint 3.8s cubic-bezier(.2,.7,.2,1) infinite!important;
    pointer-events:none!important;
  }
  @keyframes brStickyBookGlint{
    0%,58%{
      left:-52%;
      opacity:0;
    }
    61%{
      opacity:1;
    }
    78%{
      left:120%;
      opacity:1;
    }
    80%,100%{
      left:120%;
      opacity:0;
    }
  }
  #salonDesktopAbout .mct-about-copy{
    padding:26px 18px 18px!important;
  }
  #salonDesktopAbout .dct-about-copy{
    margin-top:15px!important;
    line-height:1.58!important;
  }
  #salonDesktopAbout .dct-about-amenities{
    margin-top:18px!important;
    padding-top:15px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid{
    gap:10px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid article{
    min-height:102px!important;
    padding:15px!important;
    background:linear-gradient(145deg,#e4d6cb 0%,#eadfd6 100%)!important;
    border-color:rgba(86,64,53,.10)!important;
    box-shadow:0 10px 24px rgba(70,50,41,.075),inset 0 1px 0 rgba(255,255,255,.42)!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid strong{
    font-size:16.5px!important;
  }
  #salonDesktopAbout .dct-about-amenities-grid span{
    font-size:12.7px!important;
    line-height:1.45!important;
  }
  #salonDesktopContacts .std-contact-status,
  #salonDesktopContacts .std-contact-status span{
    font-size:14px!important;
    font-weight:600!important;
  }
}
@media(min-width:1024px){
  @keyframes brFinalBookingSheen{
    0%,56%{
      left:-55%;
      opacity:0;
    }
    59%{
      opacity:1;
    }
    77%{
      left:122%;
      opacity:1;
    }
    79%,100%{
      left:122%;
      opacity:0;
    }
  }
  #salonDesktopPortfolio.std-portfolio{
    border-top:0!important;
  }
  #salonDesktopPortfolio .std-portfolio-head,
  #salonDesktopPortfolio .std-portfolio-grid,
  #salonDesktopPortfolio .std-portfolio-more,
  #salonDesktopServices .dct-services-main-title,
  #salonDesktopServices .mct-tabs-ribbon-wrap,
  #salonDesktopServices .dct-service-groups,
  #salonDesktopServices .mct-more-services,
  #salonDesktopReviews .std-reviews-head,
  #salonDesktopReviews .std-reviews-viewport,
  #salonDesktopReviews .std-reviews-actions,
  #salonDesktopContacts .std-contact-inner{
    opacity:0!important;
    transform:translateY(24px)!important;
    transition:opacity .72s ease,transform .82s cubic-bezier(.16,1,.3,1)!important;
  }
  #salonDesktopServices .mct-price-head{
    opacity:0!important;
    transform:translateX(-52px)!important;
    transition:opacity .72s ease,transform .86s cubic-bezier(.16,1,.3,1)!important;
  }
  #salonDesktopAbout .br-about-column{
    opacity:0!important;
    transform:translateX(-52px)!important;
    transition:opacity .75s ease,transform .9s cubic-bezier(.16,1,.3,1)!important;
  }
  #salonDesktopTeam.br-team-panel{
    opacity:0!important;
    transform:translateX(52px)!important;
    transition:opacity .75s ease,transform .9s cubic-bezier(.16,1,.3,1)!important;
  }
  #salonDesktopPortfolio.in-view .std-portfolio-head,
  #salonDesktopPortfolio.in-view .std-portfolio-grid,
  #salonDesktopPortfolio.in-view .std-portfolio-more,
  #salonDesktopServices.in-view .mct-price-head,
  #salonDesktopServices.in-view .dct-services-main-title,
  #salonDesktopServices.in-view .mct-tabs-ribbon-wrap,
  #salonDesktopServices.in-view .dct-service-groups,
  #salonDesktopServices.in-view .mct-more-services,
  #salonDesktopAbout.in-view .br-about-column,
  #salonDesktopTeam.in-view,
  #salonDesktopReviews.in-view .std-reviews-head,
  #salonDesktopReviews.in-view .std-reviews-viewport,
  #salonDesktopReviews.in-view .std-reviews-actions,
  #salonDesktopContacts.in-view .std-contact-inner{
    opacity:1!important;
    transform:none!important;
  }
  #salonDesktopPortfolio .std-portfolio-grid{
    transition-delay:.10s!important;
  }
  #salonDesktopPortfolio .std-portfolio-more{
    transition-delay:.18s!important;
  }
  #salonDesktopServices .mct-tabs-ribbon-wrap{
    transition-delay:.08s!important;
  }
  #salonDesktopServices .dct-service-groups{
    transition-delay:.14s!important;
  }
  #salonDesktopServices .mct-more-services{
    transition-delay:.20s!important;
  }
  #salonDesktopReviews .std-reviews-viewport{
    transition-delay:.10s!important;
  }
  #salonDesktopReviews .std-reviews-actions{
    transition-delay:.17s!important;
  }
}
@media(min-width:1024px){
  #salonDesktopAbout .dct-about-rating{
    transform:scale(1.1556)!important;
    transform-origin:left bottom!important;
  }
}
@media(min-width:1024px){
  .std-header-brand{
    width:142px!important;
    min-width:142px!important;
    align-items:flex-start!important;
    overflow:visible!important;
  }
  .std-header-crown{
    width:132px!important;
    height:70px!important;
    max-width:132px!important;
    object-fit:contain!important;
    object-position:left center!important;
  }
  #salonDesktopTop .std-copy-inner{
    max-width:520px!important;
    margin-left:auto!important;
    margin-right:auto!important;
  }
  #salonDesktopTop .std-logo{
    width:100%!important;
    margin-left:auto!important;
    margin-right:auto!important;
    font:500 clamp(36px,3.05vw,52px)/.92 "Cormorant Garamond",Georgia,serif!important;
    text-align:center!important;
    white-space:nowrap!important;
  }
  #salonDesktopTop .std-logo-sub{
    width:100%!important;
    margin:15px auto 34px!important;
    color:#4f443f!important;
    font:500 clamp(24px,1.9vw,31px)/1 "Cormorant Garamond",Georgia,serif!important;
    text-align:center!important;
    white-space:nowrap!important;
  }
  #salonDesktopTop .std-meta-text>span{
    display:block!important;
  }
  #salonDesktopTop .std-status-sub,
  #salonDesktopTop .std-address>span+span{
    margin-top:4px!important;
    color:#746a64!important;
    font-size:12px!important;
    line-height:1.25!important;
  }
  #salonDesktopTop .std-scroll-hint{
    display:none!important;
  }
  #salonDesktopTeam .std-team-window{
    position:relative!important;
    flex:1 1 auto!important;
    min-height:0!important;
    margin:0!important;
  }
  #salonDesktopTeam .std-team-track{
    display:flex!important;
    width:200%!important;
    height:100%!important;
    min-height:0!important;
    gap:0!important;
    margin:0!important;
    padding:0!important;
    overflow:visible!important;
    transform:translate3d(0,0,0)!important;
    transition:transform .5s cubic-bezier(.2,.72,.2,1)!important;
    will-change:transform!important;
  }
  #salonDesktopTeam .std-team-page{
    display:grid!important;
    flex:0 0 50%!important;
    width:50%!important;
    height:100%!important;
    min-width:0!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    grid-template-rows:repeat(2,minmax(0,1fr))!important;
    gap:16px 28px!important;
    padding:5px 10px 9px!important;
  }
  #salonDesktopTeam .std-team-page:last-child{
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    grid-template-rows:repeat(2,minmax(0,1fr))!important;
    align-items:start!important;
    align-content:stretch!important;
    padding:5px 10px 9px!important;
  }
  #salonDesktopTeam .std-master{
    overflow:visible!important;
  }
  #salonDesktopTeam .std-master-avatar{
    margin-left:auto!important;
    margin-right:auto!important;
  }
  #salonDesktopTeam .std-team-controls{
    display:none!important;
  }
  #salonDesktopTeam .std-team-edge-cue{
    position:absolute!important;
    z-index:8!important;
    top:50%!important;
    width:30px!important;
    height:58px!important;
    padding:0!important;
    border:0!important;
    background:transparent!important;
    transform:translateY(-50%)!important;
    cursor:pointer!important;
  }
  #salonDesktopTeam .std-team-edge-next{
    right:5px!important;
    animation:brTeamCueRight 1.8s ease-in-out infinite!important;
  }
  #salonDesktopTeam .std-team-edge-prev{
    left:5px!important;
  }
  #salonDesktopTeam .std-team-edge-cue span{
    display:block!important;
    width:11px!important;
    height:27px!important;
    margin:auto!important;
    border-top:1.5px solid rgba(238,227,220,.72)!important;
    border-right:1.5px solid rgba(238,227,220,.72)!important;
    border-bottom:1.5px solid rgba(238,227,220,.72)!important;
    border-left:0!important;
    border-radius:0 5px 5px 0!important;
  }
  #salonDesktopTeam .std-team-edge-prev span{
    transform:scaleX(-1)!important;
  }
  #salonDesktopTeam .std-team-edge-cue:hover span{
    border-color:#fff!important;
  }
  #salonDesktopTeam .std-team-edge-cue[hidden]{
    display:none!important;
  }
  @keyframes brTeamCueRight{
    0%,100%{
      opacity:.38;
      transform:translate3d(0,-50%,0);
    }
    50%{
      opacity:1;
      transform:translate3d(5px,-50%,0);
    }
  }
  #salonDesktopTop .std-copy-inner{
    width:min(100%,520px)!important;
  }
  #salonDesktopTop .std-logo,
  #salonDesktopTop .std-logo-sub{
    width:100%!important;
    max-width:520px!important;
    text-align:center!important;
    margin-left:auto!important;
    margin-right:auto!important;
  }
  #salonDesktopTop .std-logo{
    font-size:clamp(38px,3.05vw,53px)!important;
    letter-spacing:.012em!important;
  }
  #salonDesktopTop .std-logo-sub{
    margin-top:15px!important;
    font-size:clamp(22px,1.75vw,30px)!important;
    letter-spacing:.09em!important;
  }
  #salonDesktopTeam .std-team-window{
    box-sizing:border-box!important;
    width:calc(100% + 40px)!important;
    margin-left:-20px!important;
    margin-right:-20px!important;
    padding:10px 54px 14px!important;
    overflow:hidden!important;
    touch-action:pan-y!important;
    user-select:none!important;
  }
  #salonDesktopTeam .std-team-page{
    align-content:start!important;
    align-items:start!important;
  }
  #salonDesktopTeam .std-team-page,
  #salonDesktopTeam .std-team-page:last-child{
    box-sizing:border-box!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    grid-template-rows:repeat(2,minmax(0,1fr))!important;
    align-content:start!important;
    align-items:start!important;
    padding:5px 10px 9px!important;
  }
  #salonDesktopTeam .std-master{
    align-self:start!important;
  }
  #salonDesktopTeam .std-master{
    min-width:0!important;
  }
  #salonDesktopTeam .std-master-avatar{
    box-sizing:border-box!important;
    display:grid!important;
    place-items:center!important;
    width:min(216px,100%)!important;
    height:auto!important;
    min-width:0!important;
    min-height:0!important;
    max-width:216px!important;
    max-height:none!important;
    aspect-ratio:1/1!important;
    border-radius:50%!important;
    flex:none!important;
    overflow:hidden!important;
  }
  @media(min-width:768px) and (max-width:1100px){
    #salonDesktopTop .std-copy-inner{
      width:min(100%,440px)!important;
      max-width:calc(100% - 20px)!important;
    }
    #salonDesktopTop .std-logo{
      font-size:clamp(28px,3vw,37px)!important;
      letter-spacing:0!important;
    }
    #salonDesktopTop .std-logo-sub{
      font-size:clamp(18px,2.45vw,25px)!important;
      letter-spacing:.025em!important;
    }
  }
  .std-gallery-video{
    position:absolute!important;
    inset:0!important;
    width:100%!important;
    height:100%!important;
    object-fit:contain!important;
    background:#151312!important;
    border:0!important;
  }
  .std-gallery-video[hidden],.std-gallery-image[hidden],.std-gallery-hint[hidden]{
    display:none!important;
  }
  .std-work-video video,.std-gallery-browser-video video{
    pointer-events:none!important;
  }
  .std-work-video{
    cursor:pointer!important;
  }
  .std-gallery-browser-title strong{
    font-size:clamp(44px,3.4vw,58px)!important;
    white-space:nowrap!important;
  }
  .std-gallery-browser-title span{
    font-size:13px!important;
    letter-spacing:.24em!important;
    white-space:nowrap!important;
  }
  #salonDesktopReviews .std-reviews-loop{
    animation:brDesktopReviewsLoop 108s linear infinite!important;
    transform:translate3d(0,0,0);
    backface-visibility:hidden;
  }
  @keyframes brDesktopReviewsLoop{
    to{
      transform:translate3d(calc(-50% - 8px),0,0);
    }
  }
}
@media(min-width:1024px){
  #salonDesktopTop #stdBookBtn,
  #salonDesktopServices #stdStickyServiceBook{
    position:relative!important;
    overflow:hidden!important;
    isolation:isolate!important;
  }
  #salonDesktopTop #stdBookBtn:after,
  #salonDesktopServices #stdStickyServiceBook:after{
    content:""!important;
    display:block!important;
    position:absolute!important;
    z-index:1!important;
    top:-30%!important;
    bottom:-30%!important;
    left:-30%!important;
    width:34%!important;
    height:auto!important;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)!important;
    transform:skewX(-20deg)!important;
    animation:brMobileExactShine 3.2s ease-in-out infinite!important;
    opacity:1!important;
    pointer-events:none!important;
  }
  #salonDesktopTop #stdBookBtn>*,
  #salonDesktopServices #stdStickyServiceBook>*{
    position:relative!important;
    z-index:2!important;
  }
  @keyframes brMobileExactShine{
    0%,65%{
      left:-40%;
    }
    100%{
      left:130%;
    }
  }
}
`;
  document.head.appendChild(desktopStyle);
  
  
  
  

  

  

  

  

  

  

  

  

  

  

  

  

  const root=document.createElement('div');
  root.id='salon-desktop-v1';
  root.innerHTML=`
    <header class="std-header">
      <a class="std-header-brand" href="#salonDesktopTop" aria-label="Студия Колористики Елены Багдасарян">
        <img class="std-header-crown" src="logo.webp" alt="Студия Колористики Елены Багдасарян">
      </a>
      <div class="std-lang-switch std-lang-switch-under-brand" role="group" aria-label="Language"><button type="button" data-desktop-lang="ru">RU</button><span class="sep">|</span><button type="button" data-desktop-lang="en">EN</button></div>
      <nav class="std-nav" aria-label="Основная навигация">
        <a href="#salonDesktopServices">Услуги</a>
        <a href="#salonDesktopPortfolio">Наши работы</a>
        <a href="#salonDesktopAbout">О нас</a>
        <a href="#salonDesktopReviews">Отзывы</a>
        <a href="#salonDesktopContacts">Контакты</a>
      </nav>
      <div class="std-header-right">
        <div class="std-lang-switch std-lang-switch-placeholder" aria-hidden="true"></div>
        <a class="std-phone" href="tel:+79266143300" aria-label="Позвонить в Студия Колористики Елены Багдасарян">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39Z" fill="currentColor"/></svg>
          <span>+7 (926) 614-33-00</span>
        </a>
        <button class="std-header-book" id="stdHeaderBookBtn" type="button">Записаться</button>
      </div>
    </header>

    <section class="std-hero" id="salonDesktopTop" aria-label="Студия Колористики Елены Багдасарян">
      <div class="std-hero-copy">
        <div class="std-hero-frame">
          <div class="std-copy-inner">
          <p class="std-hero-kicker">Салон красоты</p>
          <h1 class="std-logo">СТУДИЯ КОЛОРИСТИКИ</h1>
          <div class="std-logo-sub">ЕЛЕНЫ БАГДАСАРЯН</div>

          <p class="std-tagline">Описание салона.</p>

          <div class="std-meta">
            <div class="std-meta-item">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.7v4.8l3 1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-meta-text"><span class="std-status-main" id="stdStatusMain">Открыто</span><span class="std-status-sub" id="stdStatusSub">10:00–20:00</span></span>
            </div>

            <span class="std-meta-divider" aria-hidden="true"></span>

            <a class="std-meta-item" href="#salonDesktopContacts" aria-disabled="true">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </span>
              <span class="std-meta-text std-address"><span>Люберцы</span><span>Солнечная ул., 6</span></span>
            </a>
          </div>

          <div class="std-actions">
            <button class="std-btn std-btn-primary" id="stdBookBtn" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 3.8v4.4M16 3.8v4.4M4 10h16M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01M16 17h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <span>Записаться</span>
            </button>
            <a class="std-btn" href="#salonDesktopPortfolio">
              <span class="std-sparkles" aria-hidden="true">✦</span>
              <span>Смотреть работы</span>
            </a>
          </div>
          </div>
          <a class="std-scroll-hint" href="#salonDesktopPortfolio" aria-label="Листайте вниз"><span class="std-scroll-label">Листайте вниз</span><span class="std-scroll-circle" aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div class="std-hero-photo">
        <img id="stdHeroMedia" src="salon3.webp" alt="Медиа салона">
      </div>
    </section>

    <section class="std-portfolio" id="salonDesktopPortfolio" aria-labelledby="salonDesktopPortfolioTitle">
      <div class="std-portfolio-inner">
        <div class="std-portfolio-head">
          <p class="std-portfolio-kicker">Портфолио</p>
          <h2 class="std-portfolio-title" id="salonDesktopPortfolioTitle">Наши работы</h2>
          <p class="std-portfolio-copy">Реальные работы мастеров студии: окрашивание, стрижки, укладки, брови, ресницы, макияж и ногтевой сервис.</p>
        </div>
        <div class="std-portfolio-grid">
          ${PORTFOLIO.map((item,i)=>item.type==='video'?`<button class="std-work std-work-video" type="button" data-portfolio-index="${i}" aria-label="Открыть видео"><video src="${item.src}" muted autoplay loop playsinline preload="metadata" aria-label="${item.alt}"></video></button>`:`<button class="std-work" type="button" data-portfolio-index="${i}" aria-label="Открыть фотографию"><img src="${item.src}" alt="${item.alt}" loading="${i<4?'eager':'lazy'}"></button>`).join('')}
        </div>
        <button class="std-portfolio-more" id="stdOpenGallery" type="button">Открыть галерею <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section class="mct-prices" id="salonDesktopServices" aria-labelledby="stdServicesTitle">
      <div class="mct-shell">
        <div class="mct-price-head">
          <div class="dct-service-sticky-card" id="stdStickyServiceCard" aria-label="Выберите услугу">
            <strong>Выберите услугу</strong>
            <p class="dct-service-sticky-lead">Все услуги собраны по направлениям. Выберите подходящую процедуру — запись откроется сразу, без лишних шагов.</p>
            <div class="dct-service-sticky-info">
              <div class="dct-service-sticky-row dct-service-availability">
                <span class="dct-service-sticky-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 2"></path></svg>
                </span>
                <span class="dct-service-sticky-copy">
                  <b id="stdStickyServiceStatus">Закрыто</b>
                  <small id="stdStickyServiceStatusSub">10:00–20:00</small>
                </span>
              </div>
              <a class="dct-service-sticky-row dct-service-sticky-route" href="https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B" target="_blank" rel="noopener" aria-label="Построить маршрут в Google Картах">
                <span class="dct-service-sticky-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M19 10c0 5.2-7 10-7 10s-7-4.8-7-10a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>
                </span>
                <span class="dct-service-sticky-copy">
                  <b>Люберцы</b>
                  <small>Солнечная ул., 6</small>
                </span>
              </a>
            </div>
            <div class="dct-service-sticky-steps" aria-label="Как записаться">
              <span class="dct-service-sticky-steps-title">Быстрая запись</span>
              <ol>
                <li><b>01</b><span>Выберите услугу</span></li>
                <li><b>02</b><span>Записаться</span></li>
                <li><b>03</b><span>Связь с салоном</span></li>
              </ol>
            </div>
            <button class="dct-service-sticky-book" id="stdStickyServiceBook" type="button"><span>Записаться</span><span aria-hidden="true">→</span></button>
            <button class="dct-service-sticky-work" id="stdStickyGalleryOpen" type="button"><span>Открыть галерею</span><span aria-hidden="true">✦</span></button>
          </div>
        </div>

        <div class="dct-services-main-title" id="stdServicesTitle">Услуги и цены</div>
        <div class="mct-tabs-ribbon-wrap is-many">
          <div class="mct-tabs mct-tabs-scroll is-many" role="tablist" aria-label="Категории услуг">
            <div class="mct-tabs-track" id="stdServiceTabs"></div>
          </div>
        </div>

        <div class="dct-service-groups" id="stdServiceList" aria-label="Услуги по категориям на компьютере"></div>

        <button class="mct-more-services" id="stdServiceMore" type="button" aria-expanded="false">
          <span class="mct-more-services-mobile-copy" id="stdServiceMoreTextMobile"></span>
          <span class="mct-more-services-desktop-copy" id="stdServiceMoreText"></span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </section>

    <section class="mct-about br-about-team" id="salonDesktopAbout" aria-labelledby="stdAboutTitle">
      <div class="br-about-team-headings">
        <h2 id="stdAboutTitle">О салоне</h2>
        <h2 id="stdTeamTitle">Наша команда</h2>
      </div>
      <div class="mct-shell br-about-team-shell">
        <article class="br-about-column">
          <div class="mct-about-card">
            <div class="mct-about-portrait-wrap">
              <figure class="mct-about-portrait">
                <img src="masterpc.webp" alt="Студия Колористики Елены Багдасарян" loading="lazy">
                <div class="dct-about-rating"><span class="dct-about-rating-star">★</span><strong>5.0</strong><span>рейтинг салона</span></div>
              </figure>
            </div>
            <div class="mct-about-copy">
              <p class="mct-about-lead"><span class="dct-about-brand">СТУДИЯ КОЛОРИСТИКИ</span><span class="dct-about-kind">Салон красоты</span></p>
              <p class="dct-about-copy">Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови, ресницы и макияж. В одном пространстве работают мастера разных направлений.</p>
              <div class="dct-about-amenities">
                <div class="dct-about-amenities-grid">
                  <article><strong>Разные направления</strong><span>Маникюр, волосы, брови и косметология.</span></article>
                  <article><strong>Комфорт</strong><span>Спокойная атмосфера и внимание к каждому гостю.</span></article>
                  <article><strong>Прямая запись</strong><span>Связь по телефону или Мессенджер без лишних шагов.</span></article>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside class="br-team-panel" id="salonDesktopTeam" aria-labelledby="stdTeamTitle">
          <p class="std-team-kicker">Наша команда</p>
          <p class="std-team-subtitle">Нажмите на мастера, чтобы открыть страницу специалиста.</p>
          <div class="std-team-window">
            <div class="std-team-track" id="stdTeamTrack">
              ${[TEAM_MASTERS.slice(0,4),TEAM_MASTERS.slice(4)].map((page,pageIndex)=>`<div class="std-team-page" data-team-page="${pageIndex}">${page.map(master=>`
                  <button class="std-master" type="button" data-desktop-master="${master.id}">
                    <div class="std-master-avatar">${TEAM_AVATAR}</div>
                    <strong class="std-master-name">${master.name}</strong>
                    <span class="std-master-role">${master.role}</span>
                    <span class="std-master-cats">${master.cats.map(cat=>'<span class="std-master-cat">'+cat+'</span>').join('')}</span>
                  </button>
                `).join('')}</div>`).join('')}
            </div>
            <button class="std-team-edge-cue std-team-edge-prev" type="button" aria-label="Предыдущие мастера" hidden><span aria-hidden="true"></span></button>
            <button class="std-team-edge-cue std-team-edge-next" type="button" aria-label="Следующие мастера"><span aria-hidden="true"></span></button>
          </div>
        </aside>
      </div>
    </section>

    <section class="std-reviews" id="salonDesktopReviews" aria-labelledby="stdReviewsTitle">
      <div class="std-reviews-head">
        <p class="std-reviews-kicker">Отзывы</p>
        <h2 class="std-reviews-title" id="stdReviewsTitle">Что говорят о нас</h2>
        <div class="std-reviews-score">
          <strong>5.0</strong>
          <div class="std-reviews-stars" aria-label="5 звёзд">★★★★★</div>
          <div class="std-reviews-count">165 отзывов · Яндекс Карты</div>
        </div>
      </div>

      <div class="std-reviews-viewport" id="stdReviewsViewport" aria-label="Бесконечная лента отзывов клиентов.">
        <div class="std-reviews-loop">
          <div class="std-reviews-set">
            ${DESKTOP_REAL_REVIEWS.map(r=>`
              <a class="std-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">
                <div class="std-review-head">
                  <span class="std-review-avatar">${([...(String(r[0]).trim())][0]||'S').toUpperCase()}</span>
                  <span>
                    <strong class="std-review-name">${r[0]}</strong>
                    <span class="std-review-meta">Яндекс Карты${r[2]?' · '+r[2]:''}</span>
                    <span class="std-review-stars">★★★★★</span>
                  </span>
                </div>
                <p class="std-review-text">${r[1]}</p>
                <span class="std-review-more">Подробнее →</span>
              </a>
            `).join('')}
          </div>
          <div class="std-reviews-set" aria-hidden="true">
            ${DESKTOP_REAL_REVIEWS.map(r=>`
              <a class="std-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener" tabindex="-1">
                <div class="std-review-head">
                  <span class="std-review-avatar">${([...(String(r[0]).trim())][0]||'S').toUpperCase()}</span>
                  <span>
                    <strong class="std-review-name">${r[0]}</strong>
                    <span class="std-review-meta">Яндекс Карты${r[2]?' · '+r[2]:''}</span>
                    <span class="std-review-stars">★★★★★</span>
                  </span>
                </div>
                <p class="std-review-text">${r[1]}</p>
                <span class="std-review-more">Подробнее →</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="std-reviews-actions">
        <a class="std-reviews-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Смотреть все отзывы →</a>
      </div>
    </section>

    <section class="std-contact" id="salonDesktopContacts" aria-labelledby="stdContactTitle">
      <div class="std-contact-inner">
        <div class="std-contact-head">
          <div>
            <p class="std-contact-kicker">Контакты</p>
            <h2 class="std-contact-title" id="stdContactTitle">Ждём вас</h2>
          </div>
          <div class="std-contact-status" id="stdContactStatus">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
            <span id="stdContactStatusText">График работы</span>
          </div>
        </div>

        <div class="std-contact-body">
          <div class="std-contact-list">
            <a class="std-contact-card" href="#salonDesktopContacts" aria-disabled="true">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6.5-5.4 6.5-11a6.5 6.5 0 1 0-13 0c0 5.6 6.5 11 6.5 11Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Солнечная ул., 6, Люберцы</strong><span class="std-contact-card-sub">Солнечная ул., 6, Люберцы</span></span>
            </a>

            <a class="std-contact-card" href="tel:+79266143300">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">+7 (926) 614-33-00</strong><span class="std-contact-card-sub">Нажмите, чтобы позвонить</span></span>
            </a>

            <a class="std-contact-card" href="https://t.me/+79266143300" target="_blank" rel="noopener">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v10H9l-4 3v-13Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.5 9.2c.8 2.2 2.1 3.5 4.3 4.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">Telegram</strong><span class="std-contact-card-sub">Написать в студию</span></span>
            </a>

            <div class="std-contact-card static">
              <span class="std-contact-card-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3.2 1.8"></path></svg>
              </span>
              <span class="std-contact-card-copy"><strong class="std-contact-card-title">График работы</strong><span class="std-contact-card-sub">10:00–20:00</span></span>
            </div>
          </div>

          <div class="std-contact-right">
            <div class="std-contact-map"><iframe title="Карта салона" loading="eager" src="https://www.google.com/maps?q=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B&output=embed"></iframe></div>
            <div class="std-contact-actions">
              <a class="std-contact-action-btn std-contact-call" href="tel:+79266143300">Позвонить</a>
              <a class="std-contact-action-btn std-contact-route" href="https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B" target="_blank" rel="noopener">Построить маршрут</a>
            </div>
          </div>
        </div>
      </div>

      <div class="std-contact-bottom">
        <a class="std-contact-brand" href="https://tanem.ru/" target="_blank" rel="noopener">
          <span class="br-tanem-mark">T</span>
          <span class="br-tanem-copy">Создано в <strong>TANEM.ru</strong></span>
        </a>
      </div>
    </section>

    <div class="std-master-overlay" id="stdMasterOverlay" role="dialog" aria-modal="true" aria-label="Мастер Студия Колористики Елены Багдасарян">
      <div class="std-master-page-panel">
        <div class="std-master-page-top">
          <button class="std-master-page-close" id="stdMasterPageClose" type="button" aria-label="Закрыть">←</button>
          <span>СТУДИЯ КОЛОРИСТИКИ ЕЛЕНЫ БАГДАСАРЯН</span>
          <i aria-hidden="true"></i>
        </div>
        <div class="std-master-page-content" id="stdMasterPageContent"></div>
        <button class="std-master-page-book" id="stdMasterPageBook" type="button">Записаться онлайн</button>
      </div>
    </div>

    <div class="std-book-overlay" id="stdBookOverlay" role="dialog" aria-modal="true" aria-label="Запись Студия Колористики Елены Багдасарян">
      <div class="std-book-panel">
        <button class="std-book-close" id="stdBookClose" type="button" aria-label="Закрыть">×</button>
        <p class="std-services-kicker">Запись</p><h3>Как вам удобнее записаться?</h3><p>Выберите удобный способ связи.</p>
        <div class="std-book-options">
          <a href="tel:+79266143300"><span>Телефон</span><span>+7 (926) 614-33-00 →</span></a>
          <a href="https://t.me/+79266143300" target="_blank" rel="noopener"><span>Telegram</span><span>Написать →</span></a>
          <a href="https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B" target="_blank" rel="noopener"><span>Google Карты</span><span>Открыть →</span></a>
        </div>
      </div>
    </div>

    <div class="std-gallery-browser" id="stdGalleryBrowser" role="dialog" aria-modal="true" aria-label="Галерея Студия Колористики Елены Багдасарян">
      <div class="std-gallery-browser-shell">
        <div class="std-gallery-browser-top">
          <button class="std-gallery-browser-back" id="stdGalleryBrowserBack" type="button" aria-label="Закрыть галерею">←</button>
          <div class="std-gallery-browser-title"><strong>СТУДИЯ КОЛОРИСТИКИ</strong><span>ЕЛЕНА БАГДАСАРЯН</span></div>
          <div></div>
        </div>
        <div class="std-gallery-browser-tabs" id="stdGalleryBrowserTabs"></div>
        <div class="std-gallery-browser-grid" id="stdGalleryBrowserGrid"></div>
      </div>
    </div>

    <div class="std-gallery" id="stdGallery" role="dialog" aria-modal="true" aria-label="Галерея Студия Колористики Елены Багдасарян">
      <button class="std-gallery-close" id="stdGalleryClose" type="button" aria-label="Закрыть">×</button>
      <div class="std-gallery-stage">
        <div class="std-gallery-hint">Увеличение: прокрутите колесо мыши или дважды нажмите на фотографию</div>
        <div class="std-gallery-canvas"><img class="std-gallery-image" id="stdGalleryImage" src="" alt="Фотография Студия Колористики Елены Багдасарян"><video class="std-gallery-video" id="stdGalleryVideo" controls playsinline preload="metadata" hidden></video></div>
        <button class="std-gallery-nav std-gallery-prev" id="stdGalleryPrev" type="button" aria-label="Предыдущее фото">‹</button>
        <button class="std-gallery-nav std-gallery-next" id="stdGalleryNext" type="button" aria-label="Следующее фото">›</button>
        <span class="std-gallery-count" id="stdGalleryCount"></span>
        <button class="std-view-gallery" id="stdViewGallery" type="button">Открыть галерею</button>
      </div>
    </div>
  `;
  document.body.appendChild(root);
  const revealDesktopRoot=()=>requestAnimationFrame(()=>root.classList.add('desktop-ready'));
  if(document.documentElement.classList.contains('br-booting')){
    window.addEventListener('br:intro-done',revealDesktopRoot,{once:true});
  }else{
    revealDesktopRoot();
  }

  const bookBtn=document.getElementById('stdBookBtn');
  const bookOverlay=document.getElementById('stdBookOverlay');
  const openDesktopBooking=()=>{bookOverlay.classList.add('open');document.body.style.overflow='hidden'};
  const closeDesktopBooking=()=>{bookOverlay.classList.remove('open');if(!document.querySelector('.std-gallery.open,.std-gallery-browser.open,.std-price-viewer.open'))document.body.style.overflow=''};
  bookBtn.addEventListener('click',openDesktopBooking);
  const headerBookBtn=document.getElementById('stdHeaderBookBtn');
  if(headerBookBtn)headerBookBtn.addEventListener('click',openDesktopBooking);
  const stickyServiceBook=document.getElementById('stdStickyServiceBook');
  if(stickyServiceBook)stickyServiceBook.addEventListener('click',openDesktopBooking);
  document.getElementById('stdBookClose').addEventListener('click',closeDesktopBooking);
  bookOverlay.addEventListener('click',e=>{if(e.target===bookOverlay)closeDesktopBooking()});

  const galleryBrowser=document.getElementById('stdGalleryBrowser');
  const galleryBrowserTabs=document.getElementById('stdGalleryBrowserTabs');
  const galleryBrowserGrid=document.getElementById('stdGalleryBrowserGrid');
  const gallery=document.getElementById('stdGallery');
  const galleryStage=document.querySelector('.std-gallery-stage');
  const galleryCanvas=document.querySelector('.std-gallery-canvas');
  const galleryImage=document.getElementById('stdGalleryImage');
  const galleryVideo=document.getElementById('stdGalleryVideo');
  const galleryHint=document.querySelector('.std-gallery-hint');
  const galleryCount=document.getElementById('stdGalleryCount');
  const galleryViewAll=document.getElementById('stdViewGallery');
  let galleryCategory='Ногти';
  let galleryItems=PORTFOLIO.slice();
  let galleryIndex=0;
  let galleryScale=1,galleryX=0,galleryY=0;
  let galleryDragStartX=0,galleryDragStartY=0,galleryPanStartX=0,galleryPanStartY=0,galleryDragging=false;
  let galleryPinchStart=0,galleryPinchBase=1,galleryHadPinch=false;

  function clampDesktopViewer(){
    if(galleryScale<=1){galleryX=0;galleryY=0;return}
    const maxX=(galleryScale-1)*galleryCanvas.clientWidth*.5;
    const maxY=(galleryScale-1)*galleryCanvas.clientHeight*.5;
    galleryX=Math.max(-maxX,Math.min(maxX,galleryX));
    galleryY=Math.max(-maxY,Math.min(maxY,galleryY));
  }
  function applyDesktopViewerTransform(){
    clampDesktopViewer();
    galleryImage.style.transform='translate3d('+galleryX+'px,'+galleryY+'px,0) scale('+galleryScale+')';
  }
  function resetDesktopViewer(){
    galleryScale=1;galleryX=0;galleryY=0;galleryPinchStart=0;galleryPinchBase=1;
    applyDesktopViewerTransform();
  }
  function paintGallery(){
    const item=galleryItems[galleryIndex];
    if(!item)return;
    const isVideo=item.type==='video';
    try{galleryVideo.pause()}catch(_){}
    galleryImage.hidden=isVideo;
    galleryVideo.hidden=!isVideo;
    galleryHint.hidden=isVideo;
    if(isVideo){
      galleryVideo.src=item.src;
      galleryVideo.setAttribute('aria-label',item.alt||'Видео студии');
      try{galleryVideo.load()}catch(_){}
      requestAnimationFrame(()=>{const p=galleryVideo.play();if(p&&typeof p.catch==='function')p.catch(()=>{})});
    }else{
      galleryVideo.removeAttribute('src');
      galleryImage.src=item.src;
      galleryImage.alt=item.alt||'Фотография Студия Колористики Елены Багдасарян';
    }
    galleryCount.textContent=String(galleryIndex+1).padStart(2,'0')+' / '+String(galleryItems.length).padStart(2,'0');
    document.getElementById('stdGalleryPrev').hidden=galleryItems.length<2;
    document.getElementById('stdGalleryNext').hidden=galleryItems.length<2;
    resetDesktopViewer();
  }
  function openDesktopViewer(items,index=0,source='gallery'){
    const sourceItems=Array.isArray(items)&&items.length?items:PORTFOLIO.slice();
    const safeIndex=Math.max(0,Math.min(index,sourceItems.length-1));
    const selected=sourceItems[safeIndex];
    const fullIndex=selected?DESKTOP_ALL_MEDIA.findIndex(item=>item.src===selected.src):-1;
    galleryItems=fullIndex>=0?DESKTOP_ALL_MEDIA:sourceItems;
    gallery.dataset.source=source;
    galleryViewAll.hidden=false;
    galleryIndex=fullIndex>=0?fullIndex:safeIndex;
    paintGallery();
    gallery.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopViewer(){
    try{galleryVideo.pause()}catch(_){}
    gallery.classList.remove('open');
    resetDesktopViewer();
    if(!galleryBrowser.classList.contains('open'))document.body.style.overflow='';
  }
  function moveDesktopGallery(step){
    if(galleryItems.length<2)return;
    galleryIndex=(galleryIndex+step+galleryItems.length)%galleryItems.length;
    paintGallery();
  }

  function renderDesktopGalleryBrowser(){
    const cats=Object.keys(DESKTOP_GALLERY_GROUPS);
    const items=DESKTOP_GALLERY_GROUPS[galleryCategory]||[];
    if(!galleryBrowserTabs.childElementCount){
      galleryBrowserTabs.innerHTML=cats.map(cat=>'<button class="std-gallery-browser-tab" type="button" data-gallery-category="'+cat+'">'+cat+'</button>').join('');
      galleryBrowserTabs.querySelectorAll('[data-gallery-category]').forEach(btn=>btn.onclick=()=>{
        galleryCategory=btn.dataset.galleryCategory;
        renderDesktopGalleryBrowser();
      });
    }
    galleryBrowserTabs.querySelectorAll('[data-gallery-category]').forEach(btn=>{
      const active=btn.dataset.galleryCategory===galleryCategory;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-selected',active?'true':'false');
    });
    galleryBrowserGrid.innerHTML=items.map((item,index)=>item.type==='video'?'<button class="std-gallery-browser-tile std-gallery-browser-video" type="button" data-gallery-index="'+index+'" aria-label="Открыть видео"><video src="'+item.src+'" muted autoplay loop playsinline preload="metadata" aria-label="'+item.alt+'"></video></button>':'<button class="std-gallery-browser-tile" type="button" data-gallery-index="'+index+'" aria-label="Открыть фотографию"><img src="'+item.src+'" alt="'+item.alt+'" loading="lazy" decoding="async"></button>').join('');
    galleryBrowserGrid.querySelectorAll('[data-gallery-index]').forEach(btn=>btn.onclick=()=>{
      openDesktopViewer(items,Number(btn.dataset.galleryIndex)||0,'gallery');
    });
  }
  function openDesktopGalleryBrowser(cat='Ногти'){
    galleryCategory=Object.prototype.hasOwnProperty.call(DESKTOP_GALLERY_GROUPS,cat)?cat:'Ногти';
    renderDesktopGalleryBrowser();
    galleryBrowser.classList.add('open');
    galleryBrowser.scrollTop=0;
    document.body.style.overflow='hidden';
  }
  function closeDesktopGalleryBrowser(){
    galleryBrowser.classList.remove('open');
    if(!gallery.classList.contains('open'))document.body.style.overflow='';
  }

  const desktopPortfolioGrid=document.querySelector('#salonDesktopPortfolio .std-portfolio-grid');
  if(desktopPortfolioGrid){
    desktopPortfolioGrid.addEventListener('click',e=>{
      const btn=e.target.closest('.std-work[data-portfolio-index]');
      if(!btn)return;
      e.preventDefault();
      e.stopPropagation();
      openDesktopViewer(PORTFOLIO,Number(btn.dataset.portfolioIndex)||0,'portfolio');
    });
  }
  document.getElementById('stdOpenGallery').addEventListener('click',()=>openDesktopGalleryBrowser('Салон'));
  document.getElementById('stdStickyGalleryOpen')?.addEventListener('click',()=>openDesktopGalleryBrowser('Салон'));
  const heroPhoto=root.querySelector('.std-hero-photo');
  if(heroPhoto){
    heroPhoto.style.cursor='pointer';
    heroPhoto.setAttribute('role','button');
    heroPhoto.setAttribute('tabindex','0');
    heroPhoto.setAttribute('aria-label','Открыть галерею салона');
    const openHeroGallery=()=>openDesktopGalleryBrowser('Салон');
    heroPhoto.addEventListener('click',openHeroGallery);
    heroPhoto.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();openHeroGallery()}
    });
  }
  document.getElementById('stdGalleryBrowserBack').addEventListener('click',closeDesktopGalleryBrowser);
  document.getElementById('stdGalleryClose').addEventListener('click',closeDesktopViewer);
  document.getElementById('stdGalleryPrev').addEventListener('click',()=>moveDesktopGallery(-1));
  document.getElementById('stdGalleryNext').addEventListener('click',()=>moveDesktopGallery(1));
  galleryViewAll.addEventListener('click',()=>{closeDesktopViewer();openDesktopGalleryBrowser('Салон')});
  gallery.addEventListener('click',e=>{if(e.target===gallery)closeDesktopViewer()});

  galleryStage.addEventListener('wheel',e=>{
    if(!gallery.classList.contains('open'))return;
    if(!galleryVideo.hidden)return;
    e.preventDefault();
    const delta=e.deltaY<0?.18:-.18;
    galleryScale=Math.max(1,Math.min(4,galleryScale+delta));
    if(galleryScale<=1.01)galleryScale=1;
    applyDesktopViewerTransform();
  },{passive:false});
  const toggleDesktopViewerZoom=e=>{
    if(!galleryVideo.hidden)return;
    if(e)e.preventDefault();
    galleryScale=galleryScale>1?1:2;
    if(galleryScale===1){galleryX=0;galleryY=0}
    applyDesktopViewerTransform();
  };
  galleryCanvas.addEventListener('dblclick',toggleDesktopViewerZoom);
  galleryImage.addEventListener('dblclick',toggleDesktopViewerZoom);

  galleryStage.addEventListener('pointerdown',e=>{
    if(!galleryVideo.hidden)return;
    if(e.pointerType==='touch'||e.target.closest('.std-gallery-nav,.std-view-gallery'))return;
    galleryDragging=true;
    galleryDragStartX=e.clientX;galleryDragStartY=e.clientY;
    galleryPanStartX=galleryX;galleryPanStartY=galleryY;
    try{galleryStage.setPointerCapture(e.pointerId)}catch(_){}
  });
  galleryStage.addEventListener('pointermove',e=>{
    if(!galleryDragging||e.pointerType==='touch')return;
    if(galleryScale>1){
      galleryX=galleryPanStartX+(e.clientX-galleryDragStartX);
      galleryY=galleryPanStartY+(e.clientY-galleryDragStartY);
      applyDesktopViewerTransform();
    }
  });
  galleryStage.addEventListener('pointerup',e=>{
    if(!galleryDragging||e.pointerType==='touch')return;
    galleryDragging=false;
    const dx=e.clientX-galleryDragStartX,dy=e.clientY-galleryDragStartY;
    try{galleryStage.releasePointerCapture(e.pointerId)}catch(_){}
    if(galleryScale===1&&Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.1)moveDesktopGallery(dx<0?1:-1);
  });
  galleryStage.addEventListener('pointercancel',()=>{galleryDragging=false});

  const pinchDistance=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
  galleryCanvas.addEventListener('touchstart',e=>{
    if(!galleryVideo.hidden)return;
    if(e.touches.length===2){
      e.preventDefault();galleryHadPinch=true;galleryPinchStart=pinchDistance(e);galleryPinchBase=galleryScale;
    }else if(e.touches.length===1){
      galleryDragStartX=e.touches[0].clientX;galleryDragStartY=e.touches[0].clientY;
      galleryPanStartX=galleryX;galleryPanStartY=galleryY;
    }
  },{passive:false});
  galleryCanvas.addEventListener('touchmove',e=>{
    if(!galleryVideo.hidden)return;
    if(e.touches.length===2&&galleryPinchStart){
      e.preventDefault();
      galleryScale=Math.max(1,Math.min(4,galleryPinchBase*(pinchDistance(e)/galleryPinchStart)));
      applyDesktopViewerTransform();
    }else if(e.touches.length===1&&galleryScale>1){
      e.preventDefault();
      galleryX=galleryPanStartX+(e.touches[0].clientX-galleryDragStartX);
      galleryY=galleryPanStartY+(e.touches[0].clientY-galleryDragStartY);
      applyDesktopViewerTransform();
    }
  },{passive:false});
  galleryCanvas.addEventListener('touchend',e=>{
    if(!galleryVideo.hidden)return;
    if(e.touches.length<2)galleryPinchStart=0;
    if(e.touches.length===0){
      if(!galleryHadPinch&&galleryScale===1&&galleryItems.length>1&&e.changedTouches.length){
        const dx=e.changedTouches[0].clientX-galleryDragStartX;
        const dy=e.changedTouches[0].clientY-galleryDragStartY;
        if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)moveDesktopGallery(dx<0?1:-1);
      }
      galleryHadPinch=false;
      if(galleryScale<=1.01)resetDesktopViewer();
    }
  },{passive:false});

  document.addEventListener('keydown',e=>{if(bookOverlay.classList.contains('open')&&e.key==='Escape'){closeDesktopBooking();return}});
  document.addEventListener('keydown',e=>{
    if(gallery.classList.contains('open')){
      if(e.key==='Escape')closeDesktopViewer();
      else if(e.key==='ArrowLeft')moveDesktopGallery(-1);
      else if(e.key==='ArrowRight')moveDesktopGallery(1);
      return;
    }
    if(galleryBrowser.classList.contains('open')&&e.key==='Escape')closeDesktopGalleryBrowser();
  });

  const SERVICE_PREVIEW_LIMIT=7;
  let activeServiceCategory='Все';
  let desktopServicesExpanded=false;
  const serviceTabs=document.getElementById('stdServiceTabs');
  const serviceList=document.getElementById('stdServiceList');
  const serviceMore=document.getElementById('stdServiceMore');
  const serviceMoreText=document.getElementById('stdServiceMoreText');
  const serviceMoreTextMobile=document.getElementById('stdServiceMoreTextMobile');
  const DESKTOP_SERVICE_TABS=['Все',...SERVICE_CATEGORIES];

  function desktopServiceWord(n){
    const n10=n%10,n100=n%100;
    if(n10===1&&n100!==11)return 'услугу';
    if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';
    return 'услуг';
  }

  function templateServiceCard(item){
    const title=item[0];
    const price=item[1]||'';
    const description=item[2]||item[4]||'';
    const variants=item[3]||[];
    const hasVariants=variants.length>0;
    const action=price||'Записаться';

    if(hasVariants){
      return '<button class="dct-service-card has-variants'+(description?' has-description':'')+'" type="button" data-service-book>'+
        '<span class="dct-service-card-body">'+
          '<strong class="dct-service-card-title">'+title+'</strong>'+
          '<div class="dct-service-card-description '+(description?'has-copy':'is-empty')+'">'+(description?'<p>'+description+'</p>':'')+'</div>'+
          '<div class="dct-service-card-variants">'+variants.map(v=>
            '<div class="dct-service-card-variant"><span>'+v[0]+'</span><span class="dct-service-card-variant-meta">'+(v[1]?'<small>'+v[1]+'</small>':'')+'<b>'+(v[2]||action)+'</b></span></div>'
          ).join('')+'</div>'+
        '</span>'+
      '</button>';
    }

    return '<button class="dct-service-card'+(description?' has-description':'')+'" type="button" data-service-book>'+
      '<span class="dct-service-card-body">'+
        '<strong class="dct-service-card-title">'+title+'</strong>'+
        '<div class="dct-service-card-description '+(description?'has-copy':'is-empty')+'">'+(description?'<p>'+description+'</p>':'')+'</div>'+
        '<div class="dct-service-card-meta"><b>'+action+'</b></div>'+
      '</span>'+
    '</button>';
  }

  function currentTemplateServiceState(){
    const groups=activeServiceCategory==='Все'
      ? SERVICE_CATEGORIES.map(cat=>({id:cat,label:cat,services:SERVICE_DATA[cat]||[]}))
      : SERVICE_CATEGORIES.filter(cat=>cat===activeServiceCategory).map(cat=>({id:cat,label:cat,services:SERVICE_DATA[cat]||[]}));

    const total=groups.reduce((sum,group)=>sum+group.services.length,0);
    if(desktopServicesExpanded||total<=SERVICE_PREVIEW_LIMIT){
      return {groups,total,hidden:Math.max(total-SERVICE_PREVIEW_LIMIT,0)};
    }

    let remaining=SERVICE_PREVIEW_LIMIT;
    const visible=groups.map(group=>{
      const services=group.services.slice(0,Math.max(remaining,0));
      remaining-=services.length;
      return {...group,services};
    }).filter(group=>group.services.length>0);

    return {groups:visible,total,hidden:Math.max(total-SERVICE_PREVIEW_LIMIT,0)};
  }

  function renderDesktopServices(){
    serviceTabs.innerHTML=DESKTOP_SERVICE_TABS.map(cat=>
      '<button class="mct-tab'+(cat==='Все'?' mct-tab-all':'')+(cat===activeServiceCategory?' is-active':'')+'" type="button" role="tab" aria-selected="'+(cat===activeServiceCategory?'true':'false')+'" data-service-category="'+cat+'">'+cat+'</button>'
    ).join('');

    serviceTabs.querySelectorAll('[data-service-category]').forEach(btn=>btn.onclick=()=>{
      const rail=serviceTabs.closest('.mct-tabs');
      const previousScroll=rail?.scrollLeft||0;
      activeServiceCategory=btn.dataset.serviceCategory;
      desktopServicesExpanded=false;
      renderDesktopServices();
      if(rail)rail.scrollLeft=previousScroll;
    });

    const state=currentTemplateServiceState();
    serviceList.innerHTML=state.groups.map(group=>{
      const heading=activeServiceCategory==='Все'
        ? '<div class="dct-service-category-heading"><span>'+group.label+'</span><i aria-hidden="true"></i></div>'
        : '';
      return '<section class="dct-service-category">'+heading+'<div class="dct-service-category-list">'+group.services.map(templateServiceCard).join('')+'</div></section>';
    }).join('');

    serviceList.querySelectorAll('[data-service-book]').forEach(btn=>btn.onclick=openDesktopBooking);

    serviceMore.hidden=state.total<=SERVICE_PREVIEW_LIMIT;
    serviceMore.classList.toggle('is-open',desktopServicesExpanded);
    serviceMore.setAttribute('aria-expanded',desktopServicesExpanded?'true':'false');

    const copy=desktopServicesExpanded
      ? 'Свернуть услуги'
      : ('Открыть ещё '+state.hidden+' '+desktopServiceWord(state.hidden));
    serviceMoreText.textContent=copy;
    serviceMoreTextMobile.textContent=copy;

    if(typeof applyDesktopLanguage==='function') requestAnimationFrame(applyDesktopLanguage);
  }

  serviceMore.onclick=()=>{
    const beforeTop=serviceMore.getBoundingClientRect().top;
    const beforeScroll=window.scrollY;
    const opening=!desktopServicesExpanded;
    desktopServicesExpanded=opening;
    renderDesktopServices();
    requestAnimationFrame(()=>{
      if(opening){
        window.scrollTo(0,beforeScroll);
        return;
      }
      const afterTop=serviceMore.getBoundingClientRect().top;
      const delta=afterTop-beforeTop;
      window.scrollTo(0,Math.max(0,beforeScroll+(Number.isFinite(delta)?delta:0)));
    });
  };
  renderDesktopServices();

  const desktopTeamTrack=document.getElementById('stdTeamTrack');
  const desktopTeamWindow=document.querySelector('#salonDesktopTeam .std-team-window');
  const desktopTeamPrev=document.querySelector('#salonDesktopTeam .std-team-edge-prev');
  const desktopTeamNext=document.querySelector('#salonDesktopTeam .std-team-edge-next');
  if(desktopTeamTrack&&desktopTeamWindow&&desktopTeamPrev&&desktopTeamNext){
    let activeTeamPage=0;
    let teamDragging=false;
    let teamMoved=false;
    let teamStartX=0;
    let teamDx=0;
    let teamPointer=null;

    const updateTeamCues=()=>{
      desktopTeamPrev.hidden=activeTeamPage===0;
      desktopTeamNext.hidden=activeTeamPage===1;
    };
    const paintTeam=(animate=true,dragPx=0)=>{
      desktopTeamTrack.style.transition=animate?'transform .5s cubic-bezier(.2,.72,.2,1)':'none';
      const base=activeTeamPage*-50;
      desktopTeamTrack.style.setProperty('transform','translate3d(calc('+base+'% + '+dragPx+'px),0,0)','important');
    };
    const setTeamPage=page=>{
      activeTeamPage=Math.max(0,Math.min(1,page));
      teamDx=0;
      paintTeam(true,0);
      updateTeamCues();
    };

    desktopTeamPrev.addEventListener('click',()=>setTeamPage(0));
    desktopTeamNext.addEventListener('click',()=>setTeamPage(1));

    desktopTeamWindow.addEventListener('pointerdown',e=>{
      if(e.button!==undefined&&e.button!==0)return;
      teamDragging=true;
      teamMoved=false;
      teamStartX=e.clientX;
      teamDx=0;
      teamPointer=e.pointerId;
    });
    desktopTeamWindow.addEventListener('pointermove',e=>{
      if(!teamDragging)return;
      const dx=e.clientX-teamStartX;
      if(Math.abs(dx)<5&&!teamMoved)return;
      teamMoved=true;
      teamDx=dx;
      try{desktopTeamWindow.setPointerCapture(teamPointer)}catch(_){}
      paintTeam(false,dx);
    });
    const finishTeamDrag=e=>{
      if(!teamDragging)return;
      teamDragging=false;
      if(teamPointer!==null){try{desktopTeamWindow.releasePointerCapture(teamPointer)}catch(_){}}
      teamPointer=null;
      const threshold=Math.min(90,desktopTeamWindow.clientWidth*.14);
      if(teamMoved&&Math.abs(teamDx)>threshold) activeTeamPage=Math.max(0,Math.min(1,activeTeamPage+(teamDx<0?1:-1)));
      teamDx=0;
      paintTeam(true,0);
      updateTeamCues();
    };
    desktopTeamWindow.addEventListener('pointerup',finishTeamDrag);
    desktopTeamWindow.addEventListener('pointercancel',finishTeamDrag);
    desktopTeamWindow.addEventListener('click',e=>{
      if(teamMoved){e.preventDefault();e.stopPropagation();teamMoved=false}
    },true);
    desktopTeamWindow.addEventListener('wheel',e=>{
      if(Math.abs(e.deltaX)<=Math.abs(e.deltaY)||Math.abs(e.deltaX)<18)return;
      e.preventDefault();
      setTeamPage(activeTeamPage+(e.deltaX>0?1:-1));
    },{passive:false});

    paintTeam(false,0);
    updateTeamCues();
  }

  const desktopReviewsViewport=document.getElementById('stdReviewsViewport');
  const desktopReviewsLoop=desktopReviewsViewport?.querySelector('.std-reviews-loop');
  const desktopReviewsFirstSet=desktopReviewsViewport?.querySelector('.std-reviews-set');
  if(desktopReviewsViewport&&desktopReviewsLoop&&desktopReviewsFirstSet){
    desktopReviewsViewport.style.cursor='default';
    if('IntersectionObserver' in window){
      const reviewObserver=new IntersectionObserver(entries=>{
        desktopReviewsLoop.style.animationPlayState=entries[0]?.isIntersecting&&!document.hidden?'running':'paused';
      },{rootMargin:'160px 0px',threshold:0});
      reviewObserver.observe(desktopReviewsViewport);
    }
    document.addEventListener('visibilitychange',()=>{
      desktopReviewsLoop.style.animationPlayState=document.hidden?'paused':'running';
    });
  }

  // Desktop master pages: mobile structure adapted to a wide screen.
  const masterOverlay=document.getElementById('stdMasterOverlay');
  const masterPageContent=document.getElementById('stdMasterPageContent');
  const masterPageClose=document.getElementById('stdMasterPageClose');
  const masterPageBook=document.getElementById('stdMasterPageBook');
  let activeDesktopMaster=null;
  let activeDesktopMasterTab='Профиль';

  function desktopMasterServices(master){
    return (master.cats||[]).flatMap(cat=>(SERVICE_DATA[cat]||[]).map(item=>({cat,item})));
  }
  function desktopMasterAbout(master){
    return master.about||'Описание специалиста.';
  }
  function paintDesktopMasterTab(){
    const target=masterPageContent.querySelector('.std-master-tab-content');
    if(!target||!activeDesktopMaster)return;
    const master=activeDesktopMaster;
    const items=desktopMasterServices(master);
    const works=master.work||[];
    if(activeDesktopMasterTab==='Профиль'){
      target.innerHTML='<h3>О мастере</h3><p class="std-master-about-copy">'+desktopMasterAbout(master)+'</p>';
    }else if(activeDesktopMasterTab==='Услуги'){
      target.innerHTML='<section class="std-master-page-block"><h3>Услуги</h3>'+(items.length?items.map(({cat,item})=>'<div class="std-master-page-service"><strong>'+item[0]+'</strong><span>'+cat+'</span></div>').join(''):'<p class="std-master-page-empty">Пока нет данных об услугах.</p>')+'</section>';
    }else if(activeDesktopMasterTab==='Портфолио'){
      target.innerHTML='<section class="std-master-page-block"><h3>Портфолио</h3>'+(works.length?'<div class="std-master-page-works">'+works.map((src,i)=>'<button class="std-master-page-work" type="button" data-master-work="'+i+'"><img src="'+src+'" alt="'+master.name+'" loading="lazy"></button>').join('')+'</div>':'<p class="std-master-page-empty">Пока нет фото.</p>')+'</section>';
      target.querySelectorAll('[data-master-work]').forEach(btn=>btn.onclick=()=>{
        const list=works.map(src=>({src,alt:master.name}));
        openDesktopViewer(list,Number(btn.dataset.masterWork)||0,'gallery');
      });
    }else{
      target.innerHTML='<section class="std-master-page-block"><h3>Отзывы</h3><p class="std-master-page-empty">Пока нет отзывов.</p></section>';
    }
  }
  function paintDesktopMaster(master){
    masterPageContent.innerHTML='<div class="std-master-profile"><div class="std-master-avatar">'+TEAM_AVATAR+'</div><h2>'+master.name+'</h2><p>'+master.role+'</p><div class="std-master-profile-rating"><b>★★★★★</b> · СТУДИЯ КОЛОРИСТИКИ</div><div class="std-master-profile-cats">'+(master.cats||[]).map(cat=>'<span>'+cat+'</span>').join('')+'</div></div><div class="std-master-tabs">'+['Профиль','Услуги','Портфолио','Отзывы'].map(tab=>'<button type="button" data-master-tab="'+tab+'" class="'+(tab===activeDesktopMasterTab?'active':'')+'">'+tab+'</button>').join('')+'</div><div class="std-master-tab-content"></div>';
    masterPageContent.querySelectorAll('[data-master-tab]').forEach(btn=>btn.onclick=()=>{
      activeDesktopMasterTab=btn.dataset.masterTab;
      masterPageContent.querySelectorAll('[data-master-tab]').forEach(x=>x.classList.toggle('active',x===btn));
      paintDesktopMasterTab();
    });
    paintDesktopMasterTab();
  }
  function openDesktopMaster(master){
    activeDesktopMaster=master;
    activeDesktopMasterTab='Профиль';
    paintDesktopMaster(master);
    masterOverlay.classList.add('open');
    masterOverlay.scrollTop=0;
    document.body.style.overflow='hidden';
  }
  function closeDesktopMaster(){
    masterOverlay.classList.remove('open');
    activeDesktopMaster=null;
    if(!bookOverlay.classList.contains('open')&&!gallery.classList.contains('open')&&!galleryBrowser.classList.contains('open'))document.body.style.overflow='';
  }
  document.querySelectorAll('[data-desktop-master]').forEach(btn=>btn.addEventListener('click',()=>{
    const master=TEAM_MASTERS.find(item=>item.id===btn.dataset.desktopMaster);
    if(master)openDesktopMaster(master);
  }));
  masterPageClose.addEventListener('click',closeDesktopMaster);
  masterOverlay.addEventListener('click',e=>{if(e.target===masterOverlay)closeDesktopMaster()});
  masterPageBook.addEventListener('click',()=>{closeDesktopMaster();openDesktopBooking()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&masterOverlay.classList.contains('open'))closeDesktopMaster()});

  const DESKTOP_LANG_STORAGE='salon-template-language';
  const DESKTOP_I18N_ROWS=[
    ['СТУДИЯ КОЛОРИСТИКИ','ԳՈՒՆԱԳԵՏՆԵՐԻ ՍՏՈՒԴԻԱ','COLOR STUDIO'],['ЕЛЕНЫ БАГДАСАРЯН','ԵԼԵՆԱ ԲԱՂԴԱՍԱՐՅԱՆ','ELENA BAGHDASARYAN'],
    ['Студия Колористики','Գունագետների ստուդիա','Color Studio'],['Люберцы','Լյուբերցի','Lyubertsy'],['Солнечная ул., 6','Սոլնեչնայա փ., 6','Solnechnaya St., 6'],
    ['Услуги','Ծառայություններ','Services'],['Наши работы','Մեր աշխատանքները','Our work'],['О нас','Մեր մասին','About us'],
    ['Отзывы','Կարծիքներ','Reviews'],['Контакты','Կոնտակտներ','Contacts'],['Салон красоты','Գեղեցկության սրահ','Beauty salon'],
    ['Салон красоты в самом сердце Города.','Գեղեցկության սրահ Քաղաքի սրտում։','A beauty salon in the heart of City.'],['Листайте вниз','Սահեցրեք ներքև','Scroll down'],['Люберцы,','Քաղաք,','City,'],['Солнечная ул., 6, Люберцы','Սրահի հասցե','Солнечная ул., 6, Люберцы'],
    ['Записаться','Ամրագրել','Book now'],['Записаться →','Ամրագրել →','Book now →'],['Записаться онлайн','Ամրագրել առցանց','Book online'],['Смотреть работы','Դիտել աշխատանքները','View our work'],
    ['Портфолио','Պորտֆոլիո','Portfolio'],['Вдохновляйтесь реальными результатами наших мастеров и выбирайте свой идеальный образ.','Ոգեշնչվեք մեր մասնագետների իրական աշխատանքներով և ընտրեք ձեր կերպարը։','Explore real results from our specialists and choose your look.'],['Смотреть все работы','Դիտել բոլոր աշխատանքները','View all work'],
    ['Открыть галерею','Բացել պատկերասրահը','Open gallery'],['Колесо или двойной клик — увеличить','Մեծացնելու համար օգտագործեք անիվը կամ կրկնակի սեղմումը','Use the wheel or double-click to zoom'],['Галерея','Պատկերասրահ','Gallery'],
    ['Ногти','Եղունգներ','Nails'],['Волосы','Մազեր','Hair'],['Брови и ресницы','Հոնքեր և թարթիչներ','Brows & lashes'],
    ['Косметология','Կոսմետոլոգիա','Cosmetology'],['Эпиляция','Էպիլյացիա','Hair removal'],['Макияж','Դիմահարդարում','Makeup'],
    ['Массаж','Մերսում','Massage'],['Другое','Այլ','Other'],['Все','Բոլորը','All'],
    ['Услуги и цены','Ծառայություններ և գներ','Services & prices'],['Выберите услугу','Ընտրեք ծառայությունը','Choose a service'],
    ['Все услуги собраны по направлениям. Выберите подходящую процедуру — запись откроется сразу, без лишних шагов.','Աջ կողմում ընտրեք ուղղությունը, ապա անհրաժեշտ ծառայությունը։ Դրանից հետո կբացվի սրահի հետ կապվելու հարմար տարբերակը։','Choose a category on the right, then select a service. You can then contact the salon in the way that suits you.'],
    ['Как записаться','Ինչպես ամրագրվել','How to book'],['Быстрая запись','Արագ ամրագրում','Quick booking'],['Записаться','Ամրագրել','Book'],['Категория','Բաժին','Category'],['Услуга','Ծառայություն','Service'],['Связь с салоном','Կապ սրահի հետ','Contact the salon'],
    ['Выберите направление и нужную процедуру. Запись открывается в отдельной плашке, а все услуги собраны в одной понятной структуре.','Ընտրեք ուղղությունն ու անհրաժեշտ ծառայությունը։ Բոլոր ծառայությունները հավաքված են մեկ պարզ կառուցվածքում։','Choose a category and service. Everything is organized in one clear structure.'],['Выберите направление и нужную процедуру. Нажмите на услугу, чтобы выбрать удобный способ записи.','Ընտրեք ուղղությունն ու անհրաժեշտ ծառայությունը։ Սեղմեք ծառայության վրա՝ ամրագրման հարմար տարբերակ ընտրելու համար։','Choose a category and service. Select a service to choose a convenient booking method.'],
    ['Свернуть','Փակել ցանկը','Show less'],['Свернуть услуги','Փակել ծառայությունները','Collapse services'],['Открыть ещё','Բացել ևս','Show'],['О салоне','Սրահի մասին','About the salon'],
    ['Студия Колористики Елены Багдасарян — салон красоты в городе.','Студия Колористики Елены Багдасарян — գեղեցկության սրահ Քաղաքում։','Студия Колористики Елены Багдасарян — a beauty salon in City.'],
    ['Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови, ресницы и макияж. В одном пространстве работают мастера разных направлений.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և ձեր խնամքը վստահել տարբեր ուղղությունների մասնագետների։ Մենք կարևորում ենք կոկիկ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Here you can comfortably choose the services you need and trust your care to specialists in different fields. We value precise work, comfort and attentive service for every guest.'],
    ['Несколько направлений в одном салоне','Մի քանի ուղղություն մեկ սրահում','Several services in one salon'],
    ['Комфортная атмосфера','Հարմարավետ մթնոլորտ','Comfortable atmosphere'],['Индивидуальный подход','Անհատական մոտեցում','Personal approach'],
    ['Наша команда','Մեր թիմը','Our team'],['Наша команда','Студия Колористики Елены Багдасарян-ի մասնագետները','Студия Колористики Елены Багдасарян specialists'],
    ['Нажмите на мастера, чтобы открыть отдельную страницу специалиста.','Ընտրեք մասնագետին՝ նրա էջը բացելու համար։','Select a specialist to open their profile.'],
    ['Nail-мастер','Մատնահարդարման վարպետ','Nail specialist'],['Парикмахер','Վարսահարդար','Hair stylist'],['Косметолог','Կոսմետոլոգ','Cosmetologist'],
    ['Brow & Lash-мастер','Հոնքերի և թարթիչների վարպետ','Brow & lash specialist'],
    ['Маникюр · педикюр','Մատնահարդարում · ոտնահարդարում','Manicure · pedicure'],['Волосы · укладки','Մազեր · հարդարում','Hair · styling'],
    ['Что говорят о нас','Ինչ են ասում մեր մասին','What clients say about us'],['Отзывы на Яндекс Карты','Կարծիքներ Яндекс Карты-ում','Reviews on Яндекс Карты'],['Подробнее →','Ավելին →','Read more →'],['рейтинг салона','սրահի վարկանիշ','salon rating'],
    ['Смотреть все отзывы →','Դիտել բոլոր կարծիքները →','View all reviews →'],['Ждём вас','Սպասում ենք ձեզ','We look forward to seeing you'],['Солнечная ул., 6, Люберцы','Солнечная ул., 6, Люберцы','Lyubertsy, Solnechnaya st., 6'],
    ['Люберцы · открыть в Яндекс Картах','Հայաստան · բացել Яндекс Карты-ում','Lyubertsy · open in Yandex Maps'],
    ['Нажмите, чтобы позвонить','Սեղմեք զանգահարելու համար','Click to call'],['Написать в салон','Գրել սրահին','Message the salon'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],['10:00–20:00','10:00–20:00','10:00–20:00'],
    ['Цифровой офис для салонов красоты','Թվային գրասենյակ գեղեցկության սրահների համար','Digital office for beauty salons'],['Создано в','Ստեղծված է','Created in'],['Позвонить','Զանգահարել','Call'],['Построить маршрут','Կառուցել երթուղի','Get directions'],['Всё необходимое для комфортного визита','Ամեն ինչ հարմարավետ այցի համար','Everything for a comfortable visit'],['Студия колористики в Люберцах','Գեղեցկության սրահ Քաղաքում','Color studio in Lyubertsy'],['Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови, ресницы и макияж. В одном пространстве работают мастера разных направлений.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և վստահել խնամքը տարբեր ուղղությունների մասնագետներին։ Մենք կարևորում ենք ճշգրիտ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Choose the services you need and trust your care to specialists across different beauty fields. We value precise work, comfort, and attentive service for every guest.'],['Маникюр, волосы, брови и косметология.','Մատնահարդարում, մազեր, հոնքեր և կոսմետոլոգիա։','Nails, hair, brows and cosmetology.'],['Спокойная атмосфера и внимание к каждому гостю.','Հանգիստ մթնոլորտ և ուշադրություն յուրաքանչյուր հյուրի նկատմամբ։','A calm atmosphere and personal attention.'],['Связь по телефону или Мессенджер без лишних шагов.','Կապ հեռախոսով կամ Мессенджер-ով՝ առանց ավելորդ քայլերի։','Direct booking by phone or Мессенджер.'],['Разные направления','Տարբեր ուղղություններ','Different services'],['Комфорт','Հարմարավետություն','Comfort'],['Прямая запись','Ուղիղ ամրագրում','Direct booking'],
    ['Запись','Ամրագրում','Booking'],['Как вам удобнее записаться?','Ինչպե՞ս է ձեզ հարմար ամրագրել։','How would you like to book?'],
    ['Выберите удобный способ связи.','Ընտրեք ձեզ հարմար կապի տարբերակը։','Choose the most convenient way to contact us.'],
    ['Телефон','Հեռախոս','Phone'],['Открыть','Բացել','Open'],['Профиль','Պրոֆիլ','Profile'],['О мастере','Մասնագետի մասին','About the specialist'],
    ['Пока нет данных об услугах.','Ծառայությունների մասին տվյալներ դեռ չկան։','No service information yet.'],
    ['Пока нет фото.','Լուսանկարներ դեռ չկան։','No photos yet.'],['Пока нет отзывов.','Կարծիքներ դեռ չկան։','No reviews yet.'],
    ['Маникюр и педикюр. Аккуратная работа и внимание к деталям.','Մատնահարդարում և ոտնահարդարում։ Կոկիկ աշխատանք և ուշադրություն մանրուքներին։','Manicure and pedicure with careful attention to detail.'],
    ['Стрижки, окрашивание, укладки и уход за волосами.','Սանրվածք, ներկում, հարդարում և մազերի խնամք։','Haircuts, coloring, styling and hair care.'],
    ['Косметология и профессиональный уход за кожей.','Կոսմետոլոգիա և մասնագիտական մաշկի խնամք։','Cosmetology and professional skin care.'],
    ['Брови и ресницы — форма, ламинирование и уход.','Հոնքեր և թարթիչներ՝ ձևավորում, լամինացիա և խնամք։','Brows and lashes — shaping, lamination and care.'],
    ['Педикюр','Ոտնահարդարում','Pedicure'],['Наращивание ногтей','Եղունգների երկարացում','Nail extensions'],
    ['Маникюр + покрытие гель-лак','Մատնահարդարում + գել-լաք','Manicure + gel polish'],['Маникюр + покрытие лак','Մատնահարդարում + լաք','Manicure + nail polish'],
    ['Парафинотерапия для рук','Ձեռքերի պարաֆինաթերապիա','Paraffin hand treatment'],['Маникюр','Մատնահարդարում','Manicure'],
    ['Свадебные прически','Հարսանեկան սանրվածքներ','Bridal hairstyles'],['Укладка волос','Մազերի հարդարում','Hair styling'],
    ['Стрижка волос','Մազերի կտրում','Haircut'],['Окрашивание волос','Մազերի ներկում','Hair coloring'],['Уход за волосами','Մազերի խնամք','Hair care'],
    ['Спа-процедура для волос','ՍՊԱ խնամք մազերի համար','Hair spa treatment'],['Косы','Հյուսքեր','Braids'],['Наращивание волос','Մազերի երկարացում','Hair extensions'],
    ['Процедуры для бровей','Հոնքերի խնամքի ծառայություններ','Brow treatments'],['Тридинг бровей','Հոնքերի թրիդինգ','Brow threading'],
    ['Коррекция формы бровей','Հոնքերի ձևի շտկում','Brow shaping'],['Ламинирование бровей','Հոնքերի լամինացիա','Brow lamination'],
    ['Ламинирование ресниц','Թարթիչների լամինացիա','Lash lamination'],['Наращивание ресниц','Թարթիչների երկարացում','Eyelash extensions'],
    ['Карбокси-терапия','Կարբոքսիթերապիա','Carboxytherapy'],['Ультразвуковая чистка лица','Դեմքի ուլտրաձայնային մաքրում','Ultrasonic facial cleansing'],
    ['Удаление волос нитью','Մազահեռացում թելով','Threading hair removal'],['Шугаринг','Շուգարինգ','Sugaring'],
    ['Электроэпиляция игловая','Ասեղային էլեկտրոէպիլյացիա','Needle electrolysis'],['Восковая эпиляция','Մոմային էպիլյացիա','Waxing'],
    ['Прокалывание ушей','Ականջների ծակում','Ear piercing'],
    ['Открыто','Բաց է','Open'],['Закрыто','Փակ է','Closed'],['10:00–20:00','10:00–20:00','10:00–20:00'],['10:00–20:00','10:00–20:00','10:00–20:00'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],['График работы','Աշխատանքային ժամեր','Opening hours']
  ];
  const desktopLangIndex={ru:0,en:2};
  const desktopDirect={};
  DESKTOP_I18N_ROWS.forEach(row=>desktopDirect[row[0]]=row);

  function desktopDetectLanguage(){
    try{
      const saved=localStorage.getItem(DESKTOP_LANG_STORAGE);
      if(/^(ru|en)$/.test(saved||''))return saved;
    }catch(_){}
    const list=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(x=>String(x).toLowerCase());
    for(const value of list){
      if(value.startsWith('ru'))return 'ru';
      if(value.startsWith('en'))return 'en';
    }
    return 'ru';
  }
  let currentDesktopLang=desktopDetectLanguage();

  function desktopDynamicTranslation(source,lang){
    let m=source.match(/^Показать ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m)return lang==='hy'?'Ցույց տալ ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Открыть ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m)return lang==='hy'?'Բացել ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Все категории · (\d+) позиций$/);
    if(m)return lang==='hy'?'Բոլոր բաժինները · '+m[1]+' ծառայություն':lang==='en'?'All categories · '+m[1]+' services':source;
    m=source.match(/^(.+) · (\d+) (?:услугу|услуги|услуг)$/);
    if(m){
      const row=desktopDirect[m[1]],cat=row?row[desktopLangIndex[lang]]:m[1];
      return lang==='hy'?cat+' · '+m[2]+' ծառայություն':lang==='en'?cat+' · '+m[2]+' services':source;
    }
    return null;
  }
  function desktopTrText(source,lang=currentDesktopLang){
    const row=desktopDirect[source];
    if(row)return row[desktopLangIndex[lang]];
    const dyn=desktopDynamicTranslation(source,lang);
    return dyn===null?source:dyn;
  }
  function desktopCanTranslate(source){return !!desktopDirect[source]||desktopDynamicTranslation(source,'ru')!==null}
  function desktopSkipText(node){
    const el=node.parentElement;
    if(!el)return true;
    if(el.closest('.std-lang-switch,.std-review-text'))return true;
    return /^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName);
  }
  function translateDesktopTree(scope,lang=currentDesktopLang){
    if(!scope)return;
    const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      if(desktopSkipText(node))return;
      const raw=node.nodeValue||'',trimmed=raw.trim();
      if(!trimmed)return;
      let canonical=node.__desktopI18nCanonical;
      if(!canonical&&desktopCanTranslate(trimmed)){
        canonical=trimmed;
        node.__desktopI18nCanonical=canonical;
      }
      if(!canonical)return;
      const leading=(raw.match(/^\s*/)||[''])[0],trailing=(raw.match(/\s*$/)||[''])[0];
      node.nodeValue=leading+desktopTrText(canonical,lang)+trailing;
    });
  }
  function updateDesktopLangSwitcher(){
    root.querySelectorAll('.std-lang-switch [data-desktop-lang]').forEach(btn=>{
      const active=btn.dataset.desktopLang===currentDesktopLang;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }
  function applyDesktopLanguage(){
    translateDesktopTree(root,currentDesktopLang);
    updateDesktopLangSwitcher();
    document.documentElement.lang=currentDesktopLang;
    document.documentElement.dir='ltr';
    document.body.dataset.brLang=currentDesktopLang;


    const titles={ru:'Студия Колористики Елены Багдасарян — Люберцы',en:'Elena Baghdasaryan Color Studio — Lyubertsy'};
    document.title=titles[currentDesktopLang]||titles.ru;
  }
  root.querySelectorAll('.std-lang-switch [data-desktop-lang]').forEach(btn=>btn.addEventListener('click',()=>{
    currentDesktopLang=btn.dataset.desktopLang;
    try{localStorage.setItem(DESKTOP_LANG_STORAGE,currentDesktopLang)}catch(_){}
    applyDesktopLanguage();
  }));
  const desktopLangObserver=new MutationObserver(records=>{
    records.forEach(record=>record.addedNodes.forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE)translateDesktopTree(node.parentElement,currentDesktopLang);
      else if(node.nodeType===Node.ELEMENT_NODE)translateDesktopTree(node,currentDesktopLang);
    }));
  });
  desktopLangObserver.observe(root,{childList:true,subtree:true});
  applyDesktopLanguage();

  const revealSections=[...root.querySelectorAll('.std-portfolio,.mct-prices,.mct-about,.std-reviews,.std-contact')];
  revealSections.forEach(el=>el.classList.add('std-section-reveal'));
  if('IntersectionObserver' in window){
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in-view','is-visible');
          if(entry.target.id==='salonDesktopAbout')entry.target.querySelector('#salonDesktopTeam')?.classList.add('in-view','is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },{threshold:.09,rootMargin:'0px 0px -5% 0px'});
    revealSections.forEach(el=>revealObserver.observe(el));
  }else{
    revealSections.forEach(el=>{
      el.classList.add('in-view','is-visible');
      if(el.id==='salonDesktopAbout')el.querySelector('#salonDesktopTeam')?.classList.add('in-view','is-visible');
    });
  }

  function updateStatus(){
    const hour=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',hour:'2-digit',hour12:false}).format(new Date()));
    const open=hour>=10&&hour<20;
    const main=document.getElementById('stdStatusMain');
    const sub=document.getElementById('stdStatusSub');
    if(main){main.textContent=open?'Открыто':'Закрыто';main.className='std-status-main';main.style.color=''}
    if(sub)sub.textContent='10:00–20:00';
    const address=root.querySelector('.std-address');
    if(address)address.innerHTML='<span>Люберцы</span><span>Солнечная ул., 6</span>';
    const stickyStatus=document.getElementById('stdStickyServiceStatus');
    const stickyStatusSub=document.getElementById('stdStickyServiceStatusSub');
    const stickyCard=document.getElementById('stdStickyServiceCard');
    if(stickyStatus)stickyStatus.textContent=open?'Открыто':'Закрыто';
    if(stickyStatusSub)stickyStatusSub.textContent='10:00–20:00';
    if(stickyCard){stickyCard.classList.toggle('is-open',open);stickyCard.classList.toggle('is-closed',!open)}
    const contactStatus=document.getElementById('stdContactStatus');
    const contactStatusText=document.getElementById('stdContactStatusText');
    if(contactStatus){contactStatus.classList.toggle('open',open);contactStatus.classList.toggle('closed',!open)}
    if(contactStatusText)contactStatusText.textContent=open?'Открыто до 20:00':'Закрыто · 10:00–20:00';
    requestAnimationFrame(applyDesktopLanguage);
  }
  updateStatus();
})();

(function(){
  'use strict';
  const root=document.getElementById('salon-desktop-v1');
  if(!root)return;

  const PHONE_HREF='tel:+79266143300';
  const PHONE_TEXT='+7 (926) 614-33-00';
  const TELEGRAM='https://t.me/+79266143300';
  const YANDEX_REVIEWS='https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/reviews/';
  const GOOGLE_MAPS='https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B';
  const GOOGLE_EMBED='https://www.google.com/maps?q=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B&output=embed';
  const ADDRESS='Солнечная ул., 6, Люберцы';

  const hb=root.querySelector('.std-header-brand');
  if(hb)hb.innerHTML='<img class="std-header-crown" src="logo.webp" alt="Студия Колористики Елены Багдасарян">';

  const tg=root.querySelector('.std-tagline');
  if(tg)tg.textContent='Окрашивание, стрижки, укладки и beauty-услуги в Люберцах.';

  const heroMedia=root.querySelector('#stdHeroMedia');
  if(heroMedia){
    if(heroMedia.tagName!=='IMG'){
      const img=document.createElement('img');
      img.id='stdHeroMedia';
      img.src='salon3.webp';
      img.alt='Интерьер Студии колористики Елены Багдасарян';
      heroMedia.replaceWith(img);
    }else{
      heroMedia.src='salon3.webp';
      heroMedia.alt='Интерьер Студии колористики Елены Багдасарян';
    }
  }

  const aboutImage=root.querySelector('.mct-about-portrait img');
  if(aboutImage){aboutImage.src='masterpc.webp';aboutImage.alt='Студия Колористики Елены Багдасарян'}
  const aboutBrand=root.querySelector('.dct-about-brand');
  const aboutKind=root.querySelector('.dct-about-kind');
  const aboutCopy=root.querySelector('.dct-about-copy');
  if(aboutBrand)aboutBrand.textContent='Студия Колористики';
  if(aboutKind)aboutKind.textContent='Елены Багдасарян';
  if(aboutCopy)aboutCopy.textContent='Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови и ресницы. В одном пространстве работают мастера разных направлений.';

  const amenities=[...root.querySelectorAll('.dct-about-amenities-grid article')];
  if(amenities[0])amenities[0].innerHTML='<strong>Колористика и волосы</strong><span>Окрашивание, стрижки, укладки, ботокс и кератин.</span>';
  if(amenities[1])amenities[1].innerHTML='<strong>Beauty-направления</strong><span>Брови, ресницы и ногтевой сервис.</span>';
  if(amenities[2])amenities[2].innerHTML='<strong>Прямая запись</strong><span>Связь по телефону или Telegram без лишних шагов.</span>';

  const score=root.querySelector('.std-reviews-score strong');
  const count=root.querySelector('.std-reviews-count');
  if(score)score.textContent='5.0';
  if(count)count.textContent='165 отзывов · Яндекс Карты';
  root.querySelectorAll('.std-review-card,.std-reviews-all').forEach(a=>{
    a.href=YANDEX_REVIEWS;
    a.target='_blank';
    a.rel='noopener';
  });

  const contacts=[...root.querySelectorAll('#salonDesktopContacts .std-contact-card')];
  if(contacts[0]){
    contacts[0].href=GOOGLE_MAPS;
    contacts[0].target='_blank';
    contacts[0].rel='noopener';
    contacts[0].removeAttribute('aria-disabled');
    const title=contacts[0].querySelector('.std-contact-card-title');
    const sub=contacts[0].querySelector('.std-contact-card-sub');
    if(title)title.textContent=ADDRESS;
    if(sub)sub.textContent='Открыть в Google Картах';
  }
  if(contacts[1]){
    contacts[1].href=PHONE_HREF;
    contacts[1].removeAttribute('aria-disabled');
    const title=contacts[1].querySelector('.std-contact-card-title');
    const sub=contacts[1].querySelector('.std-contact-card-sub');
    if(title)title.textContent=PHONE_TEXT;
    if(sub)sub.textContent='Нажмите, чтобы позвонить';
  }
  if(contacts[2]){
    contacts[2].href=TELEGRAM;
    contacts[2].target='_blank';
    contacts[2].rel='noopener';
    contacts[2].removeAttribute('aria-disabled');
    const title=contacts[2].querySelector('.std-contact-card-title');
    const sub=contacts[2].querySelector('.std-contact-card-sub');
    if(title)title.textContent='Telegram';
    if(sub)sub.textContent='Написать в студию';
  }
  if(contacts[3]){
    const sub=contacts[3].querySelector('.std-contact-card-sub');
    if(sub)sub.textContent='10:00–20:00';
  }

  const map=root.querySelector('#salonDesktopContacts iframe');
  if(map)map.src=GOOGLE_EMBED;
  const call=root.querySelector('#salonDesktopContacts .std-contact-call');
  if(call){call.href=PHONE_HREF;call.removeAttribute('aria-disabled')}
  const route=root.querySelector('#salonDesktopContacts .std-contact-route');
  if(route){route.href=GOOGLE_MAPS;route.target='_blank';route.rel='noopener';route.removeAttribute('aria-disabled')}

  root.querySelectorAll('.dct-service-sticky-route').forEach(a=>{
    a.href=GOOGLE_MAPS;
    a.target='_blank';
    a.rel='noopener';
    a.setAttribute('aria-label','Построить маршрут в Google Картах');
  });

  const options=[...root.querySelectorAll('#stdBookOverlay .std-book-options a')];
  if(options[0]){
    options[0].href=PHONE_HREF;
    options[0].removeAttribute('aria-disabled');
    options[0].innerHTML='<span>Телефон</span><span>'+PHONE_TEXT+' →</span>';
  }
  if(options[1]){
    options[1].href=TELEGRAM;
    options[1].target='_blank';
    options[1].rel='noopener';
    options[1].removeAttribute('aria-disabled');
    options[1].innerHTML='<span>Telegram</span><span>Написать →</span>';
  }
  if(options[2]){
    options[2].href=GOOGLE_MAPS;
    options[2].target='_blank';
    options[2].rel='noopener';
    options[2].removeAttribute('aria-disabled');
    options[2].innerHTML='<span>Google Карты</span><span>Открыть →</span>';
  }

  const hour=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',hour:'2-digit',hour12:false}).format(new Date()));
  const open=hour>=10&&hour<20;
  const contactStatus=root.querySelector('#stdContactStatus');
  const contactStatusText=root.querySelector('#stdContactStatusText');
  if(contactStatus){contactStatus.classList.toggle('open',open);contactStatus.classList.toggle('closed',!open)}
  if(contactStatusText)contactStatusText.textContent=open?'Открыто до 20:00':'Закрыто · 10:00–20:00';
  const stickyStatus=root.querySelector('#stdStickyServiceStatus');
  const stickySub=root.querySelector('#stdStickyServiceStatusSub');
  if(stickyStatus)stickyStatus.textContent=open?'Открыто':'Закрыто';
  if(stickySub)stickySub.textContent='10:00–20:00';
})();
