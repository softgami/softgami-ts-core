import { SortBySelectOption } from './sort-by-select-options.interface';
import { TypeParams } from './type-params.interface';

export interface PropertyInfo {
    typeParams: TypeParams<any>;
    isDefault?: boolean;
    isTrim?: boolean;
    isQueryParam?: boolean;
    extendsClass?: new () => any;
    isOverride?: boolean;
    enumValues?: string[];
    isExcludeIndexes?: boolean;
    isRequired?: boolean;
    isSchemable?: boolean;
    sortableOptions?: SortBySelectOption;
    isUnique?: boolean;
    isIndex?: boolean;
}
