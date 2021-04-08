/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
    name: string | null = null;

    @Type({ type: Types.NUMBER })
    uniqueId?: number | null = new Date().getTime();

    @QueryParam()
    @Type({ type: Types.STRING })
    sort?: string | null = null;

    @QueryParam()
    @Type({ type: Types.NUMBER })
    limit?: number | null = null;

    @QueryParam()
    @Type({ type: Types.NUMBER })
    skip?: number | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Type({ type: Types.STRING })
    description?: string | null = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    url?: string | null = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    image?: string | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'CREATED_AT' })
    @Type({ type: Types.DATE })
    createdAt?: Date | null = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.DATE })
    lastUpdate?: Date | null = null;

    static getCompoundIndexes(classDefinition: new () => Thing): CompoundIndexOption[] {

        return Reflect.getMetadata(CompoundIndexMetadataKey, classDefinition);

    }

    static getDeepPropertyInfo(TypeClass: new () => Thing, property: string): PropertyInfo<Thing> | null {

        const maxLevel = 6;
        let level = 1;
        const arrProperties: string[] = property.split('.');
        let propertyLevel = '';
        let object: Thing = new TypeClass();

        if (!(object instanceof Thing)) {

            console.warn(`${TypeClass.name} is not a instance of Thing.`);
            return null;

        }

        let propertyInfo: PropertyInfo<Thing> | null = null;
        let typeParams: TypeParams<Thing>;
        const isIndex = Thing.isIndex(TypeClass, property);

        while (arrProperties.length > 0 && level <= maxLevel) {

            const firstElem = arrProperties.shift();
            if (firstElem) propertyLevel = firstElem;
            
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

            const ClassDef = typeParams.class;

            if (ClassDef) object = new ClassDef();

        }
        return propertyInfo;

    }

    static isIndex(typeClass: new () => Thing, property: string): boolean {

        const compoundIndexes: CompoundIndexOption[] = Thing.getCompoundIndexes(typeClass);

        if (!compoundIndexes) return false;

        const index: CompoundIndexOption | undefined = compoundIndexes.find((c: CompoundIndexOption) => {

            if (c.fields[property] && Object.getOwnPropertyNames(c.fields).length === 1) return true;
            return false;

        });

        const isIndex = !!index;
        return isIndex;

    }

    static isSortParam(object: Thing, property: string): boolean {

        const options: SortBySelectOption[] = object.toSortOptions();
        const sortOption: SortBySelectOption | undefined = options.find((o: SortBySelectOption) => o.field === property);

        return !!sortOption;

    }

    getType<T>(property: string): TypeParams<T> {

        return Reflect.getMetadata(TypeMetadataKey, this, property);

    }

    getEnumValues(property: string): string[] {

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

    getExtendsClass(property: string): new () => Thing {

        const typeClass: new () => Thing = Reflect.getMetadata(ExtendsMetadataKey, this, property);
        return typeClass;

    }

    getMax(property: string): number {

        const max: number = Reflect.getMetadata(MaxMetadataKey, this, property);
        return max;

    }

    getMaxLength(property: string): number {

        const maxLength: number = Reflect.getMetadata(MaxLengthMetadataKey, this, property);
        return maxLength;

    }

    getMin(property: string): number {

        const min: number = Reflect.getMetadata(MinMetadataKey, this, property);
        return min;

    }

    getMinLength(property: string): number {

        const minLength: number = Reflect.getMetadata(MinLengthMetadataKey, this, property);
        return minLength;

    }

    toQueryParamsObject(): { [param: string]: string | string[] } | null {

        let object: { [param: string]: string | string[] } | null = {};

        object = this.recursiveGenerateParamsObject(this, null, object);

        return object;

    }

    recursiveGenerateParamsObject(source: Thing, parentPath: string | null, object: { [param: string]: string | string[] }): { [param: string]: string | string[] } | null {

        let isThingInstance = false;
        if (source instanceof Thing) isThingInstance = true;
        if (!isThingInstance) {

            console.warn(`${source.constructor.name} is not a instance of Thing.`);
            return null;

        }

        Object.getOwnPropertyNames(source).forEach((property: string) => {

            if (source.isQueryParam(property) === true && (source as any)[property] !== null && (source as any)[property] !== undefined) {

                const typeParams: TypeParams<string> = source.getType(property);
                const joinedPath = parentPath ? [ parentPath, property ].join('.') : property;
                if (typeParams.type === Types.OBJECT) {

                    this.recursiveGenerateParamsObject((source as any)[property], joinedPath, object);

                } else if (typeParams.type === Types.ARRAY) {

                    if ((source as any)[property][0]) {

                        if (typeParams.arrayItemType === Types.OBJECT) {

                            this.recursiveGenerateParamsObject((source as any)[property][0], joinedPath, object);

                        } else {

                            object[joinedPath] = (source as any)[property][0];

                        }

                    }

                } else {

                    object[joinedPath] = (source as any)[property];

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

                if (!Array.isArray(options)) options = [ options ];

                options.forEach((o: SortBySelectOption) => {

                    if (typeParams.type !== Types.OBJECT && typeParams.type !== Types.ARRAY) o.field = property;
                    returnValues.push(o);

                });

            }

        });

        return returnValues;

    }

    updatePropertiesFromParams(params: {
        [key: string]: string;
    }): void {

        Object.getOwnPropertyNames(this).forEach((property: string) => {

            const typeParams: TypeParams<string> = this.getType(property);

            if (this.isQueryParam(property)) {

                const initialLevel = 1;
                this.updatePropertyByType(this, property, null, typeParams, initialLevel, false, params);

            }

        });

    }

    updatePropertyByType(
        object: any, property: string, parentPath: string | null, typeParams: TypeParams<string>, level = 1, isArrayItem: boolean,
        params: {
            [key: string]: string;
        },
    ): void {

        if (!parentPath) parentPath = property;

        switch (typeParams.type) {

            case Types.OBJECT:
                if (typeParams.class !== undefined) {
                    this.updateObjectParam(object, property, parentPath, typeParams.class, level, isArrayItem, params);
                }
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
                this.updateStringParam(object as Thing, property, params[parentPath], isArrayItem);
                break;
            default:
                break;

        }

    }

    updateObjectParam<T>(
        object: any, property: string, parentPath: string, TypeClass: new () => T, level = 1, isArrayItem: boolean,
        params: {
            [key: string]: string;
        }):void {

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

                if (objectParams.length) object[property] = new TypeClass();
                else return;

            }

            Object.getOwnPropertyNames(object[property]).forEach((p: string) => {

                const typeParams: TypeParams<string> = object[property].getType(p);

                if (object[property].isQueryParam(p)) {

                    this.updatePropertyByType(object[property], p, [ parentPath, p ].join('.'), typeParams, level + 1, isArrayItem, params);

                }

            });

        }

    }

    updateArrayParam(object: any, property: string, typeParams: TypeParams<string>, params: {
        [key: string]: string;
    }): void {

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

        if (typeParams.arrayItemType) {
            const type: TypeParams<string> = {
                type: typeParams.arrayItemType,
                class: typeParams.class,
            };
    
            this.updatePropertyByType(object[property], '0', property, type, 1, true, params);
        }

    }

    updateNumberParam(object: any, property: string, value: string, isArrayItem?: boolean): void {

        if (value !== null && value !== undefined) value = value.toString();

        if (value && value !== null && value !== undefined) {

            const numberValue: number = parseInt(value, 10);
            object[property] = !isNaN(numberValue) ? numberValue : undefined;

        } else object[property] = undefined;

    }

    updateDecimalParam(object: any, property: string, value: string, isArrayItem?: boolean): void {

        if (value !== null && value !== undefined) value = value.toString();

        if (value && value !== null && value !== undefined) {

            const decimal: number = parseFloat(value);
            object[property] = !isNaN(decimal) ? decimal : undefined;

        } else object[property] = undefined;

    }

    updateBooleanParam(object: any, property: string, value: string, isArrayItem?: boolean): void {

        if (value !== null && value !== undefined) value = value.toString();

        if (value && value !== null && value !== undefined) {

            if (value === 'true') {

                object[property] = true;

            } else if (value === 'false') {

                object[property] = false;

            } else object[property] = undefined;

        } else object[property] = undefined;

    }

    updateStringParam(object: Thing, property: string, value: string, isArrayItem?: boolean): void {

        if (property === 'sort') return this.updateSortParam(object, value, isArrayItem);

        (object as any)[property] = value;

    }

    updateSortParam(object: Thing, value: string, isArrayItem?: boolean): void {

        if (object.canUpdateSortParam(object, value)) {

            object.sort = value;

        }

    }

    canUpdateSortParam(object: any, value: string): boolean {

        if (value === null || value === undefined) return true;
        const arrValues: string[] = value.split(':');

        if (arrValues[0] && Thing.isSortParam(object as Thing, arrValues[0])) {

            return true;

        }
        return false;

    }

    hasProperty(object: Thing, property: string): boolean {

        const clone: Thing = Object.assign({}, object);

        if (clone === null || clone === undefined || typeof clone !== 'object') return false;
        if (property === null || property === undefined || property === '') return false;

        const arrProperties: string[] = property.split('.');

        if (arrProperties.length === 1) {

            return clone.hasOwnProperty(arrProperties[0]);

        }

        if ((clone as any)[arrProperties[0]] === null || (clone as any)[arrProperties[0]] === undefined) {

            const typeParams: TypeParams<string> = object.getType(arrProperties[0]);
            if (typeParams.type === Types.OBJECT && typeParams.class) {

                const TypeClass = typeParams.class;
                (clone as any)[arrProperties[0]] = new TypeClass();

            }

        }

        const subProperties: string[] = Object.assign([], arrProperties);
        subProperties.shift();

        return this.hasProperty((clone as any)[arrProperties[0]], subProperties.join('.'));

    }

    toCleanObject(): this {

        Object.getOwnPropertyNames(this).forEach((property: string) => {

            delete (this as any)[property];

        });
        return this;

    }

    clone(): this {

        const clone: this = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        Object.getOwnPropertyNames(clone).forEach((property: string) => {

            if ((clone as any)[property] !== null && (clone as any)[property] !== undefined) {

                const typeParams: TypeParams<string> = clone.getType(property);
                if (typeParams.type === Types.OBJECT && typeParams.class) {

                    (clone as any)[property] = (clone as any)[property].clone();

                } else if (
                    typeParams.type === Types.ARRAY && typeParams.arrayItemType === Types.OBJECT && typeParams.class &&
                    (clone as any)[property].length) {

                    const arrClone: any[] = [];
                    (clone as any)[property].forEach((obj: Thing, index: number) => {

                        arrClone[index] = obj.clone();

                    });
                    (clone as any)[property] = arrClone;

                }

            }

        });
        return clone;

    }

    fromJson(json?: {
        [key: string]: string;
    }): this {

        const uniqueId: number | null | undefined = this.uniqueId;
        const object: this = this.clone();
        object.uniqueId = uniqueId;

        if (!json) return object;

        Object.getOwnPropertyNames(this)
            .filter((property: string) => property !== 'sort' && property !== 'limit' && property !== 'skip' && property !== 'uniqueId')
            .forEach((property: string) => {

                const typeParams: TypeParams<string> = this.getType(property);

                const initialLevel = 1;
                object.updatePropertyByTypeFromJson(object, property, typeParams, initialLevel, false, json);

            });

        return object;

    }

    updatePropertyByTypeFromJson(
        object: any, property: string, typeParams: TypeParams<string>, level = 1, isArrayItem: boolean,
        json: {
            [key: string]: string;
        },
    ): void {

        switch (typeParams.type) {

            case Types.OBJECT:
                if (typeParams.class) {
                    this.updateObjectFromJson(object, property, typeParams.class, level, isArrayItem, json);
                }
                break;
            case Types.ARRAY:
                this.updateArrayFromJson(object, property, typeParams, json);
                break;
            case Types.NUMBER:
                this.updateNumberParam(object, property, json[property], isArrayItem);
                break;
            case Types.DECIMAL128:
            case Types.DECIMAL:
                this.updateDecimalParam(object, property, json[property], isArrayItem);
                break;
            case Types.BOOLEAN:
                this.updateBooleanParam(object, property, json[property], isArrayItem);
                break;
            case Types.MONGO_OBJECT_ID:
            case Types.ENUM:
            case Types.DATE:
            case Types.STRING:
                this.updateStringParam(object as Thing, property, json[property], isArrayItem);
                break;
            default:
                break;

        }

    }

    updateObjectFromJson<T>(
        object: any, property: string, TypeClass: new () => T, level = 1, isArrayItem: boolean,
        json: {
            [key: string]: any;
        }): void {

        const maxLevel = 10;
        if (level > maxLevel) return;

        if (object.hasOwnProperty(property) || (isArrayItem === true && property === '0')) {

            if (object[property]) {

                if (!json[property]) {

                    object[property] = null;
                    return;

                }

            } else {

                if (json[property]) object[property] = new TypeClass();
                else return;

            }

            Object.getOwnPropertyNames(object[property])
                .filter((p: string) => p !== 'sort' && p !== 'limit' && p !== 'skip' && p !== 'uniqueId')
                .forEach((p: string) => {

                    const typeParams: TypeParams<string> = object[property].getType(p);

                    this.updatePropertyByTypeFromJson(
                        object[property],
                        p,
                        typeParams,
                        level + 1,
                        isArrayItem,
                        json[property] as {
                            [key: string]: string;
                        },
                    );

                });

        }

    }

    updateArrayFromJson(object: any, property: string, typeParams: TypeParams<string>, json: {
        [key: string]: any;
    }): void {

        if (object[property]) {

            if (!json[property]) {

                object[property] = null;
                return;

            }

        } else {

            if (json[property]) object[property] = [];
            else return;

        }

        if (typeParams.arrayItemType) {
            const type: TypeParams<string> = {
                type: typeParams.arrayItemType,
                class: typeParams.class,
            };
    
            if ((json[property] as any[]).length) {
    
                (json[property] as any[]).forEach((element: any) => {
    
                    const hostObject = {};
                    (hostObject as any)[property] = null;
                    const jsonHost = {};
                    (jsonHost as any)[property] = element;
                    this.updatePropertyByTypeFromJson(hostObject, property, type, 1, true, jsonHost);
                    object[property].push((hostObject as any)[property]);
    
                });
    
            }
        }

    }

}
