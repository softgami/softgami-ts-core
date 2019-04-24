import { AppAlias } from './app-alias.enum';
import { AppPlan } from './app-plan/app-plan.interface';
import { Role } from '../core/permissions/role/role.interface';
import { Thing } from '../shared/thing/thing.interface';

export interface BasicApp extends Thing {
    alias: AppAlias;
    isActive: boolean;
    isPublic: boolean;
    roles?: Array<Role>;
    appPlans?: Array<AppPlan>;
}
