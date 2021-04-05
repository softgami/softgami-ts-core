import { AbstractRegexFactory } from '../abstract-regex-factory';
import { VALID_PHONE_BR_REGEX } from './valid-phone-br.regex';

export class PhoneRegexFactoryService extends AbstractRegexFactory {

    getRegexByCountryCode(code: string): RegExp {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {

            case 'br':
                return VALID_PHONE_BR_REGEX;
            default:
                return VALID_PHONE_BR_REGEX;

        }

    }

    getRegexByLocale(locale: string): RegExp {

        if (!locale) locale = 'pt-br';

        switch (locale.toLowerCase()) {

            case 'pt-br':
                return VALID_PHONE_BR_REGEX;
            default:
                return VALID_PHONE_BR_REGEX;

        }

    }

}
