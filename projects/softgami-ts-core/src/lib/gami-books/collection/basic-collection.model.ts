import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { Collection } from './collection.model';
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
import { User } from '../../core/user/user.model';

@Extends(Thing)
export class BasicCollection extends Thing {

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
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'COLLECTION' })
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
