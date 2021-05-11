/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Thing } from '../shared/thing/thing.model';

export class ValidatorService {

    static validate<Thing>(json: any, ClassDefinition?: new () => Thing, instance?: Thing, shouldValidateID = false, shouldValidateFullEmbeddedObjects = true): Thing {

        const object = instance || (ClassDefinition ? new ClassDefinition() : null);
        if (object && object instanceof Thing) {

            return object.validateFromJson(json, shouldValidateID, shouldValidateFullEmbeddedObjects);

        }
        throw new Error('invalid object. It is not a Thing instance.');

    }

}
