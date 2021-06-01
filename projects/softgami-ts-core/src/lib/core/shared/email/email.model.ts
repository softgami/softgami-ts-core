import { Default } from '../../../core/shared/decorators/default.decorator';
import { EmailType } from './email-type.enum';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../../core/shared/decorators/min-length.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

// @dynamic
@SkipID()
@Extends(Thing)
export class Email extends Thing {

    @Schemable()
    @Enum(Object.keys(EmailType).map((key: string) => EmailType[key as keyof typeof EmailType]))
    @Required()
    @Trim()
    @Type({ type: Types.ENUM })
    type: EmailType | null = null;

    @Schemable()
    @QueryParam()
    @Required()
    @Trim()
    @Unique()
    @MinLength(1)
    @MaxLength(100)
    @Type({ type: Types.STRING })
    address: string | null = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isPrimary: boolean | null = null;

    @Schemable()
    @Default(false)
    @Type({ type: Types.BOOLEAN })
    isVerified?: boolean | null = null;

}
