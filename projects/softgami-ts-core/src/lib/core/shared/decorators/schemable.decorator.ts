import 'reflect-metadata';

import { SchemableMetadataKey } from './schemable-metadata-key';

export function Schemable(isSchemable = true) {

    return Reflect.metadata(SchemableMetadataKey, isSchemable);

}
