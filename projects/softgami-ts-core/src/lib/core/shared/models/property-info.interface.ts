import { SortBySelectOption } from './sort-by-select-options.interface';
import { TypeParams } from './type-params.interface';

export interface PropertyInfo<T> {
    typeParams: TypeParams<T>;
    isDefault?: boolean;
    isTrim?: boolean;
    isQueryParam?: boolean;
    extendsClass?: new () => T;
    isOverride?: boolean;
    enumValues?: string[];
    isExcludeIndexes?: boolean;
    isRequired?: boolean;
    isSchemable?: boolean;
    sortableOptions?: SortBySelectOption | SortBySelectOption[];
    isUnique?: boolean;
    isIndex?: boolean;
}
