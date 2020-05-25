import 'reflect-metadata';

import { CompoundIndexMetadataKey } from '../decorators/compound-index-metadata-key';
import { CompoundIndexOption } from '../models/compound-index-option.interface';
import { DefaultMetadataKey } from '../decorators/default-metadata-key';
import { EnumMetadataKey } from '../decorators/enum-metadata-key';
import { ExcludeIndexesMetadataKey } from '../decorators/exclude-indexes-metadata-key';
import { ExtendsMetadataKey } from '../decorators/extends-metadata-key';
import { MaxLengthMetadataKey } from '../decorators/max-length-metadata-key';
import { MaxMetadataKey } from '../decorators/max-metadata-key';
import { MinLengthMetadataKey } from '../decorators/min-length-metadata-key';
import { MinMetadataKey } from '../decorators/min-metadata-key';
import { OverrideMetadataKey } from '../decorators/override-metadata-key';
import { PropertyInfo } from '../models/property-info.interface';
import { QueryParam } from '../decorators/query-param.decorator';
import { QueryParamMetadataKey } from '../decorators/query-param-metadata-keys';
import { Required } from '../decorators/required.decorator';
import { RequiredMetadataKey } from '../decorators/required-metadata-key';
import { Schemable } from '../decorators/schemable.decorator';
import { SchemableMetadataKey } from '../decorators/schemable-metadata-key';
import { SkipID } from '../decorators/skip-id.decorator';
import { Sortable } from '../decorators/sortable.decorator';
import { SortableMetadataKey } from '../decorators/sortable-metadata-key';
import { SortBySelectOption } from '../models/sort-by-select-options.interface';
import { Trim } from '../decorators/trim.decorator';
import { TrimMetadataKey } from '../decorators/trim-metadata-key';
import { Type } from '../decorators/type.decorator';
import { TypeMetadataKey } from '../decorators/type-metadata-key';
import { TypeParams } from '../models/type-params.interface';
import { Types } from '../models/types.enum';
import { UniqueMetadataKey } from '../decorators/unique-metadata-key';

@SkipID()
export class Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'NAME' })
    @Type({ type: Types.STRING })
    name: string = null;

    @Type({ type: Types.NUMBER })
    uniqueId?: number = new Date().getTime();

    @QueryParam()
    @Type({ type: Types.STRING })
    sort?: string = null;

    @QueryParam()
    @Type({ type: Types.NUMBER })
    limit?: number = null;

    @QueryParam()
    @Type({ type: Types.NUMBER })
    skip?: number = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Type({ type: Types.STRING })
    description?: string = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    url?: string = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    image?: string = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'CREATED_AT' })
    @Type({ type: Types.DATE })
    createdAt?: Date = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.DATE })
    lastUpdate?: Date = null;

    static getCompoundIndexes(classDefinition: any): CompoundIndexOption[] {

        return Reflect.getMetadata(CompoundIndexMetadataKey, classDefinition);

    }

    static getDeepPropertyInfo(typeClass: new () => Thing, property: string): PropertyInfo {

        const maxLevel = 6;
        let level = 1;
        const arrProperties: string[] = property.split('.');
        let propertyLevel: string;
        let object: Thing = new typeClass();

        if (!(object instanceof Thing)) {
            console.warn(`${typeClass.name} is not a instance of Thing.`);
            return null;
        }

        let propertyInfo: PropertyInfo;
        let typeParams: TypeParams<any>;
        const isIndex = Thing.isIndex(typeClass, property);

        while (arrProperties.length > 0 && level <= maxLevel) {
            propertyLevel = arrProperties.shift();
            level++;
            typeParams = object.getType(propertyLevel);

            if (!typeParams) return null;

            if (arrProperties.length === 0) {
                propertyInfo = {
                    typeParams,
                };

                if (typeParams.type === Types.ENUM) propertyInfo.enumValues = object.getEnumValues(propertyLevel);

                propertyInfo.sortableOptions = object.getSortableOptions(propertyLevel);

                propertyInfo.extendsClass = object.getExtendsClass(propertyLevel);

                propertyInfo.isDefault = object.isDefault(propertyLevel);

                propertyInfo.isExcludeIndexes = object.isExcludeIndexes(propertyLevel);

                propertyInfo.isIndex = isIndex;

                propertyInfo.isOverride = object.isOverride(propertyLevel);

                propertyInfo.isQueryParam = object.isQueryParam(propertyLevel);

                propertyInfo.isRequired = object.isRequired(propertyLevel);

                propertyInfo.isSchemable = object.isSchemable(propertyLevel);

                propertyInfo.isTrim = object.isTrim(propertyLevel);

                propertyInfo.isUnique = object.isUnique(propertyLevel);

                return propertyInfo;
            }

            if (!typeParams || (typeParams.type !== Types.OBJECT && typeParams.type !== Types.ARRAY)) {
                return null;
            }

            object = new typeParams.class();

        }
        return propertyInfo;

    }

    static isIndex(typeClass: new () => Thing, property: string): boolean {

        const compoundIndexes: CompoundIndexOption[] = Thing.getCompoundIndexes(typeClass);

        if (!compoundIndexes) return false;

        const index: CompoundIndexOption = compoundIndexes.find((c: CompoundIndexOption) => {
            if (c.fields[property] && Object.getOwnPropertyNames(c.fields).length === 1) return true;
        });

        const isIndex: boolean = index ? true : false;
        return isIndex;

    }

    static isSortParam(object: Thing, property: string): boolean {

        const options: SortBySelectOption[] = object.toSortOptions();
        const sortOption: SortBySelectOption = options.find((o: SortBySelectOption) => o.field === property);

        return sortOption ? true : false;

    }

    getType<T>(property: string): TypeParams<T> {

        return Reflect.getMetadata(TypeMetadataKey, this, property);

    }

    getEnumValues<T>(property: string): string[] {

        return Reflect.getMetadata(EnumMetadataKey, this, property);

    }

    getSortableOptions(property: string): SortBySelectOption | SortBySelectOption[] {

        return Reflect.getMetadata(SortableMetadataKey, this, property);

    }

    isQueryParam(property: string): boolean {

        const isQueryParam: boolean = Reflect.getMetadata(QueryParamMetadataKey, this, property);
        return isQueryParam;

    }

    isRequired(property: string): boolean {

        const isRequired: boolean = Reflect.getMetadata(RequiredMetadataKey, this, property);
        return isRequired;

    }

    isSchemable(property: string): boolean {

        const isSchemable: boolean = Reflect.getMetadata(SchemableMetadataKey, this, property);
        return isSchemable;

    }

    isTrim(property: string): boolean {

        const isTrim: boolean = Reflect.getMetadata(TrimMetadataKey, this, property);
        return isTrim;

    }

    isUnique(property: string): boolean {

        const isUnique: boolean = Reflect.getMetadata(UniqueMetadataKey, this, property);
        return isUnique;

    }

    isDefault(property: string): boolean {

        const isDefault: boolean = Reflect.getMetadata(DefaultMetadataKey, this, property);
        return isDefault;

    }

    isExcludeIndexes(property: string): boolean {

        const isExcludeIndexes: boolean = Reflect.getMetadata(ExcludeIndexesMetadataKey, this, property);
        return isExcludeIndexes;

    }

    isOverride(property: string): boolean {

        const isOverride: boolean = Reflect.getMetadata(OverrideMetadataKey, this, property);
        return isOverride;

    }

    getExtendsClass(property: string): new () => any {

        const typeClass: new () => any = Reflect.getMetadata(ExtendsMetadataKey, this, property);
        return typeClass;

    }

    getMax(property: string) {

        const max: number = Reflect.getMetadata(MaxMetadataKey, this, property);
        return max;

    }

    getMaxLength(property: string) {

        const maxLength: number = Reflect.getMetadata(MaxLengthMetadataKey, this, property);
        return maxLength;

    }

    getMin(property: string) {

        const min: number = Reflect.getMetadata(MinMetadataKey, this, property);
        return min;

    }

    getMinLength(property: string) {

        const minLength: number = Reflect.getMetadata(MinLengthMetadataKey, this, property);
        return minLength;

    }

    toQueryParamsObject(): { [param: string]: string | string[] } {

        let object: { [param: string]: string | string[] } = {};

        object = this.recursiveGenerateParamsObject(this, null, object);

        return object;

    }

    recursiveGenerateParamsObject(source: any, parentPath: string, object: { [param: string]: string | string[] }) {

        if (!(source instanceof Thing)) {
            console.warn(`${source.constructor.name} is not a instance of Thing.`);
            return null;
        }

        Object.getOwnPropertyNames(source).forEach((property: string) => {

            if (source.isQueryParam(property) === true && source[property] !== null && source[property] !== undefined) {
                const typeParams: TypeParams<string> = source.getType(property);
                const joinedPath = parentPath ? [parentPath, property].join('.') : property;
                if (typeParams.type === Types.OBJECT) {
                    this.recursiveGenerateParamsObject(source[property], joinedPath, object);
                } else if (typeParams.type === Types.ARRAY) {
                    if (source[property][0]) {
                        if (typeParams.arrayItemType === Types.OBJECT) {
                            this.recursiveGenerateParamsObject(source[property][0], joinedPath, object);
                        } else {
                            object[joinedPath] = source[property][0];
                        }
                    }
                } else {
                    object[joinedPath] = source[property];
                }
            }

        });

        return object;

    }

    toSortOptions(): SortBySelectOption[] {

        const returnValues: SortBySelectOption[] = [];
        Object.getOwnPropertyNames(this).forEach((property: string) => {
            const typeParams: TypeParams<string> = this.getType(property);
            let options: SortBySelectOption | SortBySelectOption[] = this.getSortableOptions(property);

            if (options) {
                if (!Array.isArray(options)) options = [options];

                options.forEach((o: SortBySelectOption) => {
                    if (typeParams.type !== Types.OBJECT && typeParams.type !== Types.ARRAY) o.field = property;
                    returnValues.push(o);
                });
            }

        });

        return returnValues;

    }

    updatePropertiesFromParams(params: {
        [key: string]: any;
    }) {

        Object.getOwnPropertyNames(this).forEach((property: string) => {

            const typeParams: TypeParams<string> = this.getType(property);

            if (this.isQueryParam(property)) {
                const initialLevel = 1;
                this.updatePropertyByType(this, property, null, typeParams, initialLevel, false, params);
            }

        });

    }

    updatePropertyByType(
        object: any, property: string, parentPath: string, typeParams: TypeParams<string>, level: number = 1, isArrayItem: boolean,
        params: {
            [key: string]: any;
        },
    ) {

        if (!parentPath) parentPath = property;

        switch (typeParams.type) {
            case Types.OBJECT:
                this.updateObjectParam(object, property, parentPath, typeParams.class, level, isArrayItem, params);
                break;
            case Types.ARRAY:
                this.updateArrayParam(object, property, typeParams, params);
                break;
            case Types.NUMBER:
                this.updateNumberParam(object, property, params[parentPath], isArrayItem);
                break;
            case Types.DECIMAL128:
            case Types.DECIMAL:
                this.updateDecimalParam(object, property, params[parentPath], isArrayItem);
                break;
            case Types.BOOLEAN:
                this.updateBooleanParam(object, property, params[parentPath], isArrayItem);
                break;
            case Types.MONGO_OBJECT_ID:
            case Types.ENUM:
            case Types.DATE:
            case Types.STRING:
                this.updateStringParam(object, property, params[parentPath], isArrayItem);
                break;
            default:
                break;
        }

    }

    updateObjectParam<T>(
        object: any, property: string, parentPath: string, typeClass: new () => T, level: number = 1, isArrayItem: boolean,
        params: {
            [key: string]: any;
        }) {

        const maxLevel = 3;
        if (level > maxLevel) return;

        if (object.hasOwnProperty(property) || (isArrayItem === true && property === '0')) {

            if (!parentPath) parentPath = property;

            const objectParams: string[] = Object.getOwnPropertyNames(params).filter((p: string) => p.indexOf(parentPath + '.') === 0);

            if (object[property]) {
                if (!objectParams.length) {
                    object[property] = null;
                    return;
                }
            } else {
                if (objectParams.length) object[property] = new typeClass();
                else return;

            }

            Object.getOwnPropertyNames(object[property]).forEach((p: string) => {

                const typeParams: TypeParams<string> = object[property].getType(p);

                if (object[property].isQueryParam(p)) {
                    this.updatePropertyByType(object[property], p, [parentPath, p].join('.'), typeParams, level + 1, isArrayItem, params);
                }

            });

        }

    }

    updateArrayParam(object: any, property: string, typeParams: TypeParams<string>, params: {
        [key: string]: any;
    }) {

        const objectParams: string[] = Object.getOwnPropertyNames(params).filter((p: string) => p.indexOf(property) === 0);

        if (object[property]) {
            if (!objectParams.length) {
                object[property] = null;
                return;
            }
        } else {
            if (objectParams.length) object[property] = [];
            else return;
        }

        const type: TypeParams<any> = {
            type: typeParams.arrayItemType,
            class: typeParams.class,
        };

        this.updatePropertyByType(object[property], '0', property, type, 1, true, params);

    }

    updateNumberParam(object: any, property: string, value: string, isArrayItem?: boolean) {

        if (value && value !== null && value !== undefined) {
            const numberValue: number = parseInt(value, 10);
            object[property] = !isNaN(numberValue) ? numberValue : undefined;
        } else object[property] = undefined;

    }

    updateDecimalParam(object: any, property: string, value: string, isArrayItem?: boolean) {

        if (value && value !== null && value !== undefined) {
            const decimal: number = parseFloat(value);
            object[property] = !isNaN(decimal) ? decimal : undefined;
        } else object[property] = undefined;

    }

    updateBooleanParam(object: any, property: string, value: string, isArrayItem?: boolean) {

        if (value && value !== null && value !== undefined) {
            if (value === 'true') {
                object[property] = true;
            } else if (value === 'false') {
                object[property] = false;
            } else object[property] = undefined;
        } else object[property] = undefined;

    }

    updateStringParam(object: Thing, property: string, value: string, isArrayItem?: boolean) {

        if (property === 'sort') return this.updateSortParam(object, value, isArrayItem);

        object[property] = value;

    }

    updateSortParam(object: Thing, value: string, isArrayItem?: boolean) {

        if (object.canUpdateSortParam(object, value)) {
            object.sort = value;
        }

    }

    canUpdateSortParam(object: any, value: string): boolean {

        if (value === null || value === undefined) return true;
        const arrValues: string[] = value.split(':');

        if (arrValues[0] && Thing.isSortParam(object, arrValues[0])) {
            return true;
        }
        return false;

    }

    hasProperty(object: any, property: string) {

        const clone: any = Object.assign({}, object);

        if (clone === null || clone === undefined || typeof clone !== 'object') return false;
        if (property === null || property === undefined || property === '') return false;

        const arrProperties: string[] = property.split('.');

        if (arrProperties.length === 1) {
            return clone.hasOwnProperty(arrProperties[0]);
        }

        if (clone[arrProperties[0]] === null || clone[arrProperties[0]] === undefined) {
            const typeParams: TypeParams<string> = object.getType(arrProperties[0]);
            if (typeParams.type === Types.OBJECT && typeParams.class) {
                clone[arrProperties[0]] = new typeParams.class();
            }
        }

        const subProperties: string[] = Object.assign([], arrProperties);
        subProperties.shift();

        return this.hasProperty(clone[arrProperties[0]], subProperties.join('.'));

    }

    toCleanObject() {

        Object.getOwnPropertyNames(this).forEach((property: string) => {

            delete this[property];

        });
        return this;

    }

}
