import { AbstractRegexFactory } from '../abstract-regex-factory';
import { Country } from '../../../../content-maker/location/country/country.model';
import { VALID_PHONE_BR_REGEX } from './valid-phone-br.regex';

export class PhoneRegexFactoryService extends AbstractRegexFactory {

    getRegexFromCountry(country: Country): RegExp {

        return this.getRegexFromCountryCode(country ? country.code : null);

    }

    getRegexFromCountryCode(code: string): RegExp {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {
            case 'br':
                return VALID_PHONE_BR_REGEX;
            default:
                return VALID_PHONE_BR_REGEX;
        }

    }

}
