import { ServerErrorResponse } from './server-error-response';

describe('ServerErrorResponse', () => {

    test('ServerErrorResponse should be created', () => {

        const error = new ServerErrorResponse();

        expect(error).toBeDefined();

    });

});
