import { MatrixSectionData } from './CalculatorMatrixSection';
import { CheckboxData } from './CalculatorActivitiesSection';
import { ExamResultInput, GradeInput } from './CalculatorInputs';

interface CalculatorFormConfig {
  matrices: MatrixSectionData[];
  checkboxes: CheckboxData[];
}

const formConfig: CalculatorFormConfig = {
  matrices: [
    {
      sectionId: 'grades',
      sectionName: 'Świadectwo',
      columns: ['Przedmiot', 'Ocena', 'Punkty'],
      rows: [
        {
          id: 'polish',
          name: 'język polski',
          inputComponent: GradeInput,
        },
        {
          id: 'math',
          name: 'matematyka',
          inputComponent: GradeInput,
        },
        {
          id: 'firstSubject',
          name: 'przedmiot 1',
          inputComponent: GradeInput,
        },
        {
          id: 'secondSubject',
          name: 'przedmiot 2',
          inputComponent: GradeInput,
        },
      ],
    },
    {
      sectionId: 'examResult',
      sectionName: 'Egzamin',
      columns: ['Przedmiot', 'Wynik', 'Punkty'],
      rows: [
        {
          id: 'polish',
          name: 'język polski',
          inputComponent: ExamResultInput,
        },
        {
          id: 'math',
          name: 'matematyka',
          inputComponent: ExamResultInput,
        },
        {
          id: 'lang',
          name: 'język obcy',
          inputComponent: ExamResultInput,
        },
      ],
    },
  ],
  checkboxes: [
    {
      id: 'merit',
      name: 'świadectwo z wyróżnieniem',
    },
    {
      id: 'activity',
      name: 'wolontariat',
    },
  ],
};

export default formConfig;
