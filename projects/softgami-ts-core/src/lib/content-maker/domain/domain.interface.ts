import { BasicDomain } from './basic-domain.interface';
import { DomainType } from './domain-type.enum';

export interface Domain<T extends DomainType> extends BasicDomain<T> {
    _id: string;
}
