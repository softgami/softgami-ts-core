import 'reflect-metadata';

import { UniqueMetadataKey } from './unique-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Unique(isUnique = true) {

    return Reflect.metadata(UniqueMetadataKey, isUnique);

}
