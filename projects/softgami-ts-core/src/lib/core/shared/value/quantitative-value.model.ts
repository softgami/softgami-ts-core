import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { SkipID } from '@lib/core/shared/decorators/skip-id.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { UnityValue } from './unity-value.model';

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
