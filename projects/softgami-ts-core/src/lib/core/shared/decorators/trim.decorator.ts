import 'reflect-metadata';

import { TrimMetadataKey } from '../../../internal';

export function Trim(shouldTrim = true) {

    return Reflect.metadata(TrimMetadataKey, shouldTrim);

}
