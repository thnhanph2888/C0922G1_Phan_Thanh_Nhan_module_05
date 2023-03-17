import {Diadiem} from './diadiem';
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
  departure: Diadiem;
  destination: Diadiem;
}
