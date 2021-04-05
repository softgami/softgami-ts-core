import 'reflect-metadata';

import { RequiredMetadataKey } from './required-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Required(isRequired = true) {

    return Reflect.metadata(RequiredMetadataKey, isRequired);

}
