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
        "Hello, I am a junior software developer from Hungary. Hopefully i will be studying at the University of Szeged startin in Szeptember, where I am pursuing a degree in Computer Science. I have a strong passion for programming and technology, and I am always eager to learn new skills and improve my knowledge.",
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
            "GDB Logistics was a project for my final exam for my technikusi vizsga. This project was a complete company software with backend a desktop web and mobile app.",
          descriptionLong: [],
          technologies: [
            "Typescript",
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
            "Exclusive 3D is a project I am working on with a friend. My main task here was to create a dashboard and backend that automates the 3D printing processes.",
          descriptionLong: [],
          technologies: [
            "Typescript",
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
          title: "sequlizer to diagrams",
          github: "https://github.com/Kugesz/sequelize-diagram",

          status: "In progress",
          description:
            "This project can generate database diagrams from Sequelize tables.",
          descriptionLong: [],
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
        "Üdv, jelenleg egy  junior szoftverfejlesztő vagyok Magyarországról. Remélhetőleg Szeptembertől a Szegedi Egyetemen fogok tanulok, ahol számítástechnikai diplomám megszerzésén munkálkodnék. Nagyon szenvedélyesen érdekel a programozás és a technológia, és mindig lelkesen tanulok új készségeket, valamint fejlesztem a tudásomat.",
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
            "GDB Logistics volt a technikumi viszgaremekemhez készített softver. Ez a projekt egy teljesen felépített backend-el, asztali web és mobil alkalmazással.",
          descriptionLong: [
            "GDB Logistics volt a technikumi viszgaremekemhez készített softver. Ez a projekt egy teljesen felépített backend-el, asztali web és mobil alkalmazással.",
            "Ez a softver rendszer volt az egyik legnagyobb projekt amit készítettem. A projekt futási ideje körülbelül 8 hónap volt. A projektet egyik akkori osztálytársammal és barátommal Boros Balázzal kíszítettük.",
            "A kívitelezésbe a CAS Software Kft-től Varga-Dudás Attila mentorált minket, akinek ezúton is köszönjük a segítséget. A mentorálás során rengeteg hasznos tanácsot kaptunk a projekt felépítésével és kivitelezésével kapcsolatban.",
          ],
          technologies: [
            "Typescript",
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
            "A projekt az egyik barátommal közösen készül. A projekt célja egy olyan rendszer létrehozása, amely képes automatizálni a 3D nyomtatási folyamatokat és kezelni a 3D nyomtatókat. Ezzel szeretnénk megkönnyíteni a munkánkat és növelni a hatékonyságot az ehez készült webshop-hoz.",
            "Ez volt az első projekt, ahol úgy éreztem, hogy sikerült egy olvashatóbb és magasabb szintű kódot írnom, mind React mind Node.js oldalon.",
            "Ezen felűl belelátást szereztem a Docker container automatizációba, ami nagyban elősegítette a projektünk skálázhatóságát.",
            "Magát a backend-et egy régi számítógépen futtatjuk, amelyet a 3D nyomtatókhoz lokálisan van elhelyezve, hogy így irányítani tudjuk őket.",
          ],
          technologies: [
            "Typescript",
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
            "Docker container automatizáció",
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
            "Az adri.py-t még középiskolában készítettem ami egy python automatizáció volt, amely az iskolánk weboldaláról letöltötte az óracseréket és különböző platformokon képes volt diákokat értesíteni.",
          descriptionLong: [
            "A projekt először 2020-ban fogalmazodott meg bennem. Mivel az iskolánk az óracseréket a weboldalában egy PDF-ben tette közzé. A cél az lett volna, hogy ez a Python Bot egy szerveren futattava megszerzi azt a PDF-et és értesíti a változásban érintett diákokat.",
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
            "Python automatizáció",
            "Web scraping technikák",
            "PDF adatok kinyerése",
          ],
        },
        {
          id: 4,
          title: "sequlizer to diagrams",
          github: "https://github.com/Kugesz/sequelize-diagram",

          status: "In progress",
          description:
            "Ez a projekt sequlizer táblákból képes adatbázis diagrammokat készíteni.",
          descriptionLong: [
            "Erre az npm csomagra való igényem a GDB Logistics projekt során merült fel, mivel gyakran változó sequlize táblákkal dolgoztam és rengeteg időt vett igénybe a táblák folyamatos újra áblázolása.",
            "Maga a csomag csak typescirpt támogatással lesz elérhető. De legjobb tudomásom szerint ilyen csomag ami így integrálható nincs a piacon.",
            "Késöbbiekbben mindenkép szeretném a csomagot eljuttatni a sequlize fejlesztőihez, hogy az eredeti dokumentációba bekerülhessen.",
          ],
          technologies: ["NPM Package", "sequelize"],
          lessons: ["Draw.io filok generálása"],
        },
      ],
    },
    contact: {
      title: "Kapcsolat",
    },
  },
};
