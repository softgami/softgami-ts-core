import { BasicPermission } from './basic-permission.model';
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
