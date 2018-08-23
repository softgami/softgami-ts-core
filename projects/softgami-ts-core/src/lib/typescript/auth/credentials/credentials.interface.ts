import { BasicCredentials } from './basic-credentials.interface';

export interface Credentials extends BasicCredentials {
    _id: string;
}
