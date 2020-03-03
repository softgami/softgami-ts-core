import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { Override } from '../../../core/shared/decorators/override.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../../core/shared/decorators/sortable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

@Extends(Thing)
export class BasicLanguage extends Thing {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'NAME' })
    @Override()
    @Unique()
    @Type({ type: Types.STRING })
    name: string = null;


    @Schemable()
    @Index()
    @Required()
    @Trim()
    @Unique()
    @QueryParam()
    @Sortable({ label: 'CODE' })
    @Type({ type: Types.STRING })
    code: string = null;

}
