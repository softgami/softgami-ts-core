import 'reflect-metadata';

import { EnumMetadataKey } from './enum-metadata-key';

export function Enum(values: string[]) {

    return Reflect.metadata(EnumMetadataKey, values);

}
