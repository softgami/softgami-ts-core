import { Default } from '../shared/decorators/default.decorator';
import { Email } from '../shared/email/email.model';
import { Extends } from '../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../shared/decorators/query-param.decorator';
import { Required } from '../shared/decorators/required.decorator';
import { Schemable } from '../shared/decorators/schemable.decorator';
import { Thing } from '../shared/thing/thing.model';
import { Trim } from '../shared/decorators/trim.decorator';
import { Type } from '../shared/decorators/type.decorator';
import { Types } from '../shared/models/types.enum';
import { Unique } from '../shared/decorators/unique.decorator';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID()
export class HostUser extends Thing {

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
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isIndividual: boolean | null = null;

    @Schemable()
    @Default(undefined)
    @QueryParam()
    @Type({ type: Types.ARRAY, class: Email, arrayItemType: Types.OBJECT })
    emails?: Email[] | null = null;

    @Schemable()
    @Default(true)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isActive?: boolean | null = null;

}
