
import { Extends } from '../../core/shared/decorators/extends.decorator';
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

}
