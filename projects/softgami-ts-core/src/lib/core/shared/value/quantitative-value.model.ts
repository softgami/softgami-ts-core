import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { UnityValue } from './unity-value.model';

@SkipID()
@Extends(Thing)
export class QuantitativeValue extends Thing {

    @Schemable()
    @Required()
    @Type({ type: Types.DECIMAL })
    value: number | null = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: UnityValue })
    unityValue: UnityValue | null = null;

    @Schemable()
    @Type({ type: Types.DECIMAL })
    maxValue?: number | null = null;

    @Schemable()
    @Type({ type: Types.DECIMAL })
    minValue?: number | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    validFrom?: Date | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    validThrough?: Date | null = null;

}
