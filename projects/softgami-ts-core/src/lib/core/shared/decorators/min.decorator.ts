import 'reflect-metadata';

import { MinMetadataKey } from './min-metadata-key';

export function Min(min: number) {

    return Reflect.metadata(MinMetadataKey, min);

}
