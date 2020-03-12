import 'reflect-metadata';

import { TypeMetadataKey } from '../../../internal';
import { TypeParams } from '../../../internal';

export function Type<T>(typeParams: TypeParams<T>) {

    return Reflect.metadata(TypeMetadataKey, typeParams);

}
