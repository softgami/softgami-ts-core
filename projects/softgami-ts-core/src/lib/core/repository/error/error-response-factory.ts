import { ErrorResponse } from './error-response.interface';
import { HttpStatus } from '../http-status.enum';
import { RequestErrorResponse } from './request-error-response';
import { ServerErrorResponse } from './server-error-response';

export class ErrorResponseFactory {

    constructor() { }

    public static getErrorResponse(status: number): ErrorResponse {

        let response: ErrorResponse;
        switch (status) {
            case HttpStatus.BAD_REQUEST:
            case HttpStatus.CONFLICT:
            case HttpStatus.FORBIDDEN:
            case HttpStatus.UNAUTHORIZED:
            case HttpStatus.UNPROCESSABLE_ENTITY:
            case HttpStatus.METHOD_NOT_ALLOWED:
            case HttpStatus.LENGTH_REQUIRED:
            case HttpStatus.NOT_FOUND:
            case HttpStatus.PROXY_AUTHENTICATION_REQUIRED:
            case HttpStatus.REQUEST_TIMEOUT:
            case HttpStatus.TOO_MANY_REQUESTS:
                response = new RequestErrorResponse();
                break;
            case HttpStatus.BAD_GATEWAY:
            case HttpStatus.GATEWAY_TIMEOUT:
            case HttpStatus.HTTP_VERSION_NOT_SUPPORTED:
            case HttpStatus.INSUFFICIENT_STORAGE:
            case HttpStatus.INTERNAL_SERVER_ERROR:
            case HttpStatus.NOT_IMPLEMENTED:
            case HttpStatus.SERVICE_UNAVAILABLE:
            default:
                response = new ServerErrorResponse();
                break;
        }

        return response;

    }

}
