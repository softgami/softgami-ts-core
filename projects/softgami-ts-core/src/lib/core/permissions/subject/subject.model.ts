import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../../core/shared/decorators/default.decorator';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Override } from '../../../core/shared/decorators/override.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../../core/shared/decorators/sortable.decorator';
import { SubjectAlias } from './subject-alias.enum';
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
export class Subject extends Thing {

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
    @Sortable({ label: 'NAME' })
    @Type({ type: Types.STRING })
    name: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Trim()
    @Unique()
    @Enum(Object.keys(SubjectAlias).map((key: string) => SubjectAlias[key as keyof typeof SubjectAlias]))
    @Sortable({ label: 'ALIAS' })
    @Type({ type: Types.ENUM })
    alias: SubjectAlias | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Default(true)
    @Sortable({ label: 'STATUS' })
    @Type({ type: Types.BOOLEAN })
    isActive: boolean | null = null;

}
