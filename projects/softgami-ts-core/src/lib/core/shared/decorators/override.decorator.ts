import 'reflect-metadata';

import { OverrideMetadataKey } from '../../../internal';

export function Override(override = true) {

    return Reflect.metadata(OverrideMetadataKey, override);

}
