import 'reflect-metadata';

import { MinLengthMetadataKey } from './min-length-metadata-key';

export function MinLength(min: number) {

    return Reflect.metadata(MinLengthMetadataKey, min);

}
