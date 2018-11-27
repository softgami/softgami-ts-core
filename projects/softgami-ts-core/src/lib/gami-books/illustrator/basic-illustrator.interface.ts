import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { BasicPerson } from '../../shared/person/basic-person.interface';

export interface BasicIllustrator extends BasicPerson {
    appInstance?: AppInstance;
}
