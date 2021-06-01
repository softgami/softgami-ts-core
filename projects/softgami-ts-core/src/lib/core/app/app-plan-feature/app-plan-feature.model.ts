import { Default } from '../../shared/decorators/default.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../shared/decorators/max-length.decorator';
import { Min } from '../../shared/decorators/min.decorator';
import { MinLength } from '../../shared/decorators/min-length.decorator';
import { QueryParam } from '../../shared/decorators/query-param.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Trim } from '../../shared/decorators/trim.decorator';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';
import { Unique } from '../../shared/decorators/unique.decorator';

@Extends(Thing)
@GenerateMongoObjectID()
export class AppPlanFeature extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    alias: string | null = null;

    @Schemable()
    @Min(0)
    @Type({ type: Types.NUMBER })
    value?: number | null = null;

    @Schemable()
    @Trim()
    @Default(null)
    @MinLength(1)
    @MaxLength(2000)
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    info?: string[] | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    icon?: string | null = null;

}
