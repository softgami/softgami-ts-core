import { Country } from '../country/country.interface';
import { Thing } from '../../../core/shared/thing/thing.interface';

export interface BasicState extends Thing {
    country: Country;
    code?: string;
}
