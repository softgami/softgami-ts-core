import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

@SkipID()
export class Password {

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    hash: string;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    salt: string;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    algorithm: string;

    @Schemable()
    @Type({ type: Types.DATE })
    createdAt?: Date;

    @Schemable()
    @Type({ type: Types.DATE })
    lastUpdate?: Date;

}
