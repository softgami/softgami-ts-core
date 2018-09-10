import { App } from '../app.interface';
import { Role } from '../../core/permissions/role/role.interface';
import { User } from '../../user/user.interface';

export interface BasicAppInstance {
    name: string;
    app: App;
    isActive: boolean;
    roles?: Array<Role>;
    creator?: User;
    image?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
