import { AppPlanFeature } from '../../app/app-plan-feature/app-plan-feature.model';
import { CompoundIndex } from '../../shared/decorators/compound-index.decorator';
import { Default } from '../../shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../shared/decorators/max-length.decorator';
import { Min } from '../../shared/decorators/min.decorator';
import { MinLength } from '../../shared/decorators/min-length.decorator';
import { MonetaryValue } from '../../../content-maker/currency/monetary-value.model';
import { QueryParam } from '../../shared/decorators/query-param.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';
import { Unique } from '../../shared/decorators/unique.decorator';
import { User } from '../../user/user.model';

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
@GenerateMongoObjectID()
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
    @MaxLength(100)
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
