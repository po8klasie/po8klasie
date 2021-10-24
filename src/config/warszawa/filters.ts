import { FiltersConfig } from '../types';

const filtersConfig: FiltersConfig = [
  {
    key: 'query',
    component: 'text',
    validator: 'string',
    initialValue: '',
    options: {
      placeholder: 'Nazwa szkoły lub słowo kluczowe',
      icon: 'BsSearch',
    },
  },
  {
    key: 'public',
    component: 'dropdown',
    validator: 'none',
    initialValue: [],
    options: {
      title: 'Szkoła publiczna',
      isMultipleChoice: false,
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
  },
  {
    key: 'schoolType',
    component: 'dropdown',
    validator: 'none',
    initialValue: [],
    options: {
      title: 'Typ szkoły',
      isMultipleChoice: true,
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
  },
  {
    key: 'extendedSubjects',
    component: 'dropdown',
    validator: 'none',
    initialValue: [],
    options: {
      title: 'Przedmioty rozszerzone',
      isMultipleChoice: true,
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
  },
  {
    key: 'districts',
    component: 'dropdown',
    validator: 'none',
    initialValue: [],
    options: {
      title: 'Dzielnica',
      isMultipleChoice: true,
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
  },
];

export default filtersConfig;
