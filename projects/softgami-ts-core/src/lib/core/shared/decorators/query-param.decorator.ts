import 'reflect-metadata';

import { QueryParamMetadataKey } from './query-param-metadata-keys';

export function QueryParam(isQueryParam = true) {

    return Reflect.metadata(QueryParamMetadataKey, isQueryParam);

}
