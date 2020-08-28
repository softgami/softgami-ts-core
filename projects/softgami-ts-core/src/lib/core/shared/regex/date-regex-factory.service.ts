import { Country } from '../../../content-maker/location/country/country.model';
import { VALID_DATE_BR } from './valid-date-br.regex';

export class DateRegexFactoryService {

    public static getValidRegexFromCountry(country: Country): RegExp {

        return DateRegexFactoryService.getValidRegexFromCountryCode(country ? country.code : null);

    }

    public static getValidRegexFromCountryCode(code: string): RegExp {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {
            case 'br':
                return VALID_DATE_BR;
            default:
                return VALID_DATE_BR;
        }

    }

}