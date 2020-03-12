import { ErrorResponse } from '../../../internal';

export class ServerErrorResponse implements ErrorResponse {
    statusCode: number;
    message: string;
    path: string;
    dateTime: string;
    errorCode: number;
}
