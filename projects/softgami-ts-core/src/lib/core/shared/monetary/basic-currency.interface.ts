import { CurrencyCodes } from './currency-codes.enum';
import { UnityValue } from '../value/unity-value.interface';

export interface BasicCurrency extends UnityValue {
    code: CurrencyCodes;
}
