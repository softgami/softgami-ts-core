import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { Country } from '../location/country/country.interface';
import { Domain } from '../domain/domain.interface';
import { DomainType } from '../domain/domain-type.enum';
import { PersonType } from './person-type.enum';
import { QuantitativeValue } from '../../core/shared/value/quantitative-value.interface';
import { Thing } from '../../core/shared/thing/thing.interface';

export interface BasicPerson<T extends PersonType> extends Thing {
    type: T;
    appInstance?: AppInstance;
    gender?: Domain<DomainType.GENDER>;
    birthDate?: Date;
    deathDate?: Date;
    birthPlace?: Country;
    nationality?: Country;
    height?: QuantitativeValue;
    weight?: QuantitativeValue;
    jobTitle?: string;
}
