import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { Collection } from './collection.model';
import { Default } from '@lib/core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { QueryParam } from '@lib/core/shared/decorators/query-param.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Sortable } from '@lib/core/shared/decorators/sortable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { User } from '@lib/core/user/user.model';

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
