import 'reflect-metadata';

import { TrimMetadataKey } from './trim-metadata-key';

export function Trim(shouldTrim = true) {

    return Reflect.metadata(TrimMetadataKey, shouldTrim);

}
