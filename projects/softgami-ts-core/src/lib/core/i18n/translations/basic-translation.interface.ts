import { AppInstance } from '../../../app/app-instance/app-instance.interface';
import { Language } from '../language/language.interface';
import { Thing } from '../../../shared/thing/thing.interface';
import { TranslationType } from './translation-types.enum';
import { User } from '../../../user/user.interface';

export interface BasicTranslation extends Thing {
    value: string;
    type: TranslationType;
    language: Language;
    creator?: User;
    appInstance?: AppInstance;
}
