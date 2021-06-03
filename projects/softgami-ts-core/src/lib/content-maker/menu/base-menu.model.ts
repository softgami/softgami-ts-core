import { Default } from '../../core/shared/decorators/default.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { Max } from '../../core/shared/decorators/max.decorator';
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
export class BaseMenu extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Default(1)
    @Min(1)
    @Max(200)
    @Type({ type: Types.NUMBER })
    index: number | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isActive: boolean | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    icon?: string | null = null;

}
