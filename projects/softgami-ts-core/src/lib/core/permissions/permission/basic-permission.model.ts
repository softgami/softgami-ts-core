import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Role } from '../role/role.model';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Subject } from '../subject/subject.model';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

@Extends(Thing)
export class BasicPermission extends Thing {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Subject })
    subject: Subject;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Role })
    role: Role;

    @Required()
    @Schemable()
    @Type({ type: Types.NUMBER })
    value: number;

}
