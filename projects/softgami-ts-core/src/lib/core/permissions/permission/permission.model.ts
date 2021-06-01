import { CompoundIndex } from '../../shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '../../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../../shared/decorators/query-param.decorator';
import { Max } from '../../shared/decorators/max.decorator';
import { Min } from '../../shared/decorators/min.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Role } from '../role/role.model';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { Subject } from '../subject/subject.model';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';
import { Unique } from '../../shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { 'subject._id': 1, 'role._id': 1 }, options: { unique: true } },
    { fields: { 'subject.alias': 1, 'role.alias': 1 }, options: { unique: true } },
    { fields: { 'subject.alias': 1 }, options: { unique: false } },
    { fields: { 'subject._id': 1 }, options: { unique: false } },
    { fields: { 'role.alias': 1 }, options: { unique: false } },
    { fields: { 'role._id': 1 }, options: { unique: false } },
])
@Extends(Thing)
@GenerateMongoObjectID()
export class Permission extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Subject })
    subject: Subject | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Role })
    role: Role | null = null;

    @Required()
    @Schemable()
    @Min(0)
    @Max(200)
    @Type({ type: Types.NUMBER })
    value: number | null = null;

}
