import { Default } from '../../../internal';
import { Extends } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

@Extends(Thing)
export class BasicAppPlanFeature extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    alias: string = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    value?: number = null;

    @Schemable()
    @Trim()
    @Default(null)
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    info?: string[] = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    icon?: string = null;

}
