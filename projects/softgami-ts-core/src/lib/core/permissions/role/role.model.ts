import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../../core/shared/decorators/default.decorator';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../../core/shared/decorators/min-length.decorator';
import { Override } from '../../../core/shared/decorators/override.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { RoleAlias } from './role-alias.enum';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../../core/shared/decorators/sortable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: true } },
    { fields: { alias: 1 }, options: { unique: true } },
    { fields: { isActive: 1 }, options: { unique: true } },
])
@Extends(Thing)
export class Role extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Trim()
    @Override()
    @Unique()
    @MinLength(1)
    @MaxLength(40)
    @Sortable({ label: 'NAME' })
    @Type({ type: Types.STRING })
    name: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Trim()
    @Unique()
    @Enum(Object.keys(RoleAlias).map((key: string) => RoleAlias[key as keyof typeof RoleAlias]))
    @Sortable({ label: 'ALIAS' })
    @Type({ type: Types.ENUM })
    alias: RoleAlias | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Default(true)
    @Sortable({ label: 'STATUS' })
    @Type({ type: Types.BOOLEAN })
    isActive: boolean | null = null;

}
