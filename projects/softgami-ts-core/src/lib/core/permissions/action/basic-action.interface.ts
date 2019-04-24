import { ActionAlias } from './action-alias.enum';
import { Thing } from '../../../shared/thing/thing.interface';

export interface BasicAction extends Thing {
    alias: ActionAlias;
    value: number;
}
