import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
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
