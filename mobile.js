

(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  const PHONE='+7 (926) 614-33-00';
  const WHATSAPP_URL='https://t.me/+79266143300';
  const YANDEX='https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/prices/?ll=38.040884%2C55.682708&z=10.82';
  const YANDEX_REVIEWS='https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/reviews/';
  const ADDRESS='Солнечная ул., 6, Люберцы';
  const RATING='5.0';
  const RATINGS_COUNT=258;
  const services=[
  [
    "hair",
    "Экспресс тонирование",
    "3000 ₽"
  ],
  [
    "hair",
    "Окрашивание 1 тон — длина 1 (короткие)",
    "4000 ₽"
  ],
  [
    "hair",
    "Окрашивание 1 тон — длина 2 (средние)",
    "5000 ₽"
  ],
  [
    "hair",
    "Окрашивание 1 тон — длина 3 (длинные)",
    "6000 ₽"
  ],
  [
    "hair",
    "Окрашивание 1 тон — длина 4 (очень длинные)",
    "8000 ₽"
  ],
  [
    "hair",
    "Сложное окрашивание 2 тона",
    "10000 ₽"
  ],
  [
    "hair",
    "Контуринг у лица",
    "5000 ₽"
  ],
  [
    "hair",
    "2 яркие пряди у лица",
    "4000 ₽"
  ],
  [
    "hair",
    "Микромелирование + тонирование — длина 2 (каре)",
    "10000 ₽"
  ],
  [
    "hair",
    "Микромелирование + тонирование — длина 3",
    "13000 ₽"
  ],
  [
    "hair",
    "Окрашивание — длина 4",
    "15000 ₽"
  ],
  [
    "hair",
    "Выход из черного — длина 4 (очень длинные)",
    "15000 ₽"
  ],
  [
    "hair",
    "Стрижка женская — длина 1 (короткие)",
    "1500 ₽"
  ],
  [
    "hair",
    "Стрижка женская — длина 2 (средние), каре",
    "2500 ₽"
  ],
  [
    "hair",
    "Стрижка женская — длина 3 (длинные)",
    "3000 ₽"
  ],
  [
    "hair",
    "Стрижка женская — длина 4 (очень длинные)",
    "3500 ₽"
  ],
  [
    "hair",
    "Стрижка челки",
    "500 ₽"
  ],
  [
    "hair",
    "Локоны на плойку",
    "2500 ₽"
  ],
  [
    "hair",
    "Укладка",
    "3000 ₽"
  ],
  [
    "hair",
    "Плетение косичек",
    "1000 ₽"
  ],
  [
    "hair",
    "Ботокс волос до плеч",
    "4000 ₽"
  ],
  [
    "hair",
    "Ботокс волос до лопаток",
    "4500 ₽"
  ],
  [
    "hair",
    "Ботокс волос ниже лопаток",
    "5000 ₽"
  ],
  [
    "hair",
    "Ботокс волос до талии",
    "5500 ₽"
  ],
  [
    "hair",
    "Ботокс волос до поясницы",
    "6000 ₽"
  ],
  [
    "hair",
    "Ботокс волос ниже поясницы",
    "6500 ₽"
  ],
  [
    "hair",
    "Плюс к густоте волос",
    "от 1000 ₽"
  ],
  [
    "hair",
    "Кератиновое выпрямление до плеч",
    "5000 ₽"
  ],
  [
    "hair",
    "Кератиновое выпрямление до лопаток",
    "7000 ₽"
  ],
  [
    "hair",
    "Кератиновое выпрямление ниже лопаток",
    "7500 ₽"
  ],
  [
    "hair",
    "Кератиновое выпрямление до талии",
    "8000 ₽"
  ],
  [
    "brows",
    "Архитектура бровей (коррекция + окрашивание хна/краска)",
    "1800 ₽"
  ],
  [
    "brows",
    "Долговременная укладка бровей + коррекция + окрашивание",
    "3500 ₽"
  ],
  [
    "brows",
    "Долговременная укладка бровей (без окрашивания)",
    "2000 ₽"
  ],
  [
    "brows",
    "Окрашивание бровей",
    "1000 ₽"
  ],
  [
    "brows",
    "Коррекция бровей (воск / пинцет)",
    "1000 ₽"
  ],
  [
    "brows",
    "Коррекция бровей (с прореживанием)",
    "1200 ₽"
  ],
  [
    "brows",
    "Счастье для бровей",
    "1000 ₽"
  ],
  [
    "brows",
    "Долговременная укладка бровей (биофиксация) + коррекция",
    "2500 ₽"
  ],
  [
    "brows",
    "Ботокс для бровей",
    "1000 ₽"
  ],
  [
    "brows",
    "Мужская коррекция бровей",
    "1500 ₽"
  ],
  [
    "brows",
    "Удаление пушка над верхней губой",
    "600 ₽"
  ],
  [
    "brows",
    "Ламинирование ресниц без окрашивания",
    "2000 ₽"
  ],
  [
    "brows",
    "Ламинирование ресниц с окрашиванием",
    "2700 ₽"
  ],
  [
    "brows",
    "Окрашивание ресниц",
    "800 ₽"
  ],
  [
    "brows",
    "Снятие нарощенных ресниц",
    "1000 ₽"
  ],
  [
    "brows",
    "Ламинирование бровей + ресниц (с окрашиванием и коррекцией)",
    "5000 ₽"
  ],
  [
    "brows",
    "Ламинирование бровей с окрашиванием + ламинирование ресниц (без окрашивания)",
    "4500 ₽"
  ],
  [
    "brows",
    "Ламинирование ресниц + архитектура бровей с окрашиванием",
    "3500 ₽"
  ],
];
  const works=[
  {
    "src": "salon1.webp",
    "cat": "salon",
    "alt": "Фасад студии"
  },
  {
    "src": "salon2.webp",
    "cat": "salon",
    "alt": "Студия снаружи"
  },
  {
    "src": "salon3.webp",
    "cat": "salon",
    "alt": "Ресепшен студии"
  },
  {
    "src": "salon4.webp",
    "cat": "salon",
    "alt": "Рабочее место в студии"
  },
  {
    "src": "salon5.webp",
    "cat": "salon",
    "alt": "Интерьер студии"
  },
  {
    "src": "salon6.webp",
    "cat": "salon",
    "alt": "Детали интерьера студии"
  },
  {
    "src": "salon7.webp",
    "cat": "brows",
    "alt": "Процедура для бровей и ресниц"
  },
  {
    "src": "galery00001.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00002.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00003.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00004.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00005.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00006.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00007.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00008.webp",
    "cat": "makeup",
    "alt": "Макияж"
  },
  {
    "src": "galery00009.webp",
    "cat": "hair",
    "alt": "Стрижка"
  },
  {
    "src": "galery00010.webp",
    "cat": "nails",
    "alt": "Маникюр"
  },
  {
    "src": "galery00011.webp",
    "cat": "nails",
    "alt": "Педикюр"
  },
  {
    "src": "galery00012.webp",
    "cat": "nails",
    "alt": "Маникюр"
  },
  {
    "src": "galery00013.webp",
    "cat": "nails",
    "alt": "Маникюр"
  },
  {
    "src": "galery00014.webp",
    "cat": "hair",
    "alt": "Работа с волосами"
  },
  {
    "src": "galery00015.webp",
    "cat": "nails",
    "alt": "Маникюр"
  },
  {
    "src": "galery00016.webp",
    "cat": "hair",
    "alt": "Стрижка и укладка"
  }
];
  const reviews=[
  {
    "name": "Мария Густова",
    "text": "Хочу сказать большое спасибо мастеру Лауре, подстригла мне челку аккуратно и именно по тому запросу с которым я пришла. В салоне приятная атмосфера, так же хочу сказать спасибо администратору, оперативно подобрали время и записали на стрижку!"
  },
  {
    "name": "Danil Andryuk",
    "text": "Был у мастера Валерии на коррекции, все очень понравилось, сделала аккуратную форму и восстановила рост волосков в нужном направлении, действительно профессионал. Сама студия приятная и уютная, всем советую!"
  },
  {
    "name": "Анастасия Л.",
    "text": "Нужно было сделать вечерние локоны. Записали быстро и срочно. Сделали шикарную прическу, подарили комплименты и приятное общение с мастером❤️ Очень хороший салон. Приду еще."
  },
  {
    "name": "an.braa",
    "text": "Была на бровках у Надежды, очень приятная девушка, классный салон, в одном доме со мной, остались только положительные впечатления от персонала, так же была у мастера Елены (хозяйка студии) подстригла каре, всё так как я хотела, золотые руки🌷"
  },
  {
    "name": "татьяна к",
    "text": "Ходим с ребенком на стрижку к мастеру Любе. Очень довольны, Любовь хорошо находит общий язык с детьми, всегда приветлива, стрижку делает быстро и качественно. Я тоже делала стрижку и осталась довольна. Теперь мы ваши постоянные клиенты😊"
  },
  {
    "name": "Ольга Беляева",
    "text": "Благодарю замечательного мастера Асмик! Обслуживаюсь уже много лет, все года довольна результатом. Асмик большой профессионал парикмахерского искусства, достойный колорист, результат всегда на высоте! Благодарю за красоту волос, за душевное и теплое отношение!"
  },
  {
    "name": "Ксения Лунина",
    "text": "Отличная студия! Всегда тепло и приветливо! Постоянно тут стригусь и теперь крашусь) Дочку здесь собирали на важное мероприятие все на 100 баллов! Так же делала брови, просто блеск! Спасибо огромное что Вы есть)))) всем советую мастеров этой студии, все ваши пожелания и мечты будут воплощены в жизнь) 💗"
  },
  {
    "name": "Александра Родина",
    "text": "Была на педикюре и сложном окрашивании (мелирование + тонирование) + стрижка. Очень приятные девушки. Сделали все потрясающе. Я очень довольна результатом. Однозначно рекомендую салон! Просто находка, да еще и рядом с домом. Также, хочу отметить, что в салоне очень комфортно, уютно и чисто."
  },
  {
    "name": "ВЕНЕРА ДУРМАНОВА",
    "text": "Очень понравился сервис и работа мастера Елены. Делала мелирование/тонирование. Мастер сориентировала по стоимости и предложила варианты работ. Результат очень понравился! У мастера золотые руки! В салоне чистота, порядок. Рекомендация к посещению 100 %."
  }
];
  const masters=[
  {
    "id": "elena",
    "name": "Елена",
    "category": "Основатель студии · колорист",
    "initial": "Е",
    "about": "Основатель Студии Колористики Елены Багдасарян. В отзывах клиенты отмечают работу Елены с окрашиванием, тонированием и стрижками.",
    "cats": [
      "hair"
    ]
  },
  {
    "id": "asmik",
    "name": "Асмик",
    "category": "Колорист",
    "initial": "А",
    "about": "Мастер по волосам и колорист. Клиенты отмечают многолетний опыт работы с Асмик и стабильный результат.",
    "cats": [
      "hair"
    ]
  },
  {
    "id": "laura",
    "name": "Лаура",
    "category": "Мастер по волосам",
    "initial": "Л",
    "about": "Мастер по стрижкам. В отзывах отдельно отмечают аккуратную работу с челкой и точное выполнение запроса.",
    "cats": [
      "hair"
    ]
  },
  {
    "id": "lyubov",
    "name": "Любовь",
    "category": "Мастер по стрижкам",
    "initial": "Л",
    "about": "Мастер по стрижкам для взрослых и детей. Клиенты отмечают аккуратность, скорость и умение находить общий язык с детьми.",
    "cats": [
      "hair"
    ]
  },
  {
    "id": "nadezhda",
    "name": "Надежда",
    "category": "Бровист",
    "initial": "Н",
    "about": "Мастер направления бровей. Упоминается клиентами в отзывах студии.",
    "cats": [
      "brows"
    ]
  },
  {
    "id": "valeria",
    "name": "Валерия",
    "category": "Бровист",
    "initial": "В",
    "about": "Мастер направления бровей. В отзывах отмечают аккуратную форму и работу с направлением роста волосков.",
    "cats": [
      "brows"
    ]
  }
];

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap';
  document.head.appendChild(font);

  const css=document.createElement('style');
  css.id='salon-mobile-style';
  css.textContent=`
  @media(max-width:1023px){
    html,body{margin:0!important;padding:0!important;min-height:100%!important;background:#f6f1eb!important;color:#2f2926!important;overflow-x:hidden!important;-webkit-font-smoothing:antialiased!important;scrollbar-width:none}
    html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}
    body.br-app-ready>.mobile,body.br-app-ready>.desktop{display:none!important}
    #salon-mobile{--ink:#2f2926;--soft:#6e625c;--paper:#f6f1eb;--paper2:#fbf8f4;--taupe:#8b7167;--taupe-dark:#715b53;--line:rgba(65,52,47,.13);display:block;width:100%;min-height:100dvh;overflow:clip;background:var(--paper);color:var(--ink);font-family:"Manrope",Arial,sans-serif;font-weight:400}
    #salon-mobile *{box-sizing:border-box}
    #salon-mobile button,#salon-mobile a{font:inherit;-webkit-tap-highlight-color:transparent;color:inherit}
    #salon-mobile button{cursor:pointer}
    .tn13-shell{width:min(100%,520px);margin:0 auto;padding-inline:clamp(16px,4.8vw,24px)}
    .tn13-kicker{margin:0;color:#9b7d72;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}
    .tn13-display{font-family:"Cormorant Garamond",Georgia,serif}

    .tn13-intro{position:fixed;z-index:500;inset:0;display:grid;place-items:center;background:radial-gradient(circle at 50% 42%,rgba(222,203,193,.38),transparent 37%),#f8f4ef;animation:tn13Intro 1.55s cubic-bezier(.22,.78,.25,1) both;pointer-events:none}
    .tn13-intro-inner{text-align:center;color:#493c37;transform:translateY(-2vh)}
    .tn13-intro-name{font:500 clamp(54px,16vw,72px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}
    .tn13-intro-line{width:76px;height:1px;background:rgba(116,90,80,.48);margin:13px auto 10px}
    .tn13-intro-small{color:#927b72;font-size:9px;font-weight:600;letter-spacing:.24em;text-transform:uppercase}
    @keyframes tn13Intro{0%,72%{opacity:1}100%{opacity:0;visibility:hidden}}

    .tn13-hero{height:100svh;min-height:640px;background:#f8f4ee;overflow:hidden}
    .tn13-hero .tn13-shell{height:100%;display:flex;flex-direction:column;padding-bottom:max(12px,env(safe-area-inset-bottom))}
    .tn13-topbar{position:relative;z-index:40;display:flex;min-height:56px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}
    .tn13-brand{font:600 clamp(25px,7vw,31px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em;text-decoration:none}
    .tn13-menu-wrap{position:relative}
    .tn13-menu-btn{width:44px;height:44px;border:1px solid rgba(76,59,52,.1);border-radius:50%;background:rgba(255,255,255,.42);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0;backdrop-filter:blur(10px)}
    .tn13-menu-btn span{display:block;width:19px;height:1.5px;border-radius:999px;background:currentColor;transition:.24s ease}
    .tn13-menu-btn.open span:first-child{transform:translateY(6.5px) rotate(45deg)}.tn13-menu-btn.open span:nth-child(2){opacity:0}.tn13-menu-btn.open span:last-child{transform:translateY(-6.5px) rotate(-45deg)}
    .tn13-menu{position:absolute;z-index:60;top:calc(100% + 7px);right:0;width:min(74vw,270px);padding:8px 12px;border:1px solid rgba(75,56,49,.12);border-radius:18px;background:rgba(250,246,242,.97);box-shadow:0 20px 48px rgba(58,42,36,.16);backdrop-filter:blur(20px);display:none}
    .tn13-menu.open{display:grid;animation:tn13Menu .25s ease both}@keyframes tn13Menu{from{opacity:0;transform:translateY(-7px) scale(.97)}to{opacity:1;transform:none}}
    .tn13-menu a{display:flex;min-height:43px;align-items:center;gap:13px;border-bottom:1px solid rgba(75,56,49,.09);font:600 15px/1 "Cormorant Garamond",Georgia,serif;text-decoration:none}.tn13-menu a:last-child{border-bottom:0}.tn13-menu a span{color:#a48a80;font:600 8px/1 "Manrope",Arial,sans-serif;letter-spacing:.12em}

    .tn13-hero-content{padding:clamp(22px,4svh,36px) 0 0;flex:0 0 auto}
    .tn13-ticker{overflow:hidden;color:#9b7d72;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
    .tn13-ticker-track{display:flex;width:max-content;animation:tn13Ticker 24s linear infinite}.tn13-ticker-track span{padding-right:30px;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap}@keyframes tn13Ticker{to{transform:translateX(-50%)}}
    .tn13-hero h1{max-width:390px;margin:17px 0 10px;font:500 clamp(45px,14.3vw,59px)/.89 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}.tn13-hero h1 em{color:#8f7167;font-weight:500}
    .tn13-hero-copy{max-width:370px;margin:0;color:var(--soft);font-size:clamp(12px,3.45vw,13.5px);line-height:1.5}

    .tn13-visual{position:relative;flex:1 1 270px;min-height:255px;max-height:325px;margin:10px -5px 9px;overflow:visible}
    .tn13-visual-main{position:absolute;inset:3% 9% 3% 3%;border-radius:28px;overflow:hidden;background:#e8dfd7;box-shadow:0 18px 50px rgba(84,62,52,.11)}
    .tn13-visual-main img{width:100%;height:100%;object-fit:cover;display:block}
    .tn13-visual-small{position:absolute;right:0;bottom:7%;width:37%;height:44%;border:7px solid #f8f4ee;border-radius:24px;overflow:hidden;background:#ddd;box-shadow:0 12px 34px rgba(73,53,46,.15)}.tn13-visual-small img{width:100%;height:100%;object-fit:cover}
    .tn13-visual-label{position:absolute;left:5%;bottom:7%;z-index:2;padding:7px 11px;border-radius:999px;background:rgba(248,244,238,.88);backdrop-filter:blur(10px);font-size:9px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#765f57}

    .tn13-hero-bottom{flex:0 0 auto;margin-top:auto}
    .tn13-hero-actions{display:flex;align-items:center;gap:14px;margin:0 0 12px}
    .tn13-main-cta{display:inline-flex;min-height:46px;align-items:center;justify-content:center;border-radius:999px;background:var(--taupe-dark);color:#fff!important;padding:0 20px;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.02em;border:0}
    .tn13-quiet-link{font-size:11px;color:#7b6b64;text-decoration:none;border-bottom:1px solid rgba(83,67,60,.28);padding-bottom:3px}
    .tn13-stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);padding-top:11px}.tn13-stat{display:grid;gap:2px}.tn13-stat strong{font:500 22px/1 "Cormorant Garamond",Georgia,serif}.tn13-stat span{font-size:9px;color:#8b7b74;text-transform:uppercase;letter-spacing:.1em}

    .tn13-section{padding:58px 0 62px}.tn13-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:22px}.tn13-section-head h2{margin:5px 0 0;font:500 clamp(38px,11vw,48px)/.93 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-section-note{max-width:145px;margin:0;color:#8a7b74;font-size:10px;line-height:1.45;text-align:right}
    .tn13-reveal{opacity:0;transform:translateY(18px);transition:opacity .75s ease,transform .75s cubic-bezier(.22,.78,.25,1)}.tn13-reveal.visible{opacity:1;transform:none}

    .tn13-portfolio{background:#f6f1eb}
    .tn13-feature{margin:0 -7px;display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 7px}.tn13-feature::-webkit-scrollbar{display:none}.tn13-feature button{flex:0 0 86%;height:64vw;max-height:340px;border:0;padding:0;border-radius:24px;overflow:hidden;background:#e7ddd5;scroll-snap-align:center}.tn13-feature img{width:100%;height:100%;object-fit:cover}
    .tn13-work-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:16px}.tn13-work-grid button{border:0;padding:0;aspect-ratio:1/1.18;border-radius:16px;overflow:hidden;background:#e5ddd7}.tn13-work-grid img{width:100%;height:100%;object-fit:cover}
    .tn13-gallery-btn{width:100%;margin-top:13px;min-height:48px;border:1px solid var(--line);border-radius:999px;background:transparent;display:flex;align-items:center;justify-content:space-between;padding:0 17px;font-size:12px;font-weight:600;color:#66564f}

    .tn13-services{background:#2f2926;color:#f7f2ec}.tn13-services .tn13-kicker{color:#c8aa9e}.tn13-services .tn13-section-note{color:#b9a9a2}.tn13-services .tn13-section-head{margin-bottom:28px}
    .tn13-tabs{display:flex;gap:8px;overflow-x:auto;margin:0 -24px 11px;padding:0 24px;scrollbar-width:none}.tn13-tabs::-webkit-scrollbar{display:none}.tn13-tab{border:1px solid rgba(255,255,255,.18);border-radius:999px;background:transparent;color:#d8cec8!important;padding:9px 13px;white-space:nowrap;font-size:11px}.tn13-tab.active{background:#f1e7df;color:#392f2b!important;border-color:#f1e7df}
    .tn13-service-list{border-top:1px solid rgba(255,255,255,.16)}.tn13-service-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:17px 0;border-bottom:1px solid rgba(255,255,255,.14)}.tn13-service-name strong{display:block;font-size:13px;font-weight:500;line-height:1.35}.tn13-service-name small{display:none}.tn13-service-action{text-align:right}.tn13-service-action b{display:block;font:500 17px/1 "Cormorant Garamond",Georgia,serif}.tn13-service-action button{border:0;background:transparent;color:#d8b7aa!important;padding:6px 0 0;font-size:10.5px;border-bottom:1px solid rgba(216,183,170,.38)}
    .tn13-more{margin-top:17px;border:0;background:transparent;color:#d6c8c1!important;font-size:11px;padding:0;text-decoration:underline;text-underline-offset:5px}

    .tn13-team{background:#f3ece6}.tn13-team-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.tn13-master{position:relative;border:1px solid rgba(74,57,49,.1);background:rgba(255,255,255,.45);border-radius:24px;padding:16px;text-align:left;min-height:186px;overflow:hidden}.tn13-master-monogram{width:72px;height:72px;border-radius:50%;display:grid;place-items:center;background:#e2d6cf;color:#725d55;font:500 32px/1 "Cormorant Garamond",Georgia,serif;margin-bottom:22px}.tn13-master strong{display:block;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-master span{display:block;margin-top:5px;color:#83736c;font-size:10.5px;line-height:1.35}.tn13-master-arrow{position:absolute;right:15px;top:15px;font-size:18px;color:#8f776e}

    .tn13-reviews{background:#fbf8f4}.tn13-review-summary{display:flex;align-items:end;justify-content:space-between;text-decoration:none;border-bottom:1px solid var(--line);padding:0 0 18px;margin-bottom:21px}.tn13-review-summary strong{font:500 64px/.8 "Cormorant Garamond",Georgia,serif;letter-spacing:-.05em}.tn13-review-summary span{text-align:right;color:#8c766e;font-size:10px;line-height:1.7;letter-spacing:.08em;text-transform:uppercase}.tn13-review-viewport{overflow:hidden;margin:0 -24px}.tn13-review-track{display:flex;width:max-content;gap:10px;padding:0 24px;animation:tn13Reviews 125s linear infinite}.tn13-review-track.paused{animation-play-state:paused}@keyframes tn13Reviews{to{transform:translateX(-50%)}}
    .tn13-review-card{width:286px;min-height:178px;border:1px solid rgba(74,57,49,.1);border-radius:22px;background:#f5eee8;padding:18px;text-decoration:none}.tn13-review-stars{color:#9a796c;font-size:11px;letter-spacing:2px}.tn13-review-card blockquote{margin:17px 0 18px;font:500 22px/1.05 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-review-card small{color:#8b7b74;font-size:9.5px}

    .tn13-final{background:#8b7167;color:#fff;padding:62px 0 54px}.tn13-final .tn13-kicker{color:#ead8d0}.tn13-final h2{margin:8px 0 14px;font:500 clamp(42px,12vw,53px)/.9 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-final h2 em{color:#ead9d1;font-weight:500}.tn13-final-copy{margin:0 0 25px;max-width:370px;color:#ede2dd;font-size:12px;line-height:1.55}
    .tn13-final-actions{display:grid;gap:9px}.tn13-final-cta{height:52px;border:0;border-radius:999px;background:#f8f1eb;color:#503f39!important;display:flex;align-items:center;justify-content:space-between;padding:0 18px;text-decoration:none;font-size:12px;font-weight:600}.tn13-final-secondary-row{display:grid;grid-template-columns:1fr 1fr;gap:9px}.tn13-final-secondary{height:48px;border:1px solid rgba(255,255,255,.27);border-radius:999px;display:flex;align-items:center;justify-content:center;gap:7px;text-decoration:none;color:#fff!important;font-size:11px}.tn13-final-secondary svg{width:16px;height:16px;flex:0 0 auto}.tn13-final-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.22)}.tn13-final-facts strong{display:block;font:500 20px/1 "Cormorant Garamond",Georgia,serif}.tn13-final-facts small{display:block;margin-top:4px;color:#eadad3;font-size:8.5px;text-transform:uppercase;letter-spacing:.08em}
    .tn13-map{width:100%;height:210px;border:0;border-radius:22px;margin:23px 0 0;background:#ddd;filter:saturate(.6) contrast(.95)}
    .tn13-footer{background:#2f2926;color:#d8ccc6;padding:28px 0 36px;text-align:center;font-size:10px;letter-spacing:.08em;text-transform:uppercase}.tn13-footer strong{display:block;color:#fff;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em;text-transform:none;margin-bottom:7px}

    .tn13-sticky{position:fixed;z-index:180;left:14px;right:14px;bottom:calc(10px + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 7px 7px 15px;border:1px solid rgba(71,55,48,.12);border-radius:999px;background:rgba(248,244,239,.93);box-shadow:0 12px 38px rgba(56,40,34,.15);backdrop-filter:blur(18px);transform:translateY(150%);transition:transform .3s ease}.tn13-sticky.show{transform:none}.tn13-sticky span{font-size:10px;color:#81716a}.tn13-sticky strong{display:block;color:#3d332f;font-size:11px;font-weight:600}.tn13-sticky button{height:42px;border:0;border-radius:999px;background:#715b53;color:#fff!important;padding:0 18px;font-size:11px;font-weight:600}

    .tn13-overlay,.tn13-sheet{position:fixed;z-index:350;inset:0;display:none}.tn13-overlay.open{display:block;background:#f8f4ef;overflow:auto}.tn13-gallery-head{position:sticky;top:0;z-index:5;background:rgba(248,244,239,.94);backdrop-filter:blur(18px);padding:17px 20px 15px;border-bottom:1px solid var(--line)}.tn13-back{width:42px;height:42px;border:0;border-radius:50%;background:rgba(255,255,255,.5);font-size:20px}.tn13-gallery-title{font:500 39px/.95 "Cormorant Garamond",Georgia,serif;margin:17px 0 3px}.tn13-gallery-sub{font-size:10px;color:#907a71;letter-spacing:.12em;text-transform:uppercase}.tn13-gallery-tabs{display:flex;gap:8px;overflow:auto;padding:16px 20px;scrollbar-width:none}.tn13-gallery-tabs button{border:1px solid var(--line);border-radius:999px;background:transparent;padding:9px 13px;font-size:11px}.tn13-gallery-tabs button.active{background:#715b53;color:#fff!important}.tn13-gallery-list{display:grid;gap:12px;padding:0 20px 30px}.tn13-gallery-list img{width:100%;border-radius:20px;display:block}
    .tn13-sheet.open{display:flex;align-items:flex-end;background:rgba(37,29,26,.35)}.tn13-panel{width:100%;max-height:92vh;overflow:auto;background:#f8f4ef;border-radius:29px 29px 0 0;padding:26px 20px calc(26px + env(safe-area-inset-bottom));position:relative}.tn13-close{position:absolute;right:16px;top:16px;width:40px;height:40px;border:0;border-radius:50%;background:#eee4dd;font-size:20px}.tn13-master-hero{padding:20px 0 24px}.tn13-master-big{width:120px;height:120px;border-radius:50%;display:grid;place-items:center;background:#e3d7cf;color:#725d55;font:500 48px/1 "Cormorant Garamond",Georgia,serif}.tn13-master-title{font:500 42px/.95 "Cormorant Garamond",Georgia,serif;margin:19px 0 4px}.tn13-master-sub{color:#8a7770;font-size:11px}.tn13-master-about{padding:20px 0;border-top:1px solid var(--line);font-size:12px;line-height:1.58;color:#5f514b}.tn13-master-services{border-top:1px solid var(--line)}.tn13-master-service{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-bottom:1px solid var(--line);font-size:11px}.tn13-master-service b{font-weight:500}.tn13-master-service span{color:#8a7770}.tn13-sheet-cta{width:100%;height:50px;border:0;border-radius:999px;background:#715b53;color:#fff!important;margin-top:20px;font-size:12px;font-weight:600}
    #tn13BookSheet .tn13-panel{background:#fff}.tn50-book-title{margin:17px 50px 0 0;font:500 38px/.95 "Cormorant Garamond",Georgia,serif;letter-spacing:-.025em}.tn50-book-copy{margin:12px 42px 0 0;color:#736861;font-size:11.5px;line-height:1.5}.tn50-book-options{display:grid;gap:8px;margin-top:22px}.tn50-book-option{width:100%;min-height:62px;border:1px solid rgba(66,52,45,.12);border-radius:14px;padding:9px 12px;display:grid;grid-template-columns:38px minmax(0,1fr) auto;align-items:center;gap:11px;background:#fff;color:#211d1a!important;text-align:left;text-decoration:none!important}.tn50-book-option.is-pending{cursor:default;opacity:1}.tn50-book-icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center}.tn50-book-icon svg{width:21px;height:21px}.tn50-book-icon.phone{background:#f0edeb;color:#211d1a}.tn50-book-icon.whatsapp{background:#e9f7f0;color:#128c7e}.tn50-book-icon.max{background:#efebff;color:#471aff}.tn50-book-option strong{display:block;font:500 14px/1.2 "Manrope",Arial,sans-serif}.tn50-book-arrow{color:#9b8e86;font-size:17px}
  }
  @media(min-width:1024px){#salon-mobile{display:none!important}}
  `;
  document.head.appendChild(css);

  const root=document.createElement('div');
  root.id='salon-mobile';

  const serviceTabs=[['all','Все'],['hair','Волосы'],['brows','Брови и ресницы'],['makeup','Макияж']];
  const galleryTabs=[['all','Все'],['salon','Салон'],['hair','Волосы'],['nails','Ногти'],['brows','Брови и ресницы'],['makeup','Макияж']];

  root.innerHTML=`
    <header class="tn13-hero" id="tn13Top">
      <div class="tn13-shell">
        <div class="tn13-topbar">
          <a class="tn13-brand" href="#tn13Top">СТУДИЯ КОЛОРИСТИКИ</a>
          <div class="tn13-menu-wrap">
            <button class="tn13-menu-btn" id="tn13MenuBtn" type="button" aria-label="Открыть меню"><span></span><span></span><span></span></button>
            <nav class="tn13-menu" id="tn13Menu">
              <a href="#tn13Portfolio"><span>01</span>Портфолио</a>
              <a href="#tn13Services"><span>02</span>Услуги</a>
              <a href="#tn13Team"><span>03</span>Команда</a>
              <a href="#tn13Reviews"><span>04</span>Отзывы</a>
              <a href="#tn13Visit"><span>05</span>Визит и запись</a>
            </nav>
          </div>
        </div>

        <div class="tn13-hero-content">
          <div class="tn13-ticker"><div class="tn13-ticker-track"><span>Салон красоты · Город · услуги · команда · запись</span><span>Салон красоты · Город · услуги · команда · запись</span></div></div>
          <h1>Салон красоты <em>СТУДИЯ КОЛОРИСТИКИ</em></h1>
          <p class="tn13-hero-copy">Окрашивание, стрижки, укладки и beauty-услуги в Люберцах.</p>
        </div>

        <div class="tn13-visual" aria-label="Интерьер и работы Студия Колористики Елены Багдасарян">
          <button class="tn13-visual-main" type="button" data-gallery="salon"></button>
          <button class="tn13-visual-small" type="button" data-gallery="nails"></button>
          <div class="tn13-visual-label">Город · Солнечная ул., 6, Люберцы</div>
        </div>

        <div class="tn13-hero-bottom">
          <div class="tn13-hero-actions"><button class="tn13-main-cta" type="button" data-book>Записаться&nbsp; →</button><a class="tn13-quiet-link" href="#tn13Portfolio">Смотреть работы ↓</a></div>
          <div class="tn13-stats"><div class="tn13-stat"><strong>${RATING}</strong><span>рейтинг</span></div><div class="tn13-stat"><strong>${RATINGS_COUNT}</strong><span>оценок</span></div><div class="tn13-stat"><strong>${services.length}</strong><span>услуг</span></div></div>
        </div>
      </div>
    </header>

    <section class="tn13-section tn13-portfolio" id="tn13Portfolio">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Портфолио</p><h2>Пространство<br>и работы</h2></div><p class="tn13-section-note">Фотографии салона</p></div>
      </div>
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-feature">${works.slice(0,2).map(w=>`<button type="button" data-gallery="${w.cat}"><img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <div class="tn13-work-grid">${works.slice(2,5).map(w=>`<button type="button" data-gallery="${w.cat}"><img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <button class="tn13-gallery-btn" type="button" data-gallery="all"><span>Открыть всю галерею</span><span>→</span></button>
      </div>
    </section>

    <section class="tn13-section tn13-services" id="tn13Services">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Услуги</p><h2>Выберите<br>услугу</h2></div></div>
        <div class="tn13-tabs" id="tn13ServiceTabs">${serviceTabs.map((t,i)=>`<button class="tn13-tab ${i===0?'active':''}" data-service-cat="${t[0]}" type="button">${t[1]}</button>`).join('')}</div>
        <div class="tn13-service-list" id="tn13ServiceList"></div>
        <button class="tn13-more" id="tn13More" type="button">Показать ещё услуги</button>
      </div>
    </section>

    <section class="tn13-section tn13-team" id="tn13Team">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Команда</p><h2>Наша<br>команда</h2></div><p class="tn13-section-note">Персональные страницы специалистов</p></div>
        <div class="tn13-team-grid">${masters.map(m=>`<button class="tn13-master" type="button" data-master="${m.id}"><span class="tn13-master-arrow">↗</span><div class="tn13-master-monogram">${m.initial}</div><strong>${m.name}</strong><span>${m.category}</span></button>`).join('')}</div>
      </div>
    </section>

    <section class="tn13-section tn13-reviews" id="tn13Reviews">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Отзывы</p><h2>Что говорят<br>клиенты</h2></div></div>
        <a class="tn13-review-summary" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><strong>${RATING}</strong><span>★★★★★<br>Яндекс Карты →</span></a>
      </div>
      <div class="tn13-review-viewport" id="tn13ReviewViewport"><div class="tn13-review-track" id="tn13ReviewTrack">${reviews.concat(reviews).map(r=>`<a class="tn13-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><div class="tn13-review-stars">★★★★★</div><blockquote>«${r.text}»</blockquote><small>${r.name} · Яндекс Карты</small></a>`).join('')}</div></div>
    </section>

    <section class="tn13-final" id="tn13Visit">
      <div class="tn13-shell tn13-reveal">
        <p class="tn13-kicker">Визит и запись</p>
        <h2>Выберите удобный<br><em>способ записи</em></h2>
        <p class="tn13-final-copy">Адрес, график и контакты заполняются для каждого салона.</p>
        <div class="tn13-final-actions">
          <button class="tn13-final-cta" type="button" data-book><span>Записаться</span><span>→</span></button>
          <div class="tn13-final-secondary-row"><a class="tn13-final-secondary" href="https://t.me/+79266143300" target="_blank" rel="noopener"><svg class="tn50-brand-svg" aria-hidden="true"><use href="#stl-icon-whatsapp"/></svg>Telegram</a><a class="tn13-final-secondary" href="tel:+79266143300"><svg aria-hidden="true"><use href="#stl-icon-phone"/></svg>Позвонить</a><a class="tn13-final-secondary" href="${YANDEX}" target="_blank" rel="noopener">Яндекс Карты</a></div>
        </div>
        <iframe class="tn13-map" loading="lazy" src="https://www.google.com/maps?q=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B&output=embed" title="Карта Студия Колористики Елены Багдасарян"></iframe>
        <div class="tn13-final-facts"><span><strong>10–20</strong><small>ежедневно</small></span><span><strong>5.0</strong><small>рейтинг</small></span><span><strong>56</strong><small>услуг</small></span></div>
      </div>
    </section>

    <footer class="tn13-footer"><div class="tn13-shell"><strong>Студия Колористики Елены Багдасарян</strong>Цифровой офис TANEM.RU</div></footer>

    <div class="tn13-sticky" id="tn13Sticky"><span>Доступно <strong>${services.length} услуг</strong></span><button type="button" data-book>Записаться</button></div>

    <div class="tn13-overlay" id="tn13Gallery"><div class="tn13-gallery-head"><button class="tn13-back" id="tn13GalleryClose" type="button">←</button><div class="tn13-gallery-title">Галерея Студия Колористики Елены Багдасарян</div><div class="tn13-gallery-sub">Салон · ногти · волосы · макияж</div></div><div class="tn13-gallery-tabs" id="tn13GalleryTabs"></div><div class="tn13-gallery-list" id="tn13GalleryList"></div></div>

    <div class="tn13-sheet" id="tn13MasterSheet"><div class="tn13-panel"><button class="tn13-close" id="tn13MasterClose" type="button">×</button><div id="tn13MasterBody"></div></div></div>
    <div class="tn13-sheet" id="tn13BookSheet" role="dialog" aria-modal="true" aria-labelledby="tn50BookTitle"><div class="tn13-panel"><button class="tn13-close" id="tn13BookClose" type="button" aria-label="Закрыть">×</button><p class="tn13-kicker">Запись</p><h2 class="tn50-book-title" id="tn50BookTitle">Как вам удобнее записаться?</h2><p class="tn50-book-copy">Выберите удобный способ связи.</p><div class="tn50-book-options"><a class="tn50-book-option" href="#tn13Visit" aria-disabled="true"><span class="tn50-book-icon phone"><svg aria-hidden="true"><use href="#stl-icon-phone"/></svg></span><span><strong>Телефон</strong></span><span class="tn50-book-arrow">→</span></a><a class="tn50-book-option" href="#tn13Visit" aria-disabled="true"><span class="tn50-book-icon viber-generic"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg></span><span><strong>Мессенджер</strong></span><span class="tn50-book-arrow">→</span></a></div></div></div>
  `;
  document.body.appendChild(root);

  const $=(s,c=root)=>c.querySelector(s);const $$=(s,c=root)=>Array.from(c.querySelectorAll(s));

  const menuBtn=$('#tn13MenuBtn'),menu=$('#tn13Menu');
  menuBtn.addEventListener('click',()=>{menuBtn.classList.toggle('open');menu.classList.toggle('open')});
  $$('#tn13Menu a').forEach(a=>a.addEventListener('click',()=>{menuBtn.classList.remove('open');menu.classList.remove('open')}));
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn13-menu-wrap')){menuBtn.classList.remove('open');menu.classList.remove('open')}});

  let serviceCat='all',expanded=false;
  function renderServices(){const all=services.filter(s=>serviceCat==='all'||s[0]===serviceCat);const shown=expanded?all:all.slice(0,6);$('#tn13ServiceList').innerHTML=shown.map(s=>`<article class="tn13-service-row"><div class="tn13-service-name"><strong>${s[1]}</strong></div><div class="tn13-service-action"><button type="button" data-book>Записаться →</button></div></article>`).join('');const more=$('#tn13More');more.style.display=all.length>6?'block':'none';more.textContent=expanded?'Свернуть услуги':'Показать ещё '+Math.max(0,all.length-6)+' услуг';bindBook();}
  renderServices();
  $$('#tn13ServiceTabs [data-service-cat]').forEach(b=>b.addEventListener('click',()=>{serviceCat=b.dataset.serviceCat;expanded=false;$$('#tn13ServiceTabs .tn13-tab').forEach(x=>x.classList.toggle('active',x===b));renderServices()}));
  $('#tn13More').addEventListener('click',()=>{expanded=!expanded;renderServices()});

  let galleryCat='all';
  function renderGalleryTabs(){ $('#tn13GalleryTabs').innerHTML=galleryTabs.map(t=>`<button type="button" data-gallery-tab="${t[0]}" class="${galleryCat===t[0]?'active':''}">${t[1]}</button>`).join('');$$('#tn13GalleryTabs button').forEach(b=>b.addEventListener('click',()=>{galleryCat=b.dataset.galleryTab;renderGalleryTabs();renderGalleryList()})); }
  function renderGalleryList(){const arr=works.filter(w=>galleryCat==='all'||w.cat===galleryCat);$('#tn13GalleryList').innerHTML=arr.map(w=>`<img loading="lazy" decoding="async" src="${w.src}" alt="${w.alt}">`).join('')}
  function openGallery(cat){galleryCat=galleryTabs.some(t=>t[0]===cat)?cat:'all';renderGalleryTabs();renderGalleryList();$('#tn13Gallery').classList.add('open');document.body.style.overflow='hidden'}
  $$('[data-gallery]').forEach(b=>b.addEventListener('click',()=>openGallery(b.dataset.gallery)));
  $('#tn13GalleryClose').addEventListener('click',()=>{$('#tn13Gallery').classList.remove('open');document.body.style.overflow=''});

  function openMaster(id){const m=masters.find(x=>x.id===id);if(!m)return;const ms=services.filter(s=>m.cats.includes(s[0]));$('#tn13MasterBody').innerHTML=`<div class="tn13-master-hero"><div class="tn13-master-big">${m.initial}</div><div class="tn13-master-title">${m.name}</div><div class="tn13-master-sub">Мастер · ${m.category}</div></div><div class="tn13-master-about">${m.about}</div><div class="tn13-master-services">${ms.length?ms.slice(0,6).map(s=>`<div class="tn13-master-service"><b>${s[1]}</b><span>${s[2]}</span></div>`).join(''):'<div class="tn13-master-about">Персональные услуги будут добавлены после подтверждения салоном.</div>'}</div><button class="tn13-sheet-cta" type="button" data-book>Записаться</button>`;$('#tn13MasterSheet').classList.add('open');document.body.style.overflow='hidden';bindBook();}
  $$('[data-master]').forEach(b=>b.addEventListener('click',()=>openMaster(b.dataset.master)));
  $('#tn13MasterClose').addEventListener('click',()=>{$('#tn13MasterSheet').classList.remove('open');document.body.style.overflow=''});

  function openBook(){ $('#tn13BookSheet').classList.add('open');document.body.style.overflow='hidden'; }
  function bindBook(){ $$('[data-book]').forEach(b=>{if(b.dataset.bound)return;b.dataset.bound='1';b.addEventListener('click',openBook)}); }
  bindBook();
  $('#tn13BookClose').addEventListener('click',()=>{$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''});
  $$('.tn13-sheet').forEach(s=>s.addEventListener('click',e=>{if(e.target===s){s.classList.remove('open');document.body.style.overflow=''}}));

  const reviewTrack=$('#tn13ReviewTrack'),reviewViewport=$('#tn13ReviewViewport');let resume;
  reviewViewport.addEventListener('pointerdown',()=>{clearTimeout(resume);reviewTrack.classList.add('paused')},{passive:true});
  const resumeReviews=()=>{clearTimeout(resume);resume=setTimeout(()=>reviewTrack.classList.remove('paused'),500)};
  reviewViewport.addEventListener('pointerup',resumeReviews,{passive:true});reviewViewport.addEventListener('pointercancel',resumeReviews,{passive:true});

  const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -8% 0px'});$$('.tn13-reveal').forEach(el=>reveal.observe(el));

  const sticky=$('#tn13Sticky'),hero=$('#tn13Top'),final=$('#tn13Visit');let raf=0;
  function scrollState(){raf=0;const heroDone=hero.getBoundingClientRect().bottom<=0;const finalNear=final.getBoundingClientRect().top<=window.innerHeight+70;sticky.classList.toggle('show',heroDone&&!finalNear)}
  window.addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(scrollState)},{passive:true});scrollState();

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#tn13Gallery').classList.remove('open');$('#tn13MasterSheet').classList.remove('open');$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''}});
})();

(function(){
'use strict';

if(!window.matchMedia||!window.matchMedia('(max-width:1023px)').matches||window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches)return;
const root=document.getElementById('salon-mobile'); if(!root)return;
const YANDEX='https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/prices/?ll=38.040884%2C55.682708&z=10.82';
const YANDEX_RU='https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/prices/?ll=38.040884%2C55.682708&z=10.82';
const YANDEX_REVIEWS='https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/prices/?ll=38.040884%2C55.682708&z=10.82';
const ROUTE='https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B';
const PHONE='+7 (926) 614-33-00';
const WHATSAPP_URL='https://t.me/+79266143300';
const SERVICES=[
  {
    "cat": "Окрашивание",
    "title": "Экспресс тонирование",
    "price": "3000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Окрашивание 1 тон — длина 1 (короткие)",
    "price": "4000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Окрашивание 1 тон — длина 2 (средние)",
    "price": "5000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Окрашивание 1 тон — длина 3 (длинные)",
    "price": "6000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Окрашивание 1 тон — длина 4 (очень длинные)",
    "price": "8000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Сложное окрашивание 2 тона",
    "price": "10000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Контуринг у лица",
    "price": "5000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "2 яркие пряди у лица",
    "price": "4000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Микромелирование + тонирование — длина 2 (каре)",
    "price": "10000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Микромелирование + тонирование — длина 3",
    "price": "13000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Окрашивание — длина 4",
    "price": "15000 ₽",
    "desc": ""
  },
  {
    "cat": "Окрашивание",
    "title": "Выход из черного — длина 4 (очень длинные)",
    "price": "15000 ₽",
    "desc": ""
  },
  {
    "cat": "Стрижки",
    "title": "Стрижка женская — длина 1 (короткие)",
    "price": "1500 ₽",
    "desc": ""
  },
  {
    "cat": "Стрижки",
    "title": "Стрижка женская — длина 2 (средние), каре",
    "price": "2500 ₽",
    "desc": ""
  },
  {
    "cat": "Стрижки",
    "title": "Стрижка женская — длина 3 (длинные)",
    "price": "3000 ₽",
    "desc": ""
  },
  {
    "cat": "Стрижки",
    "title": "Стрижка женская — длина 4 (очень длинные)",
    "price": "3500 ₽",
    "desc": ""
  },
  {
    "cat": "Стрижки",
    "title": "Стрижка челки",
    "price": "500 ₽",
    "desc": ""
  },
  {
    "cat": "Укладки",
    "title": "Локоны на плойку",
    "price": "2500 ₽",
    "desc": "По прайсу: 2500–5000 ₽"
  },
  {
    "cat": "Укладки",
    "title": "Укладка",
    "price": "3000 ₽",
    "desc": "По прайсу: 2000–5000 ₽"
  },
  {
    "cat": "Укладки",
    "title": "Плетение косичек",
    "price": "1000 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Ботокс волос до плеч",
    "price": "4000 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Ботокс волос до лопаток",
    "price": "4500 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Ботокс волос ниже лопаток",
    "price": "5000 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Ботокс волос до талии",
    "price": "5500 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Ботокс волос до поясницы",
    "price": "6000 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Ботокс волос ниже поясницы",
    "price": "6500 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Плюс к густоте волос",
    "price": "от 1000 ₽",
    "desc": "По прайсу: 1000–1500 ₽"
  },
  {
    "cat": "Уход и кератин",
    "title": "Кератиновое выпрямление до плеч",
    "price": "5000 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Кератиновое выпрямление до лопаток",
    "price": "7000 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Кератиновое выпрямление ниже лопаток",
    "price": "7500 ₽",
    "desc": ""
  },
  {
    "cat": "Уход и кератин",
    "title": "Кератиновое выпрямление до талии",
    "price": "8000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Архитектура бровей (коррекция + окрашивание хна/краска)",
    "price": "1800 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Долговременная укладка бровей + коррекция + окрашивание",
    "price": "3500 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Долговременная укладка бровей (без окрашивания)",
    "price": "2000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Окрашивание бровей",
    "price": "1000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Коррекция бровей (воск / пинцет)",
    "price": "1000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Коррекция бровей (с прореживанием)",
    "price": "1200 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Счастье для бровей",
    "price": "1000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Долговременная укладка бровей (биофиксация) + коррекция",
    "price": "2500 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Ботокс для бровей",
    "price": "1000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Мужская коррекция бровей",
    "price": "1500 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Удаление пушка над верхней губой",
    "price": "600 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Ламинирование ресниц без окрашивания",
    "price": "2000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Ламинирование ресниц с окрашиванием",
    "price": "2700 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Окрашивание ресниц",
    "price": "800 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Снятие нарощенных ресниц",
    "price": "1000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Ламинирование бровей + ресниц (с окрашиванием и коррекцией)",
    "price": "5000 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Ламинирование бровей с окрашиванием + ламинирование ресниц (без окрашивания)",
    "price": "4500 ₽",
    "desc": ""
  },
  {
    "cat": "Брови и ресницы",
    "title": "Ламинирование ресниц + архитектура бровей с окрашиванием",
    "price": "3500 ₽",
    "desc": ""
  },
];
const GALLERY={
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
const ALL_MEDIA=[...new Map(Object.values(GALLERY).flat().map(item=>[item.src,item])).values()];
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
const REVIEW_DATA=[["Мария Густова","Хочу сказать большое спасибо мастеру Лауре, подстригла мне челку аккуратно и именно по тому запросу с которым я пришла. В салоне приятная атмосфера, так же хочу сказать спасибо администратору, оперативно подобрали время и записали на стрижку!"],["Danil Andryuk","Был у мастера Валерии на коррекции, все очень понравилось, сделала аккуратную форму и восстановила рост волосков в нужном направлении, действительно профессионал. Сама студия приятная и уютная, всем советую!"],["Анастасия Л.","Нужно было сделать вечерние локоны. Записали быстро и срочно. Сделали шикарную прическу, подарили комплименты и приятное общение с мастером❤️ Очень хороший салон. Приду еще."],["an.braa","Была на бровках у Надежды, очень приятная девушка, классный салон, в одном доме со мной, остались только положительные впечатления от персонала, так же была у мастера Елены (хозяйка студии) подстригла каре, всё так как я хотела, золотые руки🌷"],["татьяна к","Ходим с ребенком на стрижку к мастеру Любе. Очень довольны, Любовь хорошо находит общий язык с детьми, всегда приветлива, стрижку делает быстро и качественно. Я тоже делала стрижку и осталась довольна. Теперь мы ваши постоянные клиенты😊"],["Ольга Беляева","Благодарю замечательного мастера Асмик! Обслуживаюсь уже много лет, все года довольна результатом. Асмик большой профессионал парикмахерского искусства, достойный колорист, результат всегда на высоте! Благодарю за красоту волос, за душевное и теплое отношение!"],["Ксения Лунина","Отличная студия! Всегда тепло и приветливо! Постоянно тут стригусь и теперь крашусь) Дочку здесь собирали на важное мероприятие все на 100 баллов! Так же делала брови, просто блеск! Спасибо огромное что Вы есть)))) всем советую мастеров этой студии, все ваши пожелания и мечты будут воплощены в жизнь) 💗"],["Александра Родина","Была на педикюре и сложном окрашивании (мелирование + тонирование) + стрижка. Очень приятные девушки. Сделали все потрясающе. Я очень довольна результатом. Однозначно рекомендую салон! Просто находка, да еще и рядом с домом. Также, хочу отметить, что в салоне очень комфортно, уютно и чисто.","23 января 2024"],["ВЕНЕРА ДУРМАНОВА","Очень понравился сервис и работа мастера Елены. Делала мелирование/тонирование. Мастер сориентировала по стоимости и предложила варианты работ. Результат очень понравился! У мастера золотые руки! В салоне чистота, порядок. Рекомендация к посещению 100 %."]];
const MASTERS=[
  {
    "id": "elena",
    "name": "Елена",
    "role": "Основатель студии · колорист",
    "about": "Основатель Студии Колористики Елены Багдасарян. В отзывах клиенты отмечают работу Елены с окрашиванием, тонированием и стрижками.",
    "cats": [
      "Окрашивание",
      "Стрижки"
    ],
    "work": [],
    "reviewNames": [
      "an.braa",
      "ВЕНЕРА ДУРМАНОВА"
    ]
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
    "work": [],
    "reviewNames": [
      "Ольга Беляева"
    ]
  },
  {
    "id": "laura",
    "name": "Лаура",
    "role": "Мастер по волосам",
    "about": "Мастер по стрижкам. В отзывах отдельно отмечают аккуратную работу с челкой и точное выполнение запроса.",
    "cats": [
      "Стрижки"
    ],
    "work": [],
    "reviewNames": [
      "Мария Густова"
    ]
  },
  {
    "id": "lyubov",
    "name": "Любовь",
    "role": "Мастер по стрижкам",
    "about": "Мастер по стрижкам для взрослых и детей. Клиенты отмечают аккуратность, скорость и умение находить общий язык с детьми.",
    "cats": [
      "Стрижки"
    ],
    "work": [],
    "reviewNames": [
      "татьяна к"
    ]
  },
  {
    "id": "nadezhda",
    "name": "Надежда",
    "role": "Бровист",
    "about": "Мастер направления бровей. Упоминается клиентами в отзывах студии.",
    "cats": [
      "Брови и ресницы"
    ],
    "work": [],
    "reviewNames": [
      "an.braa"
    ]
  },
  {
    "id": "valeria",
    "name": "Валерия",
    "role": "Бровист",
    "about": "Мастер направления бровей. В отзывах отмечают аккуратную форму и работу с направлением роста волосков.",
    "cats": [
      "Брови и ресницы"
    ],
    "work": [],
    "reviewNames": [
      "Danil Andryuk"
    ]
  }
];
const MASTER_AVATAR='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="11" fill="currentColor"></circle><path d="M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17" fill="currentColor"></path></svg>';

const css=document.createElement('style'); css.id='salon-mobile-base-style'; css.textContent=`
@media(max-width:1023px){
#tn13Intro{display:none!important} #salon-mobile{background:#f6f0e9!important;color:#181512!important}
#salon-mobile .tn13-hero{height:744px!important;min-height:744px!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}#salon-mobile>.tn13-footer{display:none!important}
.tn22-top{position:absolute;z-index:30;top:0;left:0;right:0;height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;background:#f8f4ee}
.tn22-brand{font:500 24px/1 'Cormorant Garamond',Georgia,serif!important;letter-spacing:.02em;text-decoration:none!important;color:#171513!important}
.tn22-menu{width:32px;height:32px;border:0;background:none;padding:0;display:grid;align-content:center;justify-items:end;gap:5px}.tn22-menu i{display:block;width:23px;height:1px;background:#1b1816}.tn22-menu i:nth-child(2){width:17px}.tn22-navpop{position:absolute;z-index:60;top:46px;right:12px;width:196px;padding:7px 12px;border:1px solid rgba(70,55,48,.12);border-radius:15px;background:rgba(250,247,242,.98);box-shadow:0 16px 40px rgba(45,34,29,.16);backdrop-filter:blur(18px);display:none}.tn22-navpop.open{display:grid}.tn22-navpop a{min-height:40px;display:flex;align-items:center;border-bottom:1px solid rgba(70,55,48,.08);font:500 14px/1 'Cormorant Garamond',Georgia,serif;color:#211d1a!important;text-decoration:none}.tn22-navpop a:last-child{border-bottom:0}
.tn22-media{position:absolute;top:52px;left:0;right:0;height:372px;overflow:hidden;background:#eee;border:0;padding:0;touch-action:pan-y}.tn22-slide{position:absolute;inset:0;opacity:0;transition:opacity .7s ease}.tn22-slide.active{opacity:1}.tn22-slide img{width:100%;height:100%;object-fit:cover;filter:none!important;pointer-events:none;-webkit-user-drag:none;user-select:none}.tn22-media:after{content:'';position:absolute;inset:auto 0 0;height:120px;background:linear-gradient(180deg,rgba(248,244,238,0),#f8f4ee 96%);pointer-events:none}.tn22-dots{position:absolute;z-index:3;left:50%;bottom:20px;transform:translateX(-50%);display:flex;gap:6px}.tn22-dots i{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.65);box-shadow:0 0 0 1px rgba(0,0,0,.08)}.tn22-dots i.active{width:18px;border-radius:999px;background:#fff}
.tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;bottom:0;height:auto;padding:20px 20px 24px;border-radius:13px 13px 0 0;background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 80%,#f7f2eb 100%);box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05);text-align:center}.tn22-card:after{content:'';position:absolute;z-index:0;left:-15px;right:-15px;bottom:-1px;height:62px;background:linear-gradient(180deg,rgba(247,242,23—) 0%,rgba(247,242,235,.5) 48%,#f7f2eb 92%);pointer-events:none}.tn22-card>*{position:relative;z-index:1}.tn22-title{margin:0;font:500 49px/.88 'Cormorant Garamond',Georgia,serif;letter-spacing:.18em;text-indent:.18em;text-transform:uppercase}.tn22-sub{margin:12px 0 17px;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.38em;text-indent:.38em;text-transform:uppercase;color:#635d58}.tn22-orn{display:flex;align-items:center;justify-content:center;gap:8px;margin:15px auto 14px;color:#bda388}.tn22-orn:before,.tn22-orn:after{content:'';width:45px;height:1px;background:#bfa589}.tn22-copy{margin:0 auto;width:270px;max-width:100%;font:400 14px/1.38 'Manrope',Arial,sans-serif;color:#33302d}.tn37-hero-info{width:min(100%,330px);margin:18px auto 0;display:grid;grid-template-columns:1fr 1px 1.18fr;align-items:center;gap:12px;text-align:left}.tn37-info-divider{width:1px;height:42px;background:rgba(62,51,44,.13)}.tn37-info{display:grid;grid-template-columns:40px minmax(0,1fr);align-items:center;gap:9px;min-width:0}.tn37-info-icon{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.52);border:1px solid rgba(62,51,44,.09);box-shadow:0 5px 14px rgba(47,37,31,.05)}.tn37-info-icon svg{width:21px;height:21px;fill:none;stroke:#171513;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tn37-info-copy{font:400 10.5px/1.28 'Manrope',Arial,sans-serif;color:#282420}.tn37-info-copy strong{display:block;margin-bottom:3px;font:500 11.5px/1.1 'Manrope',Arial,sans-serif;color:#3f8750}.tn37-location .tn37-info-copy strong{color:#282420;font-weight:500}.tn22-cta{display:flex;width:min(100%,330px);height:50px;margin:18px auto 0;align-items:center;justify-content:center;gap:12px;border:0;border-radius:8px;background:#111;color:#fff!important;font:500 14px/1 'Manrope',Arial,sans-serif}.tn22-cta svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.tn22-worklink{display:flex;width:min(100%,330px);height:48px;margin:10px auto 0;align-items:center;justify-content:center;gap:11px;border:1px solid rgba(157,126,93,.5);border-radius:8px;background:rgba(255,255,255,.12);color:#25211f!important;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif}.tn22-worklink svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}

.tn23-section-nav{position:fixed;z-index:70;top:0;left:0;right:0;width:100%;height:48px;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;background:rgba(249,245,239,.96);border-bottom:1px solid rgba(61,49,43,.12);box-shadow:0 8px 26px rgba(48,36,30,.07);backdrop-filter:blur(18px);transform:translateY(-110%);opacity:0;pointer-events:none;transition:transform .28s cubic-bezier(.22,.78,.25,1),opacity .2s ease;will-change:transform,opacity;scroll-behavior:smooth}.tn23-section-nav.visible{transform:translateY(0);opacity:1;pointer-events:auto}.tn23-section-nav::-webkit-scrollbar{display:none}.tn23-section-nav button{position:relative;flex:0 0 auto;min-width:82px;padding:0 11px;border:0;background:transparent;color:#7b746f;font:500 11px/1 'Avenir Next',Avenir,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;letter-spacing:.012em;white-space:nowrap}.tn23-section-nav button.active{color:#171513;font-weight:600}.tn23-section-nav button.active:after{content:'';position:absolute;left:12px;right:12px;bottom:-1px;height:3px;border-radius:3px 3px 0 0;background:#171513}

#tn13Portfolio{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;min-height:860px!important}.tn22-port{padding:22px 24px 34px}.tn22-kicker{margin:0;font:500 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.31em;text-transform:uppercase;color:#6f665f}.tn22-port h2,.tn22-services h2,.tn22-team h2,.tn22-reviews h2,.tn22-visit h2{margin:16px 0 0;font:500 44px/.95 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em}.tn22-port-grid{display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:150px;gap:6px;margin-top:27px}.tn22-photo{border:0;padding:0;border-radius:10px;overflow:hidden;background:#ddd}.tn22-photo img,.tn22-photo video{width:100%;height:100%;object-fit:cover;filter:none!important;display:block}.tn22-photo-video video{pointer-events:none}.tn22-photo:nth-child(1){grid-row:span 2}.tn22-port-all{width:100%;height:48px;margin-top:18px;border:1px solid rgba(64,52,46,.18);border-radius:10px;background:transparent;color:#1a1715;font:500 13px/1 'Manrope',Arial,sans-serif;display:flex;align-items:center;justify-content:center;gap:12px}

#tn13Services{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07);border-bottom:1px solid rgba(62,51,44,.07)}.tn31-services{padding:43px 25px 40px}.tn31-services .tn22-kicker{color:#746c66}.tn31-services h2{margin:17px 0 0;font:500 50px/.92 'Cormorant Garamond',Georgia,serif;letter-spacing:-.035em;color:#171513;white-space:nowrap}.tn31-cats-wrap{position:relative;margin:25px -25px 0}.tn31-cats{display:flex;align-items:center;gap:8px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:0 25px 11px}.tn31-cats::-webkit-scrollbar{display:none}.tn31-cat{position:relative;flex:0 0 auto;height:35px;padding:0 15px;border:1px solid rgba(67,57,51,.18);border-radius:999px;background:transparent;color:#655d57;font:500 10.5px/1 'Manrope',Arial,sans-serif;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease}.tn31-cat.active{background:#171513!important;color:#fff!important;border-color:#171513!important}.tn31-service-list{margin-top:18px;border-top:1px solid rgba(55,47,42,.18)}.tn31-service-row{min-height:84px;display:grid;grid-template-columns:minmax(0,1fr) 108px;gap:16px;align-items:center;border-bottom:1px solid rgba(55,47,42,.18)}.tn31-service-copy{min-width:0;padding:13px 0}.tn31-service-name{font:600 18px/1.15 'Cormorant Garamond',Georgia,serif;color:#171513;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.tn31-service-detail{display:block;margin-top:5px;font:400 9.5px/1.35 'Manrope',Arial,sans-serif;color:#81766f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tn31-service-side{text-align:right;align-self:center}.tn31-service-price{font:600 20px/1 'Cormorant Garamond',Georgia,serif;letter-spacing:.005em;color:#fff;white-space:nowrap}.tn31-service-book{display:inline-block;margin-top:8px;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#d9d3ce!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;white-space:nowrap;text-decoration:none!important}.tn31-service-more{width:100%;height:48px;margin-top:22px;padding:0!important;border:1px solid #bbaea5!important;border-radius:7px!important;background:rgba(255,255,255,.18)!important;color:#342f2b!important;display:flex;align-items:center;justify-content:center;gap:9px;box-shadow:none!important;font:500 12px/1 'Manrope',Arial,sans-serif!important}.tn31-service-more span:last-child{font-size:17px;line-height:1;color:#82756c}.tn31-service-more[hidden]{display:none!important}@media(max-width:370px){.tn31-services{padding-left:20px;padding-right:20px}.tn31-cats-wrap{margin-left:-20px;margin-right:-20px}.tn31-cats{padding-left:20px;padding-right:20px}.tn31-service-row{grid-template-columns:minmax(0,1fr) 100px;gap:12px}.tn31-services h2{font-size:46px}.tn31-service-name{font-size:17px}.tn31-service-price{font-size:19px;color:#fff}}

#tn13Team{margin:0!important;padding:0!important;background:#f6f1e9!important;color:#171513!important}.tn22-team{padding:42px 28px 38px;overflow:hidden}.tn22-team h2{font-size:40px}.tn22-team-grid{display:flex;gap:14px;margin:30px 0 0;padding:0 0 8px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity;scrollbar-width:none;scroll-padding:0}.tn22-team-grid::-webkit-scrollbar{display:none}.tn22-master-card{flex:0 0 136px;scroll-snap-align:start;border:0;background:none;padding:0;text-align:center;color:#171513}.tn22-master-circle{width:100%;aspect-ratio:1/1;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#e9e3dc,#d7cec6);overflow:hidden;color:#9b9088}.tn22-master-circle svg{width:62px;height:62px}.tn22-master-name{display:block;margin-top:11px;font:500 20px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-role{display:block;margin-top:5px;font:400 10px/1.3 'Manrope',Arial,sans-serif;color:#827871}.tn22-team-all{display:none!important}.tn42-team-hint{margin-top:8px;text-align:right;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8a7f78}.tn42-team-hint span{display:inline-block;margin-left:5px;font-size:14px;vertical-align:-1px}

#tn13Reviews{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07);border-bottom:1px solid rgba(62,51,44,.07)}.tn30-reviews{padding:44px 0 46px}.tn30-reviews>.tn22-kicker,.tn30-reviews>h2{margin-left:24px;margin-right:24px}.tn30-reviews .tn22-kicker{color:#746c66}.tn30-reviews h2{margin-top:16px;font:500 46px/.96 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em;color:#171513}.tn30-score{text-align:center;margin-top:43px}.tn30-score strong{display:block;font:500 84px/.82 'Cormorant Garamond',Georgia,serif;color:#171513}.tn30-stars{margin-top:20px;color:#b78d4f;font-size:27px;letter-spacing:6px}.tn30-count{margin-top:14px;font:400 13px/1 'Manrope',Arial,sans-serif;color:#716862}.tn30-review-stage{display:grid;gap:12px;margin:37px 0 0;overflow:hidden;touch-action:pan-y;cursor:grab;user-select:none}.tn30-review-stage.dragging{cursor:grabbing}.tn30-lane{width:100%;overflow:hidden}.tn30-track{display:flex;width:max-content;gap:12px;will-change:transform;animation:tn30ReviewLoop 52s linear infinite}.tn30-track-1{animation-duration:60s;animation-direction:reverse}.tn30-track-2{animation-duration:56s}.tn30-review-set{display:flex;flex:0 0 auto;gap:12px}@keyframes tn30ReviewLoop{to{transform:translateX(calc(-50% - 6px))}}.tn30-review-card{flex:0 0 min(360px,calc(100vw - 52px));box-sizing:border-box;min-height:154px;padding:16px 17px 17px;border:1px solid rgba(66,55,49,.15);border-radius:13px;background:rgba(255,255,255,.34);text-decoration:none!important;color:#171513!important}.tn30-review-head{display:grid;grid-template-columns:45px minmax(0,1fr);gap:12px;align-items:center}.tn30-review-avatar{width:43px;height:43px;border-radius:50%;display:grid;place-items:center;background:#d7cec6;border:1px solid rgba(66,55,49,.1);font:500 22px/1 'Cormorant Garamond',Georgia,serif;color:#514943}.tn30-review-name{display:block;font:600 19px/1 'Cormorant Garamond',Georgia,serif;color:#2a2522}.tn30-review-meta{display:block;margin-top:5px;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8a817a}.tn30-review-card p{margin:14px 0 0;font:400 12.5px/1.5 'Manrope',Arial,sans-serif;color:#4f4843}.tn30-review-open{display:block;margin-top:11px;font:500 9.5px/1 'Manrope',Arial,sans-serif;color:#655b54}.tn30-review-all{display:flex;align-items:center;justify-content:center;margin:28px 22px 0;height:46px;border:1px solid rgba(66,55,49,.18);border-radius:7px;color:#2f2a26!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.15em;text-transform:uppercase;background:rgba(255,255,255,.18)}

#tn13Visit{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;border-radius:34px 34px 0 0!important;overflow:hidden!important}.tn22-visit{padding:40px 24px 0}.tn22-visit-head{display:flex;align-items:center;justify-content:space-between;gap:10px}.tn22-status{display:inline-flex;align-items:center;gap:7px;padding:8px 10px;border:1px solid #b8b0aa;border-radius:999px;font:600 10px/1 'Manrope',Arial,sans-serif}.tn22-status svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tn22-status.open{background:#e7f4e6;color:#3a7440}.tn22-status.closed{background:#fff0df;color:#a46020}.tn22-visit h2{font-size:46px}.tn22-contact-grid{display:grid;gap:9px;margin-top:28px}.tn22-contact{display:grid;grid-template-columns:38px minmax(0,1fr);gap:11px;align-items:center;min-height:62px;padding:10px 12px;border:1px solid rgba(63,50,44,.12);border-radius:12px;background:rgba(255,255,255,.55);text-decoration:none!important;color:#1e1a17!important}.tn22-contact svg{width:20px;height:20px;fill:none;stroke:#8d7e74;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.tn22-contact strong{display:block;font:500 15px/1.15 'Cormorant Garamond',Georgia,serif;color:#171513!important}.tn22-contact span{display:block;margin-top:4px;font:400 9.5px/1.3 'Manrope',Arial,sans-serif;color:#837971}.tn22-mapwrap{position:relative;height:168px;margin-top:15px;border-radius:13px;overflow:hidden;background:#e7e1da}.tn22-mapwrap iframe{width:100%;height:100%;border:0;filter:grayscale(.35) saturate(.75);opacity:0;transition:opacity .25s ease}.tn22-mapwrap.loaded iframe{opacity:1}.tn22-map-skeleton{position:absolute;inset:0;display:grid;place-items:center;background:linear-gradient(110deg,#e8e1da 10%,#f3eee8 35%,#e8e1da 60%);background-size:220% 100%;animation:tn22Map 1.4s linear infinite;color:#8f837b;font:500 10px/1 'Manrope',Arial,sans-serif}@keyframes tn22Map{to{background-position:-220% 0}}.tn22-mapwrap.loaded .tn22-map-skeleton{display:none}.tn22-visit-actions{display:grid;grid-template-columns:1fr 1.2fr;gap:9px;margin-top:14px}.tn22-visit-btn{height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif}.tn22-call{border:1px solid rgba(52,43,38,.18);color:#1e1a17!important;background:transparent}.tn22-route{background:#151311;color:#fff!important}.tn22-footer{margin:28px -24px 0;height:76px;background:#171513;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 24px;text-decoration:none!important}.tn22-footer strong{font:500 23px/1 'Cormorant Garamond',Georgia,serif;color:#fff!important}.tn22-footer span{max-width:185px;text-align:right;font:400 10px/1.35 'Manrope',Arial,sans-serif;color:#d6cec8}
.tn22-contact>.tn50-book-icon{display:grid!important;margin:0!important;font:inherit!important}.tn22-contact>.tn50-book-icon svg{width:21px!important;height:21px!important}.tn22-contact>.tn50-book-icon.phone svg{stroke:currentColor!important}.tn50-brand-svg{fill:currentColor!important;stroke:none!important}.tn22-contact.is-pending{width:100%;cursor:default;text-align:left;font:inherit;opacity:1}

#tn13Sticky{width:min(calc(100% - 20px),500px)!important;min-height:62px!important;padding:8px 8px 8px 15px!important;border-radius:18px!important;border:1px solid rgba(61,49,43,.12)!important;background:rgba(249,245,239,.96)!important;box-shadow:0 14px 40px rgba(48,36,30,.16)!important;backdrop-filter:blur(18px)!important;align-items:center!important}#tn13Sticky span{font:500 12px/1.12 'Manrope',Arial,sans-serif!important;color:#6f635c!important;white-space:nowrap}#tn13Sticky strong{display:block;margin:0;font:600 14px/1 'Manrope',Arial,sans-serif!important;color:#191613!important;white-space:nowrap}#tn13Sticky button{position:relative;overflow:hidden;height:46px!important;min-width:142px!important;border-radius:999px!important;background:#171513!important;color:#fff!important;padding:0 24px!important;font:600 12px/1 'Manrope',Arial,sans-serif!important}#tn13Sticky button:after{content:'';position:absolute;inset:-30% auto -30% -30%;width:34%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);transform:skewX(-20deg);animation:tn22Shine 3.2s ease-in-out infinite}@keyframes tn22Shine{0%,65%{left:-40%}100%{left:130%}}

#tn13Gallery{display:block!important;z-index:650!important;background:#f7f2eb!important;color:#171513!important;padding:0!important;overflow:auto!important;-webkit-overflow-scrolling:touch!important;overscroll-behavior:contain!important;touch-action:pan-y!important;visibility:hidden!important;opacity:0!important;transform:translate3d(0,38px,0)!important;pointer-events:none!important;transition:transform .5s cubic-bezier(.16,1,.3,1),opacity .36s ease,visibility 0s linear .5s!important;will-change:transform,opacity}#tn13Gallery.open{visibility:visible!important;opacity:1!important;transform:translate3d(0,0,0)!important;pointer-events:auto!important;transition-delay:0s!important}#tn13Gallery.closing{visibility:visible!important;opacity:0!important;transform:translate3d(0,26px,0)!important;pointer-events:none!important}.tn22-gallery{min-height:100dvh;padding:24px 18px 40px}.tn22-gallery-top{display:grid;grid-template-columns:44px 1fr 44px;align-items:center}.tn22-gallery-back{width:40px;height:40px;border:0;background:none;font-size:28px}.tn22-gallery-title{text-align:center}.tn22-gallery-title strong{display:block;font:500 clamp(26px,7.4vw,34px)/.94 'Cormorant Garamond',Georgia,serif;white-space:nowrap}.tn22-gallery-title span{display:block;margin-top:8px;font:500 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.18em;color:#7e746d;white-space:nowrap}.tn22-gallery-tabs{display:flex;gap:0;margin-top:26px;border:1px solid rgba(55,44,39,.12);border-radius:14px;overflow-x:auto;scrollbar-width:none}.tn22-gallery-tabs::-webkit-scrollbar{display:none}.tn22-gallery-tab{flex:0 0 auto;height:43px;padding:0 18px;border:0;background:transparent;font:500 11px/1 'Manrope',Arial,sans-serif;color:#6f655f}.tn22-gallery-tab.active{background:#171513;color:#fff!important}.tn22-gallery-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:18px}.tn22-gallery-grid.salon{grid-template-columns:1fr 1fr}.tn22-gallery-tile{border:0;padding:0;overflow:hidden;border-radius:11px;background:#ddd;aspect-ratio:1/1}.tn22-gallery-grid.salon .tn22-gallery-tile{aspect-ratio:1/1}.tn23-gallery-empty{grid-column:1/-1;padding:54px 10px;text-align:center;color:#847a73;font:400 13px/1.5 'Manrope',Arial,sans-serif}.tn22-gallery-tile img,.tn22-gallery-tile video{width:100%;height:100%;object-fit:cover;filter:none!important}.tn22-gallery-tile video{pointer-events:none}
.tn22-viewer{position:fixed;z-index:760;inset:0;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(27,20,20,.9);backdrop-filter:blur(9px);touch-action:none;overscroll-behavior:contain}.tn22-viewer.open{display:flex}.tn22-viewer-frame{position:relative;width:min(100%,520px);height:min(72dvh,640px);background:transparent;overflow:visible;touch-action:none}.tn42-viewer-canvas{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:#151312;touch-action:none;box-shadow:0 18px 54px rgba(0,0,0,.28)}.tn23-viewer-hint{position:absolute;z-index:4;top:-25px;left:0;color:rgba(255,255,255,.65);font:400 10px/1 'Manrope',Arial,sans-serif}.tn22-viewer-img,.tn22-viewer-video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#151312}.tn22-viewer-img{transform:translate3d(0,0,0) scale(1);transform-origin:center center;will-change:transform;-webkit-user-drag:none;user-select:none}.tn22-viewer-video{border:0}.tn22-viewer-video[hidden],.tn22-viewer-img[hidden],.tn23-viewer-hint[hidden]{display:none!important}.tn22-viewer-top{position:absolute;z-index:5;top:-52px;left:0;right:0;display:flex;justify-content:flex-end}.tn22-viewer-actions{display:flex}.tn22-vbtn{width:42px;height:42px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(255,255,255,.08);color:#fff!important;font-size:22px}.tn22-navbtn{position:absolute;z-index:5;top:50%;transform:translateY(-50%);width:30px;height:52px;border:0;background:transparent;color:#fff!important;font-size:35px;line-height:1}.tn22-prev{left:-5px}.tn22-next{right:-5px}.tn22-navbtn[hidden]{display:none!important}.tn23-viewer-foot{position:absolute;z-index:5;left:0;right:0;bottom:-46px;display:flex;align-items:center;justify-content:space-between;gap:12px;color:rgba(255,255,255,.68);font:400 10px/1 'Manrope',Arial,sans-serif}.tn22-viewer-count{font:500 10px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn22-team-sheet{position:fixed;z-index:140;inset:0;display:none;align-items:flex-end;background:rgba(30,25,22,.35);backdrop-filter:blur(4px)}.tn22-team-sheet.open{display:flex}.tn22-team-panel{width:100%;max-height:82dvh;overflow:auto;border-radius:26px 26px 0 0;background:#f8f4ee;padding:18px 20px 30px;animation:tn22Sheet .28s ease}@keyframes tn22Sheet{from{transform:translateY(100%)}to{transform:none}}.tn22-handle{width:38px;height:4px;border-radius:999px;background:#c9bdb5;margin:0 auto 18px}.tn22-team-panel h3{margin:0;font:500 36px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-list{display:grid;gap:9px;margin-top:19px}.tn22-team-row{display:grid;grid-template-columns:54px minmax(0,1fr) 30px;align-items:center;gap:12px;min-height:72px;padding:8px 10px;border:1px solid rgba(58,46,40,.1);border-radius:14px;background:#fff;border-width:1px}.tn22-team-mini{width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:#d9d0c8;font:500 26px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-row strong{display:block;font:500 18px/1 'Cormorant Garamond',Georgia,serif}.tn22-team-row span{display:block;margin-top:5px;font:400 10px/1 'Manrope',Arial,sans-serif;color:#80766f}
.tn22-master-page{position:fixed;z-index:650;inset:0;display:block;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;touch-action:pan-y;background:#f8f4ee;color:#171513;visibility:hidden;opacity:0;pointer-events:none;transition:opacity .36s ease,visibility 0s linear .5s;will-change:opacity}.tn22-master-page.open{visibility:visible;opacity:1;pointer-events:auto;transition-delay:0s}.tn22-master-page.closing{visibility:visible;opacity:0;pointer-events:none}.tn22-master-shell{padding:18px 20px 112px;transform:translate3d(0,34px,0);transition:transform .5s cubic-bezier(.16,1,.3,1);will-change:transform}.tn22-master-page.open .tn22-master-shell{transform:translate3d(0,0,0)}.tn22-master-page.closing .tn22-master-shell{transform:translate3d(0,24px,0)}.tn22-master-top{display:flex;align-items:center;justify-content:space-between}.tn22-back{width:40px;height:40px;border:0;background:none;font-size:27px}.tn42-master-spacer{width:40px;height:40px;display:block}.tn22-master-brand{font:500 16px/1 'Manrope',Arial,sans-serif;letter-spacing:.34em}.tn22-profile{text-align:center;margin-top:12px}.tn22-profile-circle{width:142px;height:142px;margin:auto;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 45% 35%,#e4ddd5,#cfc5bc 60%,#b8aaa0)}.tn22-profile-circle{color:#9b9088}.tn22-profile-circle svg{width:72px;height:72px}.tn22-profile h1{margin:14px 0 0;font:500 45px/.95 'Cormorant Garamond',Georgia,serif}.tn22-profile-role{margin-top:7px;font:400 14px/1 'Manrope',Arial,sans-serif;color:#837970}.tn22-salon-rating{margin-top:9px;font:600 12px/1 'Manrope',Arial,sans-serif;color:#504841}.tn22-salon-rating b{color:#e2ad3e}.tn22-master-about{max-width:340px;margin:14px auto 0;font:400 12.5px/1.55 'Manrope',Arial,sans-serif;color:#3d3834}.tn22-master-tabs{display:flex;margin:22px -2px 0;overflow-x:auto;gap:7px;scrollbar-width:none}.tn22-master-tabs button{flex:1 0 auto;height:42px;padding:0 16px;border:1px solid rgba(61,49,43,.12);border-radius:999px;background:transparent;font:500 11px/1 'Manrope',Arial,sans-serif}.tn22-master-tabs button.active{background:#171513;color:#fff!important}.tn22-master-content{margin-top:20px}.tn22-master-content h3{margin:0 0 13px;font:500 30px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-service{display:flex;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid rgba(61,49,43,.1)}.tn22-master-service b{font:500 14px/1.3 'Manrope',Arial,sans-serif}.tn22-master-service span{font:500 14px/1 'Cormorant Garamond',Georgia,serif;white-space:nowrap}.tn22-master-works{display:grid;grid-template-columns:1fr 1fr;gap:7px}.tn22-master-works img{width:100%;aspect-ratio:1.25/1;object-fit:cover;border-radius:10px}.tn22-master-review{padding:14px;border:1px solid rgba(61,49,43,.1);border-radius:12px;margin-bottom:8px;background:#fff}.tn22-master-review strong{font:500 16px/1 'Cormorant Garamond',Georgia,serif}.tn22-master-review p{margin:7px 0 0;font:400 11px/1.5 'Manrope',Arial,sans-serif;color:#514a45}.tn22-master-book{position:fixed;z-index:670;left:20px;right:20px;bottom:max(14px,env(safe-area-inset-bottom));height:52px;border:0;border-radius:14px;background:#171513;color:#fff!important;font:600 13px/1 'Manrope',Arial,sans-serif;box-shadow:0 12px 34px rgba(0,0,0,.16);opacity:0;transform:translate3d(0,18px,0);pointer-events:none;transition:transform .46s cubic-bezier(.16,1,.3,1),opacity .3s ease;will-change:transform,opacity}.tn22-master-page.open .tn22-master-book{opacity:1;transform:translate3d(0,0,0);pointer-events:auto}.tn22-master-page.closing .tn22-master-book{opacity:0;transform:translate3d(0,12px,0);pointer-events:none}
}
`;
document.head.appendChild(css);

const requestedFixStyle=document.createElement('style');
requestedFixStyle.id='salon-mobile-layout-style';
requestedFixStyle.textContent=`
@media(max-width:1023px){
  #salon-mobile .tn13-hero{height:100svh!important;min-height:0!important;max-height:none!important}
  .tn22-card{display:flex!important;flex-direction:column!important;padding-bottom:max(14px,env(safe-area-inset-bottom))!important}
  .tn22-cta{margin-top:auto!important}
  .tn22-worklink{margin-top:10px!important}
  #tn13Portfolio .tn22-port{padding-top:58px!important}

  .tn22-view-gallery{position:static!important;z-index:7!important;transform:none!important;height:34px!important;padding:0 13px!important;border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(22,18,16,.74);backdrop-filter:blur(12px);color:#fff!important;font:600 11px/1 'Manrope',Arial,sans-serif;white-space:nowrap;box-shadow:0 10px 30px rgba(0,0,0,.22)}

  #tn13Services{background:#2f2926!important;color:#f7f3f0!important;border-color:rgba(255,255,255,.08)!important}
  #tn13Services .tn22-kicker{color:#b8ada7!important}
  #tn13Services h2,#tn13Services .tn31-service-name{color:#f7f3f0!important}
  #tn13Services .tn31-cats{color:#f7f3f0!important}
  #tn13Services .tn31-cat{border-color:rgba(255,255,255,.18)!important;color:#cfc5bf!important}
  #tn13Services .tn31-cat.active{background:#8b7167!important;border-color:#8b7167!important;color:#fff!important}
  #tn13Services .tn31-service-list{border-color:rgba(255,255,255,.16)!important}
  #tn13Services .tn31-service-row{border-color:rgba(255,255,255,.14)!important}
  #tn13Services .tn31-service-detail{color:#b9ada7!important}
  #tn13Services .tn31-service-book{color:#d8b7aa!important}
  #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.22)!important;background:rgba(255,255,255,.06)!important;color:#f4eeea!important}
  #tn13Services .tn31-service-more span:last-child{color:#d2c7c0!important}

  #tn13Team{background:#2f2926!important;color:#f7f3f0!important}
  #tn13Team .tn22-kicker,#tn13Team .tn42-team-hint{color:#b8ada7!important}
  #tn13Team h2{color:#f7f3f0!important}
  #tn13Team .tn22-team-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:12px!important;overflow:visible!important;padding-bottom:0!important}
  #tn13Team .tn22-master-card{width:auto!important;min-width:0!important;flex:none!important;color:#f7f3f0!important}
  #tn13Team .tn22-master-circle{background:linear-gradient(145deg,#806b61,#5b4a43)!important;color:#e6d8d0!important;border:1px solid rgba(255,255,255,.1)!important}
  #tn13Team .tn22-master-name{color:#f7f3f0!important;font-size:17px!important;white-space:nowrap!important}
  #tn13Team .tn22-master-role{display:none!important}
  #tn13Team .tn42-team-hint{display:none!important}

  #tn13Reviews .tn30-review-stage{gap:12px!important}
  #tn13Reviews .tn30-review-card{height:184px!important;min-height:184px!important;overflow:hidden!important}
  #tn13Reviews .tn30-review-card p{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden}

  #tn13Visit{background:#2f2926!important;color:#f7f3f0!important;border-radius:0!important}
  #tn13Visit .tn22-kicker{color:#b8ada7!important}
  #tn13Visit h2{color:#f7f3f0!important}
  #tn13Visit .tn22-status{min-height:34px!important;padding:8px 11px!important;border:1px solid rgba(255,255,255,.16)!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;color:#f7f3f0!important;background:rgba(255,255,255,.06)!important}
  #tn13Visit .tn22-status svg{width:14px!important;height:14px!important;stroke:currentColor!important}
  #tn13Visit .tn22-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}
  #tn13Visit .tn22-status.closed{background:#493336!important;border-color:#65474b!important;color:#d59a9f!important}
  #tn13Visit .tn22-contact{grid-template-columns:42px minmax(0,1fr)!important;gap:11px!important;background:rgba(255,255,255,.06)!important;border-color:rgba(255,255,255,.13)!important;color:#f7f3f0!important}
  #tn13Visit .tn22-contact-icon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;justify-self:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
  #tn13Visit .tn22-contact-icon svg{width:20px!important;height:20px!important;fill:none!important;stroke:#f0e8e3!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
  #tn13Visit .tn22-contact strong{color:#f7f3f0!important}
  #tn13Visit .tn22-contact>span:last-child>span{color:#c7bbb4!important}
  #tn13Visit .tn22-mapwrap{background:#423a36!important}
  #tn13Visit .tn22-call{border-color:rgba(255,255,255,.22)!important;color:#f7f3f0!important}
  #tn13Visit .tn22-route{background:#f4ede8!important;color:#2b2522!important}
  #tn13Visit .tn22-footer{background:#171513!important}

  .tn50-book-icon.viber-generic{background:#f1edf7!important;color:#67507f!important}
}
@media(max-width:1023px) and (max-height:720px){
  .tn22-media{height:330px!important}
  .tn22-card{top:304px!important;padding-top:14px!important}
  .tn22-title{font-size:43px!important}
  .tn22-sub{margin:8px 0 10px!important}
  .tn22-copy{font-size:12.5px!important;line-height:1.32!important}
  .tn37-hero-info{margin-top:11px!important}
  .tn22-cta{height:44px!important}
  .tn22-worklink{height:42px!important;margin-top:8px!important}
}
`;
document.head.appendChild(requestedFixStyle);

const $=s=>root.querySelector(s); const $$=s=>[...root.querySelectorAll(s)];
const book=()=>{const s=$('#tn13BookSheet');if(s){s.classList.add('open');document.body.style.overflow='hidden'}};

// HERO
const hero=$('#tn13Top');
hero.innerHTML=`<div class="tn22-top"><a class="tn22-brand" href="#tn13Top">Студия Колористики Елены Багдасарян</a><button class="tn22-menu" type="button" aria-label="Меню"><i></i><i></i><i></i></button></div><button class="tn22-media" type="button" aria-label="Открыть галерею салона"><span class="tn22-slide active"></span><span class="tn22-slide"></span><span class="tn22-dots"><i class="active"></i><i></i></span></button><div class="tn22-card"><h1 class="tn22-title">СТУДИЯ КОЛОРИСТИКИ</h1><div class="tn22-sub">ЕЛЕНА БАГДАСАРЯН</div><p class="tn22-copy">Окрашивание, стрижки, укладки и beauty-услуги в Люберцах.</p><div class="tn37-hero-info"><div class="tn37-info"><span class="tn37-info-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5v5l3.2 2"></path></svg></span><span class="tn37-info-copy tn50-hero-status"><strong class="tn50-hero-status-main">Проверяем</strong><span class="tn50-hero-status-sub">10:00–20:00</span></span></div><span class="tn37-info-divider" aria-hidden="true"></span><div class="tn37-info tn37-location"><span class="tn37-info-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5.2-7 10-7 10s-7-4.8-7-10a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg></span><span class="tn37-info-copy"><strong>Люберцы</strong><span>Солнечная ул., 6</span></span></div></div><button class="tn22-cta" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.2"></rect><path d="M8 3.5v4M16 3.5v4M4 9.5h16M8 13h.01M12 13h.01M16 13h.01M8 16h.01M12 16h.01"></path></svg><span>Записаться</span></button><a class="tn22-worklink" href="#tn13Portfolio"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 .9 3.1L16 7l-3.1.9L12 11l-.9-3.1L8 7l3.1-.9L12 3ZM6 13l.7 2.3L9 16l-2.3.7L6 19l-.7-2.3L3 16l2.3-.7L6 13ZM17.5 12l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z"></path></svg><span>Смотреть работы</span></a></div>`;
hero.querySelector('.tn22-cta').addEventListener('click',book);
const menuButton=hero.querySelector('.tn22-menu');
const navPop=document.createElement('nav');navPop.className='tn22-navpop';navPop.innerHTML='<a href="#tn13Portfolio">Портфолио</a><a href="#tn13Services">Услуги</a><a href="#tn38About">О салоне</a><a href="#tn13Team">Команда</a><a href="#tn13Reviews">Отзывы</a><a href="#tn13Visit">Контакты</a>';hero.querySelector('.tn22-top').appendChild(navPop);menuButton.addEventListener('click',e=>{e.stopPropagation();navPop.classList.toggle('open')});navPop.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navPop.classList.remove('open')));document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn22-top'))navPop.classList.remove('open')});
let slide=0; const slides=[...hero.querySelectorAll('.tn22-slide')],dots=[...hero.querySelectorAll('.tn22-dots i')];
function setHeroSlide(i){slide=(i+slides.length)%slides.length;slides.forEach((x,j)=>x.classList.toggle('active',j===slide));dots.forEach((x,j)=>x.classList.toggle('active',j===slide));}
const heroMedia=hero.querySelector('.tn22-media');let heroStartX=0,heroMoved=false,heroPointer=null;
heroMedia.querySelectorAll('img').forEach(img=>img.draggable=false);
heroMedia.addEventListener('pointerdown',e=>{heroStartX=e.clientX;heroMoved=false;heroPointer=e.pointerId;try{heroMedia.setPointerCapture(e.pointerId)}catch(_){}});
heroMedia.addEventListener('pointermove',e=>{if(heroPointer!==null&&Math.abs(e.clientX-heroStartX)>12)heroMoved=true});
const finishHeroGesture=e=>{if(heroPointer===null)return;const dx=e.clientX-heroStartX;try{heroMedia.releasePointerCapture(heroPointer)}catch(_){}heroPointer=null;if(Math.abs(dx)>42){setHeroSlide(slide+(dx<0?1:-1));return}if(!heroMoved)openGallery('Салон')};
heroMedia.addEventListener('pointerup',finishHeroGesture);heroMedia.addEventListener('pointercancel',()=>{heroPointer=null;heroMoved=false});

// VIEWER
const viewer=document.createElement('div');viewer.className='tn22-viewer';viewer.innerHTML=`<div class="tn22-viewer-frame"><div class="tn23-viewer-hint">Разведите двумя пальцами, чтобы увеличить</div><div class="tn22-viewer-top"><div class="tn22-viewer-actions"><button class="tn22-vbtn tn22-view-close" type="button" aria-label="Закрыть">×</button></div></div><div class="tn42-viewer-canvas"><img class="tn22-viewer-img" alt=""><video class="tn22-viewer-video" controls playsinline preload="metadata" hidden></video></div><button class="tn22-navbtn tn22-prev" type="button">‹</button><button class="tn22-navbtn tn22-next" type="button">›</button><div class="tn23-viewer-foot"><span class="tn22-viewer-count">01 из 01</span><button class="tn22-view-gallery" type="button">Открыть галерею</button></div></div>`;root.appendChild(viewer);
let viewerItems=[],viewerIndex=0; const vFrame=viewer.querySelector('.tn22-viewer-frame'),vCanvas=viewer.querySelector('.tn42-viewer-canvas'),vImg=viewer.querySelector('.tn22-viewer-img'),vVideo=viewer.querySelector('.tn22-viewer-video'),vHint=viewer.querySelector('.tn23-viewer-hint'),vCount=viewer.querySelector('.tn22-viewer-count'),vPrev=viewer.querySelector('.tn22-prev'),vNext=viewer.querySelector('.tn22-next');
let sx=0,sy=0,viewerScale=1,viewerX=0,viewerY=0,pinchStart=0,pinchBaseScale=1,panStartX=0,panStartY=0,gestureHadPinch=false;
const pinchDist=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
function clampViewerPan(){if(viewerScale<=1){viewerX=0;viewerY=0;return}const maxX=(viewerScale-1)*vCanvas.clientWidth*.5,maxY=(viewerScale-1)*vCanvas.clientHeight*.5;viewerX=Math.max(-maxX,Math.min(maxX,viewerX));viewerY=Math.max(-maxY,Math.min(maxY,viewerY))}
function applyViewerTransform(){clampViewerPan();vImg.style.transform=`translate3d(${viewerX}px,${viewerY}px,0) scale(${viewerScale})`}
function resetViewerTransform(){viewerScale=1;viewerX=0;viewerY=0;pinchStart=0;pinchBaseScale=1;applyViewerTransform()}
function paintViewer(){const it=viewerItems[viewerIndex];if(!it)return;const isVideo=it.type==='video';try{vVideo.pause()}catch(_){}vImg.hidden=isVideo;vVideo.hidden=!isVideo;vHint.hidden=isVideo;if(isVideo){vVideo.src=it.src;vVideo.setAttribute('aria-label',it.alt||'Видео студии');vVideo.load()}else{vVideo.removeAttribute('src');vImg.src=it.src;vImg.alt=it.alt||''}vCount.textContent=`${String(viewerIndex+1).padStart(2,'0')} из ${String(viewerItems.length).padStart(2,'0')}`;resetViewerTransform();vPrev.hidden=viewerItems.length<2;vNext.hidden=viewerItems.length<2;}
function openViewer(items,index=0,source='gallery'){const sourceItems=Array.isArray(items)?items:[];if(!sourceItems.length)return;const selected=sourceItems[Math.max(0,Math.min(index,sourceItems.length-1))];const allIndex=selected?ALL_MEDIA.findIndex(item=>item.src===selected.src):-1;viewerItems=allIndex>=0?ALL_MEDIA:sourceItems;viewer.dataset.source=source;const galleryButton=viewer.querySelector('.tn22-view-gallery');if(galleryButton)galleryButton.hidden=false;viewerIndex=allIndex>=0?allIndex:Math.max(0,Math.min(index,viewerItems.length-1));paintViewer();viewer.classList.add('open');document.body.style.overflow='hidden';if(viewerItems[viewerIndex]?.type==='video')requestAnimationFrame(()=>{const p=vVideo.play();if(p&&typeof p.catch==='function')p.catch(()=>{})})}
function closeViewer(){try{vVideo.pause()}catch(_){}viewer.classList.remove('open');resetViewerTransform();if(!$('#tn13Gallery').classList.contains('open')&&!masterPage.classList.contains('open'))document.body.style.overflow=''}
vPrev.onclick=()=>{viewerIndex=(viewerIndex-1+viewerItems.length)%viewerItems.length;paintViewer()};vNext.onclick=()=>{viewerIndex=(viewerIndex+1)%viewerItems.length;paintViewer()};viewer.querySelector('.tn22-view-close').onclick=closeViewer;viewer.querySelector('.tn22-view-gallery').onclick=()=>{closeViewer();openGallery('Салон')};viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
vCanvas.addEventListener('touchstart',e=>{if(!vVideo.hidden)return;if(e.touches.length===2){e.preventDefault();gestureHadPinch=true;pinchStart=pinchDist(e);pinchBaseScale=viewerScale}else if(e.touches.length===1){sx=e.touches[0].clientX;sy=e.touches[0].clientY;panStartX=viewerX;panStartY=viewerY}},{passive:false});
vCanvas.addEventListener('touchmove',e=>{if(!vVideo.hidden)return;if(e.touches.length===2&&pinchStart){e.preventDefault();viewerScale=Math.max(1,Math.min(4,pinchBaseScale*(pinchDist(e)/pinchStart)));if(viewerScale<=1.01){viewerScale=1;viewerX=0;viewerY=0}applyViewerTransform()}else if(e.touches.length===1&&viewerScale>1){e.preventDefault();viewerX=panStartX+(e.touches[0].clientX-sx);viewerY=panStartY+(e.touches[0].clientY-sy);applyViewerTransform()}},{passive:false});
vCanvas.addEventListener('touchend',e=>{if(!vVideo.hidden)return;if(e.touches.length<2)pinchStart=0;if(e.touches.length===0){if(!gestureHadPinch&&viewerScale===1&&viewerItems.length>1&&e.changedTouches.length){const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)(dx<0?vNext:vPrev).click()}gestureHadPinch=false;if(viewerScale<=1.01)resetViewerTransform()}},{passive:false});

// GALLERY
const gallery=$('#tn13Gallery');let galleryCat='Салон';
function renderGallery(){const items=GALLERY[galleryCat]||[];gallery.innerHTML=`<div class="tn22-gallery"><div class="tn22-gallery-top"><button class="tn22-gallery-back" type="button">←</button><div class="tn22-gallery-title"><strong>СТУДИЯ КОЛОРИСТИКИ</strong><span>ЕЛЕНА БАГДАСАРЯН</span></div><div></div></div><div class="tn22-gallery-tabs">${Object.keys(GALLERY).map(c=>`<button class="tn22-gallery-tab${c===galleryCat?' active':''}" type="button" data-gcat="${c}">${c}</button>`).join('')}</div><div class="tn22-gallery-grid${galleryCat==='Салон'?' salon':''}">${items.length?items.map((x,i)=>x.type==='video'?`<button class="tn22-gallery-tile tn22-gallery-video" type="button" data-gi="${i}" aria-label="Открыть видео"><video src="${x.src}" muted autoplay loop playsinline preload="metadata" aria-label="${x.alt}"></video></button>`:`<button class="tn22-gallery-tile" type="button" data-gi="${i}"><img loading="lazy" decoding="async" src="${x.src}" alt="${x.alt}"></button>`).join(''):'<div class="tn23-gallery-empty">Фото ресниц пока не добавлены</div>'}</div></div>`;gallery.querySelector('.tn22-gallery-back').onclick=closeGallery;gallery.querySelectorAll('[data-gcat]').forEach(b=>b.onclick=()=>{galleryCat=b.dataset.gcat;renderGallery()});gallery.querySelectorAll('[data-gi]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();openViewer(items,Number(b.dataset.gi)||0,'gallery')});}
let galleryCloseTimer=0;
function openGallery(cat='Салон'){clearTimeout(galleryCloseTimer);galleryCat=Object.prototype.hasOwnProperty.call(GALLERY,cat)?cat:'Салон';renderGallery();gallery.classList.remove('closing');gallery.scrollTop=0;requestAnimationFrame(()=>gallery.classList.add('open'))}
function closeGallery(){if(!gallery.classList.contains('open'))return;clearTimeout(galleryCloseTimer);gallery.classList.remove('open');gallery.classList.add('closing');galleryCloseTimer=setTimeout(()=>gallery.classList.remove('closing'),520)}

const sectionIds=['tn13Portfolio','tn13Services','tn13Team','tn13Reviews','tn13Visit'];const sectionNav=document.createElement('nav');sectionNav.className='tn23-section-nav';sectionNav.setAttribute('aria-hidden','true');sectionNav.innerHTML=[['tn13Portfolio','Портфолио'],['tn13Services','Услуги'],['tn13Team','Команда'],['tn13Reviews','Отзывы'],['tn13Visit','Визит']].map((x,i)=>`<button type="button" data-section="${x[0]}" class="${i===0?'active':''}">${x[1]}</button>`).join('');hero.insertAdjacentElement('afterend',sectionNav);
let activeSection='tn13Portfolio',navRaf=0,navTargetLock=null,navUnlockTimer=0;
function revealActiveNavButton(btn){const navRect=sectionNav.getBoundingClientRect(),btnRect=btn.getBoundingClientRect(),pad=10;let delta=0;if(btnRect.right>navRect.right-pad)delta=btnRect.right-(navRect.right-pad);else if(btnRect.left<navRect.left+pad)delta=btnRect.left-(navRect.left+pad);if(Math.abs(delta)>1)sectionNav.scrollBy({left:delta,behavior:'smooth'})}
function setActiveSection(id){if(!id)return;activeSection=id;const btn=sectionNav.querySelector(`[data-section="${id}"]`);if(!btn)return;sectionNav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));revealActiveNavButton(btn)}
function scrollSectionFromNav(id){clearTimeout(navUnlockTimer);if(id==='tn13Portfolio'){navTargetLock=null;setActiveSection('tn13Portfolio');const top=Math.max(0,window.scrollY+hero.getBoundingClientRect().top);window.scrollTo({top,behavior:'smooth'});return}const el=document.getElementById(id);if(!el)return;navTargetLock=id;setActiveSection(id);const top=Math.max(0,window.scrollY+el.getBoundingClientRect().top-sectionNav.offsetHeight+1);window.scrollTo({top,behavior:'smooth'});navUnlockTimer=setTimeout(()=>{navTargetLock=null;updateSectionNav()},900)}
sectionNav.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>scrollSectionFromNav(b.dataset.section));
function updateSectionNav(){navRaf=0;const heroPassed=hero.getBoundingClientRect().bottom<=0;sectionNav.classList.toggle('visible',heroPassed);sectionNav.setAttribute('aria-hidden',heroPassed?'false':'true');if(!heroPassed){navTargetLock=null;clearTimeout(navUnlockTimer);if(activeSection!=='tn13Portfolio')setActiveSection('tn13Portfolio');return}if(navTargetLock){if(activeSection!==navTargetLock)setActiveSection(navTargetLock);return}const line=sectionNav.getBoundingClientRect().bottom+3;let chosen=sectionIds[0];for(const id of sectionIds){const el=document.getElementById(id);if(!el)continue;const r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line){chosen=id;break}if(r.top<=line)chosen=id}if(chosen!==activeSection)setActiveSection(chosen)}
window.addEventListener('scroll',()=>{if(!navRaf)navRaf=requestAnimationFrame(updateSectionNav)},{passive:true});window.addEventListener('resize',updateSectionNav,{passive:true});requestAnimationFrame(updateSectionNav);

// PORTFOLIO
const port=$('#tn13Portfolio');port.innerHTML=`<div class="tn22-port"><p class="tn22-kicker">Портфолио</p><h2>Наши работы</h2><div class="tn22-port-grid">${PORTFOLIO.map((x,i)=>x.type==='video'?`<button class="tn22-photo tn22-photo-video" type="button" data-pi="${i}" aria-label="Открыть видео"><video src="${x.src}" muted autoplay loop playsinline preload="metadata" aria-label="${x.alt}"></video></button>`:`<button class="tn22-photo" type="button" data-pi="${i}"><img loading="lazy" decoding="async" src="${x.src}" alt="${x.alt}"></button>`).join('')}</div><button class="tn22-port-all" type="button">Смотреть все работы <span>→</span></button></div>`;port.querySelectorAll('[data-pi]').forEach(b=>b.onclick=()=>openViewer(PORTFOLIO,Number(b.dataset.pi)||0,'portfolio'));port.querySelector('.tn22-port-all').onclick=()=>openGallery('Волосы');

// SERVICES
const serv=$('#tn13Services');let serviceCat='Окрашивание',servicesExpanded=false;
const SERVICE_CATS=['Окрашивание',...[...new Set(SERVICES.map(s=>s.cat))].filter(c=>c!=='Окрашивание')];
serv.innerHTML=`<div class="tn31-services"><p class="tn22-kicker">Услуги</p><h2>Наши услуги</h2><div class="tn31-cats-wrap"><div class="tn31-cats"></div></div><div class="tn31-service-list"></div><button class="tn31-service-more" type="button"><span class="tn31-more-text"></span><span aria-hidden="true">↓</span></button></div>`;
const scats=serv.querySelector('.tn31-cats'),slist=serv.querySelector('.tn31-service-list'),sMore=serv.querySelector('.tn31-service-more');
function splitServiceTitle(raw){const parts=String(raw).split(' — ');const main=parts.shift()||raw;let detail=parts.join(' — ');if(!detail&&main.length>48){const m=main.match(/^(.*?)(\s\([^)]{5,}\)|\sBrazilian Blowout)$/i);if(m)return {main:m[1],detail:m[2].trim()}}return {main,detail}}
function serviceLine(s){const t=splitServiceTitle(s.title);return `<button class="tn31-service-row" type="button" data-book-service><span class="tn31-service-copy"><strong class="tn31-service-name">${t.main}</strong>${t.detail?`<span class="tn31-service-detail">${t.detail}</span>`:''}${s.desc?`<span class="tn31-service-detail">${s.desc}</span>`:''}</span><span class="tn31-service-side">${s.price?`<b class="tn31-service-price">${s.price}</b>`:''}</span></button>`}
function serviceWord(n){const n10=n%10,n100=n%100;if(n10===1&&n100!==11)return 'услугу';if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';return 'услуг'}
function revealCat(btn){const left=btn.offsetLeft-22,right=left+btn.offsetWidth+44;if(left<scats.scrollLeft)scats.scrollTo({left:Math.max(0,left),behavior:'smooth'});else if(right>scats.scrollLeft+scats.clientWidth)scats.scrollTo({left:right-scats.clientWidth,behavior:'smooth'})}
function renderServices(){scats.innerHTML=SERVICE_CATS.map(c=>`<button class="tn31-cat${c===serviceCat?' active':''}" type="button" data-scat="${c}">${c}</button>`).join('');scats.querySelectorAll('[data-scat]').forEach(b=>b.onclick=()=>{serviceCat=b.dataset.scat;servicesExpanded=false;renderServices();requestAnimationFrame(()=>revealCat(scats.querySelector(`[data-scat="${serviceCat}"]`)))});const arr=SERVICES.filter(s=>s.cat===serviceCat),shown=servicesExpanded?arr:arr.slice(0,7),remaining=Math.max(0,arr.length-7);slist.innerHTML=shown.map(serviceLine).join('');slist.querySelectorAll('[data-book-service]').forEach(b=>b.onclick=book);sMore.hidden=arr.length<=7;sMore.querySelector('.tn31-more-text').textContent=servicesExpanded?'Свернуть':`Показать ещё ${remaining} ${serviceWord(remaining)}`;sMore.querySelector('span:last-child').textContent=servicesExpanded?'↑':'↓'}
sMore.onclick=()=>{servicesExpanded=!servicesExpanded;renderServices()};renderServices();

// TEAM + TEAM SHEET
const team=$('#tn13Team');team.innerHTML=`<div class="tn22-team"><p class="tn22-kicker">Наша команда</p><h2>Мастера своего дела</h2><div class="tn22-team-grid">${MASTERS.map(m=>`<button class="tn22-master-card" type="button" data-mid="${m.id}"><span class="tn22-master-circle">${MASTER_AVATAR}</span><strong class="tn22-master-name">${m.name}</strong><span class="tn22-master-role">${m.role}</span></button>`).join('')}</div><div class="tn42-team-hint">Листайте <span>→</span></div></div>`;
const teamSheet=document.createElement('div');teamSheet.className='tn22-team-sheet';root.appendChild(teamSheet);

// MASTER PAGE
const masterPage=document.createElement('div');masterPage.className='tn22-master-page';masterPage.innerHTML=`<div class="tn22-master-shell"><div class="tn22-master-top"><button class="tn22-back" type="button">←</button><div class="tn22-master-brand">СТУДИЯ КОЛОРИСТИКИ ЕЛЕНЫ БАГДАСАРЯН</div><span class="tn42-master-spacer" aria-hidden="true"></span></div><div class="tn22-master-body"></div></div><button class="tn22-master-book" type="button">Записаться онлайн</button>`;root.appendChild(masterPage);let masterCloseTimer=0;function closeMaster(){if(!masterPage.classList.contains('open'))return;clearTimeout(masterCloseTimer);masterPage.classList.remove('open');masterPage.classList.add('closing');masterCloseTimer=setTimeout(()=>masterPage.classList.remove('closing'),520)}masterPage.querySelector('.tn22-back').onclick=closeMaster;masterPage.querySelector('.tn22-master-book').onclick=book;let currentMaster=null,currentMasterTab='Профиль';
function masterReviews(m){return REVIEW_DATA.filter(r=>m.reviewNames.includes(r[0]));}
function renderMasterTab(){const body=masterPage.querySelector('.tn22-master-content');if(!body||!currentMaster)return;if(currentMasterTab==='Профиль'){body.innerHTML=`<h3>О мастере</h3><p class="tn22-master-about" style="text-align:left;margin:0">${currentMaster.about}</p>`}else if(currentMasterTab==='Услуги'){const arr=SERVICES.filter(s=>currentMaster.cats.includes(s.cat)).slice(0,8);body.innerHTML=`<h3>Услуги</h3>${arr.length?arr.map(s=>`<div class="tn22-master-service"><b>${s.title}</b><span>Записаться</span></div>`).join(''):'<p class="tn22-master-about" style="text-align:left;margin:0">Пока нет данных об услугах.</p>'}`}else if(currentMasterTab==='Портфолио'){body.innerHTML=`<h3>Портфолио</h3><div class="tn22-master-works">${currentMaster.work.length?currentMaster.work.map(src=>`<img loading="lazy" decoding="async" src="${src}" alt="Работа ${currentMaster.name}">`).join(''):'<p class="tn22-master-about" style="grid-column:1/-1;text-align:left;margin:0">Пока нет фото.</p>'}</div>`}else{const rs=masterReviews(currentMaster);body.innerHTML=`<h3>Отзывы</h3>${rs.length?rs.map(r=>`<div class="tn22-master-review"><strong>${r[0]}</strong><p>${r[1]}</p></div>`).join(''):'<p class="tn22-master-about" style="text-align:left;margin:0">Пока нет отзывов.</p>'}`}}
function openMaster(id){currentMaster=MASTERS.find(m=>m.id===id);if(!currentMaster)return;currentMasterTab='Профиль';const b=masterPage.querySelector('.tn22-master-body');b.innerHTML=`<div class="tn22-profile"><div class="tn22-profile-circle">${MASTER_AVATAR}</div><h1>${currentMaster.name}</h1><div class="tn22-profile-role">${currentMaster.role}</div><div class="tn22-salon-rating"><b>★</b> — <span>рейтинг салона</span></div></div><div class="tn22-master-tabs">${['Профиль','Услуги','Портфолио','Отзывы'].map(t=>`<button class="${t==='Профиль'?'active':''}" type="button" data-mtab="${t}">${t}</button>`).join('')}</div><div class="tn22-master-content"></div>`;b.querySelectorAll('[data-mtab]').forEach(x=>x.onclick=()=>{currentMasterTab=x.dataset.mtab;b.querySelectorAll('[data-mtab]').forEach(y=>y.classList.toggle('active',y===x));renderMasterTab()});renderMasterTab();teamSheet.classList.remove('open');clearTimeout(masterCloseTimer);masterPage.classList.remove('closing');masterPage.scrollTop=0;requestAnimationFrame(()=>masterPage.classList.add('open'))}
team.querySelectorAll('[data-mid]').forEach(b=>b.onclick=()=>openMaster(b.dataset.mid));teamSheet.querySelectorAll('[data-sheet-mid]').forEach(b=>b.onclick=()=>openMaster(b.dataset.sheetMid));

// REVIEWS
const reviews=$('#tn13Reviews');
const REAL_REVIEW_DATA=[["Мария Густова","Хочу сказать большое спасибо мастеру Лауре, подстригла мне челку аккуратно и именно по тому запросу с которым я пришла. В салоне приятная атмосфера, так же хочу сказать спасибо администратору, оперативно подобрали время и записали на стрижку!"],["Danil Andryuk","Был у мастера Валерии на коррекции, все очень понравилось, сделала аккуратную форму и восстановила рост волосков в нужном направлении, действительно профессионал. Сама студия приятная и уютная, всем советую!"],["Анастасия Л.","Нужно было сделать вечерние локоны. Записали быстро и срочно. Сделали шикарную прическу, подарили комплименты и приятное общение с мастером❤️ Очень хороший салон. Приду еще."],["an.braa","Была на бровках у Надежды, очень приятная девушка, классный салон, в одном доме со мной, остались только положительные впечатления от персонала, так же была у мастера Елены (хозяйка студии) подстригла каре, всё так как я хотела, золотые руки🌷"],["татьяна к","Ходим с ребенком на стрижку к мастеру Любе. Очень довольны, Любовь хорошо находит общий язык с детьми, всегда приветлива, стрижку делает быстро и качественно. Я тоже делала стрижку и осталась довольна. Теперь мы ваши постоянные клиенты😊"],["Ольга Беляева","Благодарю замечательного мастера Асмик! Обслуживаюсь уже много лет, все года довольна результатом. Асмик большой профессионал парикмахерского искусства, достойный колорист, результат всегда на высоте! Благодарю за красоту волос, за душевное и теплое отношение!"],["Ксения Лунина","Отличная студия! Всегда тепло и приветливо! Постоянно тут стригусь и теперь крашусь) Дочку здесь собирали на важное мероприятие все на 100 баллов! Так же делала брови, просто блеск! Спасибо огромное что Вы есть)))) всем советую мастеров этой студии, все ваши пожелания и мечты будут воплощены в жизнь) 💗"],["Александра Родина","Была на педикюре и сложном окрашивании (мелирование + тонирование) + стрижка. Очень приятные девушки. Сделали все потрясающе. Я очень довольна результатом. Однозначно рекомендую салон! Просто находка, да еще и рядом с домом. Также, хочу отметить, что в салоне очень комфортно, уютно и чисто.","23 января 2024"],["ВЕНЕРА ДУРМАНОВА","Очень понравился сервис и работа мастера Елены. Делала мелирование/тонирование. Мастер сориентировала по стоимости и предложила варианты работ. Результат очень понравился! У мастера золотые руки! В салоне чистота, порядок. Рекомендация к посещению 100 %."]];
const reviewInitial=n=>([...String(n).trim()][0]||'S').toUpperCase();
const reviewHref=()=> "https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/reviews/";
const reviewCard=r=>`<a class="tn30-review-card" href="${reviewHref(r)}" target="_blank" rel="noopener"><div class="tn30-review-head"><span class="tn30-review-avatar">${reviewInitial(r[0])}</span><span><strong class="tn30-review-name">${r[0]}</strong><span class="tn30-review-meta">Яндекс Карты${r[2]?' · '+r[2]:''}</span></span></div><p>${r[1]}</p><span class="tn30-review-open">Подробнее →</span></a>`;
const reviewLanes=[0,1,2].map(row=>REAL_REVIEW_DATA.filter((_,i)=>i%3===row));
reviews.innerHTML=`<div class="tn30-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="tn30-score"><strong>5.0</strong><div class="tn30-stars" aria-label="5 звёзд">★★★★★</div><div class="tn30-count">165 отзывов · Яндекс Карты</div></div><div class="tn30-review-stage">${reviewLanes.map((lane,i)=>`<div class="tn30-lane"><div class="tn30-track tn30-track-${i}"><div class="tn30-review-set">${lane.map(reviewCard).join('')}</div><div class="tn30-review-set" aria-hidden="true">${lane.map(reviewCard).join('')}</div></div></div>`).join('')}</div><a class="tn30-review-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Смотреть все отзывы →</a></div>`;

// VISIT
const visit=$('#tn13Visit');
const iconPin=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg></span>`;
const iconPhone=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z"/></svg></span>`;
const iconMessage=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5h14v10H9l-4 3v-13Z"/></svg></span>`;
const iconClock=`<span class="tn22-contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 1.8"/></svg></span>`;
const statusClock=`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 1.8"/></svg>`;
visit.innerHTML=`<div class="tn22-visit"><div class="tn22-visit-head"><p class="tn22-kicker">Контакты</p><span class="tn22-status" id="tn22Status">${statusClock}<span class="tn22-status-text"></span></span></div><h2>Ждём вас</h2><div class="tn22-contact-grid"><a class="tn22-contact" href="#tn13Visit" aria-disabled="true">${iconPin}<span><strong>Солнечная ул., 6, Люберцы</strong><span>Солнечная ул., 6, Люберцы</span></span></a><a class="tn22-contact" href="tel:+79266143300">${iconPhone}<span><strong>+7 (926) 614-33-00</strong><span>Нажмите, чтобы позвонить</span></span></a><a class="tn22-contact" href="https://t.me/+79266143300" target="_blank" rel="noopener">${iconMessage}<span><strong>Telegram</strong><span>Написать в студию</span></span></a><div class="tn22-contact">${iconClock}<span><strong>График работы</strong><span>Ежедневно 10:00–20:00</span></span></div></div><div class="tn22-mapwrap"><div class="tn22-map-skeleton">Загружаем карту…</div><iframe title="Карта Студия Колористики Елены Багдасарян" loading="lazy" src="https://www.google.com/maps?q=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B&output=embed"></iframe></div><div class="tn22-visit-actions"><a class="tn22-visit-btn tn22-call" href="#tn13Visit" aria-disabled="true">Позвонить</a><a class="tn22-visit-btn tn22-route" href="#tn13Visit" aria-disabled="true">Построить маршрут</a></div><a class="tn22-footer" href="https://tanem.ru/" target="_blank" rel="noopener"><strong>TANEM.ru</strong><span>Цифровой офис для салонов красоты</span></a></div>`;
const map=visit.querySelector('.tn22-mapwrap'),iframe=map.querySelector('iframe');iframe.addEventListener('load',()=>map.classList.add('loaded'));setTimeout(()=>map.classList.add('loaded'),5000);
function status(){const hour=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',hour:'2-digit',hour12:false}).format(new Date())),open=hour>=10&&hour<20;const el=visit.querySelector('#tn22Status'),txt=el&&el.querySelector('.tn22-status-text');if(txt)txt.textContent=open?'Открыто до 20:00':'Закрыто · 10:00–20:00';if(el)el.className='tn22-status '+(open?'open':'closed');const hs=hero.querySelector('.tn50-hero-status');if(hs){const main=hs.querySelector('.tn50-hero-status-main'),sub=hs.querySelector('.tn50-hero-status-sub');if(main)main.textContent=open?'Открыто':'Закрыто';if(sub)sub.textContent='10:00–20:00';hs.classList.toggle('open',open);hs.classList.toggle('closed',!open)}}status();setInterval(status,60000);

// STICKY
const sticky=$('#tn13Sticky');if(sticky){sticky.innerHTML=`<strong>Доступно ${SERVICES.length} услуг</strong><button type="button">Записаться</button>`;sticky.querySelector('button').onclick=book}

const oldMaster=$('#tn13MasterSheet');if(oldMaster)oldMaster.style.display='none';document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(viewer.classList.contains('open'))closeViewer();else if(masterPage.classList.contains('open'))closeMaster();else if(teamSheet.classList.contains('open'))teamSheet.classList.remove('open');else if(gallery.classList.contains('open'))closeGallery()});
})();

(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:1023px)').matches||window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches)return;
const root=document.getElementById('salon-mobile');
if(!root||document.getElementById('tn38About'))return;
const services=root.querySelector('#tn13Services');
if(!services)return;

const style=document.createElement('style');
style.id='tn42-about-style';
style.textContent=`
#tn38About{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow:hidden!important}
.tn42-about{padding:40px 18px 58px}
.tn42-kicker{margin:0 3px 18px;font:600 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#88786e}
.tn42-card{max-width:500px;margin:0 auto;border:1px solid rgba(66,55,49,.11);border-radius:27px;overflow:hidden;background:#eee7df;box-shadow:0 14px 34px rgba(47,37,31,.08)}
.tn42-photo{position:relative;height:238px;background:#171513;overflow:hidden}
.tn42-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center center;filter:none!important}
.tn42-rating{position:absolute;left:12px;bottom:12px;height:32px;padding:0 10px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(18,17,16,.72);backdrop-filter:blur(10px);display:flex;align-items:center;gap:6px;color:#fff;box-shadow:0 5px 14px rgba(0,0,0,.13)}
.tn42-rating-star{color:#e4b22d!important;font-size:11px;line-height:1;color:#d6ad6b}
.tn42-rating strong{font:600 13px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn42-rating span{font:500 7.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.035em;color:rgba(255,255,255,.7)}
.tn42-body{padding:24px 18px 18px}
.tn42-lead{margin:0;font:400 27px/1.08 'Cormorant Garamond',Georgia,serif;letter-spacing:-.032em;color:#1d1a18}
.tn42-copy{margin:17px 0 0;font:400 12.8px/1.62 'Manrope',Arial,sans-serif;color:#58504a}
.tn42-facts{display:grid;gap:8px;margin-top:22px}
.tn42-fact{min-height:54px;display:flex;align-items:center;padding:0 15px;border:1px solid rgba(64,52,45,.09);border-radius:14px;background:rgba(255,255,255,.78);box-shadow:0 4px 12px rgba(50,39,32,.035);font:500 12.5px/1.3 'Manrope',Arial,sans-serif;color:#292521}
@media(max-width:370px){.tn42-about{padding-left:14px;padding-right:14px}.tn42-photo{height:218px}.tn42-body{padding-left:16px;padding-right:16px}.tn42-lead{font-size:25px}.tn42-copy{font-size:12.3px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn42-about"><p class="tn42-kicker">О нас</p><div class="tn42-card"><div class="tn42-photo"><img src="master.webp" alt="Студия Колористики Елены Багдасарян" loading="lazy"><div class="tn42-rating"><span class="tn42-rating-star">★</span><strong>5.0</strong><span>рейтинг салона</span></div></div><div class="tn42-body"><p class="tn42-lead">СТУДИЯ КОЛОРИСТИКИ — салон красоты.</p><p class="tn42-copy">Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови и ресницы. В одном пространстве работают мастера разных направлений.</p><div class="tn42-facts"><div class="tn42-fact">Мастера разных направлений</div><div class="tn42-fact">Комфортная атмосфера</div><div class="tn42-fact">Индивидуальный подход</div></div></div></div></div>`;
services.insertAdjacentElement('afterend',about);
})();

/* Reveal the enhanced site only after the complete bundle has initialized. */
(()=>{
  const root=document.getElementById('salon-mobile');
  if(!root) return;
  root.dataset.brAppReady='1';
  document.body.classList.add('br-app-ready');
})();

(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

    const style=document.createElement('style');
    style.id='salon-mobile-ui-style';
    style.textContent=`
    @media(max-width:1023px){
      
      #salon-mobile .tn13-hero{height:100svh!important;min-height:550px!important;max-height:none!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}
      .tn22-media{position:absolute!important;top:52px!important;left:50%!important;right:auto!important;width:100vw!important;height:clamp(300px,44svh,372px)!important;min-height:0!important;transform:translateX(-50%)!important;overflow:hidden!important;padding:0!important;margin:0!important;border:0!important}
      .tn22-media .tn22-slide,.tn22-media img{inset:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important;display:block!important}
      .tn22-media img{object-fit:cover!important}
      .tn22-card{position:absolute!important;z-index:8!important;top:clamp(250px,40svh,343px)!important;left:15px!important;right:15px!important;bottom:0!important;height:auto!important;display:flex!important;flex-direction:column!important;padding:16px 20px 8px!important;border-radius:13px 13px 0 0!important;text-align:center!important}
      .tn22-card:after{background:linear-gradient(180deg,rgba(247,242,235,0) 0%,rgba(247,242,235,.54) 48%,#f7f2eb 94%)!important}
      .tn22-title{margin:0!important;font:500 clamp(29px,8.3vw,36px)/.94 'Cormorant Garamond',Georgia,serif!important;letter-spacing:.035em!important;text-indent:.035em!important;text-transform:uppercase!important;white-space:nowrap!important;color:#211d1a!important}
      .tn22-sub{margin:9px 0 0!important;font:600 clamp(11px,3.35vw,14px)/1 'Manrope',Arial,sans-serif!important;letter-spacing:.18em!important;text-indent:.18em!important;text-transform:uppercase!important;color:#635d58!important;white-space:nowrap!important}
      .tn22-copy{display:none!important}
      .tn37-hero-info{width:min(100%,330px)!important;margin:auto auto 0!important;min-height:42px!important;flex-shrink:0!important;display:grid!important;grid-template-columns:1fr 1px 1.18fr!important;align-items:center!important;gap:12px!important;text-align:left!important}
      .tn37-info-divider{width:1px!important;height:42px!important}
      .tn37-info{grid-template-columns:40px minmax(0,1fr)!important;gap:9px!important}
      .tn37-info-icon{width:40px!important;height:40px!important}
      .tn37-info-copy{font:400 10.5px/1.28 'Manrope',Arial,sans-serif!important}
      .tn37-info-copy strong{font:600 11.5px/1.1 'Manrope',Arial,sans-serif!important}
      .tn50-hero-status.open .tn50-hero-status-main{color:#3f7d49!important}
      .tn50-hero-status.closed .tn50-hero-status-main{color:#b94f48!important}
      .tn50-hero-status-sub{margin-top:4px!important;color:#746a64!important}
      .tn22-cta{display:flex!important;width:min(100%,330px)!important;height:48px!important;margin:13px auto 0!important;align-items:center!important;justify-content:center!important;gap:12px!important;border:0!important;border-radius:8px!important;background:#715b53!important;color:#fff!important;font:500 14px/1 'Manrope',Arial,sans-serif!important;transition:transform .14s ease,background .14s ease!important}
      .tn22-cta:active{transform:translateY(1px) scale(.992)!important;background:#654f48!important}
      .tn22-worklink{display:flex!important;width:min(100%,330px)!important;height:46px!important;flex-shrink:0!important;margin:8px auto 0!important;align-items:center!important;justify-content:center!important;gap:11px!important;border-radius:8px!important;border:1px solid rgba(113,91,83,.38)!important;background:#efe7e1!important;color:#2f2926!important;text-decoration:none!important;font:500 13px/1 'Manrope',Arial,sans-serif!important;transition:transform .14s ease,background .14s ease,color .14s ease!important}
      .tn22-worklink:active{transform:translateY(2px) scale(.988)!important;background:#715b53!important;color:#fff!important;border-color:#715b53!important}

      
      #tn13Portfolio{min-height:824px!important}
      #tn13Portfolio .tn22-port{padding-top:22px!important}

      /* SERVICES — categories live inside exactly the same 25px content line as service rows. */
      #tn13Services{background:#242424!important;color:#f3f3f3!important;border-color:rgba(255,255,255,.08)!important}
      #tn13Services .tn22-kicker{color:#bdbdbd!important}
      #tn13Services h2,#tn13Services .tn31-service-name{color:#f5f5f5!important}
      #tn13Services .tn31-cats-wrap{position:relative!important;margin:25px -25px 0!important;overflow:hidden!important}
      #tn13Services .tn31-cats{display:flex!important;align-items:center!important;gap:8px!important;overflow-x:auto!important;overscroll-behavior-inline:contain!important;-webkit-overflow-scrolling:touch!important;padding:0 0 11px!important;scroll-padding-left:36px!important;scroll-padding-right:25px!important;box-sizing:border-box!important}
      #tn13Services .tn31-cats:before,#tn13Services .tn31-cats:after{content:''!important;display:block!important;height:1px!important;pointer-events:none!important}#tn13Services .tn31-cats:before{flex:0 0 36px!important;width:36px!important}#tn13Services .tn31-cats:after{flex:0 0 25px!important;width:25px!important}
      #tn13Services .tn31-cat{border-color:rgba(255,255,255,.20)!important;color:#d2d2d2!important;background:rgba(255,255,255,.03)!important}
      #tn13Services .tn31-cat.active{background:#f7f2eb!important;border-color:#f7f2eb!important;color:#2f2926!important}
      #tn13Services .tn31-service-list{display:grid!important;gap:0!important;margin-top:18px!important;border-top:1px solid rgba(255,255,255,.14)!important}
      #tn13Services .tn31-service-row{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) auto!important;min-height:72px!important;width:100%!important;align-items:center!important;gap:14px!important;padding:13px 0!important;border:0!important;border-bottom:1px solid rgba(255,255,255,.14)!important;border-radius:0!important;background:transparent!important;color:#f7f3f0!important;text-align:left!important;box-shadow:none!important}
      #tn13Services .tn31-service-row:after{display:none!important;content:none!important}
      #tn13Services .tn31-service-copy{min-width:0!important;padding:0!important}
      #tn13Services .tn31-service-name{display:block!important;color:#f7f3f0!important;font:500 18px/1.12 'Cormorant Garamond',Georgia,serif!important;white-space:normal!important;overflow:visible!important;-webkit-line-clamp:unset!important}
      #tn13Services .tn31-service-detail{display:block!important;margin-top:5px!important;color:#aaa09a!important;font:400 9.5px/1.35 'Manrope',Arial,sans-serif!important;white-space:normal!important;overflow:visible!important}
      #tn13Services .tn31-service-side{display:flex!important;align-items:center!important;justify-content:flex-end!important;margin:0!important;padding:0!important;text-align:right!important}
      #tn13Services .tn31-service-book{display:none!important}
      #tn13Services .tn31-service-price{position:relative!important;display:inline-flex!important;min-width:124px!important;height:40px!important;align-items:center!important;justify-content:center!important;padding:0 15px 0 29px!important;border:1px solid rgba(255,255,255,.92)!important;border-radius:999px!important;background:#f7f2eb!important;color:#171513!important;font:700 12.5px/1 'Manrope',Arial,sans-serif!important;white-space:nowrap!important;box-shadow:0 7px 17px rgba(0,0,0,.11)!important;overflow:visible!important}
      #tn13Services .tn31-service-price:before{content:''!important;position:absolute!important;left:13px!important;top:50%!important;width:7px!important;height:7px!important;border-radius:50%!important;background:#171513!important;transform:translateY(-50%)!important;box-shadow:0 0 0 0 rgba(23,21,19,.34)!important;animation:brMobileServiceRadar 1.25s ease-out infinite!important}
      @keyframes brMobileServiceRadar{0%{opacity:1;box-shadow:0 0 0 0 rgba(23,21,19,.38)}55%{opacity:.48}78%{opacity:1;box-shadow:0 0 0 6px rgba(23,21,19,0)}100%{opacity:1;box-shadow:0 0 0 0 rgba(23,21,19,0)}}
      #tn13Services .tn31-service-more{border-color:rgba(255,255,255,.24)!important;background:rgba(255,255,255,.04)!important;color:#f2f2f2!important}
      #tn13Services .tn31-service-more span:last-child{color:#d3d3d3!important}

      /* ABOUT — keep salon name serif, supporting copy modern; facts a brighter warm tone. */
      #tn38About .tn42-card{background:#e7ded5!important;border-color:rgba(66,55,49,.14)!important}
      #tn38About .tn42-body{background:#e7ded5!important}
      #tn38About .tn42-lead{font:400 27px/1.08 'Cormorant Garamond',Georgia,serif!important}
      #tn38About .br-about-brand{display:block!important;font:400 27px/1.08 'Cormorant Garamond',Georgia,serif!important;letter-spacing:-.032em!important;color:#1d1a18!important}
      #tn38About .br-about-kind{display:block!important;margin-top:9px!important;font:500 12px/1.35 'Manrope',Arial,sans-serif!important;letter-spacing:.015em!important;color:#665c56!important}
      #tn38About .tn42-copy{font:400 12.8px/1.62 'Manrope',Arial,sans-serif!important;color:#58504a!important}
      #tn38About .tn42-fact{background:#f1e8df!important;border-color:rgba(64,52,45,.10)!important;box-shadow:none!important}

      
      #tn13Team{margin:0!important;padding:0!important;background:#242424!important;color:#f5f5f5!important;overflow:visible!important}
      #tn13Team .tn22-team{padding:42px 28px 38px!important;overflow:visible!important}
      #tn13Team .tn22-kicker{color:#bdbdbd!important}
      #tn13Team h2{font-size:40px!important;color:#f5f5f5!important}
      #tn13Team .tn22-team-grid{display:flex!important;grid-template-columns:none!important;gap:14px!important;margin:30px -28px 0!important;padding:0 28px 10px!important;overflow-x:auto!important;overflow-y:visible!important;overscroll-behavior-x:contain!important;overscroll-behavior-y:auto!important;touch-action:pan-x pan-y!important;-webkit-overflow-scrolling:touch!important;scroll-snap-type:x proximity!important;scroll-padding-left:28px!important;scroll-padding-right:28px!important;scrollbar-width:none!important}
      #tn13Team .tn22-team-grid::-webkit-scrollbar{display:none!important}
      #tn13Team .tn22-master-card{flex:0 0 136px!important;width:136px!important;min-width:136px!important;scroll-snap-align:start!important;border:0!important;background:none!important;padding:0!important;text-align:center!important;color:#f5f5f5!important;touch-action:manipulation!important;overflow:visible!important}
      #tn13Team .tn22-master-circle{width:136px!important;height:136px!important;aspect-ratio:1/1!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:linear-gradient(145deg,#4a4542,#34302e)!important;overflow:hidden!important;color:#d8d0ca!important;border:1px solid rgba(255,255,255,.08)!important}
      #tn13Team .tn22-master-name{display:block!important;margin-top:11px!important;font:500 20px/1 'Cormorant Garamond',Georgia,serif!important;color:#f5f5f5!important;white-space:normal!important}
      #tn13Team .tn22-master-role{display:block!important;margin-top:5px!important;font:400 10px/1.3 'Manrope',Arial,sans-serif!important;color:#bdb5b0!important}
      #tn13Team .tn42-team-hint{display:block!important;margin-top:8px!important;text-align:right!important;color:#b7afa9!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important}

      /* REVIEWS — three continuous rows, exactly three real reviews in each row. */
      #tn13Reviews{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07)!important;border-bottom:1px solid rgba(62,51,44,.07)!important}
      #tn13Reviews .br-reviews{padding:44px 0 46px!important}
      #tn13Reviews .br-reviews>.tn22-kicker,#tn13Reviews .br-reviews>h2{margin-left:24px!important;margin-right:24px!important}
      #tn13Reviews .br-reviews .tn22-kicker{color:#746c66!important}
      #tn13Reviews .br-reviews h2{margin:16px 24px 0!important;font:500 46px/.96 'Cormorant Garamond',Georgia,serif!important;letter-spacing:-.03em!important;color:#171513!important}
      #tn13Reviews .br-score{text-align:center!important;margin-top:43px!important}
      #tn13Reviews .br-score strong{display:block!important;font:500 84px/.82 'Cormorant Garamond',Georgia,serif!important;color:#171513!important}
      #tn13Reviews .br-stars{margin-top:20px!important;color:#b78d4f!important;font-size:27px!important;letter-spacing:6px!important}
      #tn13Reviews .br-count{margin-top:14px!important;font:400 13px/1 'Manrope',Arial,sans-serif!important;color:#716862!important}
      #tn13Reviews .br-review-stage{display:grid!important;gap:12px!important;margin-top:37px!important;overflow:hidden!important}
      #tn13Reviews .br-review-lane{width:100%!important;overflow:hidden!important}
      #tn13Reviews .br-review-track{display:flex!important;align-items:stretch!important;gap:12px!important;width:max-content!important;will-change:transform!important;backface-visibility:hidden!important;animation:brMobileReviewsLoop 56s linear infinite!important}
      #tn13Reviews .br-review-lane:nth-child(2) .br-review-track{animation-duration:61s!important;animation-direction:reverse!important}
      #tn13Reviews .br-review-lane:nth-child(3) .br-review-track{animation-duration:58s!important}
      #tn13Reviews .br-review-set{display:flex!important;flex:0 0 auto!important;gap:12px!important}
      #tn13Reviews .br-review-card{box-sizing:border-box!important;flex:0 0 min(350px,calc(100vw - 52px))!important;width:min(350px,calc(100vw - 52px))!important;min-height:154px!important;padding:16px 17px 17px!important;border:1px solid rgba(66,55,49,.15)!important;border-radius:13px!important;background:rgba(255,255,255,.34)!important;text-decoration:none!important;color:#171513!important;overflow:hidden!important}
      #tn13Reviews .br-review-head{display:grid!important;grid-template-columns:45px minmax(0,1fr)!important;gap:12px!important;align-items:center!important}
      #tn13Reviews .br-review-avatar{width:43px!important;height:43px!important;border-radius:50%!important;display:grid!important;place-items:center!important;background:#d7cec6!important;border:1px solid rgba(66,55,49,.1)!important;font:500 22px/1 'Cormorant Garamond',Georgia,serif!important;color:#514943!important}
      #tn13Reviews .br-review-name{display:block!important;font:600 19px/1 'Cormorant Garamond',Georgia,serif!important;color:#2a2522!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
      #tn13Reviews .br-review-meta{display:flex!important;align-items:center!important;gap:7px!important;margin-top:5px!important;font:500 9px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.08em!important;text-transform:uppercase!important;color:#8a817a!important}
      #tn13Reviews .br-review-meta-stars{color:#b78d4f!important;letter-spacing:1px!important;font-size:10px!important}
      #tn13Reviews .br-review-card p{margin:14px 0 0!important;font:400 12.5px/1.5 'Manrope',Arial,sans-serif!important;color:#4f4843!important;display:-webkit-box!important;-webkit-box-orient:vertical!important;-webkit-line-clamp:3!important;overflow:hidden!important}
      #tn13Reviews .br-review-open{display:block!important;margin-top:10px!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;color:#655b54!important}
      #tn13Reviews .br-review-all{display:flex!important;align-items:center!important;justify-content:center!important;margin:28px 22px 0!important;height:46px!important;border:1px solid rgba(66,55,49,.18)!important;border-radius:7px!important;color:#2f2a26!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif!important;letter-spacing:.15em!important;text-transform:uppercase!important;background:rgba(255,255,255,.18)!important}
      @keyframes brMobileReviewsLoop{to{transform:translate3d(calc(-50% - 6px),0,0)}}

      /* CONTACTS + TANEM. */
      #tn13Visit{background:#2f2926!important}
      #tn13Visit .tn22-contact[href^="tel:"] strong{font:400 15.5px/1.2 'Manrope',Arial,sans-serif!important;letter-spacing:.01em!important}
      #tn13Visit .tn22-footer{margin:28px -24px 0!important;height:88px!important;min-height:88px!important;background:#11100f!important;color:#fff!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:8px!important;padding:10px 24px 12px!important;text-decoration:none!important;border:0!important}
      #tn13Visit .br-tanem-mark{width:30px!important;height:30px!important;border:1px solid rgba(255,255,255,.42)!important;border-radius:8px!important;display:grid!important;place-items:center!important;font:500 21px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
      #tn13Visit .br-tanem-copy{display:block!important;max-width:none!important;text-align:center!important;font:400 10px/1.2 'Manrope',Arial,sans-serif!important;color:#cfc8c4!important}
      #tn13Visit .br-tanem-copy strong{display:inline!important;font:500 15px/1 'Cormorant Garamond',Georgia,serif!important;color:#fff!important}
    }
    @media(max-width:1023px) and (orientation:landscape){
      html,body{overflow-x:hidden!important}
      #salon-mobile .tn13-hero{height:100svh!important;min-height:550px!important}
      #salon-mobile .tn22-media{height:clamp(300px,44svh,372px)!important}
      #salon-mobile .tn22-card{
        top:clamp(250px,40svh,343px)!important;
        left:50%!important;
        right:auto!important;
        width:min(calc(100vw - 30px),520px)!important;
        transform:translateX(-50%)!important;
      }
    }
    `;
    document.head.appendChild(style);

    /* Remove only the client-rejected descriptive sentence. */
    const heroCopy=document.querySelector('#salon-mobile .tn22-copy');
    if(heroCopy) heroCopy.remove();

    /* Update only About copy/typography. */
    const aboutLead=document.querySelector('#salon-mobile #tn38About .tn42-lead');
    if(aboutLead){
      aboutLead.innerHTML='<span class="br-about-brand">СТУДИЯ КОЛОРИСТИКИ</span><span class="br-about-kind">Салон красоты</span>';
    }
    const aboutCopy=document.querySelector('#salon-mobile #tn38About .tn42-copy');
    if(aboutCopy){
      aboutCopy.textContent='Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови и ресницы. В одном пространстве работают мастера разных направлений.';
    }

    /* Client migration compatibility removed in the clean template. */

    /* Rebuild only reviews: three rows, three verified reviews per row, seamless continuous motion. */
    const reviewsRoot=document.querySelector('#salon-mobile #tn13Reviews');
    if(reviewsRoot){
      const REVIEW_URL="https://yandex.ru/maps/org/studiya_koloristiki_yeleny_bagdasaryan/18398312097/reviews/";
      const reviewData=[["Мария Густова","Хочу сказать большое спасибо мастеру Лауре, подстригла мне челку аккуратно и именно по тому запросу с которым я пришла. В салоне приятная атмосфера, так же хочу сказать спасибо администратору, оперативно подобрали время и записали на стрижку!"],["Danil Andryuk","Был у мастера Валерии на коррекции, все очень понравилось, сделала аккуратную форму и восстановила рост волосков в нужном направлении, действительно профессионал. Сама студия приятная и уютная, всем советую!"],["Анастасия Л.","Нужно было сделать вечерние локоны. Записали быстро и срочно. Сделали шикарную прическу, подарили комплименты и приятное общение с мастером❤️ Очень хороший салон. Приду еще."],["an.braa","Была на бровках у Надежды, очень приятная девушка, классный салон, в одном доме со мной, остались только положительные впечатления от персонала, так же была у мастера Елены (хозяйка студии) подстригла каре, всё так как я хотела, золотые руки🌷"],["татьяна к","Ходим с ребенком на стрижку к мастеру Любе. Очень довольны, Любовь хорошо находит общий язык с детьми, всегда приветлива, стрижку делает быстро и качественно. Я тоже делала стрижку и осталась довольна. Теперь мы ваши постоянные клиенты😊"],["Ольга Беляева","Благодарю замечательного мастера Асмик! Обслуживаюсь уже много лет, все года довольна результатом. Асмик большой профессионал парикмахерского искусства, достойный колорист, результат всегда на высоте! Благодарю за красоту волос, за душевное и теплое отношение!"],["Ксения Лунина","Отличная студия! Всегда тепло и приветливо! Постоянно тут стригусь и теперь крашусь) Дочку здесь собирали на важное мероприятие все на 100 баллов! Так же делала брови, просто блеск! Спасибо огромное что Вы есть)))) всем советую мастеров этой студии, все ваши пожелания и мечты будут воплощены в жизнь) 💗"],["Александра Родина","Была на педикюре и сложном окрашивании (мелирование + тонирование) + стрижка. Очень приятные девушки. Сделали все потрясающе. Я очень довольна результатом. Однозначно рекомендую салон! Просто находка, да еще и рядом с домом. Также, хочу отметить, что в салоне очень комфортно, уютно и чисто."],["ВЕНЕРА ДУРМАНОВА","Очень понравился сервис и работа мастера Елены. Делала мелирование/тонирование. Мастер сориентировала по стоимости и предложила варианты работ. Результат очень понравился! У мастера золотые руки! В салоне чистота, порядок. Рекомендация к посещению 100 %."]];
      const initial=name=>([...String(name).trim()][0]||'B').toUpperCase();
      const card=r=>`<a class="br-review-card" href="${REVIEW_URL}" target="_blank" rel="noopener"><div class="br-review-head"><span class="br-review-avatar">${initial(r[0])}</span><span><strong class="br-review-name">${r[0]}</strong><span class="br-review-meta"><span>Яндекс Карты</span><span class="br-review-meta-stars">★★★★★</span></span></span></div><p>${r[1]}</p><span class="br-review-open">Подробнее →</span></a>`;
      const rows=[reviewData.slice(0,3),reviewData.slice(3,6),reviewData.slice(6,9)];
      reviewsRoot.innerHTML=`<div class="br-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="br-score"><strong>5.0</strong><div class="br-stars" aria-label="5 звёзд">★★★★★</div><div class="br-count">165 отзывов · Яндекс Карты</div></div><div class="br-review-stage">${rows.map(row=>`<div class="br-review-lane"><div class="br-review-track"><div class="br-review-set">${row.map(card).join('')}</div><div class="br-review-set" aria-hidden="true">${row.map(card).join('')}</div></div></div>`).join('')}</div><a class="br-review-all" href="${REVIEW_URL}" target="_blank" rel="noopener">Смотреть все отзывы →</a></div>`;
    }

    /* Replace only the TANEM footer content with the compact badge. */
    const tanemFooter=document.querySelector('#salon-mobile #tn13Visit .tn22-footer');
    if(tanemFooter){
      tanemFooter.innerHTML='<span class="br-tanem-mark">T</span><span class="br-tanem-copy">Создано в <strong>TANEM.ru</strong></span>';
    }

    /* Make browser/system chrome dark whenever the contacts section is visible. */
    let themeMeta=document.querySelector('meta[name="theme-color"]');
    if(!themeMeta){
      themeMeta=document.createElement('meta');
      themeMeta.name='theme-color';
      document.head.appendChild(themeMeta);
    }
    let appleStatus=document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if(!appleStatus){
      appleStatus=document.createElement('meta');
      appleStatus.name='apple-mobile-web-app-status-bar-style';
      document.head.appendChild(appleStatus);
    }
    const lightTheme='#f8f4ee',darkTheme='#11100f';
    const visit=document.querySelector('#salon-mobile #tn13Visit');
    const applySystemTheme=dark=>{
      themeMeta.setAttribute('content',dark?darkTheme:lightTheme);
      appleStatus.setAttribute('content',dark?'black-translucent':'default');
      document.documentElement.style.backgroundColor=dark?darkTheme:lightTheme;
      document.body.style.backgroundColor=dark?darkTheme:lightTheme;
    };
    const syncSystemTheme=()=>{
      if(!visit){applySystemTheme(false);return}
      const rect=visit.getBoundingClientRect();
      applySystemTheme(rect.top<window.innerHeight && rect.bottom>0);
    };
    syncSystemTheme();
    window.addEventListener('scroll',syncSystemTheme,{passive:true});
    window.addEventListener('resize',syncSystemTheme,{passive:true});
    window.addEventListener('orientationchange',syncSystemTheme,{passive:true});

    /* All external destinations open separately from the site. */
    document.querySelectorAll('#salon-mobile a[href]').forEach(a=>{
      const href=(a.getAttribute('href')||'').trim();
      if(/^(https?:|viber:)/i.test(href)){
        a.setAttribute('target','_blank');
        a.setAttribute('rel','noopener');
      }
    });

})();

(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  const VIBER_URL='#tn13Visit';

  function ensureStyle(){
    if(document.getElementById('salon-mobile-booking-style')) return;
    const style=document.createElement('style');
    style.id='salon-mobile-booking-style';
    style.textContent=`
      @media(max-width:1023px){
        /* Booking sheet: smooth entrance from the bottom, not a sudden appear. */
        #salon-mobile #tn13BookSheet{
          display:flex!important;
          align-items:flex-end!important;
          background:rgba(37,29,26,.34)!important;
          opacity:0!important;
          visibility:hidden!important;
          pointer-events:none!important;
          transition:opacity .28s ease,visibility .28s ease!important;
        }
        #salon-mobile #tn13BookSheet.open{
          opacity:1!important;
          visibility:visible!important;
          pointer-events:auto!important;
          z-index:700!important;
          overscroll-behavior:contain!important;
          touch-action:none!important;
        }
        #salon-mobile #tn13BookSheet.open .tn13-panel{
          touch-action:pan-y!important;
        }
        #salon-mobile #tn13Gallery.open{
          z-index:700!important;
          overscroll-behavior:contain!important;
          touch-action:pan-y!important;
        }
        #salon-mobile #tn13BookSheet .tn13-panel{
          transform:translate3d(0,104%,0)!important;
          transition:transform .42s cubic-bezier(.22,.76,.26,1)!important;
          will-change:transform!important;
          background:#f8f4ee!important;
        }
        #salon-mobile #tn13BookSheet.open .tn13-panel{
          transform:translate3d(0,0,0)!important;
        }

        /* Phone/Мессенджер choices: oval, filled beige, no decorative looping animation. */
        #salon-mobile #tn13BookSheet .tn50-book-options{
          gap:10px!important;
          margin-top:20px!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-option{
          min-height:60px!important;
          border:1px solid rgba(92,72,62,.13)!important;
          border-radius:999px!important;
          padding:9px 15px!important;
          background:#e6d9cf!important;
          color:#2c2521!important;
          box-shadow:none!important;
          animation:none!important;
          transition:transform .12s ease,background .12s ease,border-color .12s ease!important;
          -webkit-tap-highlight-color:transparent!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-option:active{
          transform:translateY(2px) scale(.985)!important;
          background:#d7c6b9!important;
          border-color:rgba(92,72,62,.22)!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-icon{
          border-radius:50%!important;
          background:#f4ece6!important;
          color:#6f574d!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-icon.phone,
        #salon-mobile #tn13BookSheet .tn50-book-icon.viber-generic{
          background:#f4ece6!important;
          color:#6f574d!important;
        }
        #salon-mobile #tn13BookSheet .tn50-book-arrow{
          color:#725d54!important;
        }
        #salon-mobile #tn13BookSheet .tn13-close{
          animation:none!important;
          transition:transform .12s ease,background .12s ease!important;
          -webkit-tap-highlight-color:transparent!important;
        }
        #salon-mobile #tn13BookSheet .tn13-close:active{
          transform:scale(.92)!important;
          background:#dfd1c7!important;
        }

        /* Booking buttons use only a clean press response. */
        #salon-mobile [data-book],
        #salon-mobile .tn22-call,
        #salon-mobile .tn22-route{
          -webkit-tap-highlight-color:transparent!important;
        }
        #salon-mobile [data-book]:active,
        #salon-mobile .tn22-call:active,
        #salon-mobile .tn22-route:active{
          transform:translateY(2px) scale(.985)!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function forceExternalLinks(scope){
    (scope||document).querySelectorAll('a[href]').forEach(a=>{
      const raw=(a.getAttribute('href')||'').trim();
      const label=(a.textContent||'').trim().toLowerCase();

      if(/^viber:/i.test(raw) || label.includes('viber')){
        if(raw!==VIBER_URL) a.setAttribute('href',VIBER_URL);
      }

      const href=(a.getAttribute('href')||'').trim();
      if(/^https?:\/\//i.test(href)){
        if(a.getAttribute('target')!=='_blank') a.setAttribute('target','_blank');
        if(a.getAttribute('rel')!=='noopener noreferrer') a.setAttribute('rel','noopener noreferrer');
      }
    });
  }

  function patchBooking(root){
    const sheet=root.querySelector('#tn13BookSheet');
    if(!sheet) return false;

    const panel=sheet.querySelector('.tn13-panel');
    if(panel){
      panel.querySelectorAll('.br-book-phone-art').forEach(el=>el.remove());
    }

    const phoneOption=[...sheet.querySelectorAll('.tn50-book-option')].find(a=>(a.textContent||'').toLowerCase().includes('телефон'));
    if(phoneOption){
      const phoneIcon=phoneOption.querySelector('.tn50-book-icon');
      if(phoneIcon && phoneIcon.dataset.brPhoneReady!=='1'){
        phoneIcon.dataset.brPhoneReady='1';
        phoneIcon.classList.add('phone');
        phoneIcon.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h3l1.3 4-2 1.5c1 2 2.6 3.6 4.6 4.6l1.5-2L19 13.5v3c0 1.1-.9 2-2 2C10.4 18.5 5.5 13.6 5.5 7A2 2 0 0 1 7 4Z"/></svg>';
      }
    }

    sheet.querySelectorAll('.tn50-book-option').forEach(a=>{
      const label=(a.textContent||'').toLowerCase();
      if(label.includes('viber')){
        if(a.getAttribute('href')!==VIBER_URL) a.setAttribute('href',VIBER_URL);
        if(a.getAttribute('target')!=='_blank') a.setAttribute('target','_blank');
        if(a.getAttribute('rel')!=='noopener noreferrer') a.setAttribute('rel','noopener noreferrer');
      }
    });

    return true;
  }

  let pageLocked=false;
  let lockedScrollY=0;

  function setPageLock(shouldLock){
    if(shouldLock && !pageLocked){
      pageLocked=true;
      lockedScrollY=window.scrollY||window.pageYOffset||0;
      document.documentElement.style.overflow='hidden';
      document.body.style.position='fixed';
      document.body.style.top='-'+lockedScrollY+'px';
      document.body.style.left='0';
      document.body.style.right='0';
      document.body.style.width='100%';
      document.body.style.overflow='hidden';
      document.body.style.touchAction='';
      return;
    }
    if(!shouldLock && pageLocked){
      pageLocked=false;
      const previousScrollBehavior=document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior='auto';
      document.documentElement.style.overflow='';
      document.body.style.position='';
      document.body.style.top='';
      document.body.style.left='';
      document.body.style.right='';
      document.body.style.width='';
      document.body.style.overflow='';
      document.body.style.touchAction='';
      window.scrollTo({top:lockedScrollY,left:0,behavior:'auto'});
      requestAnimationFrame(()=>{document.documentElement.style.scrollBehavior=previousScrollBehavior});
    }
  }

  function syncPageLock(root){
    if(!root) return;
    const active=!!root.querySelector('#tn13BookSheet.open,#tn13Gallery.open,#tn13Gallery.closing,#tn13MasterSheet.open,.tn22-master-page.open,.tn22-master-page.closing,.tn22-viewer.open');
    setPageLock(active);
  }

  function apply(){
    ensureStyle();
    forceExternalLinks(document);

    const root=document.getElementById('salon-mobile');
    if(!root) return false;

    patchBooking(root);
    forceExternalLinks(root);
    syncPageLock(root);

    if(!root.dataset.brExternalObserver){
      root.dataset.brExternalObserver='1';
      const observer=new MutationObserver(()=>syncPageLock(root));
      observer.observe(root,{subtree:true,attributes:true,attributeFilter:['class']});
    }
    return true;
  }

  let attempts=0;
  const timer=setInterval(()=>{
    attempts+=1;
    if(apply() || attempts>80) clearInterval(timer);
  },100);
  apply();
})();

/* Студия Колористики Елены Багдасарян media assets integration — 2026-09-18 */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  const BRAND_SRC='logo.webp';
  const ABOUT_SRC='master.webp';
  const HERO_SRC='salon3.webp';

  function ensureStyle(){
    if(document.getElementById('salon-mobile-media-style')) return;
    const style=document.createElement('style');
    style.id='salon-mobile-media-style';
    style.textContent=`
      @media(max-width:1023px){
        /* Full salon logo in the top-left corner. */
        #salon-mobile .tn22-brand.br-logo-brand{
          display:flex!important;
          align-items:center!important;
          justify-content:flex-start!important;
          height:52px!important;
          width:142px!important;
          max-width:142px!important;
          overflow:visible!important;
        }
        #salon-mobile .tn22-brand.br-logo-brand img{
          display:block!important;
          width:138px!important;
          height:50px!important;
          max-width:138px!important;
          object-fit:contain!important;
          object-position:left center!important;
          filter:none!important;
        }

        
        #salon-mobile .tn22-media.br-video-media{
          position:absolute!important;
          overflow:hidden!important;
          background:#eee!important;
        }
        #salon-mobile .tn22-media.br-video-media .br-hero-video{
          position:absolute!important;
          inset:0!important;
          width:100%!important;
          height:100%!important;
          display:block!important;
          object-fit:cover!important;
          object-position:center center!important;
          border:0!important;
          margin:0!important;
          padding:0!important;
          background:#eee!important;
          pointer-events:none!important;
        }
        #salon-mobile .tn22-media.br-video-media:after{
          content:''!important;
          position:absolute!important;
          z-index:2!important;
          left:0!important;
          right:0!important;
          bottom:0!important;
          height:120px!important;
          background:linear-gradient(180deg,rgba(248,244,238,0) 0%,rgba(248,244,238,.32) 44%,#f8f4ee 96%)!important;
          pointer-events:none!important;
        }

        /* About card photo from the supplied asset. */
        #salon-mobile #tn38About .tn42-photo img.br-about-image{
          width:100%!important;
          height:100%!important;
          object-fit:cover!important;
          object-position:center center!important;
          display:block!important;
          filter:none!important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function applyBrand(root){
    const brand=root.querySelector('.tn22-brand');
    if(!brand || brand.dataset.brLogoReady==='1') return;
    brand.dataset.brLogoReady='1';
    brand.classList.add('br-logo-brand');
    brand.setAttribute('aria-label','Студия колористики Елены Багдасарян');
    brand.innerHTML='<img src="'+BRAND_SRC+'" alt="Студия Колористики Елены Багдасарян" decoding="async">';
  }

  function applyHeroVideo(root){
    const media=root.querySelector('.tn22-media');
    if(!media || media.dataset.brHeroReady==='1') return;
    media.dataset.brHeroReady='1';
    media.classList.remove('br-video-media');
    media.setAttribute('aria-label','Интерьер Студии колористики Елены Багдасарян');
    media.innerHTML='<img class="br-hero-video" src="'+HERO_SRC+'" alt="Интерьер студии">';
  }

  function applyAbout(root){
    const img=root.querySelector('#tn38About .tn42-photo img');
    if(!img || img.dataset.brAboutReady==='1') return;
    img.dataset.brAboutReady='1';
    img.classList.add('br-about-image');
    img.src=ABOUT_SRC;
    img.alt='Студия Колористики Елены Багдасарян';
    img.loading='lazy';
  }

  function removeDropText(scope){
    const root=scope||document.body;
    if(!root) return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node=>{
      const value=node.nodeValue||'';
      if(/drop\s*n/i.test(value)){
        node.nodeValue=value.replace(/drop\s*n(?:\s+drop\s*n)?/gi,'').trim();
      }
    });
  }

  function openExternalLinks(root){
    root.querySelectorAll('a[href]').forEach(a=>{
      const href=(a.getAttribute('href')||'').trim();
      if(/^https?:\/\//i.test(href)){
        if(a.target!=='_blank') a.target='_blank';
        if(a.rel!=='noopener noreferrer') a.rel='noopener noreferrer';
      }
    });
  }

  function apply(){
    ensureStyle();
    const root=document.getElementById('salon-mobile');
    if(!root) return false;
    applyBrand(root);
    applyHeroVideo(root);
    applyAbout(root);
    removeDropText(root);
    openExternalLinks(root);
    return true;
  }

  let attempts=0;
  const timer=setInterval(()=>{
    attempts+=1;
    if(apply() || attempts>100) clearInterval(timer);
  },80);
  apply();
})();

/* Студия Колористики Елены Багдасарян multilingual interface — RU / EN */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:1023px)').matches || window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches) return;

  var STORAGE_KEY='salon-template-language';
  var currentLang='ru';
  var root=null;

  var meta={
    ru:{
      title:'Студия Колористики Елены Багдасарян',
      description:'Универсальный шаблон цифрового офиса салона.'
    },
    en:{
      title:'Elena Baghdasaryan Color Studio',
      description:'Color studio in Lyubertsy.'
    }
  };

  var rows=[
    ['Меню','Մենյու','Menu'],
    ['Открыть меню','Բացել մենյուն','Open menu'],
    ['СТУДИЯ КОЛОРИСТИКИ','ԳՈՒՆԱԳԵՏՆԵՐԻ ՍՏՈՒԴԻԱ','COLOR STUDIO'],
    ['ЕЛЕНА БАГДАСАРЯН','ԵԼԵՆԱ ԲԱՂԴԱՍԱՐՅԱՆ','ELENA BAGHDASARYAN'],
    ['Студия Колористики','Գունագետների ստուդիա','Color Studio'],
    ['Салон красоты','Գեղեցկության սրահ','Beauty salon'],
    ['Окрашивание, стрижки, укладки и beauty-услуги в Люберцах.','Գեղեցկության սրահ Քաղաքի սրտում։','A beauty salon in the heart of City.'],
    ['Проверяем','Ստուգում ենք','Checking'],
    ['режим работы','աշխատանքային ժամերը','opening hours'],
    ['Люберцы','Լյուբերցի','Lyubertsy'],
    ['Люберцы,','Քաղաք,','City,'],
    ['Солнечная ул., 6','Սոլնեչնայա փ., 6','Solnechnaya St., 6'],
    ['Солнечная ул., 6, Люберцы','Սրահի հասցե','Солнечная ул., 6, Люберцы'],
    ['Записаться','Ամրագրել','Book now'],
    ['Записаться →','Ամրագրել →','Book now →'],
    ['Записаться онлайн','Ամրագրել առցանց','Book online'],
    ['Смотреть работы','Դիտել աշխատանքները','View our work'],
    ['Портфолио','Պորտֆոլիո','Portfolio'],
    ['Услуги','Ծառայություններ','Services'],
    ['О салоне','Սրահի մասին','About'],
    ['Команда','Թիմ','Team'],
    ['Отзывы','Կարծիքներ','Reviews'],
    ['Контакты','Կոնտակտներ','Contacts'],
    ['Визит','Այց','Visit'],
    ['Разведите двумя пальцами, чтобы увеличить','Մեծացնելու համար երկու մատով բացեք պատկերը','Pinch with two fingers to zoom'],
    ['Закрыть','Փակել','Close'],
    ['Фото Студия Колористики Елены Багдасарян','Студия Колористики Елены Багдасарян-ի լուսանկար','Студия Колористики Елены Багдасарян photo'],
    ['Открыть галерею','Բացել պատկերասրահը','Open gallery'],
    ['Галерея','Պատկերասրահ','Gallery'],
    ['Салон','Սրահ','Salon'],
    ['Ногти','Եղունգներ','Nails'],
    ['Волосы','Մազեր','Hair'],
    ['Брови и ресницы','Հոնքեր և թարթիչներ','Brows & lashes'],
    ['Эпиляция','Էպիլյացիա','Hair removal'],
    ['Макияж','Դիմահարդարում','Makeup'],
    ['Массаж','Մերսում','Massage'],
    ['Другое','Այլ','Other'],
    ['Косметология','Կոսմետոլոգիա','Cosmetology'],
    ['Все','Բոլորը','All'],
    ['Фото ресниц пока не добавлены','Թարթիչների լուսանկարները դեռ չեն ավելացվել','Eyelash photos have not been added yet'],
    ['Наши работы','Մեր աշխատանքները','Our work'],
    ['Смотреть все работы','Դիտել բոլոր աշխատանքները','View all work'],
    ['Наши услуги','Մեր ծառայությունները','Our services'],
    ['Свернуть','Փակել ցանկը','Show less'],
    ['Наша команда','Մեր թիմը','Our team'],
    ['Мастера своего дела','Իրենց գործի վարպետները','Experts in their craft'],
    ['Листайте','Սահեցրեք','Swipe'],
    ['Nail-мастер','Մատնահարդարման վարպետ','Nail specialist'],
    ['Парикмахер','Վարսահարդար','Hair stylist'],
    ['Косметолог','Կոսմետոլոգ','Cosmetologist'],
    ['Маникюр · педикюр','Մատնահարդարում · ոտնահարդարում','Manicure · pedicure'],
    ['Волосы · укладки','Մազեր · հարդարում','Hair · styling'],
    ['Профиль','Պրոֆիլ','Profile'],
    ['О мастере','Մասնագետի մասին','About the specialist'],
    ['Пока нет данных об услугах.','Ծառայությունների մասին տվյալներ դեռ չկան։','No service information yet.'],
    ['Пока нет фото.','Լուսանկարներ դեռ չկան։','No photos yet.'],
    ['Пока нет отзывов.','Կարծիքներ դեռ չկան։','No reviews yet.'],
    ['рейтинг салона','սրահի վարկանիշ','salon rating'],
    ['Что говорят о нас','Ինչ են ասում մեր մասին','What clients say about us'],
    ['Подробнее →','Ավելին →','Read more →'],
    ['Смотреть все отзывы →','Դիտել բոլոր կարծիքները →','View all reviews →'],
    ['Ждём вас','Սպասում ենք ձեզ','We look forward to seeing you'],
    ['Солнечная ул., 6, Люберцы','Քաղաք, Սրահի հասցե','Lyubertsy, Solnechnaya st., 6'],
    ['Открыть в Яндекс Карты','Բացել Яндекс Карты-ում','Open in Яндекс Карты'],
    ['Нажмите, чтобы позвонить','Սեղմեք զանգահարելու համար','Tap to call'],
    ['Написать в салон','Գրել սրահին','Message the salon'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],
    ['Ежедневно 10:00–20:00','Ամեն օր 10:00–20:00','Daily 10:00–20:00'],
    ['Загружаем карту…','Քարտեզը բեռնվում է…','Loading map…'],
    ['Позвонить','Զանգահարել','Call'],
    ['Построить маршрут','Ստանալ երթուղին','Get directions'],
    ['Цифровой офис для салонов красоты','Թվային գրասենյակ գեղեցկության սրահների համար','Digital office for beauty salons'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],
    ['График работы','Աշխատանքային ժամեր','Opening hours'],
    ['Открыто','Բաց է','Open'],
    ['Закрыто','Փակ է','Closed'],
    ['Ежедневно 10:00–20:00','Ամեն օր 10:00–20:00','Daily 10:00–20:00'],
    ['Ежедневно 10:00–20:00','Ամեն օր 10:00–20:00','Daily 10:00–20:00'],
    ['О нас','Մեր մասին','About us'],
    ['Студия колористики в Люберцах','Գեղեցկության սրահ Քաղաքում','Color studio in Lyubertsy'],
    ['Студия Колористики Елены Багдасарян — студия красоты в Люберцах.','Студия Колористики Елены Багдасарян — գեղեցկության սրահ Քաղաքում։','Elena Bagdasaryan Color Studio — a beauty studio in Lyubertsy.'],
    ['Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови и ресницы. В одном пространстве работают мастера разных направлений.','Մատնահարդարում, մազեր, հոնքեր և թարթիչներ, դիմահարդարում, կոսմետոլոգիա, էպիլյացիա և մերսում՝ մեկ վայրում։','Manicure, hair, brows and lashes, makeup, cosmetology, hair removal and massage — all in one place.'],
    ['Студия колористики в Люберцах: окрашивание, стрижки, укладки, уход за волосами, брови и ресницы. В одном пространстве работают мастера разных направлений.','Այստեղ կարող եք հանգիստ ընտրել անհրաժեշտ ծառայությունները և ձեր խնամքը վստահել տարբեր ուղղությունների մասնագետների։ Մենք կարևորում ենք կոկիկ աշխատանքը, հարմարավետությունն ու յուրաքանչյուր հյուրի նկատմամբ ուշադիր վերաբերմունքը։','Here you can comfortably choose the services you need and trust your care to specialists in different fields. We value precise work, comfort and attentive service for every guest.'],
    ['Мастера разных направлений','Տարբեր ուղղությունների մասնագետներ','Specialists in different fields'],
    ['Комфортная атмосфера','Հարմարավետ մթնոլորտ','Comfortable atmosphere'],
    ['Индивидуальный подход','Անհատական մոտեցում','Personal approach'],
    ['Запись','Ամրագրում','Booking'],
    ['Как вам удобнее записаться?','Ինչպե՞ս է ձեզ հարմար ամրագրել։','How would you like to book?'],
    ['Выберите удобный способ связи.','Ընտրեք ձեզ հարմար կապի տարբերակը։','Choose the most convenient way to contact us.'],
    ['Телефон','Հեռախոս','Phone'],
    ['Создано в','Ստեղծված է','Created with'],
    ['Создано в TANEM.ru','Ստեղծված է TANEM.ru-ում','Created with TANEM.ru'],
    ['ежедневно','ամեն օր','daily'],
    ['рейтинг','վարկանիշ','rating'],
    ['оценок','գնահատական','ratings'],
    ['услуг','ծառայություն','services'],
    ['Педикюр','Ոտնահարդարում','Pedicure'],
    ['Процедуры для бровей','Հոնքերի խնամքի ծառայություններ','Brow treatments'],
    ['Свадебные прически','Հարսանեկան սանրվածքներ','Bridal hairstyles'],
    ['Тридинг бровей','Հոնքերի թրիդինգ','Brow threading'],
    ['Удаление волос нитью','Մազահեռացում թելով','Threading hair removal'],
    ['Укладка волос','Մազերի հարդարում','Hair styling'],
    ['Прокалывание ушей','Ականջների ծակում','Ear piercing'],
    ['Шугаринг','Շուգարինգ','Sugaring'],
    ['Стрижка волос','Մազերի կտրում','Haircut'],
    ['Электроэпиляция игловая','Ասեղային էլեկտրոէպիլյացիա','Needle electrolysis'],
    ['Окрашивание волос','Մազերի ներկում','Hair coloring'],
    ['Уход за волосами восстановление повреждённых волос','Մազերի խնամք և վնասված մազերի վերականգնում','Hair care and damaged hair restoration'],
    ['Спа процедура для волос','ՍՊԱ խնամք մազերի համար','Hair spa treatment'],
    ['Наращивание ногтей','Եղունգների երկարացում','Nail extensions'],
    ['Маникюр + покрытие гельлак','Մատնահարդարում + գել-լաք ծածկույթ','Manicure + gel polish'],
    ['Маникюр + покрытие лак','Մատնահարդարում + լաք ծածկույթ','Manicure + nail polish'],
    ['Парафинотерапия для рук','Ձեռքերի պարաֆինաթերապիա','Paraffin hand treatment'],
    ['Карбокси терапия','Կարբոքսիթերապիա','Carboxytherapy'],
    ['Ультразвуковая чистка лица','Դեմքի ուլտրաձայնային մաքրում','Ultrasonic facial cleansing'],
    ['Восковая эпиляция','Մոմային էպիլյացիա','Waxing'],
    ['Коррекция формы бровей','Հոնքերի ձևի շտկում','Brow shaping'],
    ['Косы','Հյուսքեր','Braids'],
    ['Ламинирование бровей','Հոնքերի լամինացիա','Brow lamination'],
    ['Ламинирование ресниц','Թարթիչների լամինացիա','Lash lamination'],
    ['Маникюр','Մատնահարդարում','Manicure'],
    ['Мытье головы шампунем и кондиционирование','Մազերի լվացում շամպունով և կոնդիցիոներով','Shampoo and conditioning'],
    ['Наращивание волос','Մազերի երկարացում','Hair extensions'],
    ['Наращивание ресниц','Թարթիչների երկարացում','Eyelash extensions']
  ];

  var direct={};
  rows.forEach(function(row){ direct[row[0]]=row; });

  var langIndex={ru:0,en:2};

  function getSaved(){
    try{
      var v=localStorage.getItem(STORAGE_KEY);
      return /^(ru|en)$/.test(v||'')?v:null;
    }catch(_){ return null; }
  }

  function detect(){
    var saved=getSaved();
    if(saved) return saved;
    var list=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'']).map(function(x){return String(x).toLowerCase();});
    for(var i=0;i<list.length;i++){
      if(list[i].indexOf('ru')===0) return 'ru';
      if(list[i].indexOf('en')===0) return 'en';
    }
    return 'ru';
  }

  function save(lang){
    try{ localStorage.setItem(STORAGE_KEY,lang); }catch(_){}
  }

  function dynamicValue(source,lang){
    var serviceMatch=source.match(/^Услуга (\d+)$/);
    if(serviceMatch) return lang==='hy'?'Ծառայություն '+serviceMatch[1]:lang==='en'?'Service '+serviceMatch[1]:source;
    var masterMatch=source.match(/^Мастер (\d+)$/);
    if(masterMatch) return lang==='hy'?'Մասնագետ '+masterMatch[1]:lang==='en'?'Specialist '+masterMatch[1]:source;
    var m;
    m=source.match(/^Показать ещё (\d+) (?:услугу|услуги|услуг)$/);
    if(m) return lang==='hy'?'Ցույց տալ ևս '+m[1]+' ծառայություն':lang==='en'?'Show '+m[1]+' more services':source;
    m=source.match(/^Доступно (\d+) услуг$/);
    if(m) return lang==='hy'?'Հասանելի է '+m[1]+' ծառայություն':lang==='en'?m[1]+' services available':source;
    m=source.match(/^(\d+) отзыв(?:ов|а)? · Яндекс Карты$/);
    if(m) return lang==='hy'?m[1]+' կարծիք · Яндекс Карты':lang==='en'?m[1]+' reviews · Яндекс Карты':source;
    m=source.match(/^(\d{1,2}) из (\d{1,2})$/);
    if(m) return lang==='hy'?m[1]+' / '+m[2]:lang==='en'?m[1]+' of '+m[2]:source;
    return null;
  }

  function canTranslate(source){
    return !!direct[source] || dynamicValue(source,'ru')!==null;
  }

  function outputFor(source,lang){
    var row=direct[source];
    if(row) return row[langIndex[lang]];
    var dyn=dynamicValue(source,lang);
    return dyn===null?source:dyn;
  }

  function skipText(node){
    var el=node.parentElement;
    if(!el) return true;
    if(el.closest('.br-lang-switch')) return true;
    if(el.closest('.tn30-review-card p,.br-review-card p,.tn22-master-review p')) return true;
    return /^(SCRIPT|STYLE|NOSCRIPT)$/.test(el.tagName);
  }

  function translateTree(scope,lang){
    if(!scope) return;
    var walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
    var nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      if(skipText(node)) return;
      var raw=node.nodeValue||'';
      var trimmed=raw.trim();
      if(!trimmed) return;
      var canonical=node.__brI18nCanonical;
      if(!canonical && canTranslate(trimmed)){
        canonical=trimmed;
        node.__brI18nCanonical=canonical;
      }
      if(!canonical) return;
      var next=outputFor(canonical,lang);
      var leading=(raw.match(/^\s*/)||[''])[0];
      var trailing=(raw.match(/\s*$/)||[''])[0];
      node.nodeValue=leading+next+trailing;
    });
  }

  function translateAttributes(scope,lang){
    if(!scope) return;
    ['aria-label','title','alt'].forEach(function(attr){
      scope.querySelectorAll('['+attr+']').forEach(function(el){
        var key='brI18n'+attr.replace(/-([a-z])/g,function(_,c){return c.toUpperCase();}).replace(/^./,function(c){return c.toUpperCase();});
        var source=el.dataset[key];
        var current=(el.getAttribute(attr)||'').trim();
        if(!source && canTranslate(current)){
          source=current;
          el.dataset[key]=source;
        }
        if(source) el.setAttribute(attr,outputFor(source,lang));
      });
    });
  }

  function ensureStyle(){
    if(document.getElementById('salon-mobile-i18n-style')) return;
    var style=document.createElement('style');
    style.id='salon-mobile-i18n-style';
    style.textContent=[
      '@media(max-width:1023px){',
      '#salon-mobile .br-lang-switch{position:absolute;z-index:66;top:0;right:57px;height:52px;display:flex;align-items:center;gap:3px;font-family:Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif}',
      '#salon-mobile .br-lang-switch button{border:0;background:transparent;padding:0 3px;min-width:27px;height:36px;color:#8b817b;font:600 11.5px/1 Manrope,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;letter-spacing:.035em;-webkit-tap-highlight-color:transparent}',
      '#salon-mobile .br-lang-switch button.active{color:#171513}',
      '#salon-mobile .br-lang-switch .sep{color:#c7bbb3;font-size:10px;line-height:1;pointer-events:none}',
      '#salon-mobile .br-lang-switch button:active{transform:scale(.92)}',
      '@media(max-width:360px){#salon-mobile .br-lang-switch{right:52px;gap:1px}#salon-mobile .br-lang-switch button{min-width:23px;padding:0 1px;font-size:10.5px}}',
      'body[data-br-lang="hy"] #tn13Portfolio .tn22-port h2{font-size:38px!important;line-height:1!important;letter-spacing:-.035em!important;max-width:100%!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-services h2{font-size:39px!important;line-height:1!important;letter-spacing:-.035em!important;white-space:normal!important;max-width:100%!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-row{grid-template-columns:minmax(0,1fr) 92px!important;gap:10px!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-copy{min-width:0!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-name{font-weight:500!important;line-height:1.2!important;max-width:100%!important;overflow-wrap:anywhere!important;word-break:normal!important;-webkit-line-clamp:3!important}',
      'body[data-br-lang="hy"] #tn13Services .tn31-service-detail{white-space:normal!important;overflow-wrap:anywhere!important}',
      'body[data-br-lang="hy"] #tn13Visit h2{font-size:39px!important;line-height:1!important;white-space:nowrap!important;letter-spacing:-.035em!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-contact:last-child strong{font-size:13.2px!important;white-space:nowrap!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-contact:last-child>span:last-child>span{font-size:8.8px!important;white-space:nowrap!important}',
      'body[data-br-lang="hy"] #tn13Visit .tn22-route{font-size:11.5px!important;white-space:nowrap!important}',
      '#salon-mobile .tn22-master-top{display:grid!important;grid-template-columns:40px minmax(0,1fr) 40px!important;align-items:center!important}',
      '#salon-mobile .tn22-master-brand{text-align:center!important;justify-self:center!important;max-width:100%!important;font-size:14px!important;letter-spacing:.12em!important;white-space:nowrap!important}',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  function ensureSwitcher(){
    if(!root) return;
    var top=root.querySelector('.tn22-top');
    if(!top || top.querySelector('.br-lang-switch')) return;
    var sw=document.createElement('div');
    sw.className='br-lang-switch';
    sw.setAttribute('role','group');
    sw.setAttribute('aria-label','Language');
    sw.innerHTML='<button type="button" data-lang="ru">RU</button><span class="sep">/</span><button type="button" data-lang="en">EN</button>';
    sw.addEventListener('pointerdown',function(e){e.stopPropagation();});
    sw.addEventListener('click',function(e){
      var btn=e.target.closest('[data-lang]');
      if(!btn) return;
      e.preventDefault();
      e.stopPropagation();
      setLanguage(btn.getAttribute('data-lang'),true);
    });
    var menu=top.querySelector('.tn22-menu');
    top.insertBefore(sw,menu||null);
  }

  function updateSwitcher(){
    if(!root) return;
    root.querySelectorAll('.br-lang-switch [data-lang]').forEach(function(btn){
      var active=btn.getAttribute('data-lang')===currentLang;
      btn.classList.toggle('active',active);
      btn.setAttribute('aria-pressed',active?'true':'false');
    });
  }

  function applySpecials(){
    if(!root) return;
    var heroTitle=root.querySelector('.tn22-title');
    var heroName=root.querySelector('.tn22-sub');
    if(heroTitle) heroTitle.textContent=currentLang==='en'?'COLOR STUDIO':'СТУДИЯ КОЛОРИСТИКИ';
    if(heroName) heroName.textContent=currentLang==='en'?'ELENA BAGHDASARYAN':'ЕЛЕНА БАГДАСАРЯН';
    var heroLocation=root.querySelector('.tn37-location .tn37-info-copy');
    if(heroLocation) heroLocation.innerHTML=currentLang==='en'?'<strong>Lyubertsy</strong><span>Solnechnaya St., 6</span>':'<strong>Люберцы</strong><span>Солнечная ул., 6</span>';
    var heroHours=root.querySelector('.tn50-hero-status-sub');
    if(heroHours) heroHours.textContent='10:00–20:00';
    var credit=root.querySelector('.br-tanem-copy');
    if(credit){
      if(currentLang==='en') credit.innerHTML='Created with <strong>TANEM.ru</strong>';
      else credit.innerHTML='Создано в <strong>TANEM.ru</strong>';
    }

    var masterBrand=root.querySelector('.tn22-master-brand');
    if(masterBrand) masterBrand.textContent='СТУДИЯ КОЛОРИСТИКИ';

  }

  function updateMeta(){
    var m=meta[currentLang]||meta.ru;
    document.documentElement.lang=currentLang;
    document.documentElement.dir='ltr';
    document.title=m.title;
    var desc=document.querySelector('meta[name="description"]');
    if(desc) desc.setAttribute('content',m.description);
  }

  function applyLanguage(){
    if(!root) return;
    ensureSwitcher();
    translateTree(root,currentLang);
    translateAttributes(root,currentLang);
    updateSwitcher();
    applySpecials();
    updateMeta();
    document.body.dataset.brLang=currentLang;
  }

  function setLanguage(lang,userChoice){
    if(!/^(ru|en)$/.test(lang)) lang='ru';
    currentLang=lang;
    if(userChoice) save(lang);
    applyLanguage();
    setTimeout(applyLanguage,0);
    setTimeout(applyLanguage,80);
    setTimeout(applyLanguage,260);
  }

  function start(){
    ensureStyle();
    currentLang=detect();
    var attempts=0;
    var timer=setInterval(function(){
      attempts++;
      root=document.getElementById('salon-mobile');
      if(!root){
        if(attempts>100) clearInterval(timer);
        return;
      }
      clearInterval(timer);
      setLanguage(currentLang,false);
      [250,700,1400].forEach(function(ms){setTimeout(applyLanguage,ms);});
      root.addEventListener('click',function(e){
        if(e.target.closest('.br-lang-switch')) return;
        setTimeout(applyLanguage,0);
        setTimeout(applyLanguage,90);
      },true);
      setInterval(function(){
        var statusRoot=root.querySelector('#tn22Status');
        var heroStatus=root.querySelector('.tn50-hero-status');
        if(statusRoot) translateTree(statusRoot,currentLang);
        if(heroStatus) translateTree(heroStatus,currentLang);
      },1000);
    },80);
  }

  start();
})();

(function(){
  'use strict';
  if(!window.matchMedia||!window.matchMedia('(max-width:1023px)').matches||window.matchMedia('(min-width:768px) and (hover:hover) and (pointer:fine)').matches)return;
  const root=document.getElementById('salon-mobile');
  if(!root)return;

  const PHONE_HREF='tel:+79266143300';
  const TELEGRAM='https://t.me/+79266143300';
  const GOOGLE_MAPS='https://www.google.com/maps/search/?api=1&query=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B';
  const GOOGLE_EMBED='https://www.google.com/maps?q=%D0%A1%D0%BE%D0%BB%D0%BD%D0%B0%D1%8F+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+6+%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B&output=embed';

  const contacts=[...root.querySelectorAll('#tn13Visit .tn22-contact')];
  if(contacts[0]){contacts[0].href=GOOGLE_MAPS;contacts[0].target='_blank';contacts[0].rel='noopener';contacts[0].removeAttribute('aria-disabled')}
  if(contacts[1]){contacts[1].href=PHONE_HREF;contacts[1].removeAttribute('aria-disabled')}
  if(contacts[2]){contacts[2].href=TELEGRAM;contacts[2].target='_blank';contacts[2].rel='noopener';contacts[2].removeAttribute('aria-disabled')}

  const map=root.querySelector('#tn13Visit iframe');
  if(map)map.src=GOOGLE_EMBED;
  const call=root.querySelector('#tn13Visit .tn22-call');
  if(call){call.href=PHONE_HREF;call.removeAttribute('aria-disabled')}
  const route=root.querySelector('#tn13Visit .tn22-route');
  if(route){route.href=GOOGLE_MAPS;route.target='_blank';route.rel='noopener';route.removeAttribute('aria-disabled')}

  const bookOptions=[...root.querySelectorAll('#tn13BookSheet a.tn50-book-option')];
  if(bookOptions[0]){bookOptions[0].href=PHONE_HREF;bookOptions[0].removeAttribute('aria-disabled')}
  if(bookOptions[1]){bookOptions[1].href=TELEGRAM;bookOptions[1].target='_blank';bookOptions[1].rel='noopener';bookOptions[1].removeAttribute('aria-disabled')}

  function applyStatus(){
    const hour=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',hour:'2-digit',hour12:false}).format(new Date()));
    const open=hour>=10&&hour<20;
    const contactStatus=root.querySelector('#tn22Status');
    if(contactStatus){
      contactStatus.className='tn22-status '+(open?'open':'closed');
      const text=contactStatus.querySelector('.tn22-status-text');
      if(text)text.textContent=open?'Открыто до 20:00':'Закрыто · 10:00–20:00';
    }
    const heroStatus=root.querySelector('.tn50-hero-status');
    if(heroStatus){
      heroStatus.classList.toggle('open',open);
      heroStatus.classList.toggle('closed',!open);
      const main=heroStatus.querySelector('.tn50-hero-status-main');
      const sub=heroStatus.querySelector('.tn50-hero-status-sub');
      if(main)main.textContent=open?'Открыто':'Закрыто';
      if(sub)sub.textContent='10:00–20:00';
    }
  }
  applyStatus();
  setInterval(applyStatus,60000);
})();
