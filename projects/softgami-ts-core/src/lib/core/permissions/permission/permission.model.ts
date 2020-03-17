import { BasicPermission } from './basic-permission.model';
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
