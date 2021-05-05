import { AppAlias } from './app-alias.enum';
import { AppPlan } from '../../core/app/app-plan/app-plan.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
import { Override } from '../../core/shared/decorators/override.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Role } from '../../core/permissions/role/role.model';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';

// @dynamic
@CompoundIndex([
    { fields: { 'roles.alias': 1 }, options: { unique: false } },
    { fields: { 'roles._id': 1 }, options: { unique: false } },
    { fields: { 'appPlans.name': 1 }, options: { unique: false } },
    { fields: { 'appPlans.alias': 1 }, options: { unique: false } },
    { fields: { 'appPlans.appId': 1 }, options: { unique: false } },
    { fields: { 'appPlans.appPlanFeatures._id': 1 }, options: { unique: false } },
    { fields: { 'appPlans.appPlanFeatures.name': 1 }, options: { unique: false } },
    { fields: { 'appPlans.appPlanFeatures.alias': 1 }, options: { unique: false } },
    { fields: { 'appPlans.prices._id': 1 }, options: { unique: false } },
    { fields: { 'appPlans.prices.value': 1 }, options: { unique: false } },
    { fields: { 'appPlans.prices.currency': 1 }, options: { unique: false } },
    { fields: { 'appPlans.prices.dateTimePeriod': 1 }, options: { unique: false } },
    { fields: { 'appPlans.pricesHistory._id': 1 }, options: { unique: false } },
    { fields: { 'appPlans.pricesHistory.value': 1 }, options: { unique: false } },
    { fields: { 'appPlans.pricesHistory.currency': 1 }, options: { unique: false } },
    { fields: { 'appPlans.pricesHistory.dateTimePeriod': 1 }, options: { unique: false } },
    { fields: { 'appPlans.trialDays': 1 }, options: { unique: false } },
    { fields: { name: 1 }, options: { unique: true } },
    { fields: { alias: 1 }, options: { unique: true } },
])
@Extends(Thing)
export class App extends Thing {

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
    @Override()
    @Unique()
    @MinLength(1)
    @MaxLength(30)
    @Type({ type: Types.STRING })
    name: string | null = null;

    @Schemable()
    @Required()
    @Unique()
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(AppAlias).map((key: string) => AppAlias[key as keyof typeof AppAlias]))
    alias: AppAlias | null = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isActive: boolean | null = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isPublic: boolean | null = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] | null = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: AppPlan, arrayItemType: Types.OBJECT })
    appPlans?: AppPlan[] | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    icon: string | null = null;

}
