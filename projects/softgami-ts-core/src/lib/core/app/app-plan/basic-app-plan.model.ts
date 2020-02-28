import { AppPlanFeature } from '@lib/core/app/app-plan-feature/app-plan-feature.model';
import { Default } from '@lib/core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { MonetaryValue } from '@lib/content-maker/currency/monetary-value.model';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { User } from '@lib/core/user/user.model';

@Extends(Thing)
export class BasicAppPlan extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    alias: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    appId: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    icon?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: AppPlanFeature, arrayItemType: Types.OBJECT })
    appPlanFeatures?: AppPlanFeature[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: MonetaryValue, arrayItemType: Types.OBJECT })
    prices?: MonetaryValue[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: MonetaryValue, arrayItemType: Types.OBJECT })
    pricesHistory?: MonetaryValue[] = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    trialDays?: number = null;

}
