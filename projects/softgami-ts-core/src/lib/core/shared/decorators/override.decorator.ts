import 'reflect-metadata';

import { OverrideMetadataKey } from './override-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Override(override = true) {

    return Reflect.metadata(OverrideMetadataKey, override);

}
