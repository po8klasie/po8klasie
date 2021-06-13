import MichalOreziakImage from '../assets/images/maintainers/Michal-Oreziak.png';
import EmiliaGrabowskaImage from '../assets/images/maintainers/Emilia-Grabowska.png';
import MichalLazowikImage from '../assets/images/maintainers/Michal-Lazowik.jpg';
import KarolinaPawlaczykImage from '../assets/images/maintainers/Karolina-Pawlaczyk.jpg';
import MariaRukatImage from '../assets/images/maintainers/Maria-Rukat.jpg';
import AnnaKramarskaImage from '../assets/images/maintainers/Anna-Kramarska.png';
import WojciechSankoImage from '../assets/images/maintainers/Wojciech-Sanko.jpg';
import AgnieszkaPugacewiczImage from '../assets/images/maintainers/Agnieszka-Pugacewicz.jpg';
import AgataZbikowskaImage from '../assets/images/maintainers/Agata-Zbikowska.jpg';

export interface Maintainer {
  name: string;
  role: string;
  image: string;
  links: {
    linkedin?: string;
    github?: string;
    website?: string;
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
    name: 'Anna Kramarska',
    role: 'Back-end Developer',
    image: AnnaKramarskaImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/anna-krmsk/',
      github: 'https://github.com/annkamsk/',
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
      linkedin: 'https://linkedin.com/in/maria-rukat',
      github: 'https://github.com/MariaRukat',
    },
  },
  {
    name: 'Wojciech Sańko',
    role: 'Rozwój produktu, Partnerstwa',
    image: WojciechSankoImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/wojciech-sa%C5%84ko-7776461b/',
    },
  },
  {
    name: 'Agnieszka Pugacewicz',
    role: 'Researcher',
    image: AgnieszkaPugacewiczImage,
    links: {
      linkedin: 'https://linkedin.com/in/agnieszka-pugacewicz/',
      website: 'https://www.delab.uw.edu.pl/zespol-delab/dr-agnieszka-pugacewicz/',
    },
  },
  {
    name: 'Agata Żbikowska',
    role: 'Reseacher',
    image: AgataZbikowskaImage,
    links: {
      website: 'http://iss.uw.edu.pl/agata-zbikowska/',
    },
  },
];

export const pastMaintainers: Maintainer[] = [
  {
    name: 'Emilia Grabowska',
    role: 'UX Researcher / Designer',
    image: EmiliaGrabowskaImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/emilia-grabowska-886708166/',
    },
  },
];

export default maintainers;
