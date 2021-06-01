import { Currency } from './currency.model';
import { DateTimePeriods } from '../../core/shared/date-time/date-time-periods.enum';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { Override } from '../../core/shared/decorators/override.decorator';
import { QuantitativeValue } from '../../core/shared/value/quantitative-value.model';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../core/shared/decorators/skip-id.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';

// @dynamic
@SkipID()
@Extends(QuantitativeValue)
@GenerateMongoObjectID(false)
export class MonetaryValue extends QuantitativeValue {

    @Schemable()
    @Required()
    @Override()
    @Type({ type: Types.DECIMAL128 })
    value: number | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Required()
    @Type({ type: Types.OBJECT, class: Currency })
    currency: Currency | null = null;

    @Schemable()
    @Required()
    @Trim()
    @Unique()
    @Enum(Object.keys(DateTimePeriods).map((key: string) => DateTimePeriods[key as keyof typeof DateTimePeriods]))
    @Type({ type: Types.ENUM })
    dateTimePeriod: DateTimePeriods | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    createdAt?: Date | null = null;

}
