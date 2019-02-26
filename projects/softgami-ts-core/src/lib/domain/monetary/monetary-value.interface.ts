import { Currency } from './currency.interface';
import { DateTimePeriods } from '../date-time/date-time-periods.enum';
import { QuantitativeValue } from '../../core/value/quantitative-value.interface';

export interface MonetaryValue extends QuantitativeValue {
    currency: Currency;
    dateTimePeriod?: DateTimePeriods;
    createdAt?: Date;
}
