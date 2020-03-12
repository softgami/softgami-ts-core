import { CurrencyCodes } from '../../internal';
import { Enum } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { Override } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { Unique } from '../../internal';
import { UnityValue } from '../../internal';

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
