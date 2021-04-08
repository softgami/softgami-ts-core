import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { User } from '../../../core/user/user.model';

@Extends(Thing)
export class Organization extends Thing {

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    taxNumber?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

}
