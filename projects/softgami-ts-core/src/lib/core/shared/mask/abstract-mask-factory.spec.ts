import { AbstractMaskFactory } from './abstract-mask-factory';

export class ConcreteMaskFactory extends AbstractMaskFactory {

    getMasksByLocale(locale: string | null, length?: number): string[] {

        throw new Error('Method not implemented.');

    }

    getMasksByCountryCode(code: string | null, length?: number): string[] {

        throw new Error('Method not implemented.');

    }

}

describe('AbstractMaskFactory', () => {

    const service: ConcreteMaskFactory = new ConcreteMaskFactory();

    describe('validate', () => {

        test('', () => {

            expect(service).toBeDefined();

        });

    });

});
