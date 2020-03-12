import { ActionAlias } from '../../../internal';
import { Enum } from '../../../internal';
import { Extends } from '../../../internal';
import { Index } from '../../../internal';
import { Override } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { Unique } from '../../../internal';

// @dynamic
@Extends(Thing)
export class BasicAction extends Thing {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @Override()
    @Unique()
    @Type({ type: Types.STRING })
    name: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Index()
    @Unique()
    @Enum(Object.keys(ActionAlias).map((key: string) => ActionAlias[key]))
    @Type({ type: Types.ENUM })
    alias: ActionAlias = null;

    @Schemable()
    @Required()
    @Type({ type: Types.NUMBER })
    value: number = null;

}
