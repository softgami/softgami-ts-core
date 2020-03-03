import { BasicAppInstance } from './basic-app-instance.model';
import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

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
