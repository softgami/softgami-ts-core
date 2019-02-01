import { DateTimePeriods } from '../date-time/date-time-periods.enum';

export interface BasicPrice {
    value: number;
    currency: string;
    dateTimePeriod?: DateTimePeriods;
}
