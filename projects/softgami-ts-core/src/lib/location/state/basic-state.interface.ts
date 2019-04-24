import { Country } from '../country/country.interface';
import { Thing } from '../../shared/thing/thing.interface';

export interface BasicState extends Thing {
    country: Country;
    code?: string;
}
