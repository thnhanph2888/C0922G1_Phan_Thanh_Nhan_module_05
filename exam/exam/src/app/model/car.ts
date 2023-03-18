import {Address} from './address';
import {CarType} from './car-type';

export interface Car {
  id: number;
  licensePlates: string;
  carType: CarType;
  garage: string;
  phone: string;
  email: string;
  departureTime: string;
  arrivalTime: string;
  departure: Address;
  destination: Address;
}
