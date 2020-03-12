import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { Schemable } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { User } from '../../../internal';

@Extends(Thing)
export class Organization extends Thing {

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    taxNumber?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

}
