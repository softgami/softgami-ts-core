import { Default } from '@lib/core/shared/decorators/default.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

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
