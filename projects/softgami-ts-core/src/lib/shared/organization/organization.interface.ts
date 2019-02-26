import { Thing } from '../thing/thing.interface';

export interface Organization extends Thing {
    taxNumber?: string;
}
