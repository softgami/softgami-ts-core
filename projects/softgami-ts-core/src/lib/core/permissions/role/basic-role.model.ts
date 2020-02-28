import { Default } from '@lib/core/shared/decorators/default.decorator';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { Override } from '@lib/core/shared/decorators/override.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { RoleAlias } from './role-alias.enum';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

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
