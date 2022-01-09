import { render } from '@testing-library/react';
import CalculatorMatrixSection from '../CalculatorMatrixSection';

const matrix = {
  sectionId: 'examResult',
  sectionName: 'Egzamin',
  columns: ['Przedmiot', 'Wynik', 'Punkty'] as [string, string, string],
  rows: [
    {
      id: 'polish',
      name: 'język polski',
      inputComponent: () => null,
    },
    {
      id: 'math',
      name: 'matematyka',
      inputComponent: () => null,
    },
    {
      id: 'lang',
      name: 'język obcy',
      inputComponent: () => null,
    },
  ],
};
describe('components/calculator/CalculatorMatrixSection', () => {
  it('renders all rows', () => {
    const wrapper = render(
      <CalculatorMatrixSection
        matrixSectionData={matrix}
        sectionPoints={{ polish: 12, math: 12, lang: 10 }}
      />,
    );
    expect(wrapper.getByTestId('rows').children.length).toEqual(matrix.rows.length);
  });

  it('renders all column headers', () => {
    const wrapper = render(
      <CalculatorMatrixSection
        matrixSectionData={matrix}
        sectionPoints={{ polish: 12, math: 12, lang: 10 }}
      />,
    );
    const headers = Array.from(wrapper.getByTestId('header').children).map(
      (span) => span.textContent,
    );
    expect(headers).toEqual(matrix.columns);
  });
});
