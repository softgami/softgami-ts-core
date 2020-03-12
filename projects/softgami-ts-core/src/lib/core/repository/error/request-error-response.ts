import { ErrorResponse } from '../../../internal';

export class RequestErrorResponse implements ErrorResponse {
    statusCode: number;
    message: string;
    path: string;
    dateTime: string;
    errorCode: number;
}
