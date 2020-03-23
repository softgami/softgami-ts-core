import { Required } from '../../../core/shared/decorators/required.decorator';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

export class JwtRole {

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appId: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    appAlias: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appInstanceId: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    roleId: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    roleAlias: string = null;

}
