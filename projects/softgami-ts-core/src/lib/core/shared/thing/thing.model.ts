/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';

import moment from 'moment';
import validator from 'validator';

import { CompoundIndexMetadataKey } from '../decorators/compound-index-metadata-key';
import { CompoundIndexOption } from '../models/compound-index-option.interface';
import { DefaultMetadataKey } from '../decorators/default-metadata-key';
import { EnumMetadataKey } from '../decorators/enum-metadata-key';
import { ExcludeIndexesMetadataKey } from '../decorators/exclude-indexes-metadata-key';
import { ExtendsMetadataKey } from '../decorators/extends-metadata-key';
import { Max } from '../decorators/max.decorator';
import { MaxLength } from '../decorators/max-length.decorator';
import { MaxLengthMetadataKey } from '../decorators/max-length-metadata-key';
import { MaxMetadataKey } from '../decorators/max-metadata-key';
import { Min } from '../decorators/min.decorator';
import { MinLength } from '../decorators/min-length.decorator';
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
import { SkipIDMetadataKey } from '../decorators/skip-id-metadata-key';
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

// @dynamic
export class Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'NAME' })
    @MinLength(1)
    @MaxLength(2000)
    @Type({ type: Types.STRING })
    name: string | null = null;

    @Type({ type: Types.NUMBER })
    uniqueId?: number | null = new Date().getTime();

    @QueryParam()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    sort?: string | null = null;

    @QueryParam()
    @Min(0)
    @Max(200)
    @Type({ type: Types.NUMBER })
    limit?: number | null = null;

    @QueryParam()
    @Min(0)
    @Type({ type: Types.NUMBER })
    skip?: number | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @MinLength(1)
    @MaxLength(5000)
    @Type({ type: Types.STRING })
    description?: string | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(2000)
    @Type({ type: Types.STRING })
    url?: string | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
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

    static getCompoundIndexes(classDefinition: new () => Thing): CompoundIndexOption[] | undefined {

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
        let typeParams: TypeParams<Thing> | undefined;
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

                if (object.getExtendsClass(propertyLevel)) propertyInfo.extendsClass = object.getExtendsClass(propertyLevel);

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

        const compoundIndexes: CompoundIndexOption[] | undefined = Thing.getCompoundIndexes(typeClass);

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

    getType<T>(property: string): TypeParams<T> | undefined {

        return Reflect.getMetadata(TypeMetadataKey, this, property);

    }

    getEnumValues(property: string): string[] | undefined {

        return Reflect.getMetadata(EnumMetadataKey, this, property);

    }

    getSortableOptions(property: string): SortBySelectOption | SortBySelectOption[] | undefined {

        return Reflect.getMetadata(SortableMetadataKey, this, property);

    }

    isQueryParam(property: string): boolean {

        const isQueryParam: boolean | undefined = Reflect.getMetadata(QueryParamMetadataKey, this, property);
        return isQueryParam || false;

    }

    isRequired(property: string): boolean {

        const isRequired: boolean | undefined = Reflect.getMetadata(RequiredMetadataKey, this, property);
        return isRequired || false;

    }

    isSchemable(property: string): boolean {

        const isSchemable: boolean | undefined = Reflect.getMetadata(SchemableMetadataKey, this, property);
        return isSchemable || false;

    }

    isTrim(property: string): boolean {

        const isTrim: boolean | undefined = Reflect.getMetadata(TrimMetadataKey, this, property);
        return isTrim || false;

    }

    isUnique(property: string): boolean {

        const isUnique: boolean | undefined = Reflect.getMetadata(UniqueMetadataKey, this, property);
        return isUnique || false;

    }

    isDefault(property: string): boolean {

        const isDefault: boolean | undefined = Reflect.getMetadata(DefaultMetadataKey, this, property);
        return isDefault || false;

    }

    isExcludeIndexes(property: string): boolean {

        const isExcludeIndexes: boolean | undefined = Reflect.getMetadata(ExcludeIndexesMetadataKey, this, property);
        return isExcludeIndexes || false;

    }

    isOverride(property: string): boolean {

        const isOverride: boolean | undefined = Reflect.getMetadata(OverrideMetadataKey, this, property);
        return isOverride || false;

    }

    isSkipId(ClassDef: new () => Thing): boolean {

        const isSkipId: boolean | undefined = Reflect.getMetadata(SkipIDMetadataKey, ClassDef);
        return isSkipId || false;

    }

    getExtendsClass(property: string): (new () => Thing) | undefined {

        const typeClass: (new () => Thing) | undefined = Reflect.getMetadata(ExtendsMetadataKey, this, property);
        return typeClass;

    }

    getMax(property: string): number | undefined {

        const max: number | undefined = Reflect.getMetadata(MaxMetadataKey, this, property);
        return max;

    }

    getMaxLength(property: string): number | undefined {

        const maxLength: number | undefined = Reflect.getMetadata(MaxLengthMetadataKey, this, property);
        return maxLength;

    }

    getMin(property: string): number | undefined {

        const min: number | undefined = Reflect.getMetadata(MinMetadataKey, this, property);
        return min;

    }

    getMinLength(property: string): number | undefined {

        const minLength: number | undefined = Reflect.getMetadata(MinLengthMetadataKey, this, property);
        return minLength;

    }

    toQueryParamsObject(): { [param: string]: string | string[] } | undefined {

        let object: { [param: string]: string | string[] } | undefined = {};

        object = this.recursiveGenerateParamsObject(this, null, object);

        return object;

    }

    recursiveGenerateParamsObject(source: Thing, parentPath: string | null, object: { [param: string]: string | string[] }): { [param: string]: string | string[] } | undefined {

        let isThingInstance = false;
        if (source instanceof Thing) isThingInstance = true;
        if (!isThingInstance) {

            console.warn(`${source.constructor.name} is not a instance of Thing.`);
            return undefined;

        }

        Object.getOwnPropertyNames(source).forEach((property: string) => {

            if (source.isQueryParam(property) === true && (source as any)[property] !== null && (source as any)[property] !== undefined) {

                const typeParams: TypeParams<string> | undefined = source.getType(property);
                const joinedPath = parentPath ? [ parentPath, property ].join('.') : property;
                if (typeParams?.type === Types.OBJECT) {

                    this.recursiveGenerateParamsObject((source as any)[property], joinedPath, object);

                } else if (typeParams?.type === Types.ARRAY) {

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

            const typeParams: TypeParams<string> | undefined = this.getType(property);
            let options: SortBySelectOption | SortBySelectOption[] | undefined = this.getSortableOptions(property);

            if (options) {

                if (!Array.isArray(options)) options = [ options ];

                options.forEach((o: SortBySelectOption) => {

                    if (typeParams?.type !== Types.OBJECT && typeParams?.type !== Types.ARRAY) o.field = property;
                    returnValues.push(o);

                });

            }

        });

        return returnValues;

    }

    updatePropertiesFromParams(params: any): void {

        Object.getOwnPropertyNames(this).forEach((property: string) => {

            const typeParams: TypeParams<string> | undefined = this.getType(property);

            if (this.isQueryParam(property) && typeParams) {

                const initialLevel = 1;
                this.updatePropertyByType(this, property, null, typeParams, initialLevel, false, params);

            }

        });

    }

    updatePropertyByType(
        object: any, property: string, parentPath: string | null, typeParams: TypeParams<string>, level = 1, isArrayItem: boolean,
        params: any,
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
            case Types.DECIMAL128:
            case Types.DECIMAL:
                this.updateNumberParam(object, property, params[parentPath], typeParams.type, isArrayItem);
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
        params: any):void {

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

    updateArrayParam(object: any, property: string, typeParams: TypeParams<string>, params: any): void {

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

    updateNumberParam(object: any, property: string, value: any, type: Types, isArrayItem?: boolean, shouldValidate = false, parentPath?: string): void {

        const propertyFullName: string = parentPath ? `${parentPath}.${property}` : property;
        if (shouldValidate) {

            const isRequired: boolean = object.isRequired(property);
            if (isRequired && (value === undefined || value === null)) throw new Error(`invalid ${propertyFullName}. It is required and non nullable.`);

            if (value !== null && value !== undefined) {

                if (typeof value !== 'number') throw new Error(`invalid ${propertyFullName}. Should be number but is ${typeof value}.`);

            }

        }

        if (value !== null && value !== undefined) {

            let numberValue: number | null = null;
            numberValue = parseFloat(value.toString());

            if (isNaN(numberValue) && shouldValidate) throw new Error(`invalid ${propertyFullName}. Should be valid number.`);

            if (shouldValidate) {

                const minValue: number | undefined = this.getMin(property);
                if (minValue !== undefined && numberValue < minValue) throw new Error(`invalid ${propertyFullName}. Should not be less than ${minValue}.`);

                const maxValue: number | undefined = this.getMax(property);
                if (maxValue !== undefined && numberValue > maxValue) throw new Error(`invalid ${propertyFullName}. Should not be greater than ${maxValue}.`);

            }

            if (type === Types.NUMBER) numberValue = parseInt(numberValue.toString(), 10);

            object[property] = !isNaN(numberValue) ? numberValue : undefined;

        } else object[property] = value;

    }

    updateBooleanParam(object: any, property: string, value: any, isArrayItem?: boolean, shouldValidate = false, parentPath?: string): void {

        const propertyFullName: string = parentPath ? `${parentPath}.${property}` : property;
        if (shouldValidate) {

            const isRequired: boolean = object.isRequired(property);
            if (isRequired && (value === undefined || value === null)) throw new Error(`invalid ${propertyFullName}. It is required and non nullable.`);

            if (value !== null && value !== undefined) {

                if (typeof value !== 'boolean') throw new Error(`invalid ${propertyFullName}. Should be boolean but is ${typeof value}.`);

            }

        }

        if (value === true || value === false || value === null || value === undefined) object[property] = value;

    }

    updateStringParam(object: Thing, property: string, value: string, isArrayItem?: boolean, shouldValidate = false, type?: Types, parentPath?: string, shouldValidateID = false): void {

        const propertyFullName: string = parentPath ? `${parentPath}.${property}` : property;
        if (property === 'sort') return this.updateSortParam(object, value, isArrayItem);

        if (property === '_id' && (value === null || value === undefined) && !shouldValidateID) {

            (object as any)[property] = value;
            return;

        }

        if (shouldValidate) {

            const isRequired: boolean = object.isRequired(property);
            if (isRequired && (value === undefined || value === null)) throw new Error(`invalid ${propertyFullName}. It is required and non nullable.`);
            if (value !== null && value !== undefined) {

                if (type !== Types.ENUM) {

                    if (typeof value !== 'string') throw new Error(`invalid ${propertyFullName}. Should be string but is ${typeof value}.`);

                    const isTrim: boolean = object.isTrim(property);
                    if (isTrim && value.trim() === '') throw new Error(`invalid ${propertyFullName}. Should not be empty.`);

                    const minLength: number | undefined = object.getMinLength(property);
                    if (minLength !== undefined && value.length < minLength) throw new Error(`invalid ${propertyFullName}. Should not have less than ${minLength} characters.`);

                    const maxLength: number | undefined = object.getMaxLength(property);
                    if (maxLength !== undefined && value.length > maxLength) throw new Error(`invalid ${propertyFullName}. Should not have more than ${maxLength} characters.`);

                } else {

                    const enumValues: string[] | undefined = object.getEnumValues(property);
                    if (enumValues && !enumValues.find((v: string) => v === value)) throw new Error(`invalid ${propertyFullName}. Should be [${enumValues.toString()}]`);

                }

                if (type === Types.MONGO_OBJECT_ID && !validator.isMongoId(value.toString())) throw new Error(`invalid ${propertyFullName}. Should be valid Mongo ObjectId.`);

                if (type === Types.DATE && !(moment(value, moment.ISO_8601, true).isValid())) throw new Error(`invalid ${propertyFullName}. Should be valid Date.`);

            }

        }

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

            const typeParams: TypeParams<string> | undefined = object.getType(arrProperties[0]);
            if (typeParams?.type === Types.OBJECT && typeParams.class) {

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

                const typeParams: TypeParams<string> | undefined = clone.getType(property);
                if (typeParams?.type === Types.OBJECT && typeParams.class) {

                    (clone as any)[property] = (clone as any)[property].clone();

                } else if (
                    typeParams?.type === Types.ARRAY && typeParams.arrayItemType === Types.OBJECT && typeParams.class &&
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

    validateFromJson(json?: any, shouldValidateID = false, shouldValidateFullEmbeddedObjects = true): this {

        return this.fromJson(json, true, shouldValidateID, shouldValidateFullEmbeddedObjects);

    }

    fromJson(json?: any, shouldValidate = false, shouldValidateID = false, shouldValidateFullEmbeddedObjects = true): this {

        const uniqueId: number | null | undefined = this.uniqueId;
        const object: this = this.clone();
        object.uniqueId = uniqueId;

        if (!json) return object;

        Object.getOwnPropertyNames(this)
            .filter((property: string) => property !== 'sort' && property !== 'limit' && property !== 'skip' && property !== 'uniqueId')
            .forEach((property: string) => {

                const typeParams: TypeParams<string> | undefined = this.getType(property);
                const initialLevel = 1;
                if (typeParams) {

                    object.updatePropertyByTypeFromJson(
                        object,
                        property,
                        typeParams,
                        initialLevel,
                        false,
                        json,
                        shouldValidate,
                        undefined,
                        shouldValidateID,
                        shouldValidateFullEmbeddedObjects,
                    );

                }

            });

        return object;

    }

    updatePropertyByTypeFromJson(
        object: any, property: string, typeParams: TypeParams<string>, level = 1, isArrayItem: boolean,
        json: any,
        shouldValidate = false,
        parentPath?: string,
        shouldValidateID = false,
        shouldValidateFullEmbeddedObjects = true,
    ): void {

        switch (typeParams.type) {

            case Types.OBJECT:
                if (typeParams.class) {

                    this.updateObjectFromJson(object, property, typeParams.class, level, isArrayItem, json, shouldValidate, parentPath, shouldValidateFullEmbeddedObjects);

                }
                break;
            case Types.ARRAY:
                this.updateArrayFromJson(object, property, typeParams, json, shouldValidate, parentPath, shouldValidateFullEmbeddedObjects);
                break;
            case Types.NUMBER:
            case Types.DECIMAL128:
            case Types.DECIMAL:
                this.updateNumberParam(object, property, json[property], typeParams.type, isArrayItem, shouldValidate, parentPath);
                break;
            case Types.BOOLEAN:
                this.updateBooleanParam(object, property, json[property], isArrayItem, shouldValidate, parentPath);
                break;
            case Types.MONGO_OBJECT_ID:
            case Types.ENUM:
            case Types.DATE:
            case Types.STRING:
                this.updateStringParam(object as Thing, property, json[property], isArrayItem, shouldValidate, typeParams.type, parentPath, shouldValidateID);
                break;
            default:
                break;

        }

    }

    updateObjectFromJson<T>(
        object: any, property: string, TypeClass: new () => T, level = 1, isArrayItem: boolean,
        json: any,
        shouldValidate = false,
        parentPath?: string,
        shouldValidateFullEmbeddedObjects = true,
    ): void {

        const maxLevel = 10;
        if (level > maxLevel) return;
        const propertyFullName: string = parentPath ? `${parentPath}.${property}` : property;

        if (object.hasOwnProperty(property) || (isArrayItem === true && property === '0')) {

            if (object[property]) {

                if (!shouldValidate && !json[property]) {

                    object[property] = null;
                    return;

                }

            } else {

                if (json[property] !== null && json[property] !== undefined) object[property] = new TypeClass();
                else if (!shouldValidate) return;

            }

            const isRequired: boolean = object.isRequired(property);

            if (shouldValidate && isRequired && (json[property] === null || json[property] === undefined)) {

                throw new Error(`invalid ${propertyFullName}. It is required and non nullable.`);

            }

            if ((json[property] === null || json[property] === undefined) && !isRequired) return;

            if ((json[property] !== null && json[property] !== undefined) && shouldValidate && typeof json[property] !== 'object') throw new Error(`invalid ${propertyFullName}. Should be object but is ${typeof json[property]}.`);

            const isSkipId: boolean = object[property].isSkipId(TypeClass);

            Object.getOwnPropertyNames(object[property])
                .filter((p: string) => p !== 'sort' && p !== 'limit' && p !== 'skip' && p !== 'uniqueId')
                .filter((p: string) => shouldValidateFullEmbeddedObjects || isSkipId || p === '_id')
                .forEach((p: string) => {

                    const typeParams: TypeParams<string> = object[property].getType(p);

                    this.updatePropertyByTypeFromJson(
                        object[property],
                        p,
                        typeParams,
                        level + 1,
                        isArrayItem,
                        json[property],
                        shouldValidate,
                        parentPath ? `${parentPath}.${property}` : property,
                        true,
                        shouldValidateFullEmbeddedObjects,
                    );

                });

        }

    }

    updateArrayFromJson(object: any, property: string, typeParams: TypeParams<string>, json: any,
        shouldValidate = false, parentPath?: string, shouldValidateFullEmbeddedObjects = true): void {

        const propertyFullName: string = parentPath ? `${parentPath}.${property}` : property;
        const isRequired: boolean = object.isRequired(property);
        if (object[property]) {

            if (shouldValidate && isRequired && (json[property] === null || json[property] === undefined)) {

                throw new Error(`invalid ${propertyFullName}. It is required and non nullable.`);

            } else if (!shouldValidate && !json[property]) {

                object[property] = null;
                return;

            }

        } else {

            if (json[property] !== null && json[property] !== undefined) object[property] = [];
            else {

                if (shouldValidate && isRequired) throw new Error(`invalid ${propertyFullName}. It is required and non nullable.`);
                return;

            }

        }

        if (shouldValidate && !Array.isArray(json[property])) throw new Error(`invalid ${propertyFullName}. Should be array but is ${typeof json[property]}.`);

        if (typeParams.arrayItemType) {

            const TypeClass = typeParams.class;
            const type: TypeParams<string> = {
                type: typeParams.arrayItemType,
                class: typeParams.class,
            };

            if ((json[property] as any[]).length) {

                (json[property] as any[]).forEach((element: any) => {

                    const hostObject = TypeClass ? new TypeClass() : object.clone();
                    (hostObject as any)[property] = null;
                    const jsonHost = {};
                    (jsonHost as any)[property] = element;
                    this.updatePropertyByTypeFromJson(hostObject, property, type, 1, true, jsonHost, shouldValidate, undefined, true, shouldValidateFullEmbeddedObjects);
                    object[property].push((hostObject as any)[property]);

                });

            } else {

                if (shouldValidate) throw new Error(`invalid ${propertyFullName}. Should not be empty array.`);

            }

        }

    }

}
