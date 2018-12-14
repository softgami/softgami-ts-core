import { PermissionCheck } from '../core/permissions/permission/permission-check.interface';
import { User } from '../user/user.interface';

export interface BasicMenu {
    name: string;
    index: number;
    permissionCheck?: PermissionCheck;
    description?: string;
    isActive?: boolean;
    creator?: User;
    url?: string;
    image?: string;
    icon?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
