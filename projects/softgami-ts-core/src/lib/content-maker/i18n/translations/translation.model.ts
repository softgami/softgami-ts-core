import { AppInstance } from '../../../core/app/app-instance/app-instance.model';
import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
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
import { Unique } from '../../../core/shared/decorators/unique.decorator';
import { User } from '../../../core/user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { value: 1 }, options: { unique: false }},
    { fields: { type: 1 }, options: { unique: false }},
    { fields: { 'language._id': 1 }, options: { unique: false }},
    { fields: { 'language.code': 1 }, options: { unique: false }},
    { fields: { name : 1, 'language.code' : 1 }, options: { unique : true }},
    { fields: { 'creator._id': 1 }, options: { unique: false }},
    { fields: { 'appInstance._id': 1 }, options: { unique: false }},
])
@Extends(Thing)
export class Translation extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'VALUE' })
    @Type({ type: Types.STRING })
    value: string = null;

    @Schemable()
    @Required()
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
