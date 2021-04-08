export interface ErrorResponse {
    statusCode: number | null;
    message: string | null;
    path: string | null;
    dateTime: string | null;
    errorCode: number | null;
}
