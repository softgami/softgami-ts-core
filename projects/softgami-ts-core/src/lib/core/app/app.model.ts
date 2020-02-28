import { BasicApp } from './basic-app.model';
import { CompoundIndex } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/compound-index.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Index } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/index.decorator';
import { QueryParam } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/query-param.decorator';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { Unique } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { 'roles.alias' : 1 }, options: { unique : false }},
    { fields: { 'roles._id' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.name' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.alias' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.appId' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.appPlanFeatures._id' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.appPlanFeatures.name' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.appPlanFeatures.alias' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.prices._id' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.prices.value' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.prices.currency' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.prices.dateTimePeriod' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.pricesHistory._id' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.pricesHistory.value' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.pricesHistory.currency' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.pricesHistory.dateTimePeriod' : 1 }, options: { unique : false }},
    { fields: { 'appPlans.trialDays' : 1 }, options: { unique : false }},
])
@Extends(BasicApp)
export class App extends BasicApp {

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
