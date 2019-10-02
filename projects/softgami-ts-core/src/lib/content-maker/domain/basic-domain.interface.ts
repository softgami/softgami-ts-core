import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { DomainType } from './domain-type.enum';
import { Thing } from '../../core/shared/thing/thing.interface';
import { User } from '../../core/user/user.interface';

export interface BasicDomain<T extends DomainType> extends Thing {
    type: T;
    value: string;
    additionalMetadata?: string;
    creator?: User;
    appInstance?: AppInstance;
}
