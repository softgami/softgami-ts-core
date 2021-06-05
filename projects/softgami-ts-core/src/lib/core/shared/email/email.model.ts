import { Default } from '../decorators/default.decorator';
import { EmailType } from './email-type.enum';
import { Enum } from '../decorators/enum.decorator';
import { Extends } from '../decorators/extends.decorator';
import { GenerateMongoObjectID } from '../decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../decorators/max-length.decorator';
import { MinLength } from '../decorators/min-length.decorator';
import { QueryParam } from '../decorators/query-param.decorator';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { Thing } from '../thing/thing.model';
import { Trim } from '../decorators/trim.decorator';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';
import { Unique } from '../decorators/unique.decorator';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
export class Email extends Thing {

    @Schemable()
    @Enum(Object.keys(EmailType).map((key: string) => EmailType[key as keyof typeof EmailType]))
    @Required()
    @Trim()
    @Type({ type: Types.ENUM, enumItemType: Types.STRING })
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
