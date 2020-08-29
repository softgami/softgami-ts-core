import { AbstractMaskFactory } from '../abstract-mask-factory';
import { ZIP_CODE_BR_MASK } from './zip-code-br-mask';

export class ZipCodeMaskFactoryService extends AbstractMaskFactory {

    getMasksByLocale(locale: string, length?: number): string[] {

        if (!locale) locale = 'pt-br';

        switch (locale.toLowerCase()) {
            case 'pt-br':
            default:
                return [ZIP_CODE_BR_MASK];
        }

    }

    getMasksByCountryCode(code: string, length?: number): string[] {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {
            case 'br':
            default:
                return [ZIP_CODE_BR_MASK];
        }

    }

}
