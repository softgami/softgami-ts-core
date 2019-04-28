import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { Collection } from './collection.interface';
import { Thing } from '../../shared/thing/thing.interface';
import { User } from '../../user/user.interface';

export interface BasicCollection extends Thing {
    isActive: boolean;
    isCompleted: boolean;
    isFinished: boolean;
    creator?: User;
    appInstance?: AppInstance;
    parent?: Collection;
    ancestors?: Array<Collection>;
    friendlyUrl?: string;
    numberOfPublications?: number;
    totalOfPublications?: number;
    numberOfCollections?: number;
}
