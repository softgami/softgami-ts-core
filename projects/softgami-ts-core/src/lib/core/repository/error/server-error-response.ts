import { ErrorResponse } from './error-response.interface';

export class ServerErrorResponse implements ErrorResponse {

    statusCode: number | null = null;
    message: string | null = null;
    path: string | null = null;
    dateTime: string | null = null;
    errorCode: number | null = null;

}
