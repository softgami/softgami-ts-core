import { Thing } from '../thing/thing.interface';
import { User } from '../../user';

export interface Organization extends Thing {
    taxNumber?: string;
    creator?: User;
}
