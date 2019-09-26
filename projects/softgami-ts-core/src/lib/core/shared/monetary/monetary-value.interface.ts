import { Currency } from './currency.interface';
import { DateTimePeriods } from '../../../content-maker/domain/date-time/date-time-periods.enum';
import { QuantitativeValue } from '../value/quantitative-value.interface';

export interface MonetaryValue extends QuantitativeValue {
    currency: Currency;
    dateTimePeriod?: DateTimePeriods;
    createdAt?: Date;
}
