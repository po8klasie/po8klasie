import { gql } from '@apollo/client';

/* misc */

export const SCHOOL_COORDS_FRAGMENT = gql`
  fragment SchoolCoords on SchoolNode {
    address {
      latitude
      longitude
    }
  }
`;

/* props */

export const SCHOOL_CARD_PROPS_FRAGMENT = gql`
  fragment SchoolCardProps on SchoolNode {
    schoolId
    schoolName
    isPublic
    address {
      district
    }
  }
`;

export const SCHOOL_HEADER_PROPS_FRAGMENT = gql`
  fragment SchoolHeaderProps on SchoolNode {
    isPublic
    schoolName
    address {
      district
    }
  }
`;

export const SCHOOL_LOCATION_MAP_PROPS_FRAGMENT = gql`
  ${SCHOOL_COORDS_FRAGMENT}
  fragment SchoolLocationMapProps on SchoolNode {
    schoolName
    schoolType
    ...SchoolCoords
  }
`;

export const SCHOOL_CONTACT_PROPS_FRAGMENT = gql`
  fragment SchoolContactProps on SchoolNode {
    schoolName
    address {
      postcode
      city
      street
      buildingNr
    }
    contact {
      phone
      email
      website
    }
    ...SchoolCoords
  }
`;
