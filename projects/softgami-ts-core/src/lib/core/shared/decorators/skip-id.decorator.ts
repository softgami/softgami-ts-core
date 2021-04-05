import 'reflect-metadata';

import { SkipIDMetadataKey } from './skip-id-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function SkipID() {

    return Reflect.metadata(SkipIDMetadataKey, true);

}
