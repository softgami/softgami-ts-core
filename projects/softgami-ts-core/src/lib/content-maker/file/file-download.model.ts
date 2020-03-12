import { ExcludeIndexes } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { SkipID } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { User } from '../../internal';

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
