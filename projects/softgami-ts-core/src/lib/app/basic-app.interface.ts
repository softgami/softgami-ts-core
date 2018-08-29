import { AppAlias } from './app-alias.enum';
import { Role } from '../core/permissions/role/role.interface';

export interface BasicApp {
    name: string;
    alias: AppAlias;
    isActive: boolean;
    isPublic: boolean;
    roles: Array<Role>;
    logo?: string;
    description?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
