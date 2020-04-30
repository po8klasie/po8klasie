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
        id: 'pol',
        label: 'Śródmieście',
      },
      {
        id: 'mat',
        label: 'Włochy',
      },
    ],
  },
];
