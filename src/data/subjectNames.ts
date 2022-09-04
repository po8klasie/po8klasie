export const foreignLanguages = {
  OBCY: 'język obcy',
  ANG: 'język angielski',
  FRA: 'język francuski',
  HISZ: 'język hiszpański',
  NIEM: 'język niemiecki',
  POR: 'język portugalski',
  ROS: 'język rosyjski',
  WLO: 'język włoski',
  ANTYK: 'język łaciński i kultura antyczna',
  JEZYK_BIALORUSKI: 'język białoruski',
  JEZYK_LITEWSKI: 'język litewski',
  JEZYK_UKRAINSKI: 'język ukraiński',
  JEZYK_LEMKOWSKI: 'język łemkowski',
  JEZYK_KASZUBSKI: 'język kaszubski',
};

const subjectNames: Readonly<Record<string, string>> = {
  BIOL: 'biologia',
  CHEM: 'chemia',
  FILOZ: 'filozofia',
  FIZ: 'fizyka',
  GEOGR: 'geografia',
  HIST: 'historia',
  H_MUZ_: 'historia muzyki',
  H_SZT_: 'historia sztuki',
  INF: 'informatyka',
  POL: 'język polski ',
  MAT: 'matematyka',
  WOS: 'wiedza o społeczeństwie',
  ...foreignLanguages,
};

export default subjectNames;
