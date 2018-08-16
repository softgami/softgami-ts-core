import { App } from '../app.interface';
import { Role } from '../../core/role/role.interface';

export interface BasicAppInstance {
    name: string;
    app: App;
    roles: Array<Role>;
    isActive: boolean;
    createdAt?: Date;
    lastUpdate?: Date;
}
