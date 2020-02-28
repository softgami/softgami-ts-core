import { CurrencyCodes } from 'projects/softgami-ts-core/src/lib/content-maker/currency/currency-codes.enum';
import { Enum } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/enum.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Index } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/index.decorator';
import { Override } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/override.decorator';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { Unique } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/unique.decorator';
import { UnityValue } from 'projects/softgami-ts-core/src/lib/core/shared/value/unity-value.model';

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
