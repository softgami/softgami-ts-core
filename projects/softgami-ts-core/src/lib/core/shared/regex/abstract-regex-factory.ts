import { Country } from '../../../content-maker/location/country/country.model';
import { Language } from '../../../content-maker/i18n/language/language.model';

export abstract class AbstractRegexFactory {

    abstract getRegexByLocale(locale: string | null): RegExp;
    abstract getRegexByCountryCode(code: string | null): RegExp;

    getRegexByCountry(country: Country): RegExp {

        return this.getRegexByCountryCode(country ? country.code : null);

    }

    getRegexByLanguage(language: Language): RegExp {

        return this.getRegexByLocale(language ? language.code : null);

    }

}
