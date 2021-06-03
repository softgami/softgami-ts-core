import { BaseUser } from './base-user.model';
import { Default } from '../shared/decorators/default.decorator';
import { ExcludeIndexes } from '../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../shared/decorators/query-param.decorator';
import { Required } from '../shared/decorators/required.decorator';
import { Role } from '../permissions/role/role.model';
import { Schemable } from '../shared/decorators/schemable.decorator';
import { Thing } from '../shared/thing/thing.model';
import { Type } from '../shared/decorators/type.decorator';
import { Types } from '../shared/models/types.enum';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
export class UserAppInstance extends Thing {

    @Schemable()
    @Required()
    @QueryParam()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appInstanceId: string | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(void 0)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: BaseUser })
    host?: BaseUser | null = null;

    @Schemable()
    @Type({ type: Types.BOOLEAN })
    isFavorite?: boolean | null = null;

}
