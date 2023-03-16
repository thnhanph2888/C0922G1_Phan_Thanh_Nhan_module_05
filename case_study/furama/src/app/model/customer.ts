import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  code: string;
  customerType: CustomerType;
  name: string;
  dateOfBirth: string;
  gender: boolean;
  idCard: string;
  phoneNumber: number;
  email: string;
  address: string;
}
