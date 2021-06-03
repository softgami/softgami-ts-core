import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BaseCollection } from './base-collection.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

// @dynamic
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
@Extends(BaseCollection)
@GenerateMongoObjectID()
export class Collection extends BaseCollection {

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'COLLECTION', field: 'parent.name' })
    @Type({ type: Types.OBJECT, class: BaseCollection, isSelf: true })
    parent?: BaseCollection | null = null;

    @Schemable()
    @Default(void 0)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: BaseCollection, arrayItemType: Types.OBJECT, isSelf: true })
    ancestors?: BaseCollection[] | null = null;

}
