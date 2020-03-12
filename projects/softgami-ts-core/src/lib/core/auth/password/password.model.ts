import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { SkipID } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

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
