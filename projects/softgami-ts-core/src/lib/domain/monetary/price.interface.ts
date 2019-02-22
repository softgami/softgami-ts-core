import { DateTimePeriods } from '../date-time/date-time-periods.enum';

export interface Price {
    value: number;
    currency: string;
    dateTimePeriod?: DateTimePeriods;
    createdAt?: Date;
}
