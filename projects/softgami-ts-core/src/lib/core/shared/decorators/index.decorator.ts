import 'reflect-metadata';

import { IndexMetadataKey } from './index-metadata-key';

export function Index(isIndex = true) {

    return Reflect.metadata(IndexMetadataKey, isIndex);

}
