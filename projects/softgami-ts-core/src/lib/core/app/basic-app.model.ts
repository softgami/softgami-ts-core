import { AppAlias } from '../../internal';
import { AppPlan } from '../../internal';
import { Default } from '../../internal';
import { Enum } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { Override } from '../../internal';
import { Required } from '../../internal';
import { Role } from '../../internal';
import { Schemable } from '../../internal';
import { Thing } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { Unique } from '../../internal';

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
