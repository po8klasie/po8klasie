import { gql } from '@apollo/client';
import {
  SCHOOL_CARD_PROPS_FRAGMENT,
  SCHOOL_CONTACT_PROPS_FRAGMENT,
  SCHOOL_HEADER_PROPS_FRAGMENT,
  SCHOOL_LOCATION_MAP_PROPS_FRAGMENT,
} from './fragments';

export const SCHOOLS_LISTING_QUERY = gql`
  ${SCHOOL_CARD_PROPS_FRAGMENT}
  query SchoolListing(
    $offset: Int
    $first: Int
    $query: String
    $isPublic: Boolean
    $extendedSubjects: [String]
    $districts: [String]
  ) {
    allSchools(
      orderBy: "schoolName"
      offset: $offset
      first: $first
      query: $query
      isPublic: $isPublic
      extendedSubjects: $extendedSubjects
      districts: $districts
    ) {
      totalCount
      edges {
        node {
          ...SchoolCardProps
        }
      }
    }
  }
`;

export const SCHOOLS_MAP_QUERY = gql`
  query SchoolsMap(
    $first: Int
    $query: String
    $isPublic: Boolean
    $extendedSubjects: [String]
    $districts: [String]
  ) {
    allSchools(
      first: $first
      query: $query
      isPublic: $isPublic
      extendedSubjects: $extendedSubjects
      districts: $districts
    ) {
      edges {
        node {
          schoolId
          schoolName
          schoolType

          address {
            latitude
            longitude
            buildingNr
            city
            postcode
            street
          }
        }
      }
    }
  }
`;

export const SCHOOL_PAGE_QUERY = gql`
  ${SCHOOL_HEADER_PROPS_FRAGMENT}
  ${SCHOOL_CONTACT_PROPS_FRAGMENT}
  ${SCHOOL_LOCATION_MAP_PROPS_FRAGMENT}
  fragment SchoolClasses on SchoolNode {
    classes {
      edges {
        node {
          year
          name
          statistics {
            pointsMin
          }
          extendedSubjects {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
  query SchoolPage($schoolID: String) {
    school(schoolId: $schoolID) {
      schoolId
      schoolName
      schoolType
      publicInstitutionData {
        regon
      }
      ...SchoolHeaderProps
      ...SchoolClasses
      ...SchoolContactProps
      ...SchoolLocationMapProps
    }
  }
`;

export const FAVOURITE_SCHOOLS_QUERY = gql`
  ${SCHOOL_CARD_PROPS_FRAGMENT}
  query FavouriteSchools($schoolIDs: [String], $year: Float, $first: Int) {
    allSchools(schoolIds: $schoolIDs, first: $first) {
      edges {
        node {
          ...SchoolCardProps
          classes(year: $year) {
            edges {
              node {
                name
                extendedSubjects {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
