import 'reflect-metadata';

import { MinLengthMetadataKey } from './min-length-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function MinLength(min: number) {

    return Reflect.metadata(MinLengthMetadataKey, min);

}
