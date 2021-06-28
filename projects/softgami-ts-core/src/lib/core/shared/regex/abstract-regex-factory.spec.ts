import { AbstractRegexFactory } from './abstract-regex-factory';

export class ConcreteRegexFactory extends AbstractRegexFactory {

    getRegexByLocale(locale: string | null): RegExp {

        throw new Error('Method not implemented.');

    }

    getRegexByCountryCode(code: string | null): RegExp {

        throw new Error('Method not implemented.');

    }

}

describe('AbstractRegexFactory', () => {

    const service: ConcreteRegexFactory = new ConcreteRegexFactory();

    describe('getRegexByLocale', () => {

        test('', () => {

            expect(service).toBeDefined();

        });

    });

});
