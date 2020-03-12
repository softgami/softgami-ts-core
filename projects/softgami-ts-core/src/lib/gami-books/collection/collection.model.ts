import { BasicCollection } from '../../internal';
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
    { fields: { isActive : 1 }, options: { unique : false }},
    { fields: { isCompleted : 1 }, options: { unique : false }},
    { fields: { isFinished : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { 'parent._id' : 1 }, options: { unique : false }},
    { fields: { 'parent.name' : 1 }, options: { unique : false }},
    { fields: { 'ancestors._id' : 1 }, options: { unique : false }},
    { fields: { 'ancestors.name' : 1 }, options: { unique : false }},
])
@Extends(BasicCollection)
export class Collection extends BasicCollection {

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
