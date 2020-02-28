
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Thing } from 'projects/softgami-ts-core/src/lib/core/shared/thing/thing.model';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';

@Extends(Thing)
export class Cover extends Thing {

    @Required()
    @Type({ type: Types.NUMBER })
    index: number = null;

    @Type({ type: Types.NUMBER })
    totalCovers?: number = null;

    @Type({ type: Types.BOOLEAN })
    isLoading?: boolean = null;

}
