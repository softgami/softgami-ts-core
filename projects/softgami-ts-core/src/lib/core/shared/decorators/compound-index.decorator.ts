import 'reflect-metadata';

import { CompoundIndexMetadataKey } from './compound-index-metadata-key';
import { CompoundIndexOption } from 'projects/softgami-ts-core/src/lib/core/shared/models/compound-index-option.interface';

export function CompoundIndex(options: CompoundIndexOption[]) {

    return Reflect.metadata(CompoundIndexMetadataKey, options);

}
