import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { Language } from '@lib/content-maker/i18n/language/language.model';
import { QueryParam } from '@lib/core/shared/decorators/query-param.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Sortable } from '@lib/core/shared/decorators/sortable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { TranslationType } from './translation-types.enum';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { User } from '@lib/core/user/user.model';

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
