import { Default } from '@lib/core/shared/decorators/default.decorator';
import { EmailType } from './email-type.enum';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { SkipID } from '@lib/core/shared/decorators/skip-id.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

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
