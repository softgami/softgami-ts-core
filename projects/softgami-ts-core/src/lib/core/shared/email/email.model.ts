import { Default } from '../../../internal';
import { EmailType } from '../../../internal';
import { Enum } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { SkipID } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { Unique } from '../../../internal';

// @dynamic
@SkipID()
export class Email {

    @Schemable()
    @Enum(Object.keys(EmailType).map((key: string) => EmailType[key]))
    @Required()
    @Trim()
    @Type({ type: Types.ENUM })
    type: EmailType = null;

    @Schemable()
    @Required()
    @Trim()
    @Unique()
    @Type({ type: Types.STRING })
    address: string = null;

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
