import { AppInstance } from '../../../core/app/app-instance/app-instance.interface';
import { Language } from '../language/language.interface';
import { Thing } from '../../../core/shared/thing/thing.interface';
import { TranslationType } from './translation-types.enum';
import { User } from '../../../core/user/user.interface';

export interface BasicTranslation extends Thing {
    value: string;
    type: TranslationType;
    language: Language;
    creator?: User;
    appInstance?: AppInstance;
}
