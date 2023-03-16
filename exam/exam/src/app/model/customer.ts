import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  name: string;
  dayOfBirth: string;
  email: string;
  phone: number;
  customerType: CustomerType;
}
