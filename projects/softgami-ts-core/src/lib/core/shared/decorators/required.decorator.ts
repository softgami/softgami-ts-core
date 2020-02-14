import 'reflect-metadata';

import { RequiredMetadataKey } from './required-metadata-key';

export function Required(isRequired = true) {

    return Reflect.metadata(RequiredMetadataKey, isRequired);

}
