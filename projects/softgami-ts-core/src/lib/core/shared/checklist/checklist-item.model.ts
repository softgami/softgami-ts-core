import { Default } from '../decorators/default.decorator';
import { ExcludeIndexes } from '../decorators/exclude-indexes.decorator';
import { Extends } from '../decorators/extends.decorator';
import { GenerateMongoObjectID } from '../decorators/generate-mongo-object-id.decorator';
import { Max } from '../decorators/max.decorator';
import { Min } from '../decorators/min.decorator';
import { QueryParam } from '../decorators/query-param.decorator';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { Thing } from '../thing/thing.model';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';
import { User } from '../../user/user.model';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
export class ChecklistItem extends Thing {

    @Schemable()
    @Required()
    @Default(false)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isDone: boolean | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

    @Schemable()
    @QueryParam()
    @Min(0)
    @Max(300)
    @Type({ type: Types.NUMBER })
    orderIndex?: number | null = null;

}
