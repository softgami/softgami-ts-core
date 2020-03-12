
import { Extends } from '../../internal';
import { Required } from '../../internal';
import { Thing } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';

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
