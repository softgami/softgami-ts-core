import 'reflect-metadata';

import { EnumMetadataKey } from './enum-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Enum(values: string[]) {

    return Reflect.metadata(EnumMetadataKey, values);

}
