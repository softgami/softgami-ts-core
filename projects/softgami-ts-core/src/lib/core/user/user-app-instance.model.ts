import { Default } from '../shared/decorators/default.decorator';
import { ExcludeIndexes } from '../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { HostUser } from './host-user.model';
import { QueryParam } from '../shared/decorators/query-param.decorator';
import { Required } from '../shared/decorators/required.decorator';
import { Role } from '../permissions/role/role.model';
import { Schemable } from '../shared/decorators/schemable.decorator';
import { SkipID } from '../shared/decorators/skip-id.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Type } from '../shared/decorators/type.decorator';
import { Types } from '../shared/models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
export class UserAppInstance extends Thing {

    @Schemable()
    @Required()
    @QueryParam()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appInstanceId: string | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: HostUser })
    host?: HostUser | null = null;

    @Schemable()
    @Type({ type: Types.BOOLEAN })
    isFavorite?: boolean | null = null;

}
