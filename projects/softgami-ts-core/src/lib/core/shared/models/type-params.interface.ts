import { Types } from './types.enum';

export interface TypeParams<T> {
    type: Types;
    class?: new () => T;
    arrayItemType?: Types;
}
