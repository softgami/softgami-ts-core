import { App } from '../app.interface';
import { AppPlan } from '../app-plan/app-plan.interface';
import { Role } from '../../core/permissions/role/role.interface';
import { Thing } from '../../shared/thing/thing.interface';
import { User } from '../../user/user.interface';

export interface BasicAppInstance extends Thing {
    app: App;
    isActive: boolean;
    creator?: User;
    roles?: Array<Role>;
    appPlan?: AppPlan;
}
