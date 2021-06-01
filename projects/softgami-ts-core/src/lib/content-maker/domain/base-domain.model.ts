import { DomainType } from './domain-type.enum';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
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
export class BaseDomain<T extends DomainType> extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @QueryParam()
    @Trim()
    @Required()
    @Enum(Object.keys(DomainType).map((key: string) => DomainType[key as keyof typeof DomainType]))
    @Type({ type: Types.ENUM })
    type: T | null = null;

    @Schemable()
    @QueryParam()
    @Trim()
    @Required()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    value: string | null = null;

    @Schemable()
    @QueryParam()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    additionalMetadata?: string | null = null;

}
