import { BasicAppInstance } from '../../../internal';
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
