
import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Max } from '../../core/shared/decorators/max.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { Min } from '../../core/shared/decorators/min.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';

@Extends(Thing)
export class Cover extends Thing {

    @Required()
    @Min(0)
    @Max(100000)
    @Type({ type: Types.NUMBER })
    index: number | null = null;

    @Type({ type: Types.NUMBER })
    @Min(0)
    @Max(100000)
    totalCovers?: number | null = null;

    @Type({ type: Types.BOOLEAN })
    isLoading?: boolean | null = null;

    @MinLength(0)
    @MaxLength(1000)
    @Type({ type: Types.STRING })
    fileName?: string | null = null;

    @MinLength(0)
    @MaxLength(1000)
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
