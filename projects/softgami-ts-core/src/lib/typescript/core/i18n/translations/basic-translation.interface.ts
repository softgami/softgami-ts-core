import { Language } from '../language/language.interface';

export interface BasicTranslation {
    key: string;
    value: string;
    language: Language;
}
