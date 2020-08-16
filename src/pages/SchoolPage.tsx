import React, { useEffect } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import { connect } from 'react-redux';
import styled from '../styling/styled';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { fetchSchoolDetails } from '../store/modules/schoolDetails';
import { useSchoolDetails } from '../api/schoolDetails';
import Breadcrumbs from '../components/Breadcrumbs';
import SchoolHeader from '../components/sections/SchoolPage/SchoolHeader';
import SchoolProfiles from '../components/sections/SchoolPage/SchoolProfiles';
import SchoolLocationMap from '../components/sections/SchoolPage/SchoolLocationMap';
import SchoolPastProfiles from '../components/sections/SchoolPage/SchoolPastProfiles';
import SchoolContact from '../components/sections/SchoolPage/SchoolContact';
import { useHighSchoolClasses } from '../api/highschoolClasses';

const Section = styled.section`
  margin-top: 4em;
  h2 {
    margin-bottom: 1.5em;
  }
`;

const SchoolPage = (props: RouteComponentProps<{ schoolID: string }>) => {
  const isSchoolIdValid =
    props.schoolID && !Number.isNaN(props.schoolID as any);
  const { data: school, error: schoolError } = useSchoolDetails(
    parseInt(props.schoolID as any),
  );
  const { data: classes, error: classesError } = useHighSchoolClasses(
    parseInt(props.schoolID as any),
    (school as any)?.school_type,
  );
  console.log(school, schoolError);
  console.log(classes, classesError);
  if (!isSchoolIdValid) return <Redirect to="/" />;

  // const isLoading = props.schoolDetails.isFetching || isObjEmpty(school);
  return (
    <Layout>
      <Container className={!school ? 'loading' : ''}>
        <Breadcrumbs
          steps={[
            ['Wyszukiwarka szkół', '/schools'],
            [school ? school.school_name : 'Szkoła'],
          ]}
        />

        <SchoolHeader
          isLoading={!school}
          schoolName={school?.school_name}
          description={'some desc'}
          district={school?.address?.district}
          isPublic={school?.is_public}
        />

        <SchoolProfiles />
        <SchoolPastProfiles classes={classes} />
        <SchoolContact address={school?.address} contact={school?.contact} />
      </Container>
      <SchoolLocationMap
        schoolName={school?.school_name}
        schoolType={school?.school_type}
        address={school?.address}
      />
    </Layout>
  );
};

export default SchoolPage;
