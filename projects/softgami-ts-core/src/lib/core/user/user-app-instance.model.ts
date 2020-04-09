import { Default } from '../shared/decorators/default.decorator';
import { QueryParam } from '../shared/decorators/query-param.decorator';
import { Role } from '../permissions/role/role.model';
import { Schemable } from '../shared/decorators/schemable.decorator';
import { SkipID } from '../shared/decorators/skip-id.decorator';
import { Type } from '../shared/decorators/type.decorator';
import { Types } from '../shared/models/types.enum';

@SkipID()
export class UserAppInstance {

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
