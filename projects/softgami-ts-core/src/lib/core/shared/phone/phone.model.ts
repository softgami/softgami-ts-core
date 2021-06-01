import { Default } from '../decorators/default.decorator';
import { Enum } from '../decorators/enum.decorator';
import { Extends } from '../decorators/extends.decorator';
import { GenerateMongoObjectID } from '../decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../decorators/max-length.decorator';
import { MinLength } from '../decorators/min-length.decorator';
import { PhoneType } from './phone-type.enum';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { SkipID } from '../decorators/skip-id.decorator';
import { Thing } from '../thing/thing.model';
import { Trim } from '../decorators/trim.decorator';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
@GenerateMongoObjectID(false)
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
    @MaxLength(30)
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
