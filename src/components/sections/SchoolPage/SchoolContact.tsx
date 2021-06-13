import React, { FC } from 'react';
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

const getTransitServiceUrl = (latitude: number, longitude: number) =>
  `https://jakdojade.pl/warszawa/trasa/?tc=${latitude}:${longitude}`;

const getGoogleMapsUrl = (schoolName: string) => `http://maps.google.com/?q=${schoolName}`;

const ActionLinkWrapper = styled.div`
  margin-top: 20px;

  a {
    margin: 0 1rem;
  }
  a:first-of-type {
    margin-left: 0;
  }

  @media (max-width: 870px) {
    a {
      display: block;
      margin: 0.8rem 0;
    }
  }
`;

interface SchoolContactProps {
  schoolName: ISchoolContactPropsFragment['schoolName'];
  contact: ISchoolContactPropsFragment['contact'];
  address: ISchoolContactPropsFragment['address'];
}

const SchoolContact: FC<SchoolContactProps> = ({ schoolName, contact, address }) => {
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
            {address.longitude && address.latitude && (
              <a
                href={getTransitServiceUrl(address.latitude, address.longitude)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprawdź dojazd na jakdojade.pl
              </a>
            )}
            <a href={getGoogleMapsUrl(schoolName)} target="_blank" rel="noopener noreferrer">
              Zobacz szkołę na Google Maps
            </a>
          </ActionLinkWrapper>
        </>
      )}
    </Section>
  );
};

export default SchoolContact;
