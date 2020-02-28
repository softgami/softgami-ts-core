import { AddressType } from './address-type.enum';
import { City } from '../city/city.model';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

// @dynamic
export class Address {

    @Schemable()
    @Required()
    @Enum(Object.keys(AddressType).map((key: string) => AddressType[key]))
    @Trim()
    @Type({ type: Types.ENUM })
    type: AddressType = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    name: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    postalCode: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    street: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    number: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    complement: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Type({ type: Types.STRING })
    district: string = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: City })
    city: City = null;

}
