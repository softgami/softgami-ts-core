import { BasePerson } from '../../content-maker/person/base-person.model';
import { Default } from '../shared/decorators/default.decorator';
import { Email } from '../shared/email/email.model';
import { Enum } from '../shared/decorators/enum.decorator';
import { Extends } from '../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../shared/decorators/generate-mongo-object-id.decorator';
import { Override } from '../shared/decorators/override.decorator';
import { PersonType } from '../../content-maker/person/person-type.enum';
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
export class BaseUser extends BasePerson<PersonType.USER> {

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
    @Enum([ PersonType.USER ])
    @Override()
    @Type({ type: Types.ENUM, enumItemType: Types.STRING })
    type: PersonType.USER | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isIndividual: boolean | null = null;

    @Schemable()
    @Default(void 0)
    @QueryParam()
    @Type({ type: Types.ARRAY, class: Email, arrayItemType: Types.OBJECT })
    emails?: Email[] | null = null;

    @Schemable()
    @Default(true)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isActive?: boolean | null = null;

}
