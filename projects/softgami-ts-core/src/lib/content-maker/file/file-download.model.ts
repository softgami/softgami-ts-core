import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../core/shared/decorators/skip-id.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

@SkipID()
export class FileDownload {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    user: User = null;

    @Schemable()
    @Required()
    @Type({ type: Types.DATE })
    downloadedAt: Date = null;

}
