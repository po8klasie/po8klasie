
export type OrderingType = {
  orderingId: string; // for frontend eg. /search?ordering=<value>
  title: string;
  fields: string[] // for descending order use '-<value>'
};

export const orderingTypes: OrderingType[] = [
  {
    orderingId: 'az',
    title: 'Alfabetycznie',
    fields: [
        'school_name'
    ]
  },
];
