import { Actions } from '../action/actions.enum';
import { SubjectAlias } from '../subject/subject-alias.enum';

export interface PermissionCheck {
    subject: SubjectAlias;
    action: Actions;
    shouldValidateBodyAppInstance?: boolean;
    shouldValidateQueryAppInstance?: boolean;
}
