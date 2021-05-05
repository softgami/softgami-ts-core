import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Max } from '../../core/shared/decorators/max.decorator';
import { Min } from '../../core/shared/decorators/min.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';

// @dynamic
@Extends(Thing)
export class WorkLog extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator: User | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Min(0)
    @Max(100000)
    @Type({ type: Types.DECIMAL })
    timeTracking: number | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Type({ type: Types.DATE })
    startDate: Date | null = null;

    @Schemable()
    @QueryParam()
    @Type({ type: Types.DATE })
    endDate?: Date | null = null;

}
