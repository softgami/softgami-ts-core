import { BasicUser } from '../../core/user/basic-user.model';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';

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
