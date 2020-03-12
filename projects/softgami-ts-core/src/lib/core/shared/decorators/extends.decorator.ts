import 'reflect-metadata';

import { ExtendsMetadataKey } from '../../../internal';

export function Extends(classDefinition: any) {

    return Reflect.metadata(ExtendsMetadataKey, classDefinition);

}
