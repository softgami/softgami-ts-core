import { AddressType } from './address-type.enum';
import { City } from '../city/city.interface';

export interface Address {
    type: AddressType;
    name: string;
    postalCode: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: City;
}
