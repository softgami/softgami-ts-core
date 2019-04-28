import { PermissionCheck } from '../core/permissions/permission/permission-check.interface';
import { Thing } from '../shared/thing/thing.interface';
import { User } from '../user/user.interface';

export interface BasicMenu extends Thing {
    index: number;
    permissionCheck?: PermissionCheck;
    isActive?: boolean;
    icon?: string;
    creator?: User;
}
