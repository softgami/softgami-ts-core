import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { Collection } from './collection.interface';
import { Thing } from '../../shared/thing/thing.interface';

export interface BasicCollection extends Thing {
    isActive: boolean;
    isCompleted: boolean;
    isFinished: boolean;
    appInstance?: AppInstance;
    parent?: Collection;
    ancestors?: Array<Collection>;
    friendlyUrl?: string;
    numberOfPublications?: number;
    totalOfPublications?: number;
    numberOfCollections?: number;
}
