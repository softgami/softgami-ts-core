import { Default } from '../../../core/shared/decorators/default.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Password } from '../password/password.model';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
export class Credentials extends Thing {

    @Schemable()
    @Required()
    @Type({ type: Types.OBJECT, class: Password })
    current: Password | null = null;

    @Schemable()
    @Type({ type: Types.OBJECT, class: Password })
    new?: Password | null = null;

    @Schemable()
    @Type({ type: Types.OBJECT, class: Password })
    confirm?: Password | null = null;

    @Schemable()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Password, arrayItemType: Types.OBJECT })
    old?: Password[] | null = null;

}
