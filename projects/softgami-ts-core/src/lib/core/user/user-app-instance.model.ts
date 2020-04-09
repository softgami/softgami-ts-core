import { Default } from '../shared/decorators/default.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { QueryParam } from '../shared/decorators/query-param.decorator';
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
    @QueryParam()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appInstanceId: string = null;

    @Schemable()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] = null;

}
