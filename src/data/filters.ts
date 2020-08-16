export type Choice = {
  label: string;
  id: string;
};

export type FilterData = {
  searchParam: string; // for frontend eg. /search?searchParam=<value>
  apiParam: string; // for API
  title: string;
  multiple: boolean;
  choices: Choice[];
};

export const filters: FilterData[] = [
  {
    searchParam: 'public',
    apiParam: 'is_public',
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
    searchParam: 'schoolType',
    apiParam: 'school_type',
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
    searchParam: 'extendedSubjects',
    apiParam: 'highschoolclass__extendedsubject__name',
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
    searchParam: 'district',
    apiParam: 'address__district',
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
