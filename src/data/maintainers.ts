import MichalOreziakImage from '../assets/images/maintainers/Michal-Oreziak.png';
import EmiliaGrabowskaImage from '../assets/images/maintainers/Emilia-Grabowska.png';
import MichalLazowikImage from '../assets/images/maintainers/Michal-Lazowik.jpg';
import KarolinaPawlaczykImage from '../assets/images/maintainers/Karolina-Pawlaczyk.jpg';
import MariaRukatImage from '../assets/images/maintainers/Maria-Rukat.jpg';
import AnnaKramarskaImage from '../assets/images/maintainers/Anna-Kramarska.png';

export interface Maintainer {
  name: string;
  role: string;
  image: string;
  links: {
    linkedin?: string;
    github?: string;
  };
}

const maintainers: Maintainer[] = [
  {
    name: 'Michał Oręziak',
    role: 'Koordynator projektu, Front-end Developer',
    image: MichalOreziakImage,
    links: {
      linkedin: 'https://linkedin.com/in/micorix',
      github: 'https://github.com/micorix',
    },
  },
  {
    name: 'Emilia Grabowska',
    role: 'UX Researcher / Designer',
    image: EmiliaGrabowskaImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/emilia-grabowska-886708166/',
    },
  },
  {
    name: 'Michał Łazowik',
    role: 'DevOps Engineer',
    image: MichalLazowikImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/michał-ł-017a68172/',
      github: 'https://github.com/mlazowik',
    },
  },
  {
    name: 'Karolina Pawlaczyk',
    role: 'UX/UI Designer',
    image: KarolinaPawlaczykImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/ka-pawlaczyk/',
    },
  },
  {
    name: 'Maria Rukat',
    role: 'Front-end Developer',
    image: MariaRukatImage,
    links: {
      linkedin: 'https://pl.linkedin.com/in/maria-rukat',
      github: 'https://github.com/MariaRukat',
    },
  },
];

export const pastMaintainers: Maintainer[] = [
  {
    name: 'Anna Kramarska',
    role: 'Back-end Developer',
    image: AnnaKramarskaImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/anna-krmsk/',
      github: 'https://github.com/annkamsk/',
    },
  },
];

export default maintainers;
