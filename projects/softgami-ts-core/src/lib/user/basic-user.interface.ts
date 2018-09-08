import { Address } from '../location/address/address.interface';
import { AppInstance } from '../app/app-instance/app-instance.interface';
import { BasicPerson } from '../shared/person/basic-person.interface';
import { Credentials } from '../auth/credentials/credentials.interface';
import { Email } from '../email/email.interface';
import { Income } from '../domain/income/income.interface';
import { Language } from '../core/i18n/language/language.interface';
import { MaritalStatus } from '../domain/marital-status/marital-status.interface';
import { Occupation } from '../domain/occupation/occupation.interface';
import { Phone } from '../phone/phone.interface';

export interface BasicUser extends BasicPerson {
    emails: Array<Email>;
    credentials?: Credentials;
    isActive?: boolean;
    isIndividual?: boolean;
    language?: Language;
    timezone?: string;
    taxNumber?: string;
    phones?: Array<Phone>;
    maritalStatus?: MaritalStatus;
    occupation?: Occupation;
    income?: Income;
    addresses?: Array<Address>;
    appInstances?: Array<AppInstance>;
}
