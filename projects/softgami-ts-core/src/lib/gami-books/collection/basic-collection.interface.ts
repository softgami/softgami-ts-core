import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { Collection } from './collection.interface';
import { User } from '../../user/user.interface';

export interface BasicCollection {
    name: string;
    isActive: boolean;
    isCompleted: boolean;
    isFinished: boolean;
    creator: User;
    appInstance: AppInstance;
    parent?: Collection;
    ancestor?: Array<Collection>;
    image?: string;
    description?: string;
    friendlyUrl?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
