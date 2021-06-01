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
export class Jwt extends Thing {

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    accessToken: string | null = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    tokenType: string | null = null;

    @Required()
    @Type({ type: Types.NUMBER })
    expiresIn: number | null = null;

    @Trim()
    @Type({ type: Types.STRING })
    refreshToken?: string | null = null;

    @Trim()
    @Type({ type: Types.STRING })
    idToken?: string | null = null;

    @Trim()
    @Type({ type: Types.STRING })
    scope?: string | null = null;

    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    userId?: string | null = null;

}
