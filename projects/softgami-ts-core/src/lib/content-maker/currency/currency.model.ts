import { CurrencyCodes } from './currency-codes.enum';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { Override } from '../../core/shared/decorators/override.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { UnityValue } from '../../core/shared/value/unity-value.model';

// @dynamic
@Extends(UnityValue)
@GenerateMongoObjectID(false)
export class Currency extends UnityValue {

    @Schemable()
    @Override()
    @Required()
    @Enum(Object.keys(CurrencyCodes).map((key: string) => CurrencyCodes[key as keyof typeof CurrencyCodes]))
    @Unique()
    @Trim()
    @Type({ type: Types.ENUM, enumItemType: Types.STRING })
    code: CurrencyCodes | null = null;

}
