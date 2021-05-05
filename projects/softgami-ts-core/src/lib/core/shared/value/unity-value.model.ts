import { CurrencyCodes } from '../../../content-maker/currency/currency-codes.enum';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Max } from '../../../core/shared/decorators/max.decorator';
import { MaxLength } from '../../../core/shared/decorators/max-length.decorator';
import { Min } from '../../../core/shared/decorators/min.decorator';
import { MinLength } from '../../../core/shared/decorators/min-length.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';
import { UnityValueCodes } from './unity-value-codes.enum';

const unityValueCodes: string[] = Object.keys(UnityValueCodes).map<string>((k: string) => UnityValueCodes[k as keyof typeof UnityValueCodes]);
const currencyCodes: string[] = Object.keys(CurrencyCodes).map<string>((k: string) => CurrencyCodes[k as keyof typeof CurrencyCodes]);
const codes: string[] = [ ...new Set(unityValueCodes.concat(currencyCodes)) ];

// @dynamic
@SkipID()
@Extends(Thing)
export class UnityValue extends Thing {

    @Schemable()
    @Required()
    @Unique()
    @Trim()
    @Enum(codes)
    @Type({ type: Types.ENUM })
    code: UnityValueCodes | CurrencyCodes | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    symbol?: string | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    nativeSymbol?: string | null = null;

    @Schemable()
    @Min(0)
    @Max(20)
    @Type({ type: Types.NUMBER })
    decimalDigits?: number | null = null;

    @Schemable()
    @Min(0)
    @Max(20)
    @Type({ type: Types.NUMBER })
    rounding?: number | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    pluralName?: string | null = null;

}
