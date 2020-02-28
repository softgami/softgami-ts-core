import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Role } from '../role/role.model';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Subject } from '../subject/subject.model';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

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
