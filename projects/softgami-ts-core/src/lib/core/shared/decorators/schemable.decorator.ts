import 'reflect-metadata';

import { SchemableMetadataKey } from './schemable-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Schemable(isSchemable = true) {

    return Reflect.metadata(SchemableMetadataKey, isSchemable);

}
