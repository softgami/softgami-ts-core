import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { Required } from '../../../internal';
import { Role } from '../../../internal';
import { Schemable } from '../../../internal';
import { Subject } from '../../../internal';
import { Thing } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

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
