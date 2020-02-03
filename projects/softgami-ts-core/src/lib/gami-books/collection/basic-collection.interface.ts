import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { Collection } from './collection.interface';
import { Thing } from '../../core/shared/thing/thing.interface';
import { User } from '../../core/user/user.interface';

export interface BasicCollection extends Thing {
    isActive: boolean;
    isCompleted: boolean;
    isFinished: boolean;
    orderIndex?: number;
    creator?: User;
    appInstance?: AppInstance;
    parent?: Collection;
    ancestors?: Array<Collection>;
    friendlyUrl?: string;
    numberOfPublications?: number;
    totalOfPublications?: number;
    numberOfCollections?: number;
}
