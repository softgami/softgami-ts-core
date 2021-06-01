import 'reflect-metadata';

import { GenerateMongoObjectIDMetadataKey } from './generate-mongo-object-id-metadata-key';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function GenerateMongoObjectID(shouldGenerate = true) {

    return Reflect.metadata(GenerateMongoObjectIDMetadataKey, shouldGenerate);

}
