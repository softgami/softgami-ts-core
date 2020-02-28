import { CurrencyCodes } from '@lib/content-maker/currency/currency-codes.enum';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { Override } from '@lib/core/shared/decorators/override.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';
import { UnityValue } from '@lib/core/shared/value/unity-value.model';

// @dynamic
@Extends(UnityValue)
export class BasicCurrency extends UnityValue {

    @Schemable()
    @Override()
    @Required()
    @Enum(Object.keys(CurrencyCodes).map((key: string) => CurrencyCodes[key]))
    @Index()
    @Unique()
    @Trim()
    @Type({ type: Types.ENUM })
    code: CurrencyCodes = null;

}
