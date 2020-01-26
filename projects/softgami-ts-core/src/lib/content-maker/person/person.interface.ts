import { BasicPerson } from './basic-person.interface';
import { PersonType } from './person-type.enum';

export interface Person<T extends PersonType> extends BasicPerson<T> {
    _id: string;
}
