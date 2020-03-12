import { AppPlanFeature } from '../../../internal';
import { Default } from '../../../internal';
import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { MonetaryValue } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { User } from '../../../internal';

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
