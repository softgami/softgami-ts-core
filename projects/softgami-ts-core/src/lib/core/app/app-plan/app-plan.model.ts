import { AppPlanFeature } from '../../../core/app/app-plan-feature/app-plan-feature.model';
import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../../core/shared/decorators/max-length.decorator';
import { Min } from '../../../core/shared/decorators/min.decorator';
import { MinLength } from '../../../core/shared/decorators/min-length.decorator';
import { MonetaryValue } from '../../../content-maker/currency/monetary-value.model';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';
import { User } from '../../../core/user/user.model';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { alias: 1 }, options: { unique: false } },
    { fields: { appId: 1 }, options: { unique: false } },
    { fields: { 'appPlanFeatures._id': 1 }, options: { unique: false } },
    { fields: { 'appPlanFeatures.name': 1 }, options: { unique: false } },
    { fields: { 'appPlanFeatures.alias': 1 }, options: { unique: false } },
    { fields: { 'prices.value': 1 }, options: { unique: false } },
    { fields: { 'prices.currency._id': 1 }, options: { unique: false } },
    { fields: { 'prices.currency.code': 1 }, options: { unique: false } },
    { fields: { 'prices.dateTimePeriod': 1 }, options: { unique: false } },
    { fields: { 'pricesHistory.value': 1 }, options: { unique: false } },
    { fields: { 'pricesHistory.currency._id': 1 }, options: { unique: false } },
    { fields: { 'pricesHistory.currency.code': 1 }, options: { unique: false } },
    { fields: { 'pricesHistory.dateTimePeriod': 1 }, options: { unique: false } },
    { fields: { trialDays: 1 }, options: { unique: false } },
])
@Extends(Thing)
export class AppPlan extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    alias: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    appId: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    icon?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: AppPlanFeature, arrayItemType: Types.OBJECT })
    appPlanFeatures?: AppPlanFeature[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: MonetaryValue, arrayItemType: Types.OBJECT })
    prices?: MonetaryValue[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: MonetaryValue, arrayItemType: Types.OBJECT })
    pricesHistory?: MonetaryValue[] | null = null;

    @Schemable()
    @Min(0)
    @Type({ type: Types.NUMBER })
    trialDays?: number | null = null;

}
