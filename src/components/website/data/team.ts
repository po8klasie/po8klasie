const createImagePath = (filename: string) => `/assets/website/img/team/${filename}`;

export interface TeamMember {
  name: string;
  roles: string[];
  image: string;
  links: [string, string][];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Michał Oręziak',
    roles: ['Koordynator projektu', 'Front-end Developer'],
    image: createImagePath('Michal-Oreziak.png'),
    links: [
      ['linkedin', 'https://linkedin.com/in/micorix'],
      ['github', 'https://github.com/micorix'],
    ],
  },
  {
    name: 'Anna Kramarska',
    roles: ['Back-end Developer'],
    image: createImagePath('Anna-Kramarska.png'),
    links: [
      ['linkedin', 'https://www.linkedin.com/in/anna-krmsk/'],
      ['github', 'https://github.com/annkamsk/'],
    ],
  },
  {
    name: 'Michał Łazowik',
    roles: ['Site Reliability Engineer'],
    image: createImagePath('Michal-Lazowik.jpg'),
    links: [
      ['linkedin', 'https://www.linkedin.com/in/michał-ł-017a68172/'],
      ['github', 'https://github.com/mlazowik'],
    ],
  },
  {
    name: 'Karolina Pawlaczyk',
    roles: ['UX/UI Designer'],
    image: createImagePath('Karolina-Pawlaczyk.jpg'),
    links: [['linkedin', 'https://www.linkedin.com/in/ka-pawlaczyk/']],
  },
  {
    name: 'Wojciech Sańko',
    roles: ['Rozwój produktu', 'Partnerstwa'],
    image: createImagePath('Wojciech-Sanko.jpg'),
    links: [['linkedin', 'https://www.linkedin.com/in/wojciech-sa%C5%84ko-7776461b/']],
  },
  {
    name: 'Agnieszka Pugacewicz',
    roles: ['Researcher'],
    image: createImagePath('Agnieszka-Pugacewicz.jpg'),
    links: [
      ['linkedin', 'https://linkedin.com/in/agnieszka-pugacewicz/'],
      ['website', 'https://www.delab.uw.edu.pl/zespol-delab/dr-agnieszka-pugacewicz/'],
    ],
  },
];

export default teamMembers;
