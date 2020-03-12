import 'reflect-metadata';

import { RequiredMetadataKey } from '../../../internal';

export function Required(isRequired = true) {

    return Reflect.metadata(RequiredMetadataKey, isRequired);

}
