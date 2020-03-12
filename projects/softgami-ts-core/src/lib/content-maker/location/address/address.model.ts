import { AddressType } from '../../../internal';
import { City } from '../../../internal';
import { Enum } from '../../../internal';
import { ExcludeIndexes } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

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
