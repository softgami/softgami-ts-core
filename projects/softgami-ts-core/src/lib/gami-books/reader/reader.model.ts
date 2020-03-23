import { Extends } from '../../core/shared/decorators/extends.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../core/shared/decorators/skip-id.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';

@SkipID()
@Extends(User)
export class Reader extends User {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

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
