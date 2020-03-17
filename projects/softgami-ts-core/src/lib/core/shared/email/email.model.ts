import { Default } from '../../../core/shared/decorators/default.decorator';
import { EmailType } from './email-type.enum';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

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
