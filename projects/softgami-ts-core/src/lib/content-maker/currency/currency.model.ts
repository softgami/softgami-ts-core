import { CurrencyCodes } from './currency-codes.enum';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Index } from '../../core/shared/decorators/index.decorator';
import { Override } from '../../core/shared/decorators/override.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { UnityValue } from '../../core/shared/value/unity-value.model';

// @dynamic
@Extends(UnityValue)
export class Currency extends UnityValue {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

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
