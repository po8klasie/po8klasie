import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { getFavSchoolsFromStorage } from '../utils/localStorageHelpers';
import { fetchSchoolDetails } from '../store/modules/schoolDetails';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import styled from '../styling/styled';

interface FavouriteSchoolsPageProps extends RouteComponentProps {
  schoolDetails: any;
  fetchSchoolDetails: Function;
}

const Wrapper = styled(Card)`
  margin-bottom: 50px;
  padding: 30px;
  .top {
    display: flex;
    justify-content: space-between;
  }
  .school-type {
    display: block;
    font-size: 1em;
    color: #707070;
    text-transform: uppercase;
  }
  h4 {
    margin-top: 0.3em;
    margin-bottom: 0;
    font-size: 1.8em;
    color: ${(props) => props.theme.colors.dark};
    & > a {
      color: ${(props) => props.theme.colors.text};
      text-decoration: none;
    }
  }
  .district {
    display: block;
    font-size: 1em;
    color: ${(props) => props.theme.colors.dark};
    text-transform: uppercase;
    margin: 1em 0;
  }
  .content {
    flex: 1 0 auto;
  }
  a {
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  h5 {
    font-size: 1.25em;
    margin: 1em 0 0.5em 0;
  }
  li {
    color: #6383e2;
    span {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.125em;
    }
    .points {
      float: right;
      font-weight: bold;
      color: ${(props) => props.theme.colors.dark};
    }
  }
`;

const FavouriteSchoolsPage = (props: FavouriteSchoolsPageProps) => {
  console.log('props', props);
  const favouriteSchools = getFavSchoolsFromStorage();
  console.log(favouriteSchools);

  return (
    <Layout>
      <Container>
        <PageTitle>Ulubione</PageTitle>
        {favouriteSchools.map((elem: number) => (
          <Wrapper>
            <div className="content">
              <div className="top">
                <span className="school-type">
                  {/*Szkoła {!props.school.is_public && 'nie'}publiczna*/}
                  Szkoła publiczna
                </span>
                <Link to={`/schools`}>Zobacz pełny profil szkoły</Link>
                {/*<Link to={`/school/${props.school.id}`}>Zobacz pełny profil szkoły</Link>*/}
              </div>
              <h4>
                {/*<Link to={`/school/${props.school.id}`}>*/}
                <Link to={`/schools`}>
                  {/*{props.school.school_name}*/}
                  Nazwa szkoły
                </Link>
              </h4>
              <span className={'district'}>
                {/*{props.school.address.district}*/}
                Dzielnica
              </span>
              <div className="grid">
                <div>
                  <h5>Tegoroczne profile</h5>
                  <ul>
                    <li>
                      <span>matematyka - geografia - angielski</span>
                    </li>
                    <li>
                      <span>historia - język polski - WOS</span>
                    </li>
                    <li>
                      <span>matematyka - fizyka</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5>Zeszłoroczne progi punktowe</h5>
                  <ul>
                    <li>
                      <span>matematyka - geografia - angielski</span>
                      <span className="points">178 pkt.</span>
                    </li>
                    <li>
                      <span>historia - język polski - WOS</span>
                      <span className="points">178 pkt.</span>
                    </li>

                    <li>
                      <span>matematyka - fizyka</span>
                      <span className="points">178 pkt.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Wrapper>
        ))}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavouriteSchoolsPage);
