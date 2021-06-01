import { ExcludeIndexes } from '../decorators/exclude-indexes.decorator';
import { Extends } from '../decorators/extends.decorator';
import { GenerateMongoObjectID } from '../decorators/generate-mongo-object-id.decorator';
import { Required } from '../decorators/required.decorator';
import { Schemable } from '../decorators/schemable.decorator';
import { Thing } from '../thing/thing.model';
import { Type } from '../decorators/type.decorator';
import { Types } from '../models/types.enum';
import { UnityValue } from './unity-value.model';

// @dynamic
@Extends(Thing)
@GenerateMongoObjectID(false)
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
