import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { BasicPerson } from '../../core/shared/person/basic-person.interface';

export interface BasicIllustrator extends BasicPerson {
    appInstance?: AppInstance;
}
