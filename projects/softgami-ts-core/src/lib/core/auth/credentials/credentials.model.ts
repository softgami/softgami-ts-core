import { Default } from '../../../internal';
import { Password } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { SkipID } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

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
