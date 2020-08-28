import { AbstractMaskFactory } from '../abstract-mask-factory';
import { Country } from '../../../../content-maker/location/country/country.model';
import { TAX_NUMBER_BR_CNPJ_MASK } from './tax-number-br-cnpj-mask';
import { TAX_NUMBER_BR_CPF_MASK } from './tax-number-br-cpf-mask';

export class TaskNumberMaskFactoryService extends AbstractMaskFactory {

    getMasksFromCountry(country: Country, length?: number): string[] {

        return this.getMasksFromCountryCode(country ? country.code : null, length);

    }

    getMasksFromCountryCode(code: string, length?: number): string[] {

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
