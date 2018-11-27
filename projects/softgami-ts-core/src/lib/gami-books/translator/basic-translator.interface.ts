import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { BasicPerson } from '../../shared/person/basic-person.interface';

export interface BasicTranslator extends BasicPerson {
    appInstance?: AppInstance;
}
