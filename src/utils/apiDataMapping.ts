export const getLanguageEmoji = (lang: string): string => {
  switch (lang) {
    case 'angielski':
      return '🇬🇧';
    case 'niemiecki':
      return '🇩🇪';
    case 'francuski':
      return '🇫🇷';
    case 'rosyjski':
      return '🇷🇺';
    default:
      return lang;
  }
};

export const getSchoolTypeFromRspoInstitutionTypeId = (id: number) => {
  switch (id) {
    case 90:
      return 'Bednarska Szkoła Realna';
    case 58:
      return 'Biblioteki pedagogiczne';
    case 93:
      return 'Branżowa szkoła I stopnia';
    case 94:
      return 'Branżowa szkoła II stopnia';
    case 55:
      return 'Bursa';
    case 45:
      return 'Centrum Kształcenia Praktycznego';
    case 96:
      return 'Centrum Kształcenia Zawodowego';
    case 56:
      return 'Dom wczasów dziecięcych';
    case 4:
      return 'Gimnazjum';
    case 89:
      return 'Inna szkoła artystyczna';
    case 34:
      return 'Kolegium nauczycielskie';
    case 65:
      return 'Kolegium Pracowników Służb Społecznych';
    case 14:
      return 'Liceum ogólnokształcące';
    case 17:
      return 'Liceum ogólnokształcące uzupełniające dla absolwentów zasadniczych szkół zawodowych';
    case 15:
      return 'Liceum profilowane';
    case 27:
      return 'Liceum sztuk plastycznych';
    case 40:
      return 'Międzyszkolny ośrodek sportowy';
    case 48:
      return 'Młodzieżowy dom kultury';
    case 54:
      return 'Młodzieżowy Ośrodek Socjoterapii ze szkołami';
    case 53:
      return 'Młodzieżowy Ośrodek Wychowawczy';
    case 35:
      return 'Nauczycielskie Kolegium Języków Obcych';
    case 75:
      return 'Niepubliczna placówka kształcenia ustawicznego i praktycznego';

    case 83:
      return 'Niepubliczna placówka kształcenia ustawicznego i praktycznego ze szkołami';

    case 64:
      return 'Niepubliczna placówka oświatowo-wychowawcza w systemie oświaty';

    case 39:
      return 'Ognisko pracy pozaszkolnej';

    case 29:
      return 'Ogólnokształcąca szkoła baletowa';

    case 21:
      return 'Ogólnokształcąca szkoła muzyczna I stopnia';

    case 24:
      return 'Ogólnokształcąca szkoła muzyczna II stopnia';

    case 26:
      return 'Ogólnokształcąca szkoła sztuk pięknych';

    case 41:
      return 'Ogród jordanowski';

    case 47:
      return 'Ośrodek dokształcania i doskonalenia zawodowego';

    case 52:
      return 'Ośrodek Rewalidacyjno-Wychowawczy';

    case 37:
      return 'Pałac młodzieży';

    case 57:
      return 'Placówka doskonalenia nauczycieli';

    case 74:
      return 'Placówka Kształcenia Ustawicznego - bez szkół';

    case 46:
      return 'Placówka Kształcenia Ustawicznego ze szkołami';

    case 44:
      return 'Placówki artystyczne (ognisko artystyczne)';

    case 91:
      return 'Policealna szkoła muzyczna';

    case 92:
      return 'Policealna szkoła plastyczna';

    case 48:
      return 'Poradnia psychologiczno-pedagogiczna';

    case 49:
      return 'Poradnia specjalistyczna';

    case 42:
      return 'Pozaszkolna placówka specjalistyczna';

    case 82:
      return 'Poznańska szkoła chóralna';

    case 1:
      return 'Przedszkole';

    case 81:
      return 'Punkt przedszkolny';

    case 51:
      return 'Specjalny Ośrodek Szkolno-Wychowawczy';

    case 50:
      return 'Specjalny Ośrodek Wychowawczy';

    case 43:
      return 'Szkolne schronisko młodzieżowe';

    case 85:
      return 'Szkoła muzyczna I stopnia';

    case 86:
      return 'Szkoła muzyczna II stopnia';

    case 3:
      return 'Szkoła podstawowa';

    case 19:
      return 'Szkoła policealna';

    case 20:
      return 'Szkoła specjalna przysposabiająca do pracy';

    case 31:
      return 'Szkoła sztuki cyrkowej';

    case 87:
      return 'Szkoła sztuki tańca';

    case 16:
      return 'Technikum';

    case 100:
      return 'Zespół szkół i placówek oświatowych';

    case 80:
      return 'Zespół wychowania przedszkolnego';
    default:
      return '-';
  }
};
