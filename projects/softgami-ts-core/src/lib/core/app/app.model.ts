import { BasicApp } from '../../internal';
import { CompoundIndex } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { QueryParam } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { Unique } from '../../internal';

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
