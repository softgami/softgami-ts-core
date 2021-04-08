import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

// @dynamic
@Extends(Thing)
export class JwtRole extends Thing {

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appId: string | null = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    appAlias: string | null = null;

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    appInstanceId: string | null = null;

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    roleId: string | null = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    roleAlias: string | null = null;

}
