import { AppAlias } from './app-alias.enum';
import { AppPlan } from '../app/app-plan/app-plan.model';
import { CompoundIndex } from '../shared/decorators/compound-index.decorator';
import { Default } from '../shared/decorators/default.decorator';
import { Enum } from '../shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../shared/decorators/max-length.decorator';
import { MinLength } from '../shared/decorators/min-length.decorator';
import { Override } from '../shared/decorators/override.decorator';
import { QueryParam } from '../shared/decorators/query-param.decorator';
import { Required } from '../shared/decorators/required.decorator';
import { Role } from '../permissions/role/role.model';
import { Schemable } from '../shared/decorators/schemable.decorator';
import { Thing } from '../shared/thing/thing.model';
import { Trim } from '../shared/decorators/trim.decorator';
import { Type } from '../shared/decorators/type.decorator';
import { Types } from '../shared/models/types.enum';
import { Unique } from '../shared/decorators/unique.decorator';

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
@GenerateMongoObjectID()
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
    @Type({ type: Types.ENUM, enumItemType: Types.STRING })
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
    @Default(void 0)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] | null = null;

    @Schemable()
    @Default(void 0)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: AppPlan, arrayItemType: Types.OBJECT })
    appPlans?: AppPlan[] | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    icon?: string | null = null;

}
