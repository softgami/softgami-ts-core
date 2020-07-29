import { CurrencyCodes } from './currency-codes.enum';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Override } from '../../core/shared/decorators/override.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../core/shared/decorators/skip-id.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { UnityValue } from '../../core/shared/value/unity-value.model';

// @dynamic
@Extends(UnityValue)
@SkipID()
export class Currency extends UnityValue {

    @Schemable()
    @Override()
    @Required()
    @Enum(Object.keys(CurrencyCodes).map((key: string) => CurrencyCodes[key]))
    @Unique()
    @Trim()
    @Type({ type: Types.ENUM })
    code: CurrencyCodes = null;

}
