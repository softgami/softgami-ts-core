import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
export class FileDownload extends Thing {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    user: User | null = null;

    @Schemable()
    @Required()
    @Type({ type: Types.DATE })
    downloadedAt: Date | null = null;

}
