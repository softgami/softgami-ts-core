import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

// @dynamic
@Extends(Thing)
export class Jwt extends Thing {

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    accessToken: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    tokenType: string = null;

    @Required()
    @Type({ type: Types.NUMBER })
    expiresIn: number = null;

    @Trim()
    @Type({ type: Types.STRING })
    refreshToken?: string = null;

    @Trim()
    @Type({ type: Types.STRING })
    idToken?: string = null;

    @Trim()
    @Type({ type: Types.STRING })
    scope?: string = null;

    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    userId?: string = null;

}
