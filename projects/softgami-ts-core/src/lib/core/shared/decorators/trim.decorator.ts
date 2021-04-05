import 'reflect-metadata';

import { TrimMetadataKey } from './trim-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Trim(shouldTrim = true) {

    return Reflect.metadata(TrimMetadataKey, shouldTrim);

}
