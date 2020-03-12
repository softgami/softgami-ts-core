import { BasicDomain } from '../../internal';
import { CompoundIndex } from '../../internal';
import { DomainType } from '../../internal';
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
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { name : 1, type : 1, value: 1 }, options: { unique : true }},
])
@Extends(BasicDomain)
export class Domain<T extends DomainType> extends BasicDomain<T> {

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
