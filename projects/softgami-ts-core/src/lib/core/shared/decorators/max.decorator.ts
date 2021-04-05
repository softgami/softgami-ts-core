import 'reflect-metadata';

import { MaxMetadataKey } from './max-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Max(max: number) {

    return Reflect.metadata(MaxMetadataKey, max);

}
