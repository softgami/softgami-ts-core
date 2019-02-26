import { Country } from '../../location/country/country.interface';
import { Gender } from '../../domain/gender/gender.enum';
import { QuantitativeValue } from '../../core/value/quantitative-value.interface';

export interface BasicPerson {
    name: string;
    description?: string;
    gender?: Gender;
    birthDate?: Date;
    deathDate?: Date;
    birthPlace?: Country;
    nationality?: Country;
    url?: string;
    image?: string;
    height?: QuantitativeValue;
    weight?: QuantitativeValue;
    jobTitle?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
