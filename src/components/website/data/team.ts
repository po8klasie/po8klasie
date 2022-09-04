import MichalOreziakImg from '../../../assets/website/img/team/Michal-Oreziak.png';
import MichalOreziakImgPlaceholder from '../../../assets/website/img/team/Michal-Oreziak.png?lqip';
import PawelBiegunImg from '../../../assets/website/img/team/Pawel-Biegun.jpg';
import PawelBiegunImgPlaceholder from '../../../assets/website/img/team/Pawel-Biegun.jpg?lqip';
import MichalLazowikImg from '../../../assets/website/img/team/Michal-Lazowik.jpg';
import MichalLazowikImgPlaceholder from '../../../assets/website/img/team/Michal-Lazowik.jpg?lqip';
import KarolinaPawlaczykImg from '../../../assets/website/img/team/Karolina-Pawlaczyk.jpg';
import KarolinaPawlaczykImgPlaceholder from '../../../assets/website/img/team/Karolina-Pawlaczyk.jpg?lqip';
import AgnieszkaPugacewiczImg from '../../../assets/website/img/team/Agnieszka-Pugacewicz.jpg';
import AgnieszkaPugacewiczImgPlaceholder from '../../../assets/website/img/team/Agnieszka-Pugacewicz.jpg?lqip';
import WojciechSankoImg from '../../../assets/website/img/team/Wojciech-Sanko.jpg';
import WojciechSankoImgPlaceholder from '../../../assets/website/img/team/Wojciech-Sanko.jpg?lqip';
import AnnaWenerskaDzieduchImg from '../../../assets/website/img/team/Anna-Wenerska-Dzieduch.jpeg';
import AnnaWenerskaDzieduchImgPlaceholder from '../../../assets/website/img/team/Anna-Wenerska-Dzieduch.jpeg?lqip';

export interface TeamMember {
  name: string;
  roles: string[];
  image: string;
  imagePlaceholder: string;
  links: [string, string][];
}

const teamMembers: TeamMember[] = [
  {
    name: 'Michał Oręziak',
    roles: ['Leader projektu', 'Front-end Developer'],
    image: MichalOreziakImg,
    imagePlaceholder: MichalOreziakImgPlaceholder,
    links: [
      ['linkedin', 'https://linkedin.com/in/micorix'],
      ['github', 'https://github.com/micorix'],
    ],
  },
  {
    name: 'Paweł Biegun',
    roles: ['Back-end Developer'],
    image: PawelBiegunImg,
    imagePlaceholder: PawelBiegunImgPlaceholder,
    links: [
      ['linkedin', 'https://pl.linkedin.com/in/pawe%C5%82-biegun-8b51b8187'],
      ['github', 'https://github.com/Anakin100100/'],
    ],
  },
  {
    name: 'Michał Łazowik',
    roles: ['Site Reliability Engineer'],
    image: MichalLazowikImg,
    imagePlaceholder: MichalLazowikImgPlaceholder,
    links: [
      ['linkedin', 'https://www.linkedin.com/in/michał-ł-017a68172/'],
      ['github', 'https://github.com/mlazowik'],
    ],
  },
  {
    name: 'Karolina Pawlaczyk',
    roles: ['UX/UI Designer'],
    image: KarolinaPawlaczykImg,
    imagePlaceholder: KarolinaPawlaczykImgPlaceholder,
    links: [['linkedin', 'https://www.linkedin.com/in/ka-pawlaczyk/']],
  },
  {
    name: 'Agnieszka Pugacewicz',
    roles: ['Researcher'],
    image: AgnieszkaPugacewiczImg,
    imagePlaceholder: AgnieszkaPugacewiczImgPlaceholder,
    links: [
      ['linkedin', 'https://linkedin.com/in/agnieszka-pugacewicz/'],
      ['website', 'https://www.delab.uw.edu.pl/zespol-delab/dr-agnieszka-pugacewicz/'],
    ],
  },
  {
    name: 'Wojciech Sańko',
    roles: ['Rozwój produktu & partnerstwa'],
    image: WojciechSankoImg,
    imagePlaceholder: WojciechSankoImgPlaceholder,
    links: [['linkedin', 'https://www.linkedin.com/in/wojciech-sa%C5%84ko-7776461b/']],
  },
  {
    name: 'Anna Wenerska-Dzieduch',
    roles: ['Komunikacja'],
    image: AnnaWenerskaDzieduchImg,
    imagePlaceholder: AnnaWenerskaDzieduchImgPlaceholder,
    links: [['linkedin', 'https://pl.linkedin.com/in/anna-wenerska-dzieduch']],
  },
];

export default teamMembers;
