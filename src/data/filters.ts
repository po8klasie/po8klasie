export type FilterChoiceValue = string | boolean;

export type FilterChoiceDefinition = {
  label: string;
  value: FilterChoiceValue;
};

export type FilterKey = 'public' | 'schoolType' | 'extendedSubjects' | 'district';
export type FilterBackendKey = 'isPublic' | 'schoolType' | 'extendedSubjects' | 'districts';

export type FilterDefinition = {
  key: FilterKey; // for frontend eg. /search?key=<value>
  backendKey: FilterBackendKey;
  title: string;
  multiple: boolean;
  choices: FilterChoiceDefinition[];
};

export const filters: FilterDefinition[] = [
  {
    key: 'public',
    backendKey: 'isPublic',
    title: 'Szkoła publiczna',
    multiple: false,
    choices: [
      {
        value: true,
        label: 'tak',
      },
      {
        value: false,
        label: 'nie',
      },
    ],
  },
  {
    key: 'schoolType',
    backendKey: 'schoolType',
    title: 'Typ szkoły',
    multiple: true,
    choices: [
      {
        value: 'liceum ogólnokształcące',
        label: 'liceum',
      },
      {
        value: 'technikum',
        label: 'technikum',
      },
      {
        value: 'szkoła branżowa I stopnia',
        label: 'szkoła branżowa',
      },
    ],
  },
  {
    key: 'extendedSubjects',
    backendKey: 'extendedSubjects',
    title: 'Rozszerzone przedmioty',
    multiple: true,
    choices: [
      {
        value: 'pol',
        label: 'język polski',
      },
      {
        value: 'hist',
        label: 'historia',
      },
      {
        value: 'wos',
        label: 'WOS',
      },
      {
        value: 'mat',
        label: 'matematyka',
      },
      {
        value: 'fiz',
        label: 'fizyka',
      },
      {
        value: 'inf',
        label: 'informatyka',
      },
      {
        value: 'chem',
        label: 'chemia',
      },
      {
        value: 'biol',
        label: 'biologia',
      },
      {
        value: 'geogr',
        label: 'geografia',
      },
    ],
  },
  {
    key: 'district',
    backendKey: 'districts',
    title: 'Dzielnica',
    multiple: true,
    choices: [
      {
        value: 'Bemowo',
        label: 'Bemowo',
      },
      {
        value: 'Białołęka',
        label: 'Białołęka',
      },
      {
        value: 'Bielany',
        label: 'Bielany',
      },
      {
        value: 'Mokotów',
        label: 'Mokotów',
      },
      {
        value: 'Ochota',
        label: 'Ochota',
      },
      {
        value: 'Praga Południe',
        label: 'Praga Południe',
      },
      {
        value: 'Praga Północ',
        label: 'Praga Północ',
      },
      {
        value: 'Rembertów',
        label: 'Rembertów',
      },
      {
        value: 'Śródmieście',
        label: 'Śródmieście',
      },
      {
        value: 'Targówek',
        label: 'Targówek',
      },
      {
        value: 'Ursus',
        label: 'Ursus',
      },
      {
        value: 'Ursynów',
        label: 'Ursynów',
      },
      {
        value: 'Wawer',
        label: 'Wawer',
      },
      {
        value: 'Wesoła',
        label: 'Wesoła',
      },
      {
        value: 'Wilanów',
        label: 'Wilanów',
      },
      {
        value: 'Włochy',
        label: 'Włochy',
      },
      {
        value: 'Wola',
        label: 'Wola',
      },
      {
        value: 'Żoliborz',
        label: 'Żoliborz',
      },
    ],
  },
];
