import { FC } from 'react';
import OverviewSection from './OverviewSection';
import EducationalOfferSection from './EducationalOfferSection';
import { SectionComponentProps } from './types';

export type SchoolInfoSectionId = 'overview' | 'educationalOffer';

export interface SchoolInfoSectionConfig {
  id: SchoolInfoSectionId;
  name: string;
  SectionComponent: FC<SectionComponentProps>;
}

const schoolInfoSections: Record<SchoolInfoSectionId, SchoolInfoSectionConfig> = {
  overview: {
    id: 'overview',
    name: 'Podstawowe informacje',
    SectionComponent: OverviewSection,
  },
  educationalOffer: {
    id: 'educationalOffer',
    name: 'Oferta edukacyjna',
    SectionComponent: EducationalOfferSection,
  },
};

export default schoolInfoSections;
