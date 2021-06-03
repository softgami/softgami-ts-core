import { Default } from '../../core/shared/decorators/default.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { Min } from '../../core/shared/decorators/min.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID()
export class BaseFile extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isFile: boolean | null = null;

    @Schemable()
    @Required()
    @Default(false)
    @Type({ type: Types.BOOLEAN })
    isDirectory: boolean | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(1000)
    @Type({ type: Types.STRING })
    path?: string | null = null;

    @Schemable()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isPublic?: boolean | null = null;

    @Schemable()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isPersonal?: boolean | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(50)
    @Type({ type: Types.STRING })
    mimetype?: string | null = null;

    @Schemable()
    @Min(0)
    @Type({ type: Types.NUMBER })
    size?: number | null = null;

    @Schemable()
    @Min(0)
    @Type({ type: Types.NUMBER })
    totalFilesChildren?: number | null = null;

    @Schemable()
    @Min(0)
    @Type({ type: Types.NUMBER })
    totalDirectoriesChildren?: number | null = null;

}
