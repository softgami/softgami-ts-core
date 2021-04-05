import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { createdAt: 1 }, options: { unique: false } },
    { fields: { isActive: 1 }, options: { unique: false } },
    { fields: { isCompleted: 1 }, options: { unique: false } },
    { fields: { isFinished: 1 }, options: { unique: false } },
    { fields: { 'creator._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { 'parent._id': 1 }, options: { unique: false } },
    { fields: { 'parent.name': 1 }, options: { unique: false } },
    { fields: { 'ancestors._id': 1 }, options: { unique: false } },
    { fields: { 'ancestors.name': 1 }, options: { unique: false } },
])
@Extends(Thing)
export class Collection extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    // tslint:disable-next-line: variable-name
    _id: string = null;

    @Schemable()
    @Required()
    @Default(true)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isActive: boolean = null;

    @Schemable()
    @Default(false)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isCompleted?: boolean = null;

    @Schemable()
    @Default(false)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isFinished?: boolean = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    orderIndex?: number = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'COLLECTION', field: 'parent.name' })
    @Type({ type: Types.OBJECT, class: Collection, isSelf: true })
    parent?: Collection = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Collection, arrayItemType: Types.OBJECT, isSelf: true })
    ancestors?: Collection[] = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    friendlyUrl?: string = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    numberOfPublications?: number = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    totalOfPublications?: number = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    numberOfCollections?: number = null;

}
