import { Country } from '../../../content-maker/location/country/country.model';

export abstract class AbstractMaskFactory {
    abstract getMasksFromCountry(country: Country, length?: number): string[];
    abstract getMasksFromCountryCode(code: string, length?: number): string[];
}
