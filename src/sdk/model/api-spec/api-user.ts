/**
 * API User Representation.
 */
export interface ApiUser {
  name: string;
  address: string;
  city: string;
  company: string;
  country: string;
  created_date: number;
  crm: string;
  deleted: boolean;
  deleted_date: number | null;
  email: string;
  fullname: string;
  locked: boolean;
  phone: string;
  state: string;
  user_type: UserType;
  zip: string;
}

/**
 * Enumeration of possible user types.
 */
export enum UserType {
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',
  READ_ONLY_SYSTEM_ADMIN = 'READ_ONLY_SYSTEM_ADMIN',
  CUSTOMER = 'CUSTOMER'
}