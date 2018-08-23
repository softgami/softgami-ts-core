import { Password } from '../password/password.interface';

export interface BasicCredentials {
    current: Password;
    new: Password;
    confirm: Password;
    old?: Array<Password>;
}
