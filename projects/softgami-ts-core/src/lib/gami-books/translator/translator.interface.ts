import { BasicTranslator } from './basic-translator.interface';

export interface Translator extends BasicTranslator {
    _id: string;
}
