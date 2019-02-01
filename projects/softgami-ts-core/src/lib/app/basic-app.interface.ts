import { AppAlias } from './app-alias.enum';
import { AppPlan } from './app-plan/app-plan.interface';
import { Role } from '../core/permissions/role/role.interface';

export interface BasicApp {
    name: string;
    alias: AppAlias;
    isActive: boolean;
    isPublic: boolean;
    roles?: Array<Role>;
    appPlans?: Array<AppPlan>;
    image?: string;
    description?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
