import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Language } from '../../../content-maker/i18n/language/language.model';
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

@CompoundIndex([
    { fields: { name: 1 }, options: { unique : true }},
    { fields: { code: 1 }, options: { unique : true }},
    { fields: { 'language._id': 1 }, options: { unique: false }},
    { fields: { 'language.code': 1 }, options: { unique: false }},
    { fields: { 'languages._id': 1 }, options: { unique: false }},
    { fields: { 'languages.code': 1 }, options: { unique: false }},
])
@Extends(Thing)
export class Country extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    // tslint:disable-next-line: variable-name
    _id: string = null;

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'NAME' })
    @Override()
    @Unique()
    @Type({ type: Types.STRING })
    name: string = null;

    @Schemable()
    @Required()
    @Trim()
    @Unique()
    @QueryParam()
    @Sortable({ label: 'CODE' })
    @Type({ type: Types.STRING })
    code: string = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'LANGUAGE', field: 'language.name' })
    @Type({ type: Types.OBJECT, class: Language })
    language?: Language = null;

    @Schemable()
    @Default(undefined)
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'LANGUAGE', field: 'language.name' })
    @Type({ type: Types.ARRAY, class: Language, arrayItemType: Types.OBJECT })
    languages?: Language = null;

}
