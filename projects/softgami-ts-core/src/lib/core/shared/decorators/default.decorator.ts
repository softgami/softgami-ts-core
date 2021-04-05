import 'reflect-metadata';

import { DefaultMetadataKey } from './default-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Default<T>(value: T) {

    return Reflect.metadata(DefaultMetadataKey, value);

}
