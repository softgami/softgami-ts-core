import { CurrencyCodes } from '../../../content-maker/currency/currency-codes.enum';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';
import { UnityValueCodes } from './unity-value-codes.enum';

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
