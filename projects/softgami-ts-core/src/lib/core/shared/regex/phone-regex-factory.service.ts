import { Country } from '../../../content-maker/location/country/country.model';
import { VALID_PHONE_BR } from './valid-phone-br.regex';

export class PhoneRegexFactoryService {

    public static getValidRegexFromCountry(country: Country): RegExp {

        return PhoneRegexFactoryService.getValidRegexFromCountryCode(country ? country.code : null);

    }

    public static getValidRegexFromCountryCode(code: string): RegExp {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {
            case 'br':
                return VALID_PHONE_BR;
            default:
                return VALID_PHONE_BR;
        }

    }

}