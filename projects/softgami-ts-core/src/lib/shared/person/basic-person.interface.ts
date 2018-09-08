import { Country } from '../../location/country/country.interface';
import { Gender } from '../../domain/gender/gender.enum';

export interface BasicPerson {
    name: string;
    surname?: string;
    description?: string;
    gender?: Gender;
    birthDate?: Date;
    deathDate?: Date;
    birthPlace?: Country;
    nationality?: Country;
    url?: string;
    image?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
