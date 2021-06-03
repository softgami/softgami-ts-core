import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../shared/decorators/max-length.decorator';
import { MinLength } from '../../shared/decorators/min-length.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
export class Password extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(100)
    @Type({ type: Types.STRING })
    hash: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(100)
    @Type({ type: Types.STRING })
    salt: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(100)
    @Type({ type: Types.STRING })
    algorithm: string | null = null;

}
