import { Default } from '../../../core/shared/decorators/default.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../../core/shared/decorators/max-length.decorator';
import { Min } from '../../../core/shared/decorators/min.decorator';
import { MinLength } from '../../../core/shared/decorators/min-length.decorator';
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
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    alias: string | null = null;

    @Schemable()
    @Min(0)
    @Type({ type: Types.NUMBER })
    value?: number | null = null;

    @Schemable()
    @Trim()
    @Default(null)
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    info?: string[] | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    icon?: string | null = null;

}
