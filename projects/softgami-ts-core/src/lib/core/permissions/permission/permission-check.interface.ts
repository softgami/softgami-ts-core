import { Actions } from '../action/actions.enum';
import { SubjectAlias } from '../subject/subject-alias.enum';
import { RoleAlias } from '../role/role-alias.enum';

export interface PermissionCheck {
    subject: SubjectAlias;
    action: Actions;
    role?: RoleAlias;
    shouldValidateBodyAppInstance?: boolean;
    shouldValidateQueryAppInstance?: boolean;
}
