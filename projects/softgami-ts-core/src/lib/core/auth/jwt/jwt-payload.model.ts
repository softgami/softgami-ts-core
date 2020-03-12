import { JwtRole } from '../../../internal';
import { Required } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

export class JwtPayload {

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    userId: string = null;

    @Required()
    @Type({ type: Types.ARRAY, class: JwtRole, arrayItemType: Types.OBJECT })
    roles: JwtRole[] = null;

    @Type({ type: Types.NUMBER })
    iat?: number = null;

    @Type({ type: Types.NUMBER })
    exp?: number = null;

}
