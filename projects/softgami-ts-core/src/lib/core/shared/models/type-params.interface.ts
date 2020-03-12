import { Types } from '../../../internal';

export interface TypeParams<T> {
    type: Types;
    class?: new () => T;
    arrayItemType?: Types;
    isSelf?: boolean;
}
