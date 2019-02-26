import { BasicPublisher } from './basic-publisher.interface';

export interface Publisher extends BasicPublisher {
    _id: string;
}
