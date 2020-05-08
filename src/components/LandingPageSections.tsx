import styled from '../styling/styled';

const LandingPageSectionOne = styled.div`
  padding: 4rem 0 5rem 0;
  position: relative;
  &:after {
    content: '';
    display: block;
    background-color: #f5f5f5;
    position: absolute;
    width: 120%;
    height: 110%;
    top: -10%;
    left: -10%;
    z-index: -1;
  }
  @media (max-width: 780px) {
    padding: 1.5em 0;
  }
`;

const LandingPageSectionTwo = styled.div`
  padding: 5rem 0 6rem 0;
  @media (max-width: 780px) {
    padding: 1.5em 0;
  }
`;

const LandingPageSectionThree = styled(LandingPageSectionOne)`
  &:after {
    height: 100%;
    top: 0;
  }
`;

export {
  LandingPageSectionOne,
  LandingPageSectionTwo,
  LandingPageSectionThree,
};
