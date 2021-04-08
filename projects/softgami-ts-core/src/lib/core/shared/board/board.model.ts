import { AppInstance } from '../../app/app-instance/app-instance.model';
import { BoardList } from './board-list.model';
import { CompoundIndex } from '../decorators/compound-index.decorator';
import { Default } from '../decorators/default.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../decorators/extends.decorator';
import { QueryParam } from '../decorators/query-param.decorator';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { Thing } from '../thing/thing.model';
import { Trim } from '../decorators/trim.decorator';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';
import { Unique } from '../decorators/unique.decorator';
import { User } from '../../user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { createdAt: 1 }, options: { unique: false } },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { 'creator._id': 1 }, options: { unique: false } },
    { fields: { 'boardLists._id': 1 }, options: { unique: false } },
    { fields: { 'boardLists.orderIndex': 1 }, options: { unique: false } },
])
@Extends(Thing)
export class Board extends Thing {

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
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance: AppInstance | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator: User | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: BoardList, arrayItemType: Types.OBJECT })
    boardLists?: BoardList[] | null = null;

}
