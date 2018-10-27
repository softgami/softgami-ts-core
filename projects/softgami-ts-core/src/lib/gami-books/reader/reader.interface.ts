import { User } from '../../user/user.interface';

export interface Reader extends User {
    readAt?: Date;
    issuedAt?: Date;
    dueDate?: Date;
    returnedAt?: Date;
    createdAt?: Date;
}
