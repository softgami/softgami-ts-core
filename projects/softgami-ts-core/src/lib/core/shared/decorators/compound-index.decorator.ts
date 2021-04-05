import 'reflect-metadata';

import { CompoundIndexMetadataKey } from './compound-index-metadata-key';
import { CompoundIndexOption } from '../models/compound-index-option.interface';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function CompoundIndex(options: CompoundIndexOption[]) {

    return Reflect.metadata(CompoundIndexMetadataKey, options);

}
