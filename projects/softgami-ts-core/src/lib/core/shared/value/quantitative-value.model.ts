import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { SkipID } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { UnityValue } from '../../../internal';

@SkipID()
@Extends(Thing)
export class QuantitativeValue extends Thing {

    @Schemable()
    @Required()
    @Type({ type: Types.DECIMAL })
    value: number = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: UnityValue })
    unityValue: UnityValue = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    description?: string = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    maxValue?: number = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    minValue?: number = null;

    @Schemable()
    @Type({ type: Types.DATE })
    validFrom?: Date = null;

    @Schemable()
    @Type({ type: Types.DATE })
    validThrough?: Date = null;

}
