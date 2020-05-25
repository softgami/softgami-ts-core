import 'reflect-metadata';

import { MaxMetadataKey } from './max-metadata-key';

export function Max(max: number) {

    return Reflect.metadata(MaxMetadataKey, max);

}
