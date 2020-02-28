import { JwtRole } from './jwt-role.model';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

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
