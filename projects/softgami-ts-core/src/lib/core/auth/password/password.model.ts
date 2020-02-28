import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { SkipID } from '@lib/core/shared/decorators/skip-id.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

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
