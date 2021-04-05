import 'reflect-metadata';

import { MinMetadataKey } from './min-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Min(min: number) {

    return Reflect.metadata(MinMetadataKey, min);

}
