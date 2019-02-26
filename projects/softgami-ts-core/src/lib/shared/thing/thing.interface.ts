import { User } from '../../user/user.interface';

export interface Thing {
    name: string;
    description?: string;
    url?: string;
    image?: string;
    creator?: User;
    createdAt?: Date;
    lastUpdate?: Date;
}
