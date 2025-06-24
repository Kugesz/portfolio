export const translationsNavigation = {
  gb: {
    brand: "Gergő Kovács",
    projects: "Projects",
    contact: "Contact",
    portfolio: "Portfolio",
    fileName: "portfolio_en.pdf",
  },
  hu: {
    brand: "Kovács Gergő",
    projects: "Projectek",
    contact: "Kapcsolat",
    portfolio: "Portfólió",
    fileName: "portfolio_hu.pdf",
  },
};

export const translations = {
  gb: {
    introduction: {
      name: "Gergő Kovács",
      title: "Junior Software Developer",
      description:
        "Hello, I am a junior software developer from Hungary. Hopefully, Hopefully, I will be studying at the University of Szeged starting in September, where I will be pursuing a degree in Computer Science. I have a strong passion for programming and technology, and I am always eager to learn new skills and improve my knowledge.",
      interests:
        "Technologies I am interested in: React, Node.js, TypeScript, Python, Java",
    },
    projects: {
      title: "Projects",
      list: [
        {
          id: 1,
          title: "GDB Logistics",
          github: "https://github.com/orgs/GDB-Logistics-archive/repositories",
          status: "Finished",
          description:
            "GDB Logistics was a project for my final exam for my technician exam. This project was a complete company software solution, with a backend, a desktop app, a web app, and a mobile app.",
          descriptionLong: [
            "GDB Logistics was a project for my final exam for my technician exam. This project was a complete company software solution, with a backend, a desktop app, a web app, and a mobile app.",
            "This software system was one of the biggest projects I have ever made. The project took about 8 months to complete. I made this project with one of my classmates and friend Boros Balázs.",
            "We were mentored by Varga-Dudás Attila from CAS Software Kft, who provided us with valuable advice on how to structure and implement the project.",
          ],
          technologies: [
            "TypeScript",
            "React",
            "Bootstrap",
            "Node",
            "Express",
            "JWT",
            "Socket IO",
            "Sqlite",
            "Sequelize",
            "Crone jobs",
          ],
          lessons: [
            "Large project architecture",
            "Backend and frontend integration",
            "Heroku deployment",
          ],
        },
        {
          id: 2,
          title: "Exclusive 3D",
          status: "In progress",
          description:
            "Exclusive 3D is a project I am working on with a friend. My main task here was to create a dashboard and backend that automates 3D printing processes.",
          descriptionLong: [
            "This project is being developed in collaboration with a friend. The goal of the project is to create a system that can automate 3D printing processes and manage 3D printers. This will help us streamline our work and increase efficiency for the webshop we are building.",
            "This was the first project where I felt I was able to write cleaner and higher-quality code, both on the React and Node.js side.",
            "In addition, I gained insight into Docker container automation, which greatly enhanced the scalability of our project.",
            "The backend is running on an old computer that we placed locally next to the 3D printers to control them.",
          ],
          technologies: [
            "TypeScript",
            "React",
            "Bootstrap",
            "Node.js",
            "Express",
            "JWT",
            "Sqlite",
            "Sequelize",
            "Docker",
          ],
          lessons: [
            "React Context",
            "React Hooks",
            "Docker container automation",
            "Websocket communication",
            "3D model generation",
          ],
        },
        {
          id: 3,
          title: "adri.py",
          github: "https://github.com/Kugesz/adri.py",

          status: "In progress",
          description:
            "I created adri.py back in high school, which was a Python automation script that downloaded class schedule changes from our school's website and was able to notify students on various platforms.",
          descriptionLong: [],
          technologies: [
            "Python",
            "Web scraping",
            "Telegram Bot Api",
            "Discord.py",
            "Webhooks",
          ],
          lessons: [
            "Python automation",
            "Web scraping techniques",
            "PDF data extraction",
          ],
        },
        {
          id: 4,
          title: "sequelize to diagrams",
          github: "https://github.com/Kugesz/sequelize-diagram",

          status: "In progress",
          description:
            "This project can generate database diagrams from Sequelize tables.",
          descriptionLong: [
            "The need for this npm package arose during the GDB Logistics project, as I frequently worked with changing Sequelize tables and it took a lot of time to constantly redraw the tables.",
            "The package will only be available with TypeScript support. But to my best knowledge, there is no such package available on the market that can be integrated in this way.",
            "In the future, I definitely want to reach out to the Sequelize developers to see if it can be included in the original documentation.",
          ],
          technologies: ["NPM Package", "sequelize"],
          lessons: ["Draw.io file generation"],
        },
      ],
    },
    contact: {
      title: "Contact",
    },
  },
  hu: {
    introduction: {
      name: "Kovács Gergő",
      title: "Junior Software Fejlesztő",
      description:
        "Üdv, egy junior szoftverfejlesztő. Remélhetőleg szeptembertől a Szegedi Egyetemen fogok tanulok, ahol számítástechnikai diplomám megszerzésén dolgoznék. Szenvedélyesen érdekel a programozás és a technológia, és mindig lelkesen tanulok új készségeket, valamint fejlesztem a tudásomat.",
      interests: "Technológiák: React, Node.js, TypeScript, Python, Java",
    },
    projects: {
      title: "Projektek",
      list: [
        {
          id: 1,
          title: "GDB Logistics",
          github: "https://github.com/orgs/GDB-Logistics-archive/repositories",
          status: "Finished",
          description:
            "GDB Logistics volt a technikumi vizsgaremekemhez készített szoftver. Ez a projekt egy teljesen felépített back-enddel, asztali, web és mobil alkalmazással.",
          descriptionLong: [
            "GDB Logistics volt a technikumi vizsgaremekemhez készített szoftver. Ez a projekt egy teljesen felépített back-enddel, asztali, web és mobil alkalmazással.",
            "Ez a szoftver rendszer volt az egyik legnagyobb projekt amit készítettem. A projekt futási ideje körülbelül 8 hónap volt. A projektet egyik akkori osztálytársammal és barátommal Boros Balázzal készítettük.",
            "A kivitelezésben a CAS Software Kft-től Varga-Dudás Attila mentorált minket, akinek ezúton is köszönjük a segítséget. A mentorálás során rengeteg hasznos tanácsot kaptunk a projekt felépítésével és kivitelezésével kapcsolatban.",
          ],
          technologies: [
            "TypeScript",
            "React",
            "Bootstrap",
            "Node",
            "Express",
            "JWT",
            "Socket IO",
            "Sqlite",
            "Sequelize",
            "Crone jobs",
          ],
          lessons: [
            "Nagy projektek felépítése",
            "Backend és frontend integráció",
            "Heroku",
          ],
        },
        {
          id: 2,
          title: "Exclusive 3D",
          status: "In progress",
          description:
            "Az Exclusive 3D egy olyan projekt, amelyet a barátommal közösen készítünk. Itt a fő feladatom egy dashboard és backend elkészítése volt ami automatizálja a 3D nyomtatási folyamatokat.",
          descriptionLong: [
            "A projekt az egyik barátommal közösen készül. A projekt célja egy olyan rendszer létrehozása, amely képes automatizálni a 3D nyomtatási folyamatokat és kezelni a 3D nyomtatókat. Ezzel szeretnénk megkönnyíteni a munkánkat és növelni a hatékonyságot az ehhez készült webshop-hoz.",
            "Ez volt az első projekt, ahol úgy éreztem, hogy sikerült egy olvashatóbb és magasabb szintű kódot írnom, mind React mind Node.js oldalon.",
            "Ezen felül belelátást szereztem a Docker container automatizációba, ami nagyban elősegítette a projektünk skálázhatóságát.",
            "Magát a backendet egy régi számítógépen futtatjuk, amelyet a 3D nyomtatókhoz lokálisan helyeztük el, hogy így irányítani tudjuk őket.",
          ],
          technologies: [
            "TypeScript",
            "React",
            "Bootstrap",
            "Node.js",
            "Express",
            "JWT",
            "Sqlite",
            "Sequelize",
            "Docker",
          ],
          lessons: [
            "React Context",
            "React Hooks",
            "Docker container automatizálás",
            "Websocket kommunikáció",
            "3d modellek generálása",
          ],
        },
        {
          id: 3,
          title: "adri.py",
          github: "https://github.com/Kugesz/adri.py",
          status: "In progress",
          description:
            "Az adri.py-t még középiskolában készítettem, ami egy python automatizálás volt, amely az iskolánk weboldaláról letöltötte az óracseréket és különböző platformokon képes volt diákokat értesíteni.",
          descriptionLong: [
            "A projekt először 2020-ban fogalmazódott meg bennem. Mivel az iskolánk az óracseréket a weboldalában egy PDF-ben tette közzé. A cél az lett volna, hogy ez a Python Bot egy szerveren futtatva megszerezze azt a PDF-et és értesítse a változásban érintett diákokat.",
            "A projekt az értesítések fázisba a mai napig nem jutott el, de ennek főbb oka az elballagásom volt.",
          ],
          technologies: [
            "Python",
            "Web scraping",
            "Telegram Bot Api",
            "Discord.py",
            "Webhooks",
          ],
          lessons: [
            "Python automatizálás",
            "Web scraping technikák",
            "PDF adatok kinyerése",
          ],
        },
        {
          id: 4,
          title: "sequelize to diagrams",
          github: "https://github.com/Kugesz/sequelize-diagram",

          status: "In progress",
          description:
            "Ez a projekt sequelize táblákból képes adatbázis diagramokat készíteni.",
          descriptionLong: [
            "Erre az npm csomagra való igényem a GDB Logistics projekt során merült fel, mivel gyakran változó sequelize táblákkal dolgoztam és rengeteg időt vett igénybe a táblák folyamatos újra ábrázolása.",
            "Maga a csomag csak TypeScript támogatással lesz elérhető. De legjobb tudomásom szerint ilyen csomag ami így integrálható nincs a piacon.",
            "Későbbiekben mindenképp szeretném a csomagot eljuttatni a sequelize fejlesztőihez, hogy az eredeti dokumentációba bekerülhessen.",
          ],
          technologies: ["NPM Package", "sequelize"],
          lessons: ["Draw.io fájlok generálása"],
        },
      ],
    },
    contact: {
      title: "Kapcsolat",
    },
  },
};
