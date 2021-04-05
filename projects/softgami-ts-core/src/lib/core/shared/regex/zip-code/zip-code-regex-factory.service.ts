import { AbstractRegexFactory } from '../abstract-regex-factory';
import { ZIP_CODE_BR_REGEX } from './zip-code-br.regex';

export class ZipCodeRegexFactoryService extends AbstractRegexFactory {

    getRegexByCountryCode(code: string): RegExp {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {

            case 'br':
                return ZIP_CODE_BR_REGEX;
            default:
                return ZIP_CODE_BR_REGEX;

        }

    }

    getRegexByLocale(locale: string): RegExp {

        if (!locale) locale = 'pt-br';

        switch (locale.toLowerCase()) {

            case 'pt-br':
                return ZIP_CODE_BR_REGEX;
            default:
                return ZIP_CODE_BR_REGEX;

        }

    }

}
