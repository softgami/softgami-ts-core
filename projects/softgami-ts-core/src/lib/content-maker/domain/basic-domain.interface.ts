import { DomainType } from './domain-type.enum';
import { Thing } from '../../core/shared/thing/thing.interface';

export interface BasicDomain<T extends DomainType> extends Thing {
    type: T;
    value: string;
    additionalMetadata?: string;
}
