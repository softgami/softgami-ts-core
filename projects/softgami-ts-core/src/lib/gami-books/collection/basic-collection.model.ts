import { AppInstance } from '../../internal';
import { Collection } from '../../internal';
import { Default } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { QueryParam } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Sortable } from '../../internal';
import { Thing } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { User } from '../../internal';

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
