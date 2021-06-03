import { AppInstanceInviteStatus } from './app-instance-invite-status.enum';
import { CompoundIndex } from '../../shared/decorators/compound-index.decorator';
import { Default } from '../../shared/decorators/default.decorator';
import { Enum } from '../../shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../../shared/decorators/query-param.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Role } from '../../permissions/role/role.model';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';
import { Unique } from '../../shared/decorators/unique.decorator';
import { User } from '../../user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { appInstanceId: 1 }, options: { unique: false } },
    { fields: { status: 1 }, options: { unique: false } },
    { fields: { 'host._id': 1 }, options: { unique: false } },
    { fields: { 'host.name': 1 }, options: { unique: false } },
    { fields: { 'user._id': 1 }, options: { unique: false } },
    { fields: { 'user.name': 1 }, options: { unique: false } },
    { fields: { 'roles.alias': 1 }, options: { unique: false } },
])
@Extends(Thing)
@GenerateMongoObjectID()
export class AppInstanceInvite extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appInstanceId: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(AppInstanceInviteStatus).map((key: string) => AppInstanceInviteStatus[key as keyof typeof AppInstanceInviteStatus]))
    status: AppInstanceInviteStatus | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    host: User | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    user: User | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Default(void 0)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles: Role[] | null = null;

}
