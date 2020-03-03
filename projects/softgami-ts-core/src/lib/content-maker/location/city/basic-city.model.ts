import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { State } from '../state/state.model';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

@Extends(Thing)
export class BasicCity extends Thing {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: State })
    state: State = null;

}
