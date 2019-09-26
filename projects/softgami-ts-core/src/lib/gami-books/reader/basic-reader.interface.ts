import { BasicUser } from '../../core/user/basic-user.interface';

export interface BasicReader extends BasicUser {
    readAt?: Date;
    issuedAt?: Date;
    dueDate?: Date;
    returnedAt?: Date;
    createdAt?: Date;
}
