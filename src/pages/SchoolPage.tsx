import React from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { useSchoolDetails } from '../api/schoolDetails';
import Breadcrumbs from '../components/Breadcrumbs';
import SchoolHeader from '../components/sections/SchoolPage/SchoolHeader';
import SchoolProfiles from '../components/sections/SchoolPage/SchoolProfiles';
import SchoolLocationMap from '../components/sections/SchoolPage/SchoolLocationMap';
import SchoolPastProfiles from '../components/sections/SchoolPage/SchoolPastProfiles';
import SchoolContact from '../components/sections/SchoolPage/SchoolContact';
import { useHighSchoolClasses } from '../api/highschoolClasses';
import { ErrorInfo } from '../components/Info';
import { useFavouriteSchools } from '../hooks/useFavouriteSchools';

const SchoolPage = (props: RouteComponentProps<{ schoolID: string }>) => {
  const isSchoolIdValid = props.schoolID && !Number.isNaN(props.schoolID as any);

  const { data: school, error: schoolError } = useSchoolDetails(parseInt(props.schoolID as any));

  const { data: classes, error: classesError } = useHighSchoolClasses(
    parseInt(props.schoolID as any),
    (school as any)?.school_type,
  );

  const { isSchoolFavourite, toggleFavouriteSchool } = useFavouriteSchools();

  if (!isSchoolIdValid) return <Redirect to="/" />;

  if (schoolError || classesError)
    return (
      <Layout>
        <Container className={!school ? 'loading' : ''}>
          <Breadcrumbs
            steps={[['Wyszukiwarka szkół', '/schools'], [school ? school.school_name : 'Szkoła']]}
          />
          <ErrorInfo />
        </Container>
      </Layout>
    );

  return (
    <Layout>
      <Container className={!school ? 'loading' : ''}>
        <Breadcrumbs
          steps={[['Wyszukiwarka szkół', '/schools'], [school ? school.school_name : 'Szkoła']]}
        />

        <SchoolHeader
          isLoading={!school}
          schoolName={school?.school_name}
          description={'some desc'}
          district={school?.address?.district}
          isPublic={school?.is_public}
          isFavourite={isSchoolFavourite(props.schoolID || '')}
          toggleFavourite={() => toggleFavouriteSchool(props.schoolID || '')}
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
