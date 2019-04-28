import { User } from '../../user/user.interface';

export interface Thing {
    name: string;
    description?: string;
    url?: string;
    image?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
