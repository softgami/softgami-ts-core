import 'reflect-metadata';

import { UniqueMetadataKey } from './unique-metadata-key';

export function Unique(isUnique = true) {

    return Reflect.metadata(UniqueMetadataKey, isUnique);

}
