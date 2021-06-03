import { App } from '../app.model';
import { AppPlan } from '../../app/app-plan/app-plan.model';
import { CompoundIndex } from '../../shared/decorators/compound-index.decorator';
import { Default } from '../../shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../../shared/decorators/query-param.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Role } from '../../permissions/role/role.model';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';
import { Unique } from '../../shared/decorators/unique.decorator';
import { User } from '../../user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { isActive: 1 }, options: { unique: false } },
    { fields: { numberOfUsers: 1 }, options: { unique: false } },
    { fields: { 'app._id': 1 }, options: { unique: false } },
    { fields: { 'app.alias': 1 }, options: { unique: false } },
    { fields: { 'roles._id': 1 }, options: { unique: false } },
    { fields: { 'roles.alias': 1 }, options: { unique: false } },
    { fields: { 'creator._id': 1 }, options: { unique: false } },
    { fields: { 'appPlan.name': 1 }, options: { unique: false } },
    { fields: { 'appPlan.alias': 1 }, options: { unique: false } },
    { fields: { 'appPlan.appId': 1 }, options: { unique: false } },
    { fields: { 'appPlan.prices._id': 1 }, options: { unique: false } },
    { fields: { 'appPlan.prices.value': 1 }, options: { unique: false } },
    { fields: { 'appPlan.prices.currency': 1 }, options: { unique: false } },
    { fields: { 'appPlan.prices.dateTimePeriod': 1 }, options: { unique: false } },
    { fields: { 'appPlan.trialDays': 1 }, options: { unique: false } },
    { fields: { 'users._id': 1 }, options: { unique: false } },
    { fields: { 'users.name': 1 }, options: { unique: false } },
])
@Extends(Thing)
@GenerateMongoObjectID()
export class AppInstance extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @QueryParam()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: App })
    app: App | null = null;

    @Schemable()
    @QueryParam()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isActive: boolean | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(void 0)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.OBJECT, class: AppPlan })
    appPlans?: AppPlan[] | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(void 0)
    @Type({ type: Types.ARRAY, class: User, arrayItemType: Types.OBJECT })
    users?: User[] | null = null;

    @Schemable()
    @QueryParam()
    @Type({ type: Types.NUMBER })
    numberOfUsers?: number | null = null;

    @Schemable()
    @Type({ type: Types.BOOLEAN })
    isFavorite?: boolean | null = null;

}
