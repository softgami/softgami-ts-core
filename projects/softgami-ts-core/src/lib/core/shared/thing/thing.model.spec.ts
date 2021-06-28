import { Thing } from './thing.model';

describe('Thing', () => {

    const thing: Thing = new Thing();

    test('', () => {

        expect(thing).toBeDefined();

    });

});
