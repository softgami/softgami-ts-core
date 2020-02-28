import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

export class Jwt {

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
    @Type({ type: Types.STRING })
    userId?: string = null;

}
