import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { File } from './file.interface';
import { Thing } from '../../shared/thing/thing.interface';
import { User } from '../../user/user.interface';

export interface BasicFile extends Thing {
    isFile: boolean;
    isDirectory: boolean;
    creator?: User;
    path?: string;
    isPublic?: boolean;
    mimetype?: string;
    size?: number;
    totalFilesChildren?: number;
    totalDirectoriesChildren?: number;
    parent?: File;
    ancestors?: File[];
    appInstance?: AppInstance;
    downloads?: {
        user: User,
        downloadedAt: Date,
    }[];
}
