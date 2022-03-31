import { SearchViewConfig } from '../types';

const searchViewConfig: SearchViewConfig = {
  mapOptions: {
    center: [50.063159, 19.938762] as [number, number],
    zoom: 15,
  },
  defaultQuery: {
    page_size: '1000',
    area_query: 'Kraków',
  },
  filters: [
    {
      key: 'name_query',
      component: 'text',
      validator: 'string',
      initialValue: '',
      options: {
        placeholder: 'Nazwa szkoły lub słowo kluczowe',
        icon: 'BsSearch',
      },
    },
    {
      key: 'public_school',
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
      key: 'school_rspo_type_ids',
      component: 'dropdown',
      validator: 'none',
      initialValue: [],
      options: {
        title: 'Typ szkoły',
        isMultipleChoice: false,
        choices: [
          {
            value: '14',
            label: 'liceum',
          },
          {
            value: '16',
            label: 'technikum',
          },
          {
            value: '93',
            label: 'szkoła branżowa',
          },
        ],
      },
    },
  ],
};

export default searchViewConfig;
