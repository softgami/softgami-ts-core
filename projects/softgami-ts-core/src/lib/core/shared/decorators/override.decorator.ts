import 'reflect-metadata';

import { OverrideMetadataKey } from './override-metadata-key';

export function Override(override = true) {

    return Reflect.metadata(OverrideMetadataKey, override);

}
