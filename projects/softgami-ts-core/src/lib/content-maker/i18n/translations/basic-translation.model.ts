import { AppInstance } from '../../../core/app/app-instance/app-instance.model';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { Language } from '../../../content-maker/i18n/language/language.model';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../../core/shared/decorators/sortable.decorator';
import { Thing } from '../../../core/shared/thing/thing.model';
import { TranslationType } from './translation-types.enum';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { User } from '../../../core/user/user.model';

// @dynamic
@Extends(Thing)
export class BasicTranslation extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @Index()
    @QueryParam()
    @Sortable({ label: 'VALUE' })
    @Type({ type: Types.STRING })
    value: string = null;

    @Schemable()
    @Required()
    @Index()
    @Enum(Object.keys(TranslationType).map((key: string) => TranslationType[key]))
    @QueryParam()
    @Sortable({ label: 'TYPE' })
    @Type({ type: Types.ENUM })
    type: TranslationType = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: Language })
    language: Language = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance = null;

}
