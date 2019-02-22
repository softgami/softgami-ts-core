import { Currency } from './currency.interface';
import { DateTimePeriods } from '../date-time/date-time-periods.enum';

export interface Price {
    value: number;
    currency: Currency;
    dateTimePeriod?: DateTimePeriods;
    createdAt?: Date;
}
