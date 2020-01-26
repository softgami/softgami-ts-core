import { Address } from '../../content-maker/location/address/address.interface';
import { AppInstance } from '../app/app-instance/app-instance.interface';
import { BasicPerson } from '../../content-maker/person/basic-person.interface';
import { Credentials } from '../auth/credentials/credentials.interface';
import { Currency } from '../shared/monetary/currency.interface';
import { Domain } from '../../content-maker/domain/domain.interface';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { Email } from '../shared/email/email.interface';
import { Language } from '../../content-maker/i18n/language/language.interface';
import { PersonType } from '../../content-maker/person/person-type.enum';
import { Phone } from '../shared/phone/phone.interface';
import { User } from './user.interface';

export interface BasicUser extends BasicPerson<PersonType.USER> {
    isIndividual: boolean;
    emails?: Array<Email>;
    credentials?: Credentials;
    isActive?: boolean;
    language?: Language;
    timezone?: string;
    taxNumber?: string;
    creator?: User;
    phones?: Array<Phone>;
    maritalStatus?: Domain<DomainType.MARITAL_STATUS>;
    occupation?: Domain<DomainType.OCCUPATION>;
    income?: Domain<DomainType.INCOME>;
    educationLevel?: Domain<DomainType.EDUCATION_LEVEL>;
    addresses?: Array<Address>;
    appInstances?: Array<AppInstance>;
    currency?: Currency;
}
