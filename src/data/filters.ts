export type Choice = {
  label: string;
  id: string;
};

export type FilterData = {
  fieldId: string;
  title: string;
  multiple: boolean;
  choices: Choice[];
};

export const filters: FilterData[] = [
  {
    fieldId: 'is_public',
    title: 'Publiczna',
    multiple: true,
    choices: [
      {
        id: 'true',
        label: 'tak',
      },
      {
        id: 'false',
        label: 'nie',
      },
    ],
  },
  {
    fieldId: 'school_type',
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
    fieldId: 'extendedSubjects',
    title: 'Rozszerzone przedmioty',
    multiple: true,
    choices: [
      {
        id: 'pol',
        label: 'język polski',
      },
      {
        id: 'mat',
        label: 'matematyka',
      },
    ],
  },
  {
    fieldId: 'dzielnica',
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
