import { Country } from '../../../content-maker/location/country/country.model';

export abstract class AbstractRegexFactory {
    abstract getRegexFromCountry(country: Country): RegExp;
    abstract getRegexFromCountryCode(code: string): RegExp;
}
