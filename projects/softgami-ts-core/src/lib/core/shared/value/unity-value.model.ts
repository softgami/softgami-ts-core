import { CurrencyCodes } from '../../../internal';
import { Enum } from '../../../internal';
import { Extends } from '../../../internal';
import { Index } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { SkipID } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { Unique } from '../../../internal';
import { UnityValueCodes } from '../../../internal';

const unityValueCodes: string[] = Object.keys(UnityValueCodes).map((k: string) => UnityValueCodes[k]);
const currencyCodes: string[] = Object.keys(CurrencyCodes).map((k: string) => CurrencyCodes[k]);
const codes: string[] = [...new Set(unityValueCodes.concat(currencyCodes))];

// @dynamic
@SkipID()
@Extends(Thing)
export class UnityValue extends Thing {

    @Schemable()
    @Required()
    @Index()
    @Unique()
    @Trim()
    @Enum(codes)
    @Type({ type: Types.ENUM })
    code: UnityValueCodes | CurrencyCodes = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    symbol?: string = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    nativeSymbol?: string = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    decimalDigits?: number = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    rounding?: number = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    pluralName?: string = null;

}
