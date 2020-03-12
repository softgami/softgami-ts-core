import 'reflect-metadata';

import { SkipIDMetadataKey } from '../../../internal';

export function SkipID() {

    return Reflect.metadata(SkipIDMetadataKey, true);

}
