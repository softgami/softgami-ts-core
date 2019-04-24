import { CurrencyCodes } from '../../domain/monetary/currency-codes.enum';
import { Thing } from '../../shared/thing/thing.interface';
import { UnityValueCodes } from './unity-value-codes.enum';

export interface UnityValue extends Thing {
    code: UnityValueCodes | CurrencyCodes;
    symbol?: string;
    nativeSymbol?: string;
    decimalDigits?: number;
    rounding?: number;
    pluralName?: string;
}
