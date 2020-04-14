import { Default } from '../decorators/default.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../decorators/extends.decorator';
import { QueryParam } from '../decorators/query-param.decorator';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { SkipID } from '../decorators/skip-id.decorator';
import { Thing } from '../thing/thing.model';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';
import { User } from '../../user/user.model';

// @dynamic
@SkipID()
@Extends(Thing)
export class ChecklistItem extends Thing {

    @Schemable()
    @Required()
    @Default(false)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isDone: boolean = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @QueryParam()
    @Type({ type: Types.NUMBER })
    orderIndex?: number = null;

}
