import React, { useEffect, useRef, Ref } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from '../styling/styled';
import ChartJS from 'chart.js';
import { connect } from 'react-redux';
import { fetchSchoolDetails } from '../store/modules/schoolDetails';
import Card from "../components/Card";
import {css, keyframes} from "@emotion/core";
import {createPlaceholderStyles} from "../utils/loading";
interface SchoolPageProps extends RouteComponentProps {
  schoolID: string;
}
const GOOGLE_MAPS_KEY = 'AIzaSyCCLfhaD7OtyTnU61UBTFKGaRhYyUz9dSs';

const Header = styled.div`
  margin-top: 5vh;
  span{
    text-transform: uppercase;
  }
  h1{
    font-size: 3em;
    margin: 20px 0;
  }
  .loading & h1, .loading & span{
    ${createPlaceholderStyles()}
        height: 1.5em;
    width: 20em;
  }
`;
const SchoolDescription = styled.p``

const Section = styled.section`
  margin-top: 4em;
  h2 {
    margin-bottom: 1.5em;
  }
`;
const ContactGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 4em;
  line-height: 1.8em;
  
  address{
    font-style: normal;
  }
  a{
    color: black;
    font-weight: normal;
  }
`;
const SchoolProfiles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4em;
  
  h5{
    font-weight: normal;
    font-family: Open Sans;
    font-size: .9em;
    margin: 0;
  }
  h4{
    margin: 10px 0 7px 0;
  }
  span{
    color: #707070;
    font-size: .8em;
  }
`;
const PastProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20%;
  table{
    border-collapse: collapse; 
  }
  td, th{
    padding: 10px 0;
  }
  th{
    text-align: left;
    font-size: .7em;
    font-weight: normal;
  }
  td:last-of-type, th:last-of-type{
    text-align: right;
  }
  tbody tr td{
    border-bottom: 1px solid black;
  }
  tbody tr:last-of-type td{
    border-bottom: none;
  }
`
const ActionLinkWrapper = styled.div`
  margin-top: 20px;
`;
const MapFrame = styled.iframe`
  width: 100%;
  border: none;
  height: 40vh;
  margin-top: 3em;
  filter: grayscale(1);
`;
const isObjEmpty = (obj: any) => Object.keys(obj).length === 0 && obj.constructor === Object
const SchoolPage = (props: any) => {
  const school = props.schoolDetails.result;
  useEffect(() => {
    if (props.schoolID && props.schoolID !== props.schoolDetails.id) {
      props.fetchSchoolDetails(props.schoolID);
    }
  }, []);
  if (!props.schoolID) return <Redirect to="/" />;
  const isLoading = props.schoolDetails.isFetching || isObjEmpty(school);
  // if (props.schoolDetails.isFetching || isObjEmpty(school))
  //   return (
  //     <Layout>
  //       <Container>
  //         <h3>Loading...</h3>
  //       </Container>
  //     </Layout>
  //   );
  return (
    <Layout>
      <Container className={isLoading ? "loading" : ''}>
        <Header>
            <span className="public">{!isLoading && (school.is_public ? 'szkoła publiczna' : 'szkoła niepubliczna')}</span>
            <h1>{!isLoading && school.school_name}</h1>
          <span className="district">{!isLoading && school.address.district}</span>
        </Header>
      </Container>
      {
        !isLoading && school.school_name && (
            <>
            <Container>
              <SchoolDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis dolore eligendi error et magni omnis repellat veniam. Aperiam asperiores ex velit voluptates. Blanditiis dolores excepturi, molestias officia reiciendis soluta!
              </SchoolDescription>
              <Section>
                <h2>Tegoroczne profile klas</h2>
                <SchoolProfiles>
                  <Card>
                    <h5>Przedmioty rozszerzone:</h5>
                    <h4>matematyka, fizyka, chemia</h4>
                    <span>dwa oddziały</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur debitis delectus harum hic ipsa, iste, neque nobis nostrum nulla optio placeat ratione, sint sit tenetur vel voluptatem voluptates. Cupiditate.
                    </p>
                  </Card>
                  <Card>
                    <h5>Przedmioty rozszerzone:</h5>
                    <h4>matematyka, fizyka, chemia</h4>
                    <span>dwa oddziały</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur debitis delectus harum hic ipsa, iste, neque nobis nostrum nulla optio placeat ratione, sint sit tenetur vel voluptatem voluptates. Cupiditate.
                    </p>
                  </Card>
                  <Card>
                    <h5>Przedmioty rozszerzone:</h5>
                    <h4>matematyka, fizyka, chemia</h4>
                    <span>dwa oddziały</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur debitis delectus harum hic ipsa, iste, neque nobis nostrum nulla optio placeat ratione, sint sit tenetur vel voluptatem voluptates. Cupiditate.
                    </p>
                  </Card>
                </SchoolProfiles>
              </Section>
              <Section>
                <h2>Progi punktowe 2018</h2>
                <Card>
                  <PastProfilesGrid>
                    <table>
                      <thead>
                      <tr>
                        <th>Klasa z przedmiotami rozszerzonymi</th>
                        <th>Próg punktowy</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>matematyka, fizyka, chemia</td>
                        <td>
                          <strong>168</strong> pkt
                        </td>
                      </tr>
                      <tr>
                        <td>matematyka, fizyka, chemia</td>
                        <td>
                          <strong>168</strong> pkt
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <table>
                      <thead>
                      <tr>
                        <th>Klasa z przedmiotami rozszerzonymi</th>
                        <th>Próg punktowy</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>matematyka, fizyka, chemia</td>
                        <td>
                          <strong>168</strong> pkt
                        </td>
                      </tr>
                      <tr>
                        <td>matematyka, fizyka, chemia</td>
                        <td>
                          <strong>168</strong> pkt
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </PastProfilesGrid>
                </Card>
              </Section>
              <Section>
                <h2>Kontakt</h2>
                <ContactGrid>
                  <address>
                    {school.address.postcode} {school.address.city} <br />
                    {school.address.street} {school.contact.building_nr}
                  </address>
                  <div>
                    <a href="#">{school.contact.phone}</a> <br />
                    <a href="#">{school.contact.email}</a>
                  </div>
                </ContactGrid>
                <ActionLinkWrapper>
                  <a href={school.contact.website}>Strona www szkoły</a>
                </ActionLinkWrapper>
              </Section>
            </Container>
      <MapFrame src={`https://www.google.com/maps/embed/v1/place?q=${school.school_name}&key=${GOOGLE_MAPS_KEY}`} />
      </>
        )
      }

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
