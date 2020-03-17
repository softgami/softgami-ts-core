import { Default } from '../../../core/shared/decorators/default.decorator';
import { Password } from '../password/password.model';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

@SkipID()
export class Credentials {

    @Schemable()
    @Required()
    @Type({ type: Types.OBJECT, class: Password })
    current: Password = null;

    @Schemable()
    @Type({ type: Types.OBJECT, class: Password })
    new?: Password = null;

    @Schemable()
    @Type({ type: Types.OBJECT, class: Password })
    confirm?: Password = null;

    @Schemable()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Password, arrayItemType: Types.OBJECT })
    old?: Password[] = null;

}
