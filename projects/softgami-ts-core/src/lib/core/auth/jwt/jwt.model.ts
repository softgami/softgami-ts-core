import { Required } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

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
