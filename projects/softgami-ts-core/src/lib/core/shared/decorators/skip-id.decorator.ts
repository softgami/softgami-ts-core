import 'reflect-metadata';

import { SkipIDMetadataKey } from './skip-id-metadata-key';

export function SkipID() {

    return Reflect.metadata(SkipIDMetadataKey, true);

}
