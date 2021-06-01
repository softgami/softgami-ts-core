import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { JwtRole } from './jwt-role.model';
import { Required } from '../../shared/decorators/required.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
export class JwtPayload extends Thing {

    @Required()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    userId: string | null = null;

    @Required()
    @Type({ type: Types.ARRAY, class: JwtRole, arrayItemType: Types.OBJECT })
    roles: JwtRole[] | null = null;

    @Type({ type: Types.NUMBER })
    iat?: number | null = null;

    @Type({ type: Types.NUMBER })
    exp?: number | null = null;

}
