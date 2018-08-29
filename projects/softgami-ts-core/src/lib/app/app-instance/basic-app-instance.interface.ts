import { App } from '../app.interface';
import { Role } from '../../core/permissions/role/role.interface';

export interface BasicAppInstance {
    name: string;
    app: App;
    roles: Array<Role>;
    isActive: boolean;
    picture: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
