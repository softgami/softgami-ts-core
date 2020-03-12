import 'reflect-metadata';

import { EnumMetadataKey } from '../../../internal';

export function Enum(values: string[]) {

    return Reflect.metadata(EnumMetadataKey, values);

}
