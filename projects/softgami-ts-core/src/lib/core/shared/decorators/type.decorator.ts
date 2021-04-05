import 'reflect-metadata';

import { TypeMetadataKey } from './type-metadata-key';
import { TypeParams } from '../models/type-params.interface';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Type<T>(typeParams: TypeParams<T>) {

    return Reflect.metadata(TypeMetadataKey, typeParams);

}
