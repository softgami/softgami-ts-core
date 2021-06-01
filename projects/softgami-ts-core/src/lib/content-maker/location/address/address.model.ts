import { AddressType } from './address-type.enum';
import { City } from '../city/city.model';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../../core/shared/decorators/generate-mongo-object-id.decorator';
import { MaxLength } from '../../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../../core/shared/decorators/min-length.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID()
export class Address extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Enum(Object.keys(AddressType).map((key: string) => AddressType[key as keyof typeof AddressType]))
    @Trim()
    @Type({ type: Types.ENUM })
    type: AddressType | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    postalCode: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    street: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    number: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(50)
    @Type({ type: Types.STRING })
    complement: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @MinLength(1)
    @MaxLength(100)
    @Type({ type: Types.STRING })
    district: string | null = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: City })
    city: City | null = null;

}
