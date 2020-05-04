import React, { useEffect } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from '../styling/styled';
import { connect } from 'react-redux';
import { fetchSchoolDetails } from '../store/modules/schoolDetails';
import Card from '../components/Card';
import { createPlaceholderStyles } from '../utils/loading';
import { splitArrayInHalf } from '../utils/misc';

const GOOGLE_MAPS_KEY = 'AIzaSyCCLfhaD7OtyTnU61UBTFKGaRhYyUz9dSs';

const Header = styled.div`
  margin-top: 5vh;
  span {
    text-transform: uppercase;
  }
  h1 {
    font-size: 3em;
    margin: 20px 0;
  }
  .loading & h1,
  .loading & span {
    ${createPlaceholderStyles()}
    height: 1.5em;
    width: 20em;
  }
`;
const SchoolDescription = styled.p``;

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
  grid-row-gap: 10px;
  line-height: 1.8em;

  address {
    font-style: normal;
  }
  a {
    color: black;
    font-weight: normal;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const SchoolProfiles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3em;
  grid-column-gap: 4em;

  h5 {
    font-weight: normal;
    font-family: Open Sans;
    font-size: 0.9em;
    margin: 0;
  }
  h4 {
    margin: 10px 0 7px 0;
  }
  span {
    color: #707070;
    font-size: 0.8em;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
const PastProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20%;
  table {
    border-collapse: collapse;
  }
  td,
  th {
    padding: 10px 0;
  }
  th {
    text-align: left;
    font-size: 0.7em;
    font-weight: normal;
  }
  td:last-of-type,
  th:last-of-type {
    text-align: right;
  }
  tbody tr td {
    border-bottom: 1px solid black;
  }
  tbody tr:last-of-type td {
    border-bottom: none;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  table:last-of-type {
    thead {
      @media (max-width: 800px) {
        display: none;
      }
    }
    @media (max-width: 800px) {
      border-top: 1px solid black;
    }
  }
`;
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

interface SchoolPageProps extends RouteComponentProps<{ schoolID: string }> {
  schoolDetails: any;
  fetchSchoolDetails: Function;
}

const isObjEmpty = (obj: any) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

const SchoolPage = (props: SchoolPageProps) => {
  const { school, classes } = props.schoolDetails;

  useEffect(() => {
    if (props.schoolID && props.schoolID !== props.schoolDetails.id) {
      props.fetchSchoolDetails(props.schoolID);
    }
    // eslint-disable-next-line
  }, []);

  if (!props.schoolID) return <Redirect to="/" />;

  const isLoading = props.schoolDetails.isFetching || isObjEmpty(school);

  return (
    <Layout>
      <Container className={isLoading ? 'loading' : ''}>
        <Header>
          <span className="public">
            {!isLoading &&
              (school.is_public ? 'szkoła publiczna' : 'szkoła niepubliczna')}
          </span>
          <h1>{!isLoading && school.school_name}</h1>
          <span className="district">
            {!isLoading && school.address.district}
          </span>
        </Header>
      </Container>
      {!isLoading && school.school_name && (
        <>
          <Container>
            <SchoolDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              corporis dolore eligendi error et magni omnis repellat veniam.
              Aperiam asperiores ex velit voluptates. Blanditiis dolores
              excepturi, molestias officia reiciendis soluta!
            </SchoolDescription>
            <Section>
              <h2>Tegoroczne profile klas</h2>
              <SchoolProfiles>
                <Card>
                  <h5>Przedmioty rozszerzone:</h5>
                  <h4>matematyka, fizyka, chemia</h4>
                  <span>dwa oddziały</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi consectetur debitis delectus harum hic ipsa, iste,
                    neque nobis nostrum nulla optio placeat ratione, sint sit
                    tenetur vel voluptatem voluptates. Cupiditate.
                  </p>
                </Card>
                <Card>
                  <h5>Przedmioty rozszerzone:</h5>
                  <h4>matematyka, fizyka, chemia</h4>
                  <span>dwa oddziały</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi consectetur debitis delectus harum hic ipsa, iste,
                    neque nobis nostrum nulla optio placeat ratione, sint sit
                    tenetur vel voluptatem voluptates. Cupiditate.
                  </p>
                </Card>
                <Card>
                  <h5>Przedmioty rozszerzone:</h5>
                  <h4>matematyka, fizyka, chemia</h4>
                  <span>dwa oddziały</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi consectetur debitis delectus harum hic ipsa, iste,
                    neque nobis nostrum nulla optio placeat ratione, sint sit
                    tenetur vel voluptatem voluptates. Cupiditate.
                  </p>
                </Card>
              </SchoolProfiles>
            </Section>
            <Section>
              <h2>Progi punktowe 2018</h2>
              {classes.length === 0 && <p>Brak danych</p>}
              {classes.length > 0 && (
                <Card>
                  <PastProfilesGrid>
                    {splitArrayInHalf(classes).map((half: any) => (
                      <table>
                        <thead>
                          <tr>
                            <th>Klasa z przedmiotami rozszerzonymi</th>
                            <th>Próg punktowy</th>
                          </tr>
                        </thead>
                        <tbody>
                          {half.map((c: any) => (
                            <tr>
                              <td>
                                {c.subjects.map((s: any) => s.name).join('-')}
                              </td>
                              <td>
                                {c.stats && c.stats[0].points_min > 0 && (
                                  <>
                                    <strong>{c.stats[0].points_min}</strong> pkt
                                  </>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ))}
                  </PastProfilesGrid>
                </Card>
              )}
            </Section>
            <Section>
              <h2>Kontakt</h2>
              {(!school.contact || !school.address) && <p>Brak danych</p>}
              {school.contact && (
                <>
                  <ContactGrid>
                    <address>
                      {school.address.postcode} {school.address.city} <br />
                      {school.address.street} {school.contact.building_nr}
                    </address>
                    <div>
                      <a href={`tel:${school.contact.phone}`}>
                        {school.contact.phone}
                      </a>{' '}
                      <br />
                      <a href={`tel:${school.contact.email}`}>
                        {school.contact.email}
                      </a>
                    </div>
                  </ContactGrid>
                  <ActionLinkWrapper>
                    <a href={school.contact.website}>Strona www szkoły</a>
                  </ActionLinkWrapper>
                </>
              )}
            </Section>
          </Container>
          <MapFrame
            src={`https://www.google.com/maps/embed/v1/place?q=${school.school_name}&key=${GOOGLE_MAPS_KEY}`}
          />
        </>
      )}
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
