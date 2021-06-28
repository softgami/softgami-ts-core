import { AbstractTaxNumberUtilsService } from './abstract-tax-number-utils.service';

export class ConcreteTaxNumberUtilsService extends AbstractTaxNumberUtilsService {

    validate(value: string): boolean {

        return true;

    }

}

describe('AbstractTaxNumberUtilsService', () => {

    const service: ConcreteTaxNumberUtilsService = new ConcreteTaxNumberUtilsService();

    describe('validate', () => {

        test('', () => {

            expect(service).toBeDefined();

        });

    });

});
