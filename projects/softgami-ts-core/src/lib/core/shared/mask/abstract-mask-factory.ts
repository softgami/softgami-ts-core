import { Country } from '../../../content-maker/location/country/country.model';
import { Language } from '../../../content-maker/i18n/language/language.model';

export abstract class AbstractMaskFactory {

    abstract getRegexByLocale(locale: string): string[];
    abstract getMasksByCountryCode(code: string, length?: number): string[];

    getMasksByCountry(country: Country, length?: number): string[] {

        return this.getMasksByCountryCode(country ? country.code : null, length);

    }

    getRegexByLanguage(language: Language): string[] {

        return this.getRegexByLocale(language ? language.code : null);

    }

}
