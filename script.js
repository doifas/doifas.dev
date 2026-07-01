document.documentElement.classList.add("has-js");

const translations = {
  ru: {
    "meta.home.description":
      "DOIFAS — персональный сайт Максима Ерохина, начинающего геймдизайнера, нарративного дизайнера и композитора.",
    "meta.interview.description":
      "INTERVIEW.LOG — вопросы и ответы о подходе Максима doifas Ерохина к геймдизайну, нарративу и разработке.",
    "meta.visual.description": "ВЕЛЕЖСК — визуальная новелла / нарративный кейс DOIFAS.",
    "meta.seversk.description": "SEVERSK: PROJECT KUPOL — концепт PvPvE extraction shooter от DOIFAS.",
    "title.home": "DOIFAS — Геймдизайнер / Нарративный дизайнер / Композитор",
    "title.interview": "DOIFAS — INTERVIEW.LOG",
    "title.visual": "DOIFAS — ВЕЛЕЖСК / Визуальная новелла",
    "title.seversk": "DOIFAS — SEVERSK: PROJECT KUPOL",

    "aria.brandHome": "DOIFAS — на главную",
    "aria.navMain": "Основная навигация",
    "aria.navProject": "Навигация проекта",
    "aria.navInterview": "Навигация интервью",
    "aria.navToggle": "Открыть меню",
    "aria.heroActions": "Главные действия",
    "aria.heroPanel": "Ключевые направления",
    "aria.gallery": "Фотогалерея",
    "aria.back": "Навигация назад",
    "aria.musicClose": "Закрыть музыкальные ссылки",

    "nav.about": "Кто я",
    "nav.focus": "Фокус",
    "nav.gallery": "Галерея",
    "nav.sections": "Разделы",
    "nav.projectFiles": "Файлы проектов",
    "nav.home": "Главная",

    "common.portfolio": "Персональное портфолио / doifas.dev",
    "common.name": "Максим “doifas” Ерохин",
    "common.rolesRu": "Геймдизайнер • Нарративный дизайнер • Композитор",
    "common.rolesEn": "Game Designer • Narrative Designer • Composer",
    "common.projects": "Проекты",
    "common.gallery": "Галерея",
    "common.contacts": "Контакты",
    "common.backToFiles": "← НАЗАД К ПРОЕКТАМ",
    "common.backToFilesPlain": "НАЗАД К ПРОЕКТАМ",
    "common.openDossier": "ОТКРЫТЬ ДОСЬЕ →",
    "common.openFile": "ОТКРЫТЬ ФАЙЛ →",
    "common.explore": "ОТКРЫТЬ →",
    "common.inDevelopment": "В разработке",
    "common.available": "Доступно",
    "common.conceptPhase": "Концепт",
    "common.selectedWorks": "Избранные работы",
    "common.personalFile": "Личный файл",
    "common.footerTelegram": "Telegram",
    "common.footerEmail": "Email",

    "home.hero.text":
      "Проектирую игровые системы, уровни, нарративные структуры и атмосферу. Собираю идеи в понятные документы, презентации и игровые концепты.",
    "home.hero.projects": "Смотреть проекты",
    "home.hero.interview": "INTERVIEW.LOG",
    "home.panel.modeLabel": "Текущий режим",
    "home.panel.mode": "Системы / История / Звук",
    "home.panel.docs": "Дизайн-документы",
    "home.panel.decks": "Презентации",
    "home.panel.world": "Миростроение",
    "home.panel.loops": "Игровые циклы",
    "home.about.eyebrow": "Обо мне",
    "home.about.title": "Кто я",
    "home.about.text":
      "Я начинающий геймдизайнер, автор игровых концептов и композитор. Работаю на стыке системного дизайна, нарратива, атмосферы и презентации идей. Мне интересно создавать игровые миры, которые ощущаются цельными: от лора и прогрессии до структуры локаций, экономики и визуального тона.",
    "home.focus.title": "Направления",
    "home.focus.lead": "Четыре зоны, где сходятся структура, эмоция и рабочая подача идеи.",
    "home.focus.gameDesign.text": "Игровые системы, прогрессия, экономика, механики.",
    "home.focus.levelDesign.text": "Структура локаций, маршруты, точки интереса.",
    "home.focus.narrative.text": "Персонажи, ветки, диалоги, сюжетные структуры.",
    "home.focus.music.text": "Музыка, звуковая эстетика, настроение проекта.",
    "home.gallery.lead": "Места под фото, кадры проектов, рабочие материалы или атмосферные снимки.",
    "home.gateway.eyebrow": "Разделы",
    "home.gateway.title": "Файлы проектов",
    "home.card.seversk.type": "PvPvE Extraction Shooter / Геймдизайн-кейс",
    "home.card.seversk.desc":
      "Case file по системам, игровому циклу, риску, эвакуации и структуре проекта.",
    "home.card.visual.title": "ВЕЛЕЖСК",
    "home.card.visual.type": "Визуальная новелла / Нарративный кейс",
    "home.card.visual.desc": "Нарративная структура, персонажи, ветки, атмосфера и драматургия выбора.",
    "home.card.music.type": "Композитор / Звуковая атмосфера",
    "home.card.music.desc": "Музыкальные эскизы, звуковая эстетика и настроение для игровых миров.",
    "home.card.interview.desc": "Личные взгляды, игровой дизайн, вдохновение и подход к разработке.",

    "music.close": "Закрыть",
    "music.eyebrow": "Стриминговые ссылки",
    "music.title": "Музыка",
    "music.subtitle": "Авторские работы",
    "music.copy": "Музыку можно послушать на стриминговых площадках.",
    "music.spotify.desc": "Глобальная стриминговая площадка",
    "music.yandex": "Яндекс Музыка",
    "music.yandex.desc": "Российская стриминговая площадка",
    "music.apple.desc": "Стриминговая площадка Apple",
    "music.listen": "СЛУШАТЬ →",

    "visual.eyebrow": "Визуальная новелла / Нарративный кейс",
    "visual.title": "ВЕЛЕЖСК",
    "visual.status": "В разработке",
    "visual.meta.project": "Личный инди-проект",
    "visual.hero.lead":
      "Романтическая визуальная новелла о летней поездке, исторических петлях и выборе, который превращает близость, страх и ответственность в последствия.",
    "visual.readDoc": "ЧИТАТЬ ДОКУМЕНТ",
    "visual.posterCaption": "ФАЙЛ ПРОЕКТА / ВЕЛЕЖСК",
    "visual.overviewLabel": "Обзор проекта",
    "visual.overview": "О проекте",
    "visual.genre": "Жанр",
    "visual.concept": "Концепция",
    "visual.concept.text": "Летняя поездка школьников превращается в путешествие по историческим эпохам.",
    "visual.goal": "Цель",
    "visual.goal.text":
      "Создать историю, которая возвращает к тёплой ностальгии, живым воспоминаниям и миру, где романтика, тайна и история складываются в многогранный опыт.",
    "visual.features.title": "Что делает проект",
    "visual.features.label": "Ключевые особенности",
    "visual.feature.eras": "Исторические эпохи",
    "visual.feature.eras.text": "Каждая ветка переносит героев в отдельный период и меняет драматический контекст.",
    "visual.feature.nonLinear": "Нелинейный сюжет",
    "visual.feature.nonLinear.text": "Линейное чтение поддержано флагами, отношениями и развилками внутри сцен.",
    "visual.feature.choices": "Выборы игрока",
    "visual.feature.choices.text": "Решения влияют на доверие, тон сцен, доступные варианты и финальное состояние героя.",
    "visual.feature.romance": "Романтические ветки",
    "visual.feature.romance.text":
      "Близость раскрывается через риск, ответственность и поступки, а не через “правильные” ответы.",
    "visual.narrative": "Нарратив",
    "visual.narrative.title": "История о взрослении через выбор",
    "visual.narrative.p1":
      "После 10 класса группа подростков уезжает в летнее путешествие. В новом городе артефакты начинают переносить их в разные эпохи, где личные отношения сталкиваются с историей, страхом и ответственностью.",
    "visual.narrative.p2":
      "В центре истории — Дима Огнев. Игрок формирует его моральную траекторию: поддержать, промолчать, рискнуть, сказать правду или избежать последствий.",
    "visual.gallery.title": "Постеры и игровые иллюстрации",
    "visual.gallery.label": "Галерея",
    "visual.gallery.poster": "Главный постер",
    "visual.gallery.kitchen": "Игровая иллюстрация / Кухня днём",
    "visual.gallery.courtyard": "Игровая иллюстрация / Двор днём",
    "visual.role.title": "Что я проектировал",
    "visual.role.label": "Моя роль",
    "visual.document.label": "Дизайн-документация",
    "visual.document.cta": "ЧИТАТЬ ПОЛНЫЙ ДОКУМЕНТ →",
    "visual.document.copy":
      "Полный PDF раскрывает структуру веток, выборы, персонажей, визуально-звуковое направление и текущий production status.",

    "seversk.type": "PvPvE Extraction Shooter",
    "seversk.case": "Геймдизайн-кейс",
    "seversk.hero":
      "Концепт PvPvE extraction shooter в современной России. Основной акцент проекта — напряжённые рейды, атмосфера изолированного региона, риск, тактическое взаимодействие и мир, который постепенно раскрывается через исследование.",
    "seversk.lore": "Лор",
    "seversk.lore.title": "Изолированный регион. Локальный кризис. Неполная правда.",
    "seversk.lore.p1":
      "Действие разворачивается вокруг закрытого промышленного района и объекта «Купол». После серии аварийных сигналов, пропажи групп мониторинга и внезапного усиления режима территорию выводят из публичного поля и фактически отрезают от внешнего мира.",
    "seversk.lore.p2":
      "Регион изолирован не из-за глобальной катастрофы, а из-за локального кризиса, который слишком опасно объяснять напрямую: связь нестабильна, маршруты контролируются, а официальные документы противоречат следам, найденным внутри зоны.",
    "seversk.lore.p3":
      "Игрок попадает туда через рискованные рейды — за данными, ресурсами, контрактами и ответами. Главная тайна проекта в том, что именно скрывает «Купол» и почему разные стороны готовы рисковать людьми, чтобы первыми вынести правду из изоляции.",
    "seversk.concept": "Концепция проекта",
    "seversk.concept.title": "Рейд как история риска",
    "seversk.concept.p1":
      "SEVERSK задуман как extraction shooter про напряжение перед каждым решением: идти глубже, сохранить добычу, помочь напарнику или выйти, пока ещё можно.",
    "seversk.concept.p2":
      "Атмосфера проекта строится не на глобальном апокалипсисе, а на реалистичном чувстве изоляции, серых зон, закрытых объектов и региона, который постепенно начинает говорить через детали окружения.",
    "seversk.docs": "Документация",
    "seversk.docs.title": "ДОКУМЕНТАЦИЯ ПРОЕКТА",
    "seversk.docs.copy":
      "Проект находится на ранней стадии разработки. В настоящее время формируется игровая вселенная, концепция и фундамент дизайн-документа. Полная документация появится по мере развития проекта.",
    "seversk.docs.status": "В РАБОТЕ",

    "interview.eyebrow": "Личный файл / Доступно",
    "interview.hero":
      "Вместо обычного резюме — несколько вопросов и ответов о том, как я думаю, что ценю в разработке и какие проекты хочу создавать.",
    "interview.end": "Конец файла",
    "interview.thanks": "СПАСИБО",
    "interview.thanks.copy":
      "Если вы дочитали до конца — спасибо за уделённое время. Надеюсь, это интервью помогло немного лучше понять мой подход к разработке игр.",

    "stub.eyebrow": "DOIFAS / Черновик раздела",
    "stub.projects.title": "Проекты",
    "stub.projects.copy": "Здесь появятся игровые проекты: концепты, системы, механики и презентации.",
    "stub.visual.title": "Визуальная новелла",
    "stub.visual.copy": "Основная страница проекта уже доступна в разделе ВЕЛЕЖСК.",
    "stub.music.title": "Музыка",
    "stub.music.copy": "Музыкальные ссылки сейчас доступны через модальное окно Music на главной странице.",
    "stub.about.title": "Контакты",
    "stub.about.copy": "Здесь позже появятся расширенные контакты и дополнительная информация.",
    "stub.home": "На главную",
  },
  en: {
    "meta.home.description":
      "DOIFAS — personal portfolio of Maksim Erokhin, an aspiring game designer, narrative designer, and composer.",
    "meta.interview.description":
      "INTERVIEW.LOG — questions and answers about Maksim doifas Erokhin's approach to game design, narrative, and development.",
    "meta.visual.description": "VELEZHSK — visual novel / narrative design case by DOIFAS.",
    "meta.seversk.description": "SEVERSK: PROJECT KUPOL — PvPvE extraction shooter concept by DOIFAS.",
    "title.home": "DOIFAS — Game Designer / Narrative Designer / Composer",
    "title.interview": "DOIFAS — INTERVIEW.LOG",
    "title.visual": "DOIFAS — VELEZHSK / Visual Novel Case",
    "title.seversk": "DOIFAS — SEVERSK: PROJECT KUPOL",

    "aria.brandHome": "DOIFAS home",
    "aria.navMain": "Main navigation",
    "aria.navProject": "Project navigation",
    "aria.navInterview": "Interview navigation",
    "aria.navToggle": "Open menu",
    "aria.heroActions": "Main actions",
    "aria.heroPanel": "Key directions",
    "aria.gallery": "Photo gallery",
    "aria.back": "Back navigation",
    "aria.musicClose": "Close music links",

    "nav.about": "About",
    "nav.focus": "Focus",
    "nav.gallery": "Gallery",
    "nav.sections": "Sections",
    "nav.projectFiles": "Project files",
    "nav.home": "Home",

    "common.portfolio": "Personal portfolio / doifas.dev",
    "common.name": "Maksim “doifas” Erokhin",
    "common.rolesRu": "Game Designer • Narrative Designer • Composer",
    "common.rolesEn": "Game Designer • Narrative Designer • Composer",
    "common.projects": "Projects",
    "common.gallery": "Gallery",
    "common.contacts": "Contacts",
    "common.backToFiles": "← BACK TO PROJECT FILES",
    "common.backToFilesPlain": "BACK TO PROJECT FILES",
    "common.openDossier": "OPEN DOSSIER →",
    "common.openFile": "OPEN FILE →",
    "common.explore": "EXPLORE →",
    "common.inDevelopment": "In Development",
    "common.available": "Available",
    "common.conceptPhase": "Concept Phase",
    "common.selectedWorks": "Selected Works",
    "common.personalFile": "Personal File",
    "common.footerTelegram": "Telegram",
    "common.footerEmail": "Email",

    "home.hero.text":
      "I design game systems, levels, narrative structures, and atmosphere. I turn ideas into clear documents, pitch decks, and game concepts.",
    "home.hero.projects": "View projects",
    "home.hero.interview": "INTERVIEW.LOG",
    "home.panel.modeLabel": "Current mode",
    "home.panel.mode": "Systems / Story / Sound",
    "home.panel.docs": "Design docs",
    "home.panel.decks": "Pitch decks",
    "home.panel.world": "Worldbuilding",
    "home.panel.loops": "Game loops",
    "home.about.eyebrow": "About",
    "home.about.title": "Who I Am",
    "home.about.text":
      "I am an aspiring game designer, author of game concepts, and composer. I work at the intersection of system design, narrative, atmosphere, and idea presentation. I am interested in creating game worlds that feel complete: from lore and progression to location structure, economy, and visual tone.",
    "home.focus.title": "Focus Areas",
    "home.focus.lead": "Four zones where structure, emotion, and clear idea presentation meet.",
    "home.focus.gameDesign.text": "Game systems, progression, economy, mechanics.",
    "home.focus.levelDesign.text": "Location structure, routes, points of interest.",
    "home.focus.narrative.text": "Characters, branches, dialogue, story structures.",
    "home.focus.music.text": "Music, sound aesthetics, and the mood of a project.",
    "home.gallery.lead": "Space for photos, project frames, work materials, and atmospheric shots.",
    "home.gateway.eyebrow": "Gateway",
    "home.gateway.title": "Project files",
    "home.card.seversk.type": "PvPvE Extraction Shooter / Game Design Case",
    "home.card.seversk.desc": "Case file about systems, game loop, risk, extraction, and project structure.",
    "home.card.visual.title": "VELEZHSK",
    "home.card.visual.type": "Visual Novel / Narrative Design Case",
    "home.card.visual.desc": "Narrative structure, characters, branches, atmosphere, and choice dramaturgy.",
    "home.card.music.type": "Composer / Sound Atmosphere",
    "home.card.music.desc": "Musical sketches, sound aesthetics, and mood for game worlds.",
    "home.card.interview.desc": "Personal views, game design, inspiration, and approach to development.",

    "music.close": "Close",
    "music.eyebrow": "Streaming links",
    "music.title": "Music",
    "music.subtitle": "Original Works",
    "music.copy": "My music is available on streaming platforms.",
    "music.spotify.desc": "Global streaming platform",
    "music.yandex": "Yandex Music",
    "music.yandex.desc": "Russian streaming platform",
    "music.apple.desc": "Apple streaming platform",
    "music.listen": "LISTEN →",

    "visual.eyebrow": "Visual Novel / Narrative Design Case",
    "visual.title": "VELEZHSK",
    "visual.status": "In Development",
    "visual.meta.project": "Personal indie project",
    "visual.hero.lead":
      "A romantic visual novel about a summer trip, historical loops, and choices that turn closeness, fear, and responsibility into consequences.",
    "visual.readDoc": "READ DOCUMENT",
    "visual.posterCaption": "PROJECT FILE / VELEZHSK",
    "visual.overviewLabel": "Project Overview",
    "visual.overview": "Project Overview",
    "visual.genre": "Genre",
    "visual.concept": "Concept",
    "visual.concept.text": "A summer trip for school students turns into a journey through historical eras.",
    "visual.goal": "Goal",
    "visual.goal.text":
      "To create a story that evokes nostalgia, warm memories, and a world where romance, mystery, and history form a layered experience.",
    "visual.features.title": "What Defines the Project",
    "visual.features.label": "Core Features",
    "visual.feature.eras": "Historical Eras",
    "visual.feature.eras.text": "Each route moves the characters into a separate period and changes the dramatic context.",
    "visual.feature.nonLinear": "Nonlinear Story",
    "visual.feature.nonLinear.text": "Linear reading is supported by flags, relationships, and scene-level branches.",
    "visual.feature.choices": "Player Choices",
    "visual.feature.choices.text": "Decisions affect trust, scene tone, available options, and the hero's final state.",
    "visual.feature.romance": "Romantic Routes",
    "visual.feature.romance.text":
      "Closeness is revealed through risk, responsibility, and actions, not through “correct” answers.",
    "visual.narrative": "Narrative",
    "visual.narrative.title": "A Coming-of-Age Story Through Choice",
    "visual.narrative.p1":
      "After 10th grade, a group of teenagers leaves for a summer trip. In a new town, artifacts begin moving them into different eras, where personal relationships collide with history, fear, and responsibility.",
    "visual.narrative.p2":
      "At the center of the story is Dima Ognev. The player shapes his moral trajectory: support someone, stay silent, take a risk, tell the truth, or avoid the consequences.",
    "visual.gallery.title": "Posters and In-Game Illustrations",
    "visual.gallery.label": "Gallery",
    "visual.gallery.poster": "Main poster",
    "visual.gallery.kitchen": "In-game illustration / Kitchen day",
    "visual.gallery.courtyard": "In-game illustration / Courtyard day",
    "visual.role.title": "What I Designed",
    "visual.role.label": "My Role",
    "visual.document.label": "Design Documentation",
    "visual.document.cta": "READ FULL DESIGN DOCUMENT →",
    "visual.document.copy":
      "The full PDF covers route structure, choices, characters, visual and audio direction, and current production status.",

    "seversk.type": "PvPvE Extraction Shooter",
    "seversk.case": "Game Design Case",
    "seversk.hero":
      "A PvPvE extraction shooter concept set in modern Russia. The project focuses on tense raids, the atmosphere of an isolated region, risk, tactical cooperation, and a world that gradually reveals itself through exploration.",
    "seversk.lore": "Lore",
    "seversk.lore.title": "An Isolated Region. A Local Crisis. An Incomplete Truth.",
    "seversk.lore.p1":
      "The action unfolds around a closed industrial district and the facility known as “Kupol.” After a series of emergency signals, missing monitoring teams, and a sudden escalation of security, the territory is removed from public view and effectively cut off from the outside world.",
    "seversk.lore.p2":
      "The region is isolated not because of a global catastrophe, but because of a local crisis too dangerous to explain directly: communications are unstable, routes are controlled, and official documents contradict the traces found inside the zone.",
    "seversk.lore.p3":
      "The player enters through risky raids — for data, resources, contracts, and answers. The central mystery is what exactly “Kupol” is hiding, and why different sides are willing to risk people to be the first to carry the truth out of isolation.",
    "seversk.concept": "Project Concept",
    "seversk.concept.title": "A Raid as a Story of Risk",
    "seversk.concept.p1":
      "SEVERSK is conceived as an extraction shooter about tension before every decision: go deeper, keep the loot, help a teammate, or extract while it is still possible.",
    "seversk.concept.p2":
      "The atmosphere is built not on a global apocalypse, but on a realistic sense of isolation, gray zones, closed facilities, and a region that slowly starts speaking through environmental details.",
    "seversk.docs": "Documentation",
    "seversk.docs.title": "PROJECT DOCUMENTATION",
    "seversk.docs.copy":
      "The project is in an early development stage. The game world, concept, and foundation of the design document are currently being formed. Full documentation will appear as the project develops.",
    "seversk.docs.status": "WORK IN PROGRESS",

    "interview.eyebrow": "Personal File / Available",
    "interview.hero":
      "Instead of a standard resume, this page collects a few questions and answers about how I think, what I value in development, and what kind of projects I want to create.",
    "interview.end": "End of file",
    "interview.thanks": "THANK YOU",
    "interview.thanks.copy":
      "If you have read to the end, thank you for your time. I hope this interview helped you understand my approach to game development a little better.",

    "stub.eyebrow": "DOIFAS / Section draft",
    "stub.projects.title": "Projects",
    "stub.projects.copy": "Game projects will appear here: concepts, systems, mechanics, and pitch materials.",
    "stub.visual.title": "Visual Novel",
    "stub.visual.copy": "The main project page is already available in the VELEZHSK section.",
    "stub.music.title": "Music",
    "stub.music.copy": "Music links are currently available through the Music modal on the homepage.",
    "stub.about.title": "Contacts",
    "stub.about.copy": "Extended contacts and additional information will appear here later.",
    "stub.home": "Home",
  },
};

const interviewTranslations = {
  ru: [
    [
      "Почему геймдизайн и звук?",
      "Мне близки обе ниши, потому что они напрямую работают с эмоциями. Я люблю создавать: игровые системы, атмосферу, музыку, звуки, сцены, ощущения. Для меня это не просто “сделать контент”, а собрать опыт, который что-то вызывает у человека.",
    ],
    [
      "Игра с сильным геймдизайном?",
      "Escape from Tarkov. Мне нравится, что игра не заканчивается рейдом: даже вне основного геймплея есть чем заниматься. Инвентарь, экономика, подготовка, сортировка, сборки — лобби само становится частью игры.",
    ],
    [
      "Какой игровой опыт я хочу создавать?",
      "Загадку, драму и трагедию. Хочу делать проекты, где концовки могут крутить и вертеть игроком, а не просто закрывать историю.",
    ],
    [
      "Что важнее: механика, атмосфера или история?",
      "Механика и атмосфера. Если история отличная, но играть скучно — это уже ближе к книге. Игрок пришёл взаимодействовать, принимать решения и быть внутри системы. История важна, но она не должна прикрывать слабый геймплей.",
    ],
    ["Игры, которые на меня повлияли", "Hades, SnowRunner, Escape from Tarkov, Timeflow, Mad Games Tycoon."],
    [
      "Как рождаются идеи?",
      "Я постоянно кручу в голове разные мысли и концепты. Если появляется конкретная идея — записываю её в Obsidian. Потом возвращаюсь к ней после перерыва и проверяю: всё ещё интересно или это была минутная вспышка.",
    ],
    [
      "Что такое хороший геймдизайн?",
      "Когда игрок хочет находиться в игре. Ему интересно изучать мир, разбираться в системах, возвращаться, гриндить, искать новые пути и новые смыслы.",
    ],
    [
      "Какие задачи мне интереснее всего?",
      "Нарратив и экономика. Мне нравится думать о том, как устроен мир, почему игрок делает выбор, зачем он возвращается и что двигает его дальше.",
    ],
    [
      "Игровые решения, которые мне не близки",
      "Я не фанат маленького формата 5x5 на маленьких картах, если говорить про личный игровой вкус. Мне ближе масштаб: большие пространства, глобальная движня, 64–128 игроков, ощущение большой операции. При этом я не против 5x5 как формата — например, турниры по CS смотреть интересно.",
    ],
    ["Каким человеком я хочу быть в индустрии?", "Тем, про кого скажут: “Этот чувак сделал игру, которая тогда была чем-то новым”."],
    [
      "Что я ценю в работе над проектом?",
      "Командные усилия и сам процесс создания: графика, музыка, звук, сценарий, механики, документы. Мне нравится видеть, как из хаоса постепенно появляется проект.",
    ],
    ["Что может заставить отказаться от проекта?", "Бездействие команды. Когда никто не двигается, не принимает решений и не пытается тащить проект вперёд."],
    ["Что вдохновляет вне игр?", "Музыка, архитектура и история."],
    ["Если бы можно было сделать только одну игру", "Идеальный Seversk."],
    ["Где я вижу себя через 10 лет?", "Минимум — работающим в геймдев-индустрии. Максимум — человеком со своей командой и штатом людей."],
    ["Проект мечты", "Масштабная RPG с длинной прогрессией, в которую можно вложить сотни часов."],
    [
      "Почему я делаю собственные проекты?",
      "Потому что мне это реально интересно. Я кайфую от процесса: придумывать механику, собирать структуру, чинить баг, видеть, как идея начинает работать. Это очень сильное чувство.",
    ],
    [
      "Проблема индустрии, которую я не люблю",
      "Негатив к жанрам. Мне не нравится, когда жанр списывают заранее, не пытаясь понять, почему он работает и для кого он ценен.",
    ],
    [
      "Что бы я сказал человеку, который открыл этот сайт?",
      "Если вы открыли этот сайт — значит, вам интересно моё мнение и мой подход. Надеюсь, я смог на это ответить. Спасибо за внимание.",
    ],
  ],
  en: [
    [
      "Why game design and sound?",
      "Both fields feel close to me because they work directly with emotion. I love creating game systems, atmosphere, music, sounds, scenes, and sensations. For me, it is not just about making content, but about building an experience that makes a person feel something.",
    ],
    [
      "A game with strong game design?",
      "Escape from Tarkov. I like that the game does not end with the raid: even outside the core gameplay there is something to do. Inventory, economy, preparation, sorting, builds — the lobby itself becomes part of the game.",
    ],
    [
      "What kind of game experience do I want to create?",
      "Mystery, drama, and tragedy. I want to make projects where endings can twist and turn the player, instead of simply closing the story.",
    ],
    [
      "What matters more: mechanics, atmosphere, or story?",
      "Mechanics and atmosphere. If the story is great but the game is boring to play, it becomes closer to a book. The player came to interact, make decisions, and exist inside a system. Story matters, but it should not cover weak gameplay.",
    ],
    ["Games that influenced me", "Hades, SnowRunner, Escape from Tarkov, Timeflow, Mad Games Tycoon."],
    [
      "How are ideas born?",
      "I constantly rotate different thoughts and concepts in my head. If a concrete idea appears, I write it down in Obsidian. Later, after a break, I return to it and check whether it is still interesting or was just a momentary spark.",
    ],
    [
      "What is good game design?",
      "It is when the player wants to stay in the game. They are interested in studying the world, understanding systems, returning, grinding, looking for new paths and new meanings.",
    ],
    [
      "What tasks interest me the most?",
      "Narrative and economy. I like thinking about how a world works, why the player makes a choice, why they return, and what moves them forward.",
    ],
    [
      "Game design decisions that are not close to me",
      "I am not a fan of the small 5v5 format on small maps when it comes to my personal gaming taste. I am closer to scale: large spaces, global movement, 64–128 players, the feeling of a large operation. At the same time, I am not against 5v5 as a format — CS tournaments, for example, are interesting to watch.",
    ],
    ["What kind of person do I want to be in the industry?", "Someone people describe as: “This guy made a game that felt new at the time.”"],
    [
      "What do I value in working on a project?",
      "Team effort and the process of creation itself: graphics, music, sound, script, mechanics, documents. I like seeing how a project gradually appears out of chaos.",
    ],
    ["What could make me leave a project?", "Team inaction. When no one moves, makes decisions, or tries to pull the project forward."],
    ["What inspires me outside games?", "Music, architecture, and history."],
    ["If I could make only one game", "The ideal Seversk."],
    ["Where do I see myself in 10 years?", "At minimum, working in the game development industry. At maximum, as a person with my own team and staff."],
    ["Dream project", "A large-scale RPG with long progression that you can invest hundreds of hours into."],
    [
      "Why do I make my own projects?",
      "Because I am genuinely interested in it. I enjoy the process: inventing mechanics, building structure, fixing a bug, and seeing an idea start working. It is a very strong feeling.",
    ],
    [
      "An industry problem I dislike",
      "Negativity toward genres. I do not like it when a genre is dismissed in advance without trying to understand why it works and who values it.",
    ],
    [
      "What would I say to someone who opened this site?",
      "If you opened this site, it means you are interested in my opinion and my approach. I hope I managed to answer that. Thank you for your attention.",
    ],
  ],
};

const personalNotesTranslations = {
  ru: [
    "Хорошая механика должна работать даже без сюжета.",
    "Если игроку интересно просто идти вперёд — значит мир уже работает.",
    "Атмосфера — это не графика. Это ощущение.",
    "Игрок всегда найдёт самый эффективный путь. Сделай так, чтобы он был интересным.",
    "Большая карта ничего не стоит без причин её исследовать.",
    "Иногда убрать механику полезнее, чем добавить новую.",
    "Каждый предмет должен отвечать на вопрос: зачем он существует?",
    "Хороший интерфейс не объясняет себя.",
    "Мир должен существовать даже без игрока.",
    "Не бойся оставлять вопросы без ответов.",
    "История не должна мешать игре.",
    "Чем меньше правил объясняешь — тем лучше они придуманы.",
    "Гринд не проблема. Бессмысленный гринд — проблема.",
    "Если игроку хочется вернуться завтра — игра победила.",
    "Сложность должна вызывать уважение, а не раздражение.",
    "Не каждая механика обязана нравиться всем.",
    "Баланс — это бесконечный процесс.",
    "Любая система должна ломаться красиво.",
    "Если игрок остановился посмотреть вокруг — значит ты всё сделал правильно.",
    "Мир интереснее, когда в нём есть тайны.",
    "Не люблю игры, которые торопят игрока без причины.",
    "Музыка — это тоже геймдизайн.",
    "Даже меню должно быть частью игрового опыта.",
    "Игрок должен чувствовать последствия своих решений.",
    "Масштаб ощущается не размером карты, а количеством возможностей.",
    "Хорошая идея ничего не стоит без реализации.",
    "Всё начинается с маленькой идеи, записанной в Obsidian.",
    "Если игра вызывает обсуждение — она уже чего-то добилась.",
    "Игрок запомнит эмоцию. Не цифры.",
    "Игрок должен хотеть экспериментировать.",
    "В каждой игре должна быть причина остаться ещё на один час.",
  ],
  en: [
    "A strong mechanic should work even without a story.",
    "If moving forward is interesting by itself, the world is already working.",
    "Atmosphere is not graphics. It is a feeling.",
    "The player will always find the most efficient path. Make that path interesting.",
    "A large map means nothing without reasons to explore it.",
    "Sometimes removing a mechanic is more useful than adding a new one.",
    "Every item should answer one question: why does it exist?",
    "A good interface does not explain itself.",
    "The world should exist even without the player.",
    "Do not be afraid to leave some questions unanswered.",
    "The story should not get in the way of the game.",
    "The fewer rules you need to explain, the better they were designed.",
    "Grind is not the problem. Meaningless grind is.",
    "If the player wants to return tomorrow, the game has won.",
    "Difficulty should create respect, not irritation.",
    "Not every mechanic has to appeal to everyone.",
    "Balance is an endless process.",
    "Every system should break in an interesting way.",
    "If the player stops to look around, you did something right.",
    "A world is more interesting when it holds secrets.",
    "I dislike games that rush the player for no reason.",
    "Music is game design too.",
    "Even the menu should be part of the game experience.",
    "The player should feel the consequences of their decisions.",
    "Scale is not the size of the map. It is the number of possibilities.",
    "A good idea is worth nothing without execution.",
    "Everything starts with a small idea written down in Obsidian.",
    "If a game creates discussion, it has already achieved something.",
    "The player will remember the emotion, not the numbers.",
    "The player should want to experiment.",
    "Every game needs a reason to stay for one more hour.",
  ],
};

const personalNotesCopy = {
  ru: {
    label: "PERSONAL NOTES",
    entry: "ЗАМЕТКА",
  },
  en: {
    label: "PERSONAL NOTES",
    entry: "ENTRY",
  },
};

const personalNotesStorageKey = "doifas-personal-notes-state";
const personalNotesIntervalMs = 12000;
const personalNotesFadeMs = 420;
const personalNotesHoverPauseMs = 2000;
const personalNotesResumeMs = 3000;
let currentLanguage = "ru";
let personalNotesElements = null;
let personalNotesTimer = null;
let personalNotesHoverTimer = null;
let personalNotesResumeTimer = null;
let personalNotesPaused = false;

const getStoredLanguage = () => {
  const storedLanguage = window.localStorage.getItem("doifas-language");
  return storedLanguage === "en" || storedLanguage === "ru" ? storedLanguage : "ru";
};

const translateKey = (key, lang) => translations[lang]?.[key] ?? translations.ru[key] ?? key;

const applyAttributeTranslation = (element, lang) => {
  const config = element.dataset.i18nAttr;

  if (!config) {
    return;
  }

  config.split(",").forEach((pair) => {
    const [attribute, key] = pair.split(":").map((part) => part?.trim());

    if (attribute && key) {
      element.setAttribute(attribute, translateKey(key, lang));
    }
  });
};

const setLanguage = (lang) => {
  const nextLanguage = lang === "en" ? "en" : "ru";

  currentLanguage = nextLanguage;
  document.documentElement.lang = nextLanguage;
  window.localStorage.setItem("doifas-language", nextLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translateKey(element.dataset.i18n, nextLanguage);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translateKey(element.dataset.i18nHtml, nextLanguage);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    applyAttributeTranslation(element, nextLanguage);
  });

  document.querySelectorAll("[data-interview-index]").forEach((card) => {
    const index = Number(card.dataset.interviewIndex);
    const item = interviewTranslations[nextLanguage]?.[index];

    if (!item) {
      return;
    }

    card.querySelector("[data-interview-question]").textContent = item[0];
    card.querySelector("[data-interview-answer]").textContent = item[1];
    card.querySelector("[data-interview-label]").textContent = `Question ${String(index + 1).padStart(2, "0")}`;
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (document.body.dataset.pageTitle) {
    document.title = translateKey(document.body.dataset.pageTitle, nextLanguage);
  }

  updatePersonalNotesLanguage(nextLanguage);
};

window.setLanguage = setLanguage;

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageOption);
  });
});

setLanguage(getStoredLanguage());

const readPersonalNotesState = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(personalNotesStorageKey));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writePersonalNotesState = (state) => {
  window.localStorage.setItem(personalNotesStorageKey, JSON.stringify(state));
};

const getSecureIndex = (max) => {
  if (max <= 1) {
    return 0;
  }

  const values = new Uint32Array(1);
  window.crypto.getRandomValues(values);
  return values[0] % max;
};

const shuffleSecure = (items) => {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = getSecureIndex(index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }

  return result;
};

const normalizePersonalNotesState = (state) => {
  const noteCount = personalNotesTranslations.ru.length;
  const validIndex = (value) => Number.isInteger(value) && value >= 0 && value < noteCount;
  const normalized = {
    pool: Array.isArray(state.pool) ? state.pool.filter(validIndex) : [],
    currentIndex: validIndex(state.currentIndex) ? state.currentIndex : null,
    lastIndex: validIndex(state.lastIndex) ? state.lastIndex : null,
    blockedIndex: validIndex(state.blockedIndex) ? state.blockedIndex : null,
    shownSinceReset: Number.isInteger(state.shownSinceReset) ? Math.max(0, state.shownSinceReset) : 0,
  };

  normalized.pool = [...new Set(normalized.pool)];
  return normalized;
};

const createPersonalNotesCycle = (lastIndex) => {
  const allIndexes = personalNotesTranslations.ru.map((_, index) => index);
  const pool = Number.isInteger(lastIndex) ? allIndexes.filter((index) => index !== lastIndex) : allIndexes;

  return {
    pool: shuffleSecure(pool),
    blockedIndex: Number.isInteger(lastIndex) ? lastIndex : null,
    shownSinceReset: 0,
  };
};

const getNextPersonalNoteIndex = () => {
  const state = normalizePersonalNotesState(readPersonalNotesState());
  const noteCount = personalNotesTranslations.ru.length;

  if (state.pool.length === 0) {
    Object.assign(state, createPersonalNotesCycle(state.lastIndex));
  }

  if (state.blockedIndex !== null && state.shownSinceReset >= 3 && !state.pool.includes(state.blockedIndex)) {
    state.pool.splice(getSecureIndex(state.pool.length + 1), 0, state.blockedIndex);
    state.blockedIndex = null;
  }

  if (state.pool.length === 0) {
    state.pool = shuffleSecure(personalNotesTranslations.ru.map((_, index) => index));
    state.blockedIndex = null;
    state.shownSinceReset = 0;
  }

  const nextIndex = state.pool.shift();

  if (state.blockedIndex !== null && nextIndex !== state.blockedIndex) {
    state.shownSinceReset += 1;
  }

  state.currentIndex = nextIndex;
  state.lastIndex = nextIndex;

  if (state.shownSinceReset > noteCount) {
    state.shownSinceReset = noteCount;
  }

  writePersonalNotesState(state);
  return nextIndex;
};

const getCurrentPersonalNoteIndex = () => {
  const state = normalizePersonalNotesState(readPersonalNotesState());

  if (state.currentIndex !== null) {
    writePersonalNotesState(state);
    return state.currentIndex;
  }

  return getNextPersonalNoteIndex();
};

const renderPersonalNote = (index, lang = currentLanguage) => {
  if (!personalNotesElements) {
    return;
  }

  const safeIndex = Number.isInteger(index) ? index : getCurrentPersonalNoteIndex();
  const note = personalNotesTranslations[lang]?.[safeIndex] ?? personalNotesTranslations.ru[safeIndex];
  const copy = personalNotesCopy[lang] ?? personalNotesCopy.ru;

  personalNotesElements.label.textContent = copy.label;
  personalNotesElements.text.textContent = note;
  personalNotesElements.entry.textContent = `${copy.entry} #${String(safeIndex + 1).padStart(2, "0")}`;
};

function updatePersonalNotesLanguage(lang) {
  if (!personalNotesElements) {
    return;
  }

  renderPersonalNote(getCurrentPersonalNoteIndex(), lang);
}

const schedulePersonalNotes = () => {
  window.clearTimeout(personalNotesTimer);

  if (personalNotesPaused) {
    return;
  }

  personalNotesTimer = window.setTimeout(() => {
    advancePersonalNote();
  }, personalNotesIntervalMs);
};

function advancePersonalNote() {
  if (!personalNotesElements || personalNotesPaused) {
    return;
  }

  const nextIndex = getNextPersonalNoteIndex();

  if (prefersReducedMotion) {
    renderPersonalNote(nextIndex);
    schedulePersonalNotes();
    return;
  }

  personalNotesElements.root.classList.add("is-changing");

  window.setTimeout(() => {
    renderPersonalNote(nextIndex);
    personalNotesElements.root.classList.remove("is-changing");
    schedulePersonalNotes();
  }, personalNotesFadeMs);
}

const pausePersonalNotes = () => {
  personalNotesPaused = true;
  window.clearTimeout(personalNotesTimer);
  window.clearTimeout(personalNotesResumeTimer);
};

const resumePersonalNotes = () => {
  window.clearTimeout(personalNotesResumeTimer);
  personalNotesResumeTimer = window.setTimeout(() => {
    personalNotesPaused = false;
    schedulePersonalNotes();
  }, personalNotesResumeMs);
};

const setupPersonalNotes = () => {
  const root = document.createElement("aside");
  root.className = "personal-notes";
  root.setAttribute("aria-live", "polite");
  root.innerHTML = `
    <span class="personal-notes__label"></span>
    <p class="personal-notes__text"></p>
    <small class="personal-notes__entry"></small>
  `;

  const shell = document.querySelector(".site-shell");
  const footer = shell?.querySelector(".site-footer");

  if (footer) {
    shell.insertBefore(root, footer);
  } else {
    document.body.append(root);
  }

  personalNotesElements = {
    root,
    label: root.querySelector(".personal-notes__label"),
    text: root.querySelector(".personal-notes__text"),
    entry: root.querySelector(".personal-notes__entry"),
  };

  renderPersonalNote(getCurrentPersonalNoteIndex());
  schedulePersonalNotes();

  root.addEventListener("mouseenter", () => {
    window.clearTimeout(personalNotesResumeTimer);
    personalNotesHoverTimer = window.setTimeout(pausePersonalNotes, personalNotesHoverPauseMs);
  });

  root.addEventListener("mouseleave", () => {
    window.clearTimeout(personalNotesHoverTimer);

    if (personalNotesPaused) {
      resumePersonalNotes();
    }
  });
};

setupPersonalNotes();

const canAnimateGrid =
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canAnimateGrid) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frameId = null;

  const updateGrid = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    document.documentElement.style.setProperty("--grid-x", `${currentX.toFixed(2)}px`);
    document.documentElement.style.setProperty("--grid-y", `${currentY.toFixed(2)}px`);

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      frameId = requestAnimationFrame(updateGrid);
    } else {
      frameId = null;
    }
  };

  window.addEventListener("mousemove", (event) => {
    const xRatio = event.clientX / window.innerWidth - 0.5;
    const yRatio = event.clientY / window.innerHeight - 0.5;

    targetX = xRatio * 12;
    targetY = yRatio * 12;

    if (frameId === null) {
      frameId = requestAnimationFrame(updateGrid);
    }
  });
}

const transitionLinks = document.querySelectorAll('a[data-transition]');
const transitionDurations = {
  novel: 920,
  seversk: 880,
  home: 720,
};

transitionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    const isExternal = url.origin !== window.location.origin;

    if (isExternal || link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();

    if (prefersReducedMotion) {
      window.location.href = link.href;
      return;
    }

    const transitionType = link.dataset.transition;
    document.documentElement.classList.add("is-transitioning");

    if (transitionType) {
      document.documentElement.classList.add(`transition-${transitionType}`);
    }

    window.setTimeout(() => {
      window.location.href = link.href;
    }, transitionDurations[transitionType] ?? 620);
  });
});

const modalBackdrop = document.querySelector("[data-modal-backdrop]");
const modalTriggers = document.querySelectorAll("[data-modal-target]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
let activeModalTrigger = null;

const openModal = (trigger) => {
  if (!modalBackdrop) {
    return;
  }

  activeModalTrigger = trigger;
  modalBackdrop.hidden = false;
  document.body.classList.add("is-modal-open");

  requestAnimationFrame(() => {
    modalBackdrop.classList.add("is-open");
    modalBackdrop.querySelector("[data-modal-close]")?.focus();
  });
};

const closeModal = () => {
  if (!modalBackdrop || modalBackdrop.hidden) {
    return;
  }

  modalBackdrop.classList.remove("is-open");
  document.body.classList.remove("is-modal-open");

  window.setTimeout(
    () => {
      modalBackdrop.hidden = true;
      activeModalTrigger?.focus();
      activeModalTrigger = null;
    },
    prefersReducedMotion ? 0 : 360
  );
};

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(trigger);
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });
}

const revealItems = document.querySelectorAll(".section-reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
