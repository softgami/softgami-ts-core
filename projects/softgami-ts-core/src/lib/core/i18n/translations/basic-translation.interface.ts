import { Language } from '../language/language.interface';
import { Thing } from '../../../shared/thing/thing.interface';
import { TranslationType } from './translation-types.enum';

export interface BasicTranslation extends Thing {
    value: string;
    type: TranslationType;
    language: Language;
}
