import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { SkipID } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/skip-id.decorator';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';

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
