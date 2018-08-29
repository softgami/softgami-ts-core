import { Action } from '../action/action.interface';
import { Role } from '../role/role.interface';
import { Subject } from '../subject/subject.interface';

export interface BasicPermission {
    action: Action;
    subject: Subject;
    role: Role;
    value: number;
    createdAt?: Date;
    lastUpdate?: Date;
}
