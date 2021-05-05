import { Thing } from '../shared/thing/thing.model';

export class ValidatorService {

    static validate<T>(json: {
        [key: string]: string;
    }, ClassDefinition: new () => T, shouldValidateID = false): T | undefined {

        const object = new ClassDefinition();
        if (object && object instanceof Thing) {

            return object.validate(json, shouldValidateID);

        }
        return undefined;

    }

}
