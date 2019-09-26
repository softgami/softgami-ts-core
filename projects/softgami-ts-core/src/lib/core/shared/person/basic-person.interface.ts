import { Country } from '../location/country/country.interface';
import { Gender } from '../../../content-maker/domain/gender/gender.enum';
import { QuantitativeValue } from '../value/quantitative-value.interface';
import { Thing } from '../thing/thing.interface';

export interface BasicPerson extends Thing {
    gender?: Gender;
    birthDate?: Date;
    deathDate?: Date;
    birthPlace?: Country;
    nationality?: Country;
    height?: QuantitativeValue;
    weight?: QuantitativeValue;
    jobTitle?: string;
}
