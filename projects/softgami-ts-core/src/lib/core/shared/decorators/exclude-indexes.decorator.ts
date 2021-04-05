import 'reflect-metadata';

import { ExcludeIndexesMetadataKey } from './exclude-indexes-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function ExcludeIndexes(shouldExclude = true) {

    return Reflect.metadata(ExcludeIndexesMetadataKey, shouldExclude);

}
