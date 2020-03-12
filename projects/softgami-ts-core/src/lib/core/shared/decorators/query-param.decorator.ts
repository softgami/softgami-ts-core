import 'reflect-metadata';

import { QueryParamMetadataKey } from '../../../internal';

export function QueryParam(isQueryParam = true) {

    return Reflect.metadata(QueryParamMetadataKey, isQueryParam);

}
