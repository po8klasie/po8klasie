import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useForm } from 'react-hook-form';
import {
  PointsCalculator,
  validators,
  initialData,
  configs,
  CalculatedPoints,
} from '@warsawlo/points-calculator';
import styled from '../styling/styled';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Input from '../components/Input';
import PageTitle from '../components/PageTitle';
import Checkbox from '../components/Checkbox';
import { examParts, subjects } from '../data/calculator';
import Breadcrumbs from '../components/Breadcrumbs';

const { isGradeValid, isExamResultValid } = validators;
const { initialInputData, initialCalculatedPoints } = initialData;
const { config2018_2019: CONFIG_2018_2019 } = configs;

const InputGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 30px;
  @media (max-width: 400px) {
    grid-column-gap: 15px;
  }
  grid-row-gap: 10px;
  .row {
    display: contents;

    * {
      display: flex;
      align-items: center;
    }
  }
  .header-row {
    font-size: 0.8em;
  }
  .value-label,
  .value,
  .points-label,
  .points {
    justify-content: center;
  }
  .points {
    font-weight: bold;
  }
  .value input {
    width: 2em;
    text-align: center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input::placeholder {
    font-size: 0.6em;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  .title,
  title-label {
    padding-right: 20px;
  }
  h2 {
    grid-column: 1 / 4;
  }
`;
const CheckboxFlex = styled.div`
  display: flex;
  div {
    margin-right: 3em;

    label {
      user-select: none;
    }
    span {
      font-weight: bold;
      margin-left: 20px;
    }
    @media (max-width: 720px) {
      margin: 20px 0;
    }
  }
  @media (max-width: 720px) {
    display: block;
  }
`;
const Result = styled.div`
  margin-top: 4em;
  h2 {
    text-transform: uppercase;
    font-size: 2em;

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  button {
    border: none;
    background: none;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    cursor: pointer;
  }
`;

const calc = new PointsCalculator(CONFIG_2018_2019);

const Calculator: FC<RouteComponentProps> = () => {
  const [points, setPoints] = useState<CalculatedPoints>(initialCalculatedPoints);
  const { register, watch, reset } = useForm();
  useLayoutEffect(() => {
    calc.watch(setPoints);
  }, []);

  const grades = watch('grades');

  useEffect(() => {
    if (grades) {
      const gradesArray: [string, string][] = Object.entries(grades);
      const gradesData: { [x: string]: number | null } = gradesArray.reduce(
        (finalObj, subjectAndGrade) => {
          const [subject, rawGrade] = subjectAndGrade;
          const gradeHelper = parseInt(rawGrade, 10);
          const grade = isGradeValid(gradeHelper) ? gradeHelper : null;
          return {
            ...finalObj,
            [subject]: grade,
          };
        },
        {},
      );

      calc.setGrades(gradesData);
    }
    // eslint-disable-next-line
  }, [JSON.stringify(grades)]);

  const examResult = watch('examResult');

  useEffect(() => {
    if (examResult) {
      const examArray: [string, string][] = Object.entries(examResult);
      const examData: { [x: string]: number | null } = examArray.reduce(
        (finalObj, subjectAndScore) => {
          const [subject, rawScore] = subjectAndScore;
          const scoreHelper = parseInt(rawScore, 10) / 100;
          const score = isExamResultValid(scoreHelper) ? scoreHelper : null;
          return {
            ...finalObj,
            [subject]: score,
          };
        },
        {},
      );

      calc.setExamResult(examData);
    }
    // eslint-disable-next-line
  }, [JSON.stringify(examResult)]);

  const merit = watch('merit');

  useEffect(() => {
    calc.setMerit(merit);
  }, [merit]);

  const activity = watch('activity');

  useEffect(() => {
    calc.setActivity(activity);
  }, [activity]);

  const resetForm = () => {
    reset(initialInputData);
  };

  return (
    <Layout>
      <Container>
        <Breadcrumbs steps={[['Kalkulator punktów']]} />
        <PageTitle>Kalkulator punktów</PageTitle>
        <p>
          Podaj swoje oceny, wyniki z egzaminu ósmoklasisty oraz dodatkowe osiągnięcia (jeśli takie
          masz) i oblicz punkty, jakie uzyskasz podczas rekrutacji do szkoły średniej.
        </p>

        <InputGrid>
          <h2>Świadectwo</h2>
          <div className="row header-row">
            <span className="title-label">Przedmiot</span>
            <span className="value-label">Ocena</span>
            <span className="points-label">Liczba punktów</span>
          </div>
          {subjects.map((subject) => (
            <div className="row" key={`${subject.id}`}>
              <span className="title">{subject.label}</span>
              <div className="value">
                <Input
                  type="number"
                  min={1}
                  max={6}
                  placeholder="Ocena"
                  ref={register}
                  name={`grades[${subject.id}]`}
                />
              </div>
              <span className="points">{(points.grades[subject.id] ?? 0).toFixed(2)}</span>
            </div>
          ))}

          <h2>Egzamin ósmoklasisty</h2>

          <div className="row header-row">
            <span className="title-label">Przedmiot</span>
            <span className="value-label">Wynik (%)</span>
            <span className="points-label">Liczba punktów</span>
          </div>
          {examParts.map((examPart) => (
            <div className="row" key={examPart.id}>
              <span className="title">{examPart.label}</span>
              <div className="value">
                <Input
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Wynik"
                  ref={register}
                  name={`examResult[${examPart.id}]`}
                />
              </div>
              <span className="points">{(points.examResult[examPart.id] ?? 0).toFixed()}</span>
            </div>
          ))}
        </InputGrid>
        <h2>Szczególne osiągnięcia</h2>
        <CheckboxFlex>
          <div>
            <Checkbox ref={register} name="merit" id="xd" />
            <label htmlFor="xd">Świadectwo z wyróżnieniem</label>
            <span>{points.merit}</span>
          </div>
          <div>
            <Checkbox ref={register} name="activity" id="activity" />
            <label htmlFor="activity">Aktywność społeczna</label>
            <span>{points.activity}</span>
          </div>
        </CheckboxFlex>
        <Result>
          <h2>
            Suma: <span>{(points.total ?? 0).toFixed()}</span>
          </h2>
          <button type="button" onClick={resetForm}>
            Resetuj wynik
          </button>
        </Result>
      </Container>
    </Layout>
  );
};

export default Calculator;
