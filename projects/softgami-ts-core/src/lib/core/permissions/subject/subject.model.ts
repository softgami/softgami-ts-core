import { CompoundIndex } from '../../shared/decorators/compound-index.decorator';
import { Default } from '../../shared/decorators/default.decorator';
import { Enum } from '../../shared/decorators/enum.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../shared/decorators/max-length.decorator';
import { MinLength } from '../../shared/decorators/min-length.decorator';
import { Override } from '../../shared/decorators/override.decorator';
import { QueryParam } from '../../shared/decorators/query-param.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { Sortable } from '../../shared/decorators/sortable.decorator';
import { SubjectAlias } from './subject-alias.enum';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';
import { Unique } from '../../shared/decorators/unique.decorator';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: true } },
    { fields: { alias: 1 }, options: { unique: true } },
    { fields: { isActive: 1 }, options: { unique: false } },
])
@Extends(Thing)
@GenerateMongoObjectID()
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
    @Enum(Object.keys(SubjectAlias).map((key: string) => SubjectAlias[key as keyof typeof SubjectAlias]))
    @Sortable({ label: 'ALIAS' })
    @Type({ type: Types.ENUM, enumItemType: Types.STRING })
    alias: SubjectAlias | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Default(true)
    @Sortable({ label: 'STATUS' })
    @Type({ type: Types.BOOLEAN })
    isActive: boolean | null = null;

}
