import { BasicUser } from '../../internal';
import { Extends } from '../../internal';
import { Schemable } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';

@Extends(BasicUser)
export class BasicReader extends BasicUser {

    @Schemable()
    @Type({ type: Types.DATE })
    readAt?: Date = null;

    @Schemable()
    @Type({ type: Types.DATE })
    issuedAt?: Date = null;

    @Schemable()
    @Type({ type: Types.DATE })
    dueDate?: Date = null;

    @Schemable()
    @Type({ type: Types.DATE })
    returnedAt?: Date = null;

    @Schemable()
    @Type({ type: Types.DATE })
    createdAt?: Date = null;

}
