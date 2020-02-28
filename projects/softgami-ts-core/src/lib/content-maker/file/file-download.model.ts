import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { SkipID } from '@lib/core/shared/decorators/skip-id.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { User } from '@lib/core/user/user.model';

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
