import { PermissionCheck } from '../../core/permissions/permission/permission-check.interface';
import { Thing } from '../../core/shared/thing/thing.interface';
import { User } from '../../core/user/user.interface';

export interface BasicMenu extends Thing {
    index: number;
    isActive: boolean;
    permissionCheck?: PermissionCheck;
    icon?: string;
    creator?: User;
    subMenus?: BasicMenu[];
}
