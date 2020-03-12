import { AppInstance } from '../../../internal';
import { Enum } from '../../../internal';
import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { Index } from '../../../internal';
import { Language } from '../../../internal';
import { QueryParam } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Sortable } from '../../../internal';
import { Thing } from '../../../internal';
import { TranslationType } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { User } from '../../../internal';

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
