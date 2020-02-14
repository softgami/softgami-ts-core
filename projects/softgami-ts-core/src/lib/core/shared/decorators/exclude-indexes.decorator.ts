import 'reflect-metadata';

import { ExcludeIndexesMetadataKey } from './exclude-indexes-metadata-key';

export function ExcludeIndexes(shouldExclude = true) {

    return Reflect.metadata(ExcludeIndexesMetadataKey, shouldExclude);

}
