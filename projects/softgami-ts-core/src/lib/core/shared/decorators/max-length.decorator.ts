import 'reflect-metadata';

import { MaxLengthMetadataKey } from './max-length-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function MaxLength(max: number) {

    return Reflect.metadata(MaxLengthMetadataKey, max);

}
