import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { BasicPerson } from '../../core/shared/person/basic-person.interface';

export interface BasicAuthor extends BasicPerson {
    appInstance?: AppInstance;
}
