import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { State } from '../../../internal';
import { Thing } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

@Extends(Thing)
export class BasicCity extends Thing {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: State })
    state: State = null;

}
