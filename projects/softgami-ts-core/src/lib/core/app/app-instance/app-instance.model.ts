import { BasicAppInstance } from './basic-app-instance.model';
import { CompoundIndex } from '@lib/core/shared/decorators/compound-index.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { QueryParam } from '@lib/core/shared/decorators/query-param.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

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
@Extends(BasicAppInstance)
export class AppInstance extends BasicAppInstance {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

}
