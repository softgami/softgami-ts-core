import 'reflect-metadata';

import { DefaultMetadataKey } from '../../../internal';

export function Default<T>(value: T) {

    return Reflect.metadata(DefaultMetadataKey, value);

}
