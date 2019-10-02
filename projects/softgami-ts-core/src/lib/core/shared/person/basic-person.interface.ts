import { Country } from '../location/country/country.interface';
import { Domain } from '../../../content-maker/domain/domain.interface';
import { DomainType } from '../../../content-maker/domain/domain-type.enum';
import { QuantitativeValue } from '../value/quantitative-value.interface';
import { Thing } from '../thing/thing.interface';

export interface BasicPerson extends Thing {
    gender?: Domain<DomainType.GENDER>;
    birthDate?: Date;
    deathDate?: Date;
    birthPlace?: Country;
    nationality?: Country;
    height?: QuantitativeValue;
    weight?: QuantitativeValue;
    jobTitle?: string;
}
