import { Injectable } from '@angular/core';
import { Schema } from 'mongoose';
import * as moment from 'moment';
import * as validator from 'validator';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {

    schema: Schema;
    shouldValidateID: boolean;

    constructor() {}

    transform(object: any, { metatype }) {
        return this.validateObject(object);
    }

    validateObject(object: any) {
        this.schema.eachPath((subPath: string, schemaType: any) => {
            // console.log(subPath);
            if (subPath !== '__v') {
                this.validatePropertyParentNotRequired(object[subPath], schemaType, subPath);
            }
        });
    }

    validatePropertyParentRequired(value: any, schemaType: any, path: string) {
        const isRequired: boolean = schemaType.isRequired === true ? true : false;
        // console.log(`[validatePropertyParentRequired] path:${path}, object:${value}, isRequired:${isRequired}`);
        if ((value === undefined || value === null) && isRequired) {
            throw new Error(`invalid ${path}`);
        }
        this.validateProperty(value, schemaType, path, true);
        return;
    }

    validatePropertyParentNotRequired(value: any, schemaType: any, path: string) {
        const isRequired: boolean = schemaType.isRequired === true ? true : false;
        // console.log(`[validatePropertyParentNotRequired] path:${path}, object:${value}, isRequired:${isRequired}`);
        if ((value === undefined || value === null) && !isRequired) {
            return;
        }
        this.validateProperty(value, schemaType, path, false);
        return;
    }

    validateProperty(value: any, schemaType: any, path: string, isParentRequired: boolean) {
        const type: string = schemaType.instance;
        const isRequired: boolean = schemaType.isRequired === true ? true : false;
        // console.log(`[validateProperty] path:${path}, object:${value}, type:${type}, isRequired:${isRequired}`);
        switch (type) {
            case 'ObjectID':
                this.validateObjectID(value, path, isParentRequired, schemaType);
                break;
            case 'String':
                if (isRequired) {
                    this.validateStringRequired(value, path, isParentRequired, schemaType);
                } else {
                    this.validateStringNotRequired(value, path, isParentRequired, schemaType);
                }
                break;
            case 'Array':
                if (isRequired) {
                    this.validateArrayRequired(value, path, isParentRequired, schemaType);
                } else {
                    this.validateArrayNotRequired(value, path, isParentRequired, schemaType);
                }
                break;
            case 'Boolean':
                if (isRequired) {
                    this.validateBooleanRequired(value, path, isParentRequired, schemaType);
                } else {
                    this.validateBooleanNotRequired(value, path, isParentRequired, schemaType);
                }
                break;
            case 'Number':
                if (isRequired) {
                    this.validateNumberRequired(value, path, isParentRequired, schemaType);
                } else {
                    this.validateNumberNotRequired(value, path, isParentRequired, schemaType);
                }
                break;
            case 'Date':
                if (isRequired) {
                    this.validateDateRequired(value, path, isParentRequired, schemaType);
                } else {
                    this.validateDateNotRequired(value, path, isParentRequired, schemaType);
                }
                break;
            case 'Embedded':
                if (isRequired) {
                    this.validateEmbeddedObjectRequired(value, path, isParentRequired, schemaType);
                } else {
                    this.validateEmbeddedObjectNotRequired(value, path, isParentRequired, schemaType);
                }
                break;
            default:
                break;
        }
        return;
    }

    traverse(obj, keys) {
        if (obj === undefined || obj === null) {
            return undefined;
        }
        return keys.split('.').reduce((cur, key) => {
            if (cur === undefined) {
                return undefined;
            }
            return cur[key];
        }, obj);
    }

    validateEmbeddedObjectRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        const schema: Schema = schemaType.schema;
        schema.eachPath((subPath: string, newSchemaType: any) => {
            // console.log(subPath);
            const newPath = path + '.' + subPath;
            const newValue = this.traverse(value, subPath);
            if (subPath !== '__v') {
                if (isParentRequired) {
                    this.validatePropertyParentRequired(newValue, newSchemaType, newPath);
                } else {
                    this.validatePropertyParentNotRequired(newValue, newSchemaType, newPath);
                }
            }
        });
    }

    validateEmbeddedObjectNotRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        this.validateEmbeddedObjectRequired(value, path, isParentRequired, schemaType);
    }

    validateArrayRequired(objects: any, path: string, isParentRequired: boolean, schemaType: any) {
        objects = objects as Array<any>;
        if (isParentRequired) {
            if (objects === undefined || !objects.length) {
                throw new Error(`invalid ${path}`);
            }
            objects.forEach(element => {
                this.validateEmbeddedObjectRequired(element, path, isParentRequired, schemaType);
            });
        } else {
            if (objects === undefined) {
                return;
            }
            if (!objects.length) {
                throw new Error(`invalid ${path}`);
            }
            objects.forEach(element => {
                this.validateEmbeddedObjectRequired(element, path, isParentRequired, schemaType);
            });
        }
    }

    validateArrayNotRequired(objects: any, path: string, isParentRequired: boolean, schemaType: any) {
        objects = objects as Array<any>;

        if (objects === undefined) {
            return;
        }
        if (!objects.length) {
            throw new Error(`invalid ${path}`);
        }

        objects.forEach(element => {
            this.validateEmbeddedObjectRequired(element, path, true, schemaType);
        });
    }

    validateObjectID(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateObjectID] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
        if (isParentRequired) {

        } else {

        }
    }

    validateStringRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateStringRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }

    validateStringNotRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateStringNotRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }

    validateBooleanRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateBooleanRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }

    validateBooleanNotRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateBooleanNotRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }

    validateNumberRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateNumberRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }

    validateNumberNotRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateNumberNotRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }

    validateDateRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateDateRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }

    validateDateNotRequired(value: any, path: string, isParentRequired: boolean, schemaType: any) {
        // console.log(`[validateDateNotRequired] value:${value}, path:${path}, isParentRequired:${isParentRequired}`);
    }
}
