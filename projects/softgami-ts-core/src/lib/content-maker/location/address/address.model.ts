import { AddressType } from './address-type.enum';
import { City } from '../city/city.model';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
export class Address extends Thing {

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
