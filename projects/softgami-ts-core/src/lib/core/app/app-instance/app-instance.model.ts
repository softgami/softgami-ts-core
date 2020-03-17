import { App } from '../app.model';
import { AppPlan } from '../../../core/app/app-plan/app-plan.model';
import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Role } from '../../../core/permissions/role/role.model';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';
import { User } from '../../../core/user/user.model';

@CompoundIndex([
    { fields: { 'app._id' : 1 }, options: { unique : false }},
    { fields: { 'app.alias' : 1 }, options: { unique : false }},
    { fields: { 'roles._id' : 1 }, options: { unique : false }},
    { fields: { 'roles.alias' : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.name' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.alias' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.appId' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.prices._id' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.prices.value' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.prices.currency' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.prices.dateTimePeriod' : 1 }, options: { unique : false }},
    { fields: { 'appPlan.trialDays' : 1 }, options: { unique : false }},
])
@Extends(Thing)
export class AppInstance extends Thing {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: App })
    app: App = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isActive: boolean = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.OBJECT, class: AppPlan })
    appPlans?: AppPlan[] = null;

}
