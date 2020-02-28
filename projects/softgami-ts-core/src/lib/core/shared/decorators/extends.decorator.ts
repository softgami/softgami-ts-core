import 'reflect-metadata';

import { ExtendsMetadataKey } from './extends-metadata-key';

export function Extends(classDefinition: any) {

    return Reflect.metadata(ExtendsMetadataKey, classDefinition);

}
