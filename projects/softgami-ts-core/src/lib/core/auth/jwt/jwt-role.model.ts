import { Required } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

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
