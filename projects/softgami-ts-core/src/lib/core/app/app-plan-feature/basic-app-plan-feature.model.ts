import { Default } from '../../../core/shared/decorators/default.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

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
