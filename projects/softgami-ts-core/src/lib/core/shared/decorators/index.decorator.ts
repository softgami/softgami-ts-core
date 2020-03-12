import 'reflect-metadata';

import { IndexMetadataKey } from '../../../internal';

export function Index(isIndex = true) {

    return Reflect.metadata(IndexMetadataKey, isIndex);

}
