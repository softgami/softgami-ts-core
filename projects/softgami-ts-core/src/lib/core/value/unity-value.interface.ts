import { CurrencyCodes } from '../../domain/monetary/currency-codes.enum';
import { UnityValueCodes } from './unity-value-codes.enum';

export interface UnityValue {
    code: UnityValueCodes | CurrencyCodes;
    name?: string;
    description?: string;
    image?: string;
    symbol?: string;
    nativeSymbol?: string;
    decimalDigits?: number;
    rounding?: number;
    pluralName?: string;
}
