import { ExcludeIndexes } from '../decorators/exclude-indexes.decorator';
import { Extends } from '../decorators/extends.decorator';
import { GenerateMongoObjectID } from '../decorators/generate-mongo-object-id.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { Thing } from '../thing/thing.model';
import { Trim } from '../decorators/trim.decorator';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';
import { User } from '../../user/user.model';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID()
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
