import 'reflect-metadata';

import { DefaultMetadataKey } from './default-metadata-key';

export function Default<T>(value: T) {

    return Reflect.metadata(DefaultMetadataKey, value);

}
