import { Default } from '../../../core/shared/decorators/default.decorator';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../../core/shared/decorators/min-length.decorator';
import { PhoneType } from './phone-type.enum';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
export class Phone extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @Enum(Object.keys(PhoneType).map((key: string) => PhoneType[key as keyof typeof PhoneType]))
    @Type({ type: Types.ENUM })
    type: PhoneType | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    number: string | null = null;

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
