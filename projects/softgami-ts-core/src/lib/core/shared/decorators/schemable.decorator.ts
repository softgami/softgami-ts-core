import 'reflect-metadata';

import { SchemableMetadataKey } from '../../../internal';

export function Schemable(isSchemable = true) {

    return Reflect.metadata(SchemableMetadataKey, isSchemable);

}
