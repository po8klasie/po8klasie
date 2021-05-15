export type FilterChoiceDefinition = {
  label: string;
  id: string;
};

export type FilterKey = 'public' | 'schoolType' | 'extendedSubjects' | 'district';

export type FilterDefinition = {
  key: FilterKey; // for frontend eg. /search?key=<value>
  title: string;
  multiple: boolean;
  choices: FilterChoiceDefinition[];
};

export const filters: FilterDefinition[] = [
  {
    key: 'public',
    title: 'Szkoła publiczna',
    multiple: false,
    choices: [
      {
        id: 'True',
        label: 'tak',
      },
      {
        id: 'False',
        label: 'nie',
      },
    ],
  },
  {
    key: 'schoolType',
    title: 'Typ szkoły',
    multiple: true,
    choices: [
      {
        id: 'liceum ogólnokształcące',
        label: 'liceum',
      },
      {
        id: 'technikum',
        label: 'technikum',
      },
      {
        id: 'szkoła branżowa I stopnia',
        label: 'szkoła branżowa',
      },
    ],
  },
  {
    key: 'extendedSubjects',
    title: 'Rozszerzone przedmioty',
    multiple: true,
    choices: [
      {
        id: 'pol',
        label: 'język polski',
      },
      {
        id: 'hist',
        label: 'historia',
      },
      {
        id: 'wos',
        label: 'WOS',
      },
      {
        id: 'mat',
        label: 'matematyka',
      },
      {
        id: 'fiz',
        label: 'fizyka',
      },
      {
        id: 'inf',
        label: 'informatyka',
      },
      {
        id: 'chem',
        label: 'chemia',
      },
      {
        id: 'biol',
        label: 'biologia',
      },
      {
        id: 'geogr',
        label: 'geografia',
      },
    ],
  },
  {
    key: 'district',
    title: 'Dzielnica',
    multiple: true,
    choices: [
      {
        id: 'Bemowo',
        label: 'Bemowo',
      },
      {
        id: 'Białołęka',
        label: 'Białołęka',
      },
      {
        id: 'Bielany',
        label: 'Bielany',
      },
      {
        id: 'Mokotów',
        label: 'Mokotów',
      },
      {
        id: 'Ochota',
        label: 'Ochota',
      },
      {
        id: 'Praga Południe',
        label: 'Praga Południe',
      },
      {
        id: 'Praga Północ',
        label: 'Praga Północ',
      },
      {
        id: 'Rembertów',
        label: 'Rembertów',
      },
      {
        id: 'Śródmieście',
        label: 'Śródmieście',
      },
      {
        id: 'Targówek',
        label: 'Targówek',
      },
      {
        id: 'Ursus',
        label: 'Ursus',
      },
      {
        id: 'Ursynów',
        label: 'Ursynów',
      },
      {
        id: 'Wawer',
        label: 'Wawer',
      },
      {
        id: 'Wesoła',
        label: 'Wesoła',
      },
      {
        id: 'Wilanów',
        label: 'Wilanów',
      },
      {
        id: 'Włochy',
        label: 'Włochy',
      },
      {
        id: 'Wola',
        label: 'Wola',
      },
      {
        id: 'Żoliborz',
        label: 'Żoliborz',
      },
    ],
  },
];
