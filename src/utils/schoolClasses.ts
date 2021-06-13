import {
  IExtendedSubjectName,
  IExtendedSubjectNode,
  IExtendedSubjectNodeEdge,
  ISchoolClassesFragment,
  ISchoolClassNode,
} from '../types/graphql';

export const CURRENT_RECRUITMENT_YEAR = 2021;

export interface ParsedClassNode {
  name: string;
  extendedSubjects: IExtendedSubjectName[];
  year: number;
  statistics: { pointsMin: number } | null;
}

export interface ParsedClasses {
  currentYear: ParsedClassNode[];
  pastYears: Record<number, ParsedClassNode[]>;
}

const parseClassNode = (node: ISchoolClassNode): ParsedClassNode => {
  const extendedSubjects = (node?.extendedSubjects?.edges as IExtendedSubjectNodeEdge[]) as {
    node: IExtendedSubjectNode;
  }[];

  return {
    name: node.name,
    year: node.year as number,
    statistics: node.statistics,
    extendedSubjects: extendedSubjects.map(({ node: subject }) => subject.name),
  };
};

export const getParsedClasses = (classes: ISchoolClassesFragment['classes']): ParsedClasses => {
  const parsedClasses: ParsedClasses = {
    currentYear: [],
    pastYears: {},
  };
  (classes?.edges as { node: ISchoolClassNode }[]).forEach(({ node }) => {
    const year = node.year as number;

    if (year === CURRENT_RECRUITMENT_YEAR) {
      parsedClasses.currentYear.push(parseClassNode(node));
      return;
    }

    parsedClasses.pastYears[year] = [
      ...(parsedClasses.pastYears[year] || []),
      parseClassNode(node),
    ];
  });

  return parsedClasses;
};
