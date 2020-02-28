import { Currency } from './currency.model';
import { DateTimePeriods } from '@lib/core/shared/date-time/date-time-periods.enum';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { Override } from '@lib/core/shared/decorators/override.decorator';
import { QuantitativeValue } from '@lib/core/shared/value/quantitative-value.model';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { SkipID } from '@lib/core/shared/decorators/skip-id.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

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
