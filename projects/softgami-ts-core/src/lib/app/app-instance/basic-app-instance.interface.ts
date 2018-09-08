import { App } from '../app.interface';
import { Role } from '../../core/permissions/role/role.interface';
import { User } from '../../user/user.interface';

export interface BasicAppInstance {
    name: string;
    app: App;
    roles: Array<Role>;
    isActive: boolean;
    creator: User;
    image?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
