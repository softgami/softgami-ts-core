import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Role } from '../role/role.model';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Subject } from '../subject/subject.model';
import { Thing } from '../../../core/shared/thing/thing.model';
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
@Extends(Thing)
export class Permission extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    // tslint:disable-next-line: variable-name
    _id: string = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Subject })
    subject: Subject = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Role })
    role: Role = null;

    @Required()
    @Schemable()
    @Type({ type: Types.NUMBER })
    value: number = null;

}
