import { Default } from '../../shared/decorators/default.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { Password } from '../password/password.model';
import { Required } from '../../shared/decorators/required.decorator';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { SkipID } from '../../shared/decorators/skip-id.decorator';
import { Thing } from '../../shared/thing/thing.model';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
@GenerateMongoObjectID(false)
export class Credentials extends Thing {

    @Schemable()
    @Required()
    @Type({ type: Types.OBJECT, class: Password })
    current: Password | null = null;

    @Schemable()
    @Type({ type: Types.OBJECT, class: Password })
    new?: Password | null = null;

    @Schemable()
    @Type({ type: Types.OBJECT, class: Password })
    confirm?: Password | null = null;

    @Schemable()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Password, arrayItemType: Types.OBJECT })
    old?: Password[] | null = null;

}
