import { CurrencyCodes } from './currency-codes.enum';

export interface BasicCurrency {
    name: string;
    code: CurrencyCodes;
    symbol: string;
    nativeSymbol: string;
    decimal_digits: number;
    rounding: number;
    pluralName: string;
}
