import { Default } from '../../../core/shared/decorators/default.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

@Extends(Thing)
export class AppPlanFeature extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    alias: string | null = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    value?: number | null = null;

    @Schemable()
    @Trim()
    @Default(null)
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    info?: string[] | null = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    icon?: string | null = null;

}
