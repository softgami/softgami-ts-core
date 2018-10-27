import { BasicUser } from '../../user/basic-user.interface';

export interface BasicReader extends BasicUser {
    readAt?: Date;
    issuedAt?: Date;
    dueDate?: Date;
    returnedAt?: Date;
    createdAt?: Date;
}
