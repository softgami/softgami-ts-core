import 'reflect-metadata';

import { ExtendsMetadataKey } from './extends-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Extends(classDefinition: unknown) {

    return Reflect.metadata(ExtendsMetadataKey, classDefinition);

}
