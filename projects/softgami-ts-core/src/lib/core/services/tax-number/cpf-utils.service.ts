import { AbstractTaxNumberUtilsService } from './abstract-tax-number-utils.service';

export class CpfUtilsService extends AbstractTaxNumberUtilsService {

    validate(value: string): boolean {

        let sum = 0;
        let remainder: number;
        sum = 0;
        value = value.replace(/[^\d]+/g, '');

        if (value === '') return false;

        if (value.length !== 11) {

            return false;

        }

        const REJECT_LIST = [
            '00000000000',
            '11111111111',
            '22222222222',
            '33333333333',
            '44444444444',
            '55555555555',
            '66666666666',
            '77777777777',
            '88888888888',
            '99999999999',
        ];

        if (REJECT_LIST.includes(value)) {

            return false;

        }
        for (let i = 1; i <= 9; i++) {

            sum = sum + parseInt(value.substring(i - 1, i), 10) * (11 - i);

        }
        remainder = (sum * 10) % 11;
        if ((remainder === 10) || (remainder === 11)) {

            remainder = 0;

        }
        if (remainder !== parseInt(value.substring(9, 10), 10)) {

            return false;

        }
        sum = 0;
        for (let i = 1; i <= 10; i++) {

            sum = sum + parseInt(value.substring(i - 1, i), 10) * (12 - i);

        }
        remainder = (sum * 10) % 11;
        if ((remainder === 10) || (remainder === 11)) {

            remainder = 0;

        }
        if (remainder !== parseInt(value.substring(10, 11), 10)) {

            return false;

        }
        return true;

    }

}
