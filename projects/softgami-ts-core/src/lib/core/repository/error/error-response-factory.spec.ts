import { RequestErrorResponse } from './request-error-response';

describe('RequestErrorResponse', () => {

    test('RequestErrorResponse should be created', () => {

        const error = new RequestErrorResponse();

        expect(error).toBeDefined();

    });

});
