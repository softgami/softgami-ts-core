import 'reflect-metadata';

import { QueryParamMetadataKey } from './query-param-metadata-keys';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function QueryParam(isQueryParam = true) {

    return Reflect.metadata(QueryParamMetadataKey, isQueryParam);

}
