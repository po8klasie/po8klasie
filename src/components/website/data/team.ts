import MichalOreziakImg from '../../../assets/website/img/team/Michal-Oreziak.png';
import MichalOreziakImgPlaceholder from '../../../assets/website/img/team/Michal-Oreziak.png?lqip';
import AnnaKramarskaImg from '../../../assets/website/img/team/Anna-Kramarska.png';
import AnnaKramarskaImgPlaceholder from '../../../assets/website/img/team/Anna-Kramarska.png?lqip';
import MichalLazowikImg from '../../../assets/website/img/team/Michal-Lazowik.jpg';
import MichalLazowikImgPlaceholder from '../../../assets/website/img/team/Michal-Lazowik.jpg?lqip';
import KarolinaPawlaczykImg from '../../../assets/website/img/team/Karolina-Pawlaczyk.jpg';
import KarolinaPawlaczykImgPlaceholder from '../../../assets/website/img/team/Karolina-Pawlaczyk.jpg?lqip';
import WojciechSankoImg from '../../../assets/website/img/team/Wojciech-Sanko.jpg';
import WojciechSankoImgPlaceholder from '../../../assets/website/img/team/Wojciech-Sanko.jpg?lqip';
import AgnieszkaPugacewiczImg from '../../../assets/website/img/team/Agnieszka-Pugacewicz.jpg';
import AgnieszkaPugacewiczImgPlaceholder from '../../../assets/website/img/team/Agnieszka-Pugacewicz.jpg?lqip';

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
    roles: ['Koordynator projektu', 'Front-end Developer'],
    image: MichalOreziakImg,
    imagePlaceholder: MichalOreziakImgPlaceholder,
    links: [
      ['linkedin', 'https://linkedin.com/in/micorix'],
      ['github', 'https://github.com/micorix'],
    ],
  },
  {
    name: 'Anna Kramarska',
    roles: ['Back-end Developer'],
    image: AnnaKramarskaImg,
    imagePlaceholder: AnnaKramarskaImgPlaceholder,
    links: [
      ['linkedin', 'https://www.linkedin.com/in/anna-krmsk/'],
      ['github', 'https://github.com/annkamsk/'],
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
    name: 'Wojciech Sańko',
    roles: ['Rozwój produktu', 'Partnerstwa'],
    image: WojciechSankoImg,
    imagePlaceholder: WojciechSankoImgPlaceholder,
    links: [['linkedin', 'https://www.linkedin.com/in/wojciech-sa%C5%84ko-7776461b/']],
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
];

export default teamMembers;
