import React, { useEffect, useRef, Ref } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from '../styling/styled';
import ChartJS from 'chart.js';
import { connect } from 'react-redux';
import { fetchSchoolDetails } from '../store/modules/schoolDetails';
interface SchoolPageProps extends RouteComponentProps {
  schoolID: string;
}

const SchoolImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;
const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2em;
  margin-top: 5vh;
`;
const SchoolTypeBadge = styled.div`
  margin-top: 10px;
  padding: 5px 10px;
  background: #ebe0ff;
  border: 2px solid #ba97ff;
  border-radius: 3px;
  display: inline-block;
`;
const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
`;
const SchoolInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 4em;
`;
const InfoBox = styled.div`
  font-size: 1.2em;
  .header {
    border-bottom: 2px solid #ba97ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 0.2em;
    i {
      font-size: 2em !important;
      user-select: none;
      margin-right: 10px;
    }
  }
  .info {
    margin-top: 0.5em;
    text-align: center;
  }
`;
const Section = styled.section`
  margin-top: 4em;
  h2 {
    margin-bottom: 1.5em;
  }
`;
const ContactGrid = styled.div`
  ul {
    padding-start: 0;
    li {
      display: flex;
      align-items: center;
      font-size: 1.2em;
      margin: 1em 0;
      i {
        font-size: 2em !important;
        margin-right: 10px;
      }
    }
  }
`;

const isObjEmpty = (obj: any) => Object.keys(obj).length === 0 && obj.constructor === Object
const SchoolPage = (props: any) => {
  const chartCanvas: Ref<HTMLCanvasElement> = useRef(null);
  const school = props.schoolDetails.result;
  useEffect(() => {
    if (props.schoolID && props.schoolID !== props.schoolDetails.id) {
      props.fetchSchoolDetails(props.schoolID);
    }
  }, []);
  useEffect(() => {
    if (isObjEmpty(school)) return;
    const ctx = (chartCanvas.current as any).getContext('2d');
    const generateRandomThresholds = () =>
      new Array(7)
        .fill(0)
        .map(x => Math.floor(Math.random() * (200 - 100 + 1) + 100));
    new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [
          {
            label: 'biol-chem',
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 99, 132)',
            data: generateRandomThresholds(),
          },
          {
            label: 'mat-fiz',
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 99, 23)',
            data: generateRandomThresholds(),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, [school]);
  if (!props.schoolID) return <Redirect to="/" />;
  if (props.schoolDetails.isFetching || isObjEmpty(school))
    return (
      <Layout>
        <Container>
          <h3>Loading...</h3>
        </Container>
      </Layout>
    );
  return (
    <Layout>
      <Container>
        <HeaderGrid>
          <div>
            <SchoolImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Gimnazjum_i_Liceum_Batorego_w_Warszawie_2015.JPG/800px-Gimnazjum_i_Liceum_Batorego_w_Warszawie_2015.JPG" />
          </div>
          <div>
            <SchoolTypeBadge>LO</SchoolTypeBadge>
            <h1>{school.school_name}</h1>
            <h3>{school.address.district}</h3>
          </div>
        </HeaderGrid>
        <Section>
          <h2>Informacje o szkole</h2>
          <SchoolInfoGrid>
            <InfoBox>
              <div className="header">
                <i className="material-icons">people</i>
                Publiczna
              </div>
              <div className="info">{school.is_public ? 'TAK' : 'NIE'}</div>
            </InfoBox>
            <InfoBox>
              <div className="header">
                <i className="material-icons">business</i>
                Organ prowadzący
              </div>
              <div className="info">N/A</div>
            </InfoBox>
            <InfoBox>
              <div className="header">
                <i className="material-icons">category</i>
                Organizacja
              </div>
              <div className="info">N/A</div>
            </InfoBox>
            <InfoBox>
              <div className="header">
                <i className="material-icons">local_atm</i>
                Właściciel kapitału
              </div>
              <div className="info">N/A</div>
            </InfoBox>
          </SchoolInfoGrid>
        </Section>
        <Section>
          <h2>Progi punktowe</h2>
          <ChartWrapper>
            <canvas ref={chartCanvas} />
          </ChartWrapper>
        </Section>
        <Section>
          <h2>Kontakt</h2>
          <ContactGrid>
            <ul>
              <li>
                <i className="material-icons">phone</i>
                <span>{school.contact.phone}</span>
              </li>
              <li>
                <i className="material-icons">mail_outline</i>
                <span>{school.contact.email}</span>
              </li>
              <li>
                <i className="material-icons">public</i>
                <span>{school.contact.website}</span>
              </li>
            </ul>
          </ContactGrid>
        </Section>
      </Container>
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  schoolDetails: state.schoolDetails,
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchSchoolDetails: (payload: any) => dispatch(fetchSchoolDetails(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SchoolPage);
