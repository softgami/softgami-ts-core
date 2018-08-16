import { PhoneType } from './phone-type.enum';

export interface BasicPhone {
    type: PhoneType;
    number: string;
    isPrimary: string;
    isVerified: string;
}
