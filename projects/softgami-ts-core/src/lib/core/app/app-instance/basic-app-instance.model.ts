import { App } from '../app.model';
import { AppPlan } from 'projects/softgami-ts-core/src/lib/core/app/app-plan/app-plan.model';
import { Default } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/default.decorator';
import { ExcludeIndexes } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Role } from 'projects/softgami-ts-core/src/lib/core/permissions/role/role.model';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Thing } from 'projects/softgami-ts-core/src/lib/core/shared/thing/thing.model';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { User } from 'projects/softgami-ts-core/src/lib/core/user/user.model';

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
