import React, { FC } from 'react';
import { gql } from '@apollo/client';
import styled from '../../../styling/styled';
import Section from './Section';
import { ISchoolContactPropsFragment } from '../../../types/graphql';

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

const ActionLinkWrapper = styled.div`
  margin-top: 20px;
`;

interface SchoolContactProps {
  contact: ISchoolContactPropsFragment['contact'];
  address: ISchoolContactPropsFragment['address'];
}

const SchoolContact: FC<SchoolContactProps> = ({ contact, address }) => {
  return (
    <Section>
      <h2>Kontakt</h2>
      {(!contact || !address) && <p>Brak danych</p>}
      {contact && (
        <>
          <ContactGrid>
            <address>
              {address.postcode} {address.city} <br />
              {address.street} {address.buildingNr}
            </address>
            <div>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a> <br />
              <a href={`tel:${contact.email}`}>{contact.email}</a>
            </div>
          </ContactGrid>
          <ActionLinkWrapper>
            <a href={contact.website} target="_blank" rel="noopener noreferrer">
              Strona www szkoły
            </a>
          </ActionLinkWrapper>
        </>
      )}
    </Section>
  );
};

export default SchoolContact;

export const SCHOOL_CONTACT_PROPS_FRAGMENT = gql`
  fragment SchoolContactProps on SchoolNode {
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
  }
`;
