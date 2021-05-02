
import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';

@Extends(Thing)
export class Cover extends Thing {

    @Required()
    @Type({ type: Types.NUMBER })
    index: number | null = null;

    @Type({ type: Types.NUMBER })
    totalCovers?: number | null = null;

    @Type({ type: Types.BOOLEAN })
    isLoading?: boolean | null = null;

    @Type({ type: Types.STRING })
    fileName?: string | null = null;

    @Type({ type: Types.STRING })
    path?: string | null = null;

    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance | null = null;

    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    gamiBooksAppInstance?: AppInstance | null = null;

    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    contentMakerAppInstance?: AppInstance | null = null;

}
