import { BasicPermission } from '../../../internal';
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
    { fields: { 'subject._id' : 1, 'role._id' : 1 }, options: { unique : true }},
    { fields: { 'subject.alias' : 1, 'role.alias' : 1 }, options: { unique : true }},
    { fields: { 'subject.alias' : 1 }, options: { unique : false }},
    { fields: { 'subject._id' : 1 }, options: { unique : false }},
    { fields: { 'role.alias' : 1 }, options: { unique : false }},
    { fields: { 'role._id' : 1 }, options: { unique : false }},
])
@Extends(BasicPermission)
export class Permission extends BasicPermission {

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
