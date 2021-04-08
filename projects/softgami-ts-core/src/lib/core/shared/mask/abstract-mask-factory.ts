import { Country } from '../../../content-maker/location/country/country.model';
import { Language } from '../../../content-maker/i18n/language/language.model';

export abstract class AbstractMaskFactory {

    abstract getMasksByLocale(locale: string | null, length?: number): string[];
    abstract getMasksByCountryCode(code: string | null, length?: number): string[];

    getMasksByCountry(country: Country, length?: number): string[] {

        return this.getMasksByCountryCode(country ? country.code : null, length);

    }

    getMasksByLanguage(language: Language, length?: number): string[] {

        return this.getMasksByLocale(language ? language.code : null, length);

    }

}
