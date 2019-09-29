import { DomainType } from './domain-type.enum';
import { Thing } from '../../core/shared/thing/thing.interface';

export interface Domain<T extends DomainType, V> extends Thing {
    type: T;
    value: V;
    additionalMetadata?: string;
}
