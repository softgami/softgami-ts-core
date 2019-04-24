import { Role } from '../role/role.interface';
import { Subject } from '../subject/subject.interface';
import { Thing } from '../../../shared/thing/thing.interface';

export interface BasicPermission extends Thing {
    subject: Subject;
    role: Role;
    value: number;
}
