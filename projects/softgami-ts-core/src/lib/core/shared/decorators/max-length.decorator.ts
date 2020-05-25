import 'reflect-metadata';

import { MaxLengthMetadataKey } from './max-length-metadata-key';

export function MaxLength(max: number) {

    return Reflect.metadata(MaxLengthMetadataKey, max);

}
