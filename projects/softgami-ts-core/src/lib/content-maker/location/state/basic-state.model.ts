import { Country } from '../country/country.model';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

@Extends(Thing)
export class BasicState extends Thing {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Country })
    country: Country = null;

    @Schemable()
    @Trim()
    @Index()
    @Type({ type: Types.STRING })
    code?: string = null;

}
