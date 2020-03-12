import 'reflect-metadata';

import { UniqueMetadataKey } from '../../../internal';

export function Unique(isUnique = true) {

    return Reflect.metadata(UniqueMetadataKey, isUnique);

}
