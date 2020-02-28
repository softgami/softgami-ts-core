import { ActionAlias } from './action-alias.enum';
import { Enum } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/enum.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Index } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/index.decorator';
import { Override } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/override.decorator';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Thing } from 'projects/softgami-ts-core/src/lib/core/shared/thing/thing.model';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { Unique } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/unique.decorator';

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
