import { CurrencyCodes } from '../../../content-maker/currency/currency-codes.enum';
import { Enum } from '../decorators/enum.decorator';
import { Extends } from '../decorators/extends.decorator';
import { GenerateMongoObjectID } from '../decorators/generate-mongo-object-id.decorator';
import { Max } from '../decorators/max.decorator';
import { MaxLength } from '../decorators/max-length.decorator';
import { Min } from '../decorators/min.decorator';
import { MinLength } from '../decorators/min-length.decorator';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { Thing } from '../thing/thing.model';
import { Trim } from '../decorators/trim.decorator';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';
import { Unique } from '../decorators/unique.decorator';
import { UnityValueCodes } from './unity-value-codes.enum';

const unityValueCodes: string[] = Object.keys(UnityValueCodes).map<string>((k: string) => UnityValueCodes[k as keyof typeof UnityValueCodes]);
const currencyCodes: string[] = Object.keys(CurrencyCodes).map<string>((k: string) => CurrencyCodes[k as keyof typeof CurrencyCodes]);
const codes: string[] = [ ...new Set(unityValueCodes.concat(currencyCodes)) ];

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
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
