import 'reflect-metadata';

import { SortableMetadataKey } from '../../../internal';
import { SortBySelectOption } from '../../../internal';

export function Sortable(options?: SortBySelectOption | boolean) {

    if (options === false || options === null || options === undefined) {
        return Reflect.metadata(SortableMetadataKey, null);
    }
    return Reflect.metadata(SortableMetadataKey, options);

}
