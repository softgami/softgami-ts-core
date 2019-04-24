import { App } from '../app.interface';
import { AppPlan } from '../app-plan/app-plan.interface';
import { Role } from '../../core/permissions/role/role.interface';
import { Thing } from '../../shared/thing/thing.interface';

export interface BasicAppInstance extends Thing {
    app: App;
    isActive: boolean;
    roles?: Array<Role>;
    appPlan?: AppPlan;
}
