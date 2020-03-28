import 'reflect-metadata';

import { SortableMetadataKey } from './sortable-metadata-key';
import { SortBySelectOption } from '../models/sort-by-select-options.interface';

export function Sortable(options?: SortBySelectOption | SortBySelectOption[]) {

    if (options === null || options === undefined) {
        return Reflect.metadata(SortableMetadataKey, null);
    }
    return Reflect.metadata(SortableMetadataKey, options);

}
