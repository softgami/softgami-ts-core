import { AbstractTaxNumberUtilsService } from './abstract-tax-number-utils.service';

export class CnpjUtilsService extends AbstractTaxNumberUtilsService {

    validate(value: string): boolean {

        value = value.replace(/[^\d]+/g, '');

        if (value === '') return false;

        if (value.length !== 14) {

            return false;

        }

        const REJECT_LIST = [
            '00000000000000',
            '11111111111111',
            '22222222222222',
            '33333333333333',
            '44444444444444',
            '55555555555555',
            '66666666666666',
            '77777777777777',
            '88888888888888',
            '99999999999999',
        ];

        if (REJECT_LIST.includes(value)) {

            return false;

        }

        let tamanho = value.length - 2;
        let numeros = value.substring(0, tamanho);
        const digitos = value.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {

            soma += parseInt(numeros.charAt(tamanho - i), 10) * pos--;
            if (pos < 2) {

                pos = 9;

            }

        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== parseInt(digitos.charAt(0), 10)) {

            return false;

        }

        tamanho = tamanho + 1;
        numeros = value.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {

            soma += parseInt(numeros.charAt(tamanho - i), 10) * pos--;
            if (pos < 2) {

                pos = 9;

            }

        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== parseInt(digitos.charAt(1), 10)) {

            return false;

        }

        return true;

    }

}
