import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

export class JwtRole {

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    appId: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    appAlias: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    appInstanceId: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    roleId: string = null;

    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    roleAlias: string = null;

}
