import React, { FC, useEffect } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import { useMatomo } from '@datapunt/matomo-tracker-react';
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
import useFavouriteSchools from '../hooks/useFavouriteSchools';

const SchoolPage: FC<RouteComponentProps<{ schoolID: string }>> = ({ schoolID }) => {
  const { trackPageView } = useMatomo();
  const isSchoolIdValid = Boolean(schoolID && !Number.isNaN(schoolID as any));

  const { data: school, error: schoolError } = useSchoolDetails(parseInt(schoolID as any, 10));

  const { data: classes, error: classesError } = useHighSchoolClasses(
    parseInt(schoolID as any, 10),
    (school as any)?.school_type,
  );

  const { isSchoolFavourite, toggleFavouriteSchool } = useFavouriteSchools();

  useEffect(() => {
    if (isSchoolIdValid && school && school.id === schoolID) trackPageView({});
  }, [schoolID, school, isSchoolIdValid, trackPageView]);

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
          description="some desc"
          district={school?.address?.district}
          isPublic={school?.is_public}
          isFavourite={isSchoolFavourite(schoolID || '')}
          toggleFavourite={() => toggleFavouriteSchool(schoolID || '')}
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
