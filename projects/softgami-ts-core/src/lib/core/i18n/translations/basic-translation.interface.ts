import { Language } from '../language/language.interface';
import { TranslationType } from './translation-types.enum';

export interface BasicTranslation {
    key: string;
    value: string;
    type: TranslationType;
    language: Language;
    createdAt?: Date;
    lastUpdate?: Date;
}
