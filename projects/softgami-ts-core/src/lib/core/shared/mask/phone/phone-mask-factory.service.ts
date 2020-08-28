import { AbstractMaskFactory } from '../abstract-mask-factory';
import { PHONE_BR_LONG_MASK } from './phone-br-long-mask';
import { PHONE_BR_SHORT_MASK } from './phone-br-short-mask';

export class PhoneMaskFactoryService extends AbstractMaskFactory {

    getRegexByLocale(locale: string): string[] {

        if (!locale) locale = 'pt-br';

        switch (locale.toLowerCase()) {
            case 'br':
            default:
                if (length === null || length === undefined || length <= 0) {
                    return [PHONE_BR_SHORT_MASK, PHONE_BR_LONG_MASK];
                } else if (length <= 10) {
                    return [PHONE_BR_SHORT_MASK];
                } else {
                    return [PHONE_BR_SHORT_MASK];
                }
        }

    }

    getMasksByCountryCode(code: string, length?: number): string[] {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {
            case 'br':
            default:
                if (length === null || length === undefined || length <= 0) {
                    return [PHONE_BR_SHORT_MASK, PHONE_BR_LONG_MASK];
                } else if (length <= 10) {
                    return [PHONE_BR_SHORT_MASK];
                } else {
                    return [PHONE_BR_SHORT_MASK];
                }
        }

    }

}
