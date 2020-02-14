import 'reflect-metadata';

import { Index } from '../decorators/index.decorator';
import { QueryParam } from '../decorators/query-param.decorator';
import { QueryParamMetadataKey } from '../decorators/query-param-metadata-keys';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { Sortable } from '../decorators/sortable.decorator';
import { SortableMetadataKey } from '../decorators/sortable-metadata-key';
import { SortBySelectOption } from '../models/sort-by-select-options.interface';
import { Trim } from '../decorators/trim.decorator';
import { Type } from '../decorators/type.decorator';
import { TypeMetadataKey } from '../decorators/type-metadata-key';
import { TypeParams } from '../models/type-params.interface';
import { Types } from '../models/types.enum';

export class Thing {

    @Schemable()
    @Index()
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
    @Index()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'CREATED_AT' })
    @Type({ type: Types.DATE })
    createdAt?: Date = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.DATE })
    lastUpdate?: Date = null;

    getType<T>(property: string): TypeParams<T> {

        return Reflect.getMetadata(TypeMetadataKey, this, property);

    }

    getSortableOptions(property: string): SortBySelectOption {

        return Reflect.getMetadata(SortableMetadataKey, this, property) as SortBySelectOption;

    }

    isQueryParam(property: string): boolean {

        const isQueryParam: boolean = Reflect.getMetadata(QueryParamMetadataKey, this, property);
        return isQueryParam;

    }

    toQueryParamsObject(): { [param: string]: string | string[] } {

        let object: { [param: string]: string | string[] } = {};

        object = this.recursiveGenerateParamsObject(this, null, object);

        return object;

    }

    recursiveGenerateParamsObject(source: any, parentPath: string, object: { [param: string]: string | string[] }) {


        Object.getOwnPropertyNames(source).forEach((property: string) => {

            if (source.isQueryParam(property) === true && source[property] !== null && source[property] !== undefined) {
                const typeParams: TypeParams<string> = source.getType(property);
                const joinedPath = parentPath ? [parentPath, property].join('.') : property;
                if (typeParams.type !== Types.OBJECT) {
                    object[joinedPath] = source[property];
                } else {
                    this.recursiveGenerateParamsObject(source[property], joinedPath, object);
                }
            }
        });

        return object;

    }

    toSortOptions(): SortBySelectOption[] {

        const returnValues: SortBySelectOption[] = [];
        Object.getOwnPropertyNames(this).forEach((property: string) => {
            const typeParams: TypeParams<string> = this.getType(property);
            const options: SortBySelectOption = this.getSortableOptions(property);

            if (options) {
                if (typeParams.type !== Types.OBJECT) options.field = property;
                returnValues.push(options);
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
            case Types.DECIMAL:
                this.updateDecimalParam(object, property, params[parentPath], isArrayItem);
                break;
            case Types.BOOLEAN:
                this.updateBooleanParam(object, property, params[parentPath], isArrayItem);
                break;
            case Types.STRING:
            case Types.DATE:
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
            if (objectParams.length) object[property] = object[property] = [];
            else return;
        }

        typeParams.type = typeParams.arrayItemType;

        this.updatePropertyByType(object[property], '0', property, typeParams, 1, true, params);

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

    updateStringParam(object: any, property: string, value: string, isArrayItem?: boolean) {

        if (property === 'sort') {
            if (object.canUpdateSortParam(value)) {
                object[property] = value;
            }
        } else object[property] = value;

    }

    canUpdateSortParam(object: any, param: string): boolean {

        if (param === null || param === undefined || param === '') return true;
        const arrValues: string[] = param.split(':');
        if (arrValues[0] && object.hasOwnProperty(arrValues[0])) {
            return true;
        }
        return false;
    }

}
