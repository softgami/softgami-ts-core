import { AbstractMaskFactory } from '../abstract-mask-factory';
import { TAX_NUMBER_BR_CNPJ_MASK } from './tax-number-br-cnpj-mask';
import { TAX_NUMBER_BR_CPF_MASK } from './tax-number-br-cpf-mask';

export class TaskNumberMaskFactoryService extends AbstractMaskFactory {

    getRegexByLocale(locale: string): string[] {

        if (!locale) locale = 'br';

        switch (locale.toLowerCase()) {
            case 'br':
            default:
                if (length === null || length === undefined || length <= 0) {
                    return [TAX_NUMBER_BR_CPF_MASK, TAX_NUMBER_BR_CNPJ_MASK];
                } else if (length <= 11) {
                    return [TAX_NUMBER_BR_CPF_MASK];
                } else {
                    return [TAX_NUMBER_BR_CNPJ_MASK];
                }
        }

    }

    getMasksByCountryCode(code: string, length?: number): string[] {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {
            case 'br':
            default:
                if (length === null || length === undefined || length <= 0) {
                    return [TAX_NUMBER_BR_CPF_MASK, TAX_NUMBER_BR_CNPJ_MASK];
                } else if (length <= 11) {
                    return [TAX_NUMBER_BR_CPF_MASK];
                } else {
                    return [TAX_NUMBER_BR_CNPJ_MASK];
                }
        }

    }

}
