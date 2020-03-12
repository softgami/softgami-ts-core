import 'reflect-metadata';

import { CompoundIndexMetadataKey } from '../../../internal';
import { CompoundIndexOption } from '../../../internal';

export function CompoundIndex(options: CompoundIndexOption[]) {

    return Reflect.metadata(CompoundIndexMetadataKey, options);

}
