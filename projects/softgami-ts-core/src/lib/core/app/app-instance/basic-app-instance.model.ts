import { App } from '../../../internal';
import { AppPlan } from '../../../internal';
import { Default } from '../../../internal';
import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { Required } from '../../../internal';
import { Role } from '../../../internal';
import { Schemable } from '../../../internal';
import { Thing } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { User } from '../../../internal';

@Extends(Thing)
export class BasicAppInstance extends Thing {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: App })
    app: App = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isActive: boolean = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.OBJECT, class: AppPlan })
    appPlans?: AppPlan[] = null;

}
