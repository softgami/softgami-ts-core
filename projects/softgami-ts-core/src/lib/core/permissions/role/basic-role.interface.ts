import { RoleAlias } from './role-alias.enum';

export interface BasicRole {
    name: string;
    alias: RoleAlias;
    isActive: boolean;
    description?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
