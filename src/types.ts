import { institutionTypes } from './utils/apiDataMapping';

export interface IPublicTransportRoute {
  name: string;
  routeFrom?: string;
  routeTo?: string;
  ref?: string;
  type: string;
  operator?: string;
}

export interface IPublicTransportStop {
  name: string;
  latitude: number;
  longitude: number;
  publicTransportRoutes: IPublicTransportRoute[];
}

export interface ISchoolSearchData {
  projectId: string;
  name: string;
  rspo: string;
  rspoFacilityType: keyof typeof institutionTypes;
  street: string;
  buildingNumber: string;
  apartmentNumber: string;
  city: string;

  isPublic: boolean;

  latitude: number;
  longitude: number;

  borough: string;

  foreignLanguages: string[] | null;
  classProfiles: string[] | null;
}

export interface IPublicTransportStopWrapper {
  distance: number;
  publicTransportStop: IPublicTransportStop;
}

export interface ISchoolData extends ISchoolSearchData {
  email: string;
  phone: string;
  website: string;
  postalCode: string;
  description: string;
  publicTransportStops: IPublicTransportStopWrapper[];
}

export interface RailsApiSchool {
  apartmentNo: string;
  buildingNo: string;
  classrooms: string | null;
  county: string;
  createdAt: string;
  email: string;
  id: number;
  institutionTypeId: number;
  integrationClasses: number | null;
  latitude: string;
  longitude: string;
  municipality: string;
  name: string;
  public: boolean;
  rspoInstitutionId: number;
  rspoInstitutionTypeId: keyof typeof institutionTypes;
  sportFacilities: null | string;
  street: string;
  studentsPerTeacher: null;
  town: string;
  updatedAt: string;
  website: string;
  workingTime: null;
  zipCode: string;
  description: string | null;
  foreignLanguages: string | null;
  classProfiles: string | null;
  extracurricularActivities: string | null;
}

export type SearchData = Record<string, string | number | unknown[]>;
