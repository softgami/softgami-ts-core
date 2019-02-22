import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { File } from './file.interface';
import { User } from '../../user/user.interface';

export interface BasicFile {
    name: string;
    isFile: boolean;
    isDirectory: boolean;
    newName?: string;
    path?: string;
    isPublic?: boolean;
    mimetype?: string;
    size?: number;
    parent?: File;
    ancestors?: File[];
    creator?: User;
    appInstance?: AppInstance;
    downloads?: {
        user: User,
        downloadedAt: Date,
    }[];
    createdAt?: Date;
    lastUpdate?: Date;
}
