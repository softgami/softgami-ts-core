import { BasicAppPlan } from './basic-app-plan.model';
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
    { fields: { name : 1 }, options: { unique : false }},
    { fields: { alias : 1 }, options: { unique : false }},
    { fields: { appId : 1 }, options: { unique : false }},
    { fields: { 'appPlanFeatures._id' : 1 }, options: { unique : false }},
    { fields: { 'appPlanFeatures.name' : 1 }, options: { unique : false }},
    { fields: { 'appPlanFeatures.alias' : 1 }, options: { unique : false }},
    { fields: { 'prices.value' : 1 }, options: { unique : false }},
    { fields: { 'prices.currency._id' : 1 }, options: { unique : false }},
    { fields: { 'prices.currency.code' : 1 }, options: { unique : false }},
    { fields: { 'prices.dateTimePeriod' : 1 }, options: { unique : false }},
    { fields: { 'pricesHistory.value' : 1 }, options: { unique : false }},
    { fields: { 'pricesHistory.currency._id' : 1 }, options: { unique : false }},
    { fields: { 'pricesHistory.currency.code' : 1 }, options: { unique : false }},
    { fields: { 'pricesHistory.dateTimePeriod' : 1 }, options: { unique : false }},
    { fields: { trialDays : 1 }, options: { unique : false }},
])
@Extends(BasicAppPlan)
export class AppPlan extends BasicAppPlan {

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
