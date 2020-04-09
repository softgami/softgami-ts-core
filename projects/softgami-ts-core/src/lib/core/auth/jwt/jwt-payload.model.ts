import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { JwtRole } from './jwt-role.model';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

// @dynamic
@Extends(Thing)
export class JwtPayload extends Thing {

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    userId: string = null;

    @Required()
    @Type({ type: Types.ARRAY, class: JwtRole, arrayItemType: Types.OBJECT })
    roles: JwtRole[] = null;

    @Type({ type: Types.NUMBER })
    iat?: number = null;

    @Type({ type: Types.NUMBER })
    exp?: number = null;

}
