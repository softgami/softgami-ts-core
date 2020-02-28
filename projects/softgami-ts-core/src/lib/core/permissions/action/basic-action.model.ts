import { ActionAlias } from './action-alias.enum';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { Override } from '@lib/core/shared/decorators/override.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

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
