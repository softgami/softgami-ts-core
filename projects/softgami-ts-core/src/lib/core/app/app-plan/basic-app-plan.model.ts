import { AppPlanFeature } from 'projects/softgami-ts-core/src/lib/core/app/app-plan-feature/app-plan-feature.model';
import { Default } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/default.decorator';
import { ExcludeIndexes } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { MonetaryValue } from 'projects/softgami-ts-core/src/lib/content-maker/currency/monetary-value.model';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Thing } from 'projects/softgami-ts-core/src/lib/core/shared/thing/thing.model';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { User } from 'projects/softgami-ts-core/src/lib/core/user/user.model';

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
