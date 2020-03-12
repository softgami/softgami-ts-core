import { Default } from '../../../internal';
import { Enum } from '../../../internal';
import { Extends } from '../../../internal';
import { Index } from '../../../internal';
import { Override } from '../../../internal';
import { Required } from '../../../internal';
import { RoleAlias } from '../../../internal';
import { Schemable } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { Unique } from '../../../internal';

// @dynamic
@Extends(Thing)
export class BasicRole extends Thing {

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
    @Enum(Object.keys(RoleAlias).map((key: string) => RoleAlias[key]))
    @Type({ type: Types.ENUM })
    alias: RoleAlias = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isActive: boolean = null;

}
