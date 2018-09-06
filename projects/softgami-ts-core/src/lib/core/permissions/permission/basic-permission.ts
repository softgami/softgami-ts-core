import { Role } from '../role/role.interface';
import { Subject } from '../subject/subject.interface';

export interface BasicPermission {
    subject: Subject;
    role: Role;
    value: number;
    createdAt?: Date;
    lastUpdate?: Date;
}
