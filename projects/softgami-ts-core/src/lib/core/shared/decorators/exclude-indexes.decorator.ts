import 'reflect-metadata';

import { ExcludeIndexesMetadataKey } from '../../../internal';

export function ExcludeIndexes(shouldExclude = true) {

    return Reflect.metadata(ExcludeIndexesMetadataKey, shouldExclude);

}
