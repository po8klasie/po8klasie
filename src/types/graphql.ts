export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
};

export type IAddressNode = INode & {
  readonly __typename?: 'AddressNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly city: Scalars['String'];
  readonly postcode: Scalars['String'];
  readonly district: Scalars['String'];
  readonly street: Scalars['String'];
  readonly buildingNr: Scalars['String'];
  readonly longitude: Maybe<Scalars['Float']>;
  readonly latitude: Maybe<Scalars['Float']>;
  readonly schoolSet: ISchoolNodeConnection;
};

export type IAddressNodeSchoolSetArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  schoolName: Maybe<Scalars['String']>;
  isPublic: Maybe<Scalars['Boolean']>;
  includeUnsupported: Maybe<Scalars['Boolean']>;
  schoolIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  query: Maybe<Scalars['String']>;
  extendedSubjects: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  districts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type IContactDataNode = INode & {
  readonly __typename?: 'ContactDataNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly website: Scalars['String'];
  readonly phone: Scalars['String'];
  readonly email: Scalars['String'];
  readonly schoolSet: ISchoolNodeConnection;
};

export type IContactDataNodeSchoolSetArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  schoolName: Maybe<Scalars['String']>;
  isPublic: Maybe<Scalars['Boolean']>;
  includeUnsupported: Maybe<Scalars['Boolean']>;
  schoolIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  query: Maybe<Scalars['String']>;
  extendedSubjects: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  districts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

/** An enumeration. */
export enum IExtendedSubjectName {
  /** biologia */
  Biol = 'BIOL',
  /** chemia */
  Chem = 'CHEM',
  /** filozofia */
  Filoz = 'FILOZ',
  /** fizyka */
  Fiz = 'FIZ',
  /** geografia */
  Geogr = 'GEOGR',
  /** historia */
  Hist = 'HIST',
  /** historia muzyki */
  HMuz = 'H_MUZ_',
  /** historia sztuki */
  HSzt = 'H_SZT_',
  /** informatyka */
  Inf = 'INF',
  /** język polski */
  Pol = 'POL',
  /** matematyka */
  Mat = 'MAT',
  /** wiedza o społeczeństwie */
  Wos = 'WOS',
  /** język obcy */
  Obcy = 'OBCY',
  /** język angielski */
  Ang = 'ANG',
  /** język francuski */
  Fra = 'FRA',
  /** język hiszpański */
  Hisz = 'HISZ',
  /** język niemiecki */
  Niem = 'NIEM',
  /** język portugalski */
  Por = 'POR',
  /** język rosyjski */
  Ros = 'ROS',
  /** język włoski */
  Wlo = 'WLO',
  /** język łaciński i kultura antyczna */
  Antyk = 'ANTYK',
  /** język białoruski */
  JezykBialoruski = 'JEZYK_BIALORUSKI',
  /** język litewski */
  JezykLitewski = 'JEZYK_LITEWSKI',
  /** język ukraiński */
  JezykUkrainski = 'JEZYK_UKRAINSKI',
  /** język łemkowski */
  JezykLemkowski = 'JEZYK_LEMKOWSKI',
  /** język kaszubski */
  JezykKaszubski = 'JEZYK_KASZUBSKI',
}

export type IExtendedSubjectNode = INode & {
  readonly __typename?: 'ExtendedSubjectNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly highSchoolClass: ISchoolClassNode;
  readonly name: IExtendedSubjectName;
};

export type IExtendedSubjectNodeConnection = {
  readonly __typename?: 'ExtendedSubjectNodeConnection';
  /** Pagination data for this connection. */
  readonly pageInfo: IPageInfo;
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<IExtendedSubjectNodeEdge>>;
};

/** A Relay edge containing a `ExtendedSubjectNode` and its cursor. */
export type IExtendedSubjectNodeEdge = {
  readonly __typename?: 'ExtendedSubjectNodeEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<IExtendedSubjectNode>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** An enumeration. */
export enum IHighSchoolClassType {
  /** ogólnodostępny */
  O = 'O',
  /** mistrzostwa sportowego */
  Ms = 'MS',
  /** dwujęzyczny */
  D = 'D',
  /** międzynarodowy */
  M = 'M',
  /** wstępny */
  Dw = 'DW',
  /** sportowy */
  S = 'S',
  /** integracyjny cz. ogólnodostępna */
  IO = 'I_O',
  /** integracyjny cz. dla kandydatów z orzeczeniem o potrzebie kształcenia specjalnego */
  II = 'I_I',
  /** przygotowania wojskowego */
  Pw = 'PW',
}

/** An object with an ID */
export type INode = {
  /** The ID of the object. */
  readonly id: Scalars['ID'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type IPageInfo = {
  readonly __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
};

export type IPrivateInstitutionDataNode = INode & {
  readonly __typename?: 'PrivateInstitutionDataNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly registrationNr: Scalars['String'];
  readonly schoolSet: ISchoolNodeConnection;
};

export type IPrivateInstitutionDataNodeSchoolSetArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  schoolName: Maybe<Scalars['String']>;
  isPublic: Maybe<Scalars['Boolean']>;
  includeUnsupported: Maybe<Scalars['Boolean']>;
  schoolIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  query: Maybe<Scalars['String']>;
  extendedSubjects: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  districts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type IPublicInstitutionDataNode = INode & {
  readonly __typename?: 'PublicInstitutionDataNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly institutionName: Scalars['String'];
  readonly institutionShortName: Scalars['String'];
  readonly institutionType: Scalars['String'];
  readonly institutionNr: Scalars['String'];
  readonly institutionRspo: Scalars['String'];
  readonly institutionRegon: Scalars['String'];
  readonly shortName: Scalars['String'];
  readonly RSPO: Scalars['String'];
  readonly regon: Scalars['String'];
  readonly data: Scalars['JSONString'];
  readonly schoolSet: ISchoolNodeConnection;
};

export type IPublicInstitutionDataNodeSchoolSetArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  schoolName: Maybe<Scalars['String']>;
  isPublic: Maybe<Scalars['Boolean']>;
  includeUnsupported: Maybe<Scalars['Boolean']>;
  schoolIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  query: Maybe<Scalars['String']>;
  extendedSubjects: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  districts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type IQuery = {
  readonly __typename?: 'Query';
  /** The ID of the object */
  readonly address: Maybe<IAddressNode>;
  /** The ID of the object */
  readonly contact: Maybe<IContactDataNode>;
  /** The ID of the object */
  readonly publicInstitutionData: Maybe<IPublicInstitutionDataNode>;
  /** The ID of the object */
  readonly privateInstitutionData: Maybe<IPrivateInstitutionDataNode>;
  /** The ID of the object */
  readonly extendedSubject: Maybe<IExtendedSubjectNode>;
  /** The ID of the object */
  readonly statistics: Maybe<IStatisticsNode>;
  readonly school: Maybe<ISchoolNode>;
  readonly allSchools: Maybe<ISchoolNodeConnection>;
  /** The ID of the object */
  readonly schoolClass: Maybe<ISchoolClassNode>;
  readonly allSchoolClasses: Maybe<ISchoolClassNodeConnection>;
};

export type IQueryAddressArgs = {
  id: Scalars['ID'];
};

export type IQueryContactArgs = {
  id: Scalars['ID'];
};

export type IQueryPublicInstitutionDataArgs = {
  id: Scalars['ID'];
};

export type IQueryPrivateInstitutionDataArgs = {
  id: Scalars['ID'];
};

export type IQueryExtendedSubjectArgs = {
  id: Scalars['ID'];
};

export type IQueryStatisticsArgs = {
  id: Scalars['ID'];
};

export type IQuerySchoolArgs = {
  schoolId: Maybe<Scalars['String']>;
};

export type IQueryAllSchoolsArgs = {
  orderBy: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  schoolName: Maybe<Scalars['String']>;
  isPublic: Maybe<Scalars['Boolean']>;
  includeUnsupported: Maybe<Scalars['Boolean']>;
  schoolIds: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  query: Maybe<Scalars['String']>;
  extendedSubjects: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  districts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type IQuerySchoolClassArgs = {
  id: Scalars['ID'];
};

export type IQueryAllSchoolClassesArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  school: Maybe<Scalars['ID']>;
  year: Maybe<Scalars['Float']>;
};

export type ISchoolClassNode = INode & {
  readonly __typename?: 'SchoolClassNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly type: IHighSchoolClassType;
  readonly name: Scalars['String'];
  readonly school: ISchoolNode;
  readonly year: Maybe<Scalars['Int']>;
  readonly extendedsubjectSet: IExtendedSubjectNodeConnection;
  readonly statisticsSet: IStatisticsNodeConnection;
  readonly extendedSubjects: Maybe<IExtendedSubjectNodeConnection>;
  readonly statistics: Maybe<IStatisticsNode>;
};

export type ISchoolClassNodeExtendedsubjectSetArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  highSchoolClass: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type ISchoolClassNodeStatisticsSetArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  highSchoolClass: Maybe<Scalars['ID']>;
  round: Maybe<Scalars['Int']>;
  pointsMin: Maybe<Scalars['Float']>;
  pointsMax: Maybe<Scalars['Float']>;
  pointsAvg: Maybe<Scalars['Float']>;
  withCompetencyTest: Maybe<Scalars['Boolean']>;
  onlySportsTest: Maybe<Scalars['Boolean']>;
};

export type ISchoolClassNodeExtendedSubjectsArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  highSchoolClass: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type ISchoolClassNodeConnection = {
  readonly __typename?: 'SchoolClassNodeConnection';
  /** Pagination data for this connection. */
  readonly pageInfo: IPageInfo;
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<ISchoolClassNodeEdge>>;
};

/** A Relay edge containing a `SchoolClassNode` and its cursor. */
export type ISchoolClassNodeEdge = {
  readonly __typename?: 'SchoolClassNodeEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<ISchoolClassNode>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

export type ISchoolNode = INode & {
  readonly __typename?: 'SchoolNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly schoolName: Scalars['String'];
  readonly nickname: Scalars['String'];
  readonly schoolType: ISchoolSchoolType;
  readonly studentType: Scalars['String'];
  readonly isSpecialNeedsSchool: Scalars['Boolean'];
  readonly address: IAddressNode;
  readonly contact: Maybe<IContactDataNode>;
  readonly isPublic: Scalars['Boolean'];
  readonly publicInstitutionData: Maybe<IPublicInstitutionDataNode>;
  readonly privateInstitutionData: Maybe<IPrivateInstitutionDataNode>;
  readonly data: Scalars['JSONString'];
  readonly classes: Maybe<ISchoolClassNodeConnection>;
  readonly schoolId: Maybe<Scalars['String']>;
};

export type ISchoolNodeClassesArgs = {
  offset: Maybe<Scalars['Int']>;
  before: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  school: Maybe<Scalars['ID']>;
  year: Maybe<Scalars['Float']>;
};

export type ISchoolNodeConnection = {
  readonly __typename?: 'SchoolNodeConnection';
  /** Pagination data for this connection. */
  readonly pageInfo: IPageInfo;
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<ISchoolNodeEdge>>;
  readonly totalCount: Maybe<Scalars['Int']>;
  readonly edgeCount: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `SchoolNode` and its cursor. */
export type ISchoolNodeEdge = {
  readonly __typename?: 'SchoolNodeEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<ISchoolNode>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

/** An enumeration. */
export enum ISchoolSchoolType {
  /** Lo */
  LiceumOgolnoksztalcace = 'LICEUM_OGOLNOKSZTALCACE',
  /** Tech */
  Technikum = 'TECHNIKUM',
  /** Bran */
  SzkolaBranzowaIStopnia = 'SZKOLA_BRANZOWA_I_STOPNIA',
  /** Spec */
  SzkolaSpecjalnaPrzysposabiajacaDoPracy = 'SZKOLA_SPECJALNA_PRZYSPOSABIAJACA_DO_PRACY',
  /** Przed */
  Przedszkole = 'PRZEDSZKOLE',
  /** Sp */
  SzkolaPodstawowa = 'SZKOLA_PODSTAWOWA',
  /** Spart */
  SzkolaPodstawowaArtystyczna = 'SZKOLA_PODSTAWOWA_ARTYSTYCZNA',
  /** Polic */
  SzkolaPolicealna = 'SZKOLA_POLICEALNA',
}

export type IStatisticsNode = INode & {
  readonly __typename?: 'StatisticsNode';
  /** The ID of the object. */
  readonly id: Scalars['ID'];
  readonly highSchoolClass: ISchoolClassNode;
  readonly round: Scalars['Int'];
  readonly pointsMin: Scalars['Float'];
  readonly pointsMax: Scalars['Float'];
  readonly pointsAvg: Scalars['Float'];
  readonly withCompetencyTest: Scalars['Boolean'];
  readonly onlySportsTest: Scalars['Boolean'];
};

export type IStatisticsNodeConnection = {
  readonly __typename?: 'StatisticsNodeConnection';
  /** Pagination data for this connection. */
  readonly pageInfo: IPageInfo;
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<IStatisticsNodeEdge>>;
};

/** A Relay edge containing a `StatisticsNode` and its cursor. */
export type IStatisticsNodeEdge = {
  readonly __typename?: 'StatisticsNodeEdge';
  /** The item at the end of the edge */
  readonly node: Maybe<IStatisticsNode>;
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String'];
};

export type ISchoolCoordsFragment = { readonly __typename?: 'SchoolNode' } & {
  readonly address: { readonly __typename?: 'AddressNode' } & Pick<
    IAddressNode,
    'latitude' | 'longitude'
  >;
};

export type ISchoolCardPropsFragment = { readonly __typename?: 'SchoolNode' } & Pick<
  ISchoolNode,
  'schoolId' | 'schoolName' | 'isPublic'
> & { readonly address: { readonly __typename?: 'AddressNode' } & Pick<IAddressNode, 'district'> };

export type ISchoolHeaderPropsFragment = { readonly __typename?: 'SchoolNode' } & Pick<
  ISchoolNode,
  'isPublic' | 'schoolName'
> & { readonly address: { readonly __typename?: 'AddressNode' } & Pick<IAddressNode, 'district'> };

export type ISchoolLocationMapPropsFragment = { readonly __typename?: 'SchoolNode' } & Pick<
  ISchoolNode,
  'schoolName' | 'schoolType'
> &
  ISchoolCoordsFragment;

export type ISchoolContactPropsFragment = { readonly __typename?: 'SchoolNode' } & {
  readonly address: { readonly __typename?: 'AddressNode' } & Pick<
    IAddressNode,
    'postcode' | 'city' | 'street' | 'buildingNr'
  >;
  readonly contact: Maybe<
    { readonly __typename?: 'ContactDataNode' } & Pick<
      IContactDataNode,
      'phone' | 'email' | 'website'
    >
  >;
};

export type ISchoolListingQueryVariables = Exact<{
  offset: Maybe<Scalars['Int']>;
  first: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
  isPublic: Maybe<Scalars['Boolean']>;
  extendedSubjects: Maybe<ReadonlyArray<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  districts: Maybe<ReadonlyArray<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;

export type ISchoolListingQuery = { readonly __typename?: 'Query' } & {
  readonly allSchools: Maybe<
    { readonly __typename?: 'SchoolNodeConnection' } & Pick<ISchoolNodeConnection, 'totalCount'> & {
        readonly edges: ReadonlyArray<
          Maybe<
            { readonly __typename?: 'SchoolNodeEdge' } & {
              readonly node: Maybe<
                { readonly __typename?: 'SchoolNode' } & ISchoolCardPropsFragment
              >;
            }
          >
        >;
      }
  >;
};

export type ISchoolClassesFragment = { readonly __typename?: 'SchoolNode' } & {
  readonly classes: Maybe<
    { readonly __typename?: 'SchoolClassNodeConnection' } & {
      readonly edges: ReadonlyArray<
        Maybe<
          { readonly __typename?: 'SchoolClassNodeEdge' } & {
            readonly node: Maybe<
              { readonly __typename?: 'SchoolClassNode' } & Pick<
                ISchoolClassNode,
                'year' | 'name'
              > & {
                  readonly statistics: Maybe<
                    { readonly __typename?: 'StatisticsNode' } & Pick<IStatisticsNode, 'pointsMin'>
                  >;
                  readonly extendedSubjects: Maybe<
                    { readonly __typename?: 'ExtendedSubjectNodeConnection' } & {
                      readonly edges: ReadonlyArray<
                        Maybe<
                          { readonly __typename?: 'ExtendedSubjectNodeEdge' } & {
                            readonly node: Maybe<
                              { readonly __typename?: 'ExtendedSubjectNode' } & Pick<
                                IExtendedSubjectNode,
                                'name'
                              >
                            >;
                          }
                        >
                      >;
                    }
                  >;
                }
            >;
          }
        >
      >;
    }
  >;
};

export type ISchoolPageQueryVariables = Exact<{
  schoolID: Maybe<Scalars['String']>;
}>;

export type ISchoolPageQuery = { readonly __typename?: 'Query' } & {
  readonly school: Maybe<
    { readonly __typename?: 'SchoolNode' } & Pick<
      ISchoolNode,
      'schoolId' | 'schoolName' | 'schoolType'
    > &
      ISchoolHeaderPropsFragment &
      ISchoolClassesFragment &
      ISchoolContactPropsFragment &
      ISchoolLocationMapPropsFragment
  >;
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Node: [
      'AddressNode',
      'ContactDataNode',
      'ExtendedSubjectNode',
      'PrivateInstitutionDataNode',
      'PublicInstitutionDataNode',
      'SchoolClassNode',
      'SchoolNode',
      'StatisticsNode',
    ],
  },
};
export default result;
