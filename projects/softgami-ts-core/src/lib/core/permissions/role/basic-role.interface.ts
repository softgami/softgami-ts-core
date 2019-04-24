import { RoleAlias } from './role-alias.enum';
import { Thing } from '../../../shared/thing/thing.interface';

export interface BasicRole extends Thing {
    alias: RoleAlias;
    isActive: boolean;
}
