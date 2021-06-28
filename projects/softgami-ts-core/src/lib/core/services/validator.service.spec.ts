import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {

    describe('validate', () => {

        test('', () => {

            try {

                ValidatorService.validate(null);

            } catch (ex) {}

        });

    });

});
