import { Default } from '../../../internal';
import { Enum } from '../../../internal';
import { PhoneType } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { SkipID } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

// @dynamic
@SkipID()
export class Phone {

    @Schemable()
    @Required()
    @Trim()
    @Enum(Object.keys(PhoneType).map((key: string) => PhoneType[key]))
    @Type({ type: Types.ENUM })
    type: PhoneType = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    number: string = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isPrimary: boolean = null;

    @Schemable()
    @Default(false)
    @Type({ type: Types.BOOLEAN })
    isVerified?: boolean = null;
}
