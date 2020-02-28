import { AppAlias } from './app-alias.enum';
import { AppPlan } from '@lib/core/app/app-plan/app-plan.model';
import { Default } from '@lib/core/shared/decorators/default.decorator';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { Override } from '@lib/core/shared/decorators/override.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Role } from '@lib/core/permissions/role/role.model';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

// @dynamic
@Extends(Thing)
export class BasicApp extends Thing {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @Override()
    @Unique()
    @Type({ type: Types.STRING })
    name: string = null;

    @Schemable()
    @Required()
    @Index()
    @Unique()
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(AppAlias).map((key: string) => AppAlias[key]))
    alias: AppAlias = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isActive: boolean = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isPublic: boolean = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: AppPlan, arrayItemType: Types.OBJECT })
    appPlans?: AppPlan[] = null;

}
