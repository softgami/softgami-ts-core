import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

// @dynamic
@Extends(User)
@GenerateMongoObjectID(false)
export class Reader extends User {

    @Schemable()
    @Type({ type: Types.DATE })
    readAt?: Date | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    issuedAt?: Date | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    dueDate?: Date | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    returnedAt?: Date | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    createdAt?: Date | null = null;

}
