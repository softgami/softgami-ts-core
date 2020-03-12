import { Currency } from '../../internal';
import { DateTimePeriods } from '../../internal';
import { Enum } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { Override } from '../../internal';
import { QuantitativeValue } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { SkipID } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { Unique } from '../../internal';

// @dynamic
@SkipID()
@Extends(QuantitativeValue)
export class MonetaryValue extends QuantitativeValue {

    @Schemable()
    @Required()
    @Override()
    @Type({ type: Types.DECIMAL128 })
    value: number = null;

    @Schemable()
    @ExcludeIndexes()
    @Required()
    @Type({ type: Types.OBJECT, class: Currency })
    currency: Currency = null;

    @Schemable()
    @Required()
    @Trim()
    @Index()
    @Unique()
    @Enum(Object.keys(DateTimePeriods).map((key: string) => DateTimePeriods[key]))
    @Type({ type: Types.ENUM })
    dateTimePeriod: DateTimePeriods = null;

    @Schemable()
    @Type({ type: Types.DATE })
    createdAt?: Date = null;

}
