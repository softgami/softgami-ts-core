import { PhoneType } from './phone-type.enum';

export interface Phone {
    type: PhoneType;
    number: string;
    isPrimary: string;
    isVerified?: string;
}
