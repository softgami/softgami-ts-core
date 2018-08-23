import { Address } from '../location/address/address.interface';
import { AppInstance } from '../app/app-instance/app-instance.interface';
import { Country } from '../location/country/country.interface';
import { Credentials } from '../auth/credentials/credentials.interface';
import { Email } from '../email/email.interface';
import { Gender } from '../domain/gender/gender.enum';
import { Income } from '../domain/income/income.interface';
import { Language } from '../core/language/language.interface';
import { MaritalStatus } from '../domain/marital-status/marital-status.interface';
import { Occupation } from '../domain/occupation/occupation.interface';
import { Phone } from '../phone/phone.interface';

export interface BasicUser {
    name: string;
    emails: Array<Email>;
    credentials?: Credentials;
    isActive?: boolean;
    isIndividual?: boolean;
    language?: Language;
    timezone?: string;
    surname?: string;
    birthDate?: Date;
    picture?: string;
    taxNumber?: string;
    gender?: Gender;
    phones?: Array<Phone>;
    maritalStatus?: MaritalStatus;
    occupation?: Occupation;
    income?: Income;
    nationality?: Country;
    addresses?: Array<Address>;
    appInstances?: Array<AppInstance>;
    createdAt?: Date;
    lastUpdate?: Date;
}
