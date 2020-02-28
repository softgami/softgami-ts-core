import { BasicUser } from 'projects/softgami-ts-core/src/lib/core/user/basic-user.model';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';

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
