import { Default } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/default.decorator';
import { Enum } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/enum.decorator';
import { PhoneType } from './phone-type.enum';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { SkipID } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/skip-id.decorator';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';

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
