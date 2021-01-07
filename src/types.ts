export interface School {
  id: number;
  is_public: boolean;
  school_name: string;
  nickname: string | null;
  school_type: string;
  school_type_generalised: string;
  student_type: string;
  is_special_needs_school: boolean;
  specialised_divisions: string[];
  data: {
    is_in_school_complex: boolean;
  };
  address: {
    id: number;
    city: string;
    postcode: string;
    district: string;
    street: string;
    building_nr: number;
    longitude: number;
    latitude: number;
  };
  contact: {
    id: number;
    website: string;
    phone: string;
    email: string;
  };
  public_institution_data: {
    id: string;
    short_name: string;
    institution_name: string;
    institution_short_name: string;
    institution_type: string;
    institution_nr: string | null;
    institution_RSPO: number;
    RSPO: number;
    institution_regon: string;
    regon: string;
    data: {
      BIP: string;
      RSPO_url: string;
      supervisor: string;
      ankietyBE_id: number;
      has_dormitory: boolean;
      is_by_hospital: boolean;
      main_disability: string | null;
      information_system: string;
      psychological_clinic: string;
    };
  };
}

export type SearchData = Record<string, string | number | any[]>;
