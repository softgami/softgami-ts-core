import 'reflect-metadata';

import { EnumMetadataKey } from './enum-metadata-key';

export function Enum<T>(value: T) {

    return Reflect.metadata(EnumMetadataKey, value);

}
