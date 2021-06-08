import { ISchoolClassesFragment, ISchoolClassNodeConnection } from '../types/graphql';

export const CURRENT_RECRUITMENT_YEAR = 2020;

export interface ParsedClassNode {
  name: string;
  extendedSubjects: [];
  year: number;
  statistics: { pointsMin: number } | null;
}

export interface ParsedClasses {
  currentYear: ParsedClassNode[];
  pastYears: Record<number, ParsedClassNode[]>;
}

const parseClassNode = (node: any) => ({
  ...node,
  extendedSubjects: node?.extendedSubjects?.edges.map(({ node }: any) => node.name),
});

export const getParsedClasses = (classes: ISchoolClassesFragment['classes']): ParsedClasses => {
  const parsedClasses: ParsedClasses = {
    currentYear: [],
    pastYears: [],
  };
  (classes as ISchoolClassNodeConnection).edges.forEach(({ node }: any) => {
    const { year } = node;

    if (year === CURRENT_RECRUITMENT_YEAR) {
      parsedClasses.currentYear = [...(parsedClasses.currentYear || []), parseClassNode(node)];
      return;
    }

    parsedClasses.pastYears = {
      ...parsedClasses.pastYears,
      [year]: [...(parsedClasses.currentYear || []), parseClassNode(node)],
    };
  });

  return parsedClasses;
};
