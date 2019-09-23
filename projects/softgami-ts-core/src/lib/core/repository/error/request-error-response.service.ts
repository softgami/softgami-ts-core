import { ErrorResponse } from './error-response.interface';

export class RequestErrorResponse implements ErrorResponse {
    statusCode: number;
    message: string;
    path: string;
    dateTime: string;
    errorCode: number;
}
