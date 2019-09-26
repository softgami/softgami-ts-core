import { Password } from '../password/password.interface';

export interface Credentials {
    current: Password;
    new?: Password;
    confirm?: Password;
    old?: Array<Password>;
}
