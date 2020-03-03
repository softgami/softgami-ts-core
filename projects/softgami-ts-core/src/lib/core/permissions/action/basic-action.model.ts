import { ActionAlias } from './action-alias.enum';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { Override } from '../../../core/shared/decorators/override.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

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
