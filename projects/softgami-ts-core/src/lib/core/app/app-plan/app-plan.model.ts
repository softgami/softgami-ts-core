import { BasicAppPlan } from '../../../internal';
import { CompoundIndex } from '../../../internal';
import { Extends } from '../../../internal';
import { Index } from '../../../internal';
import { QueryParam } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { Unique } from '../../../internal';

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
