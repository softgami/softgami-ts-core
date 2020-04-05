import { Country } from '../country/country.model';
import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
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
    { fields: { code: 1 }, options: { unique: false }},
    { fields: { name: 1 }, options: { unique: false }},
    { fields: { 'country._id': 1 }, options: { unique: false }},
    { fields: { 'country.name': 1 }, options: { unique: false }},
    { fields: { 'country.code': 1 }, options: { unique: false }},
])
@Extends(Thing)
export class State extends Thing {

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
    @ExcludeIndexes()
    @Sortable({ label: 'COUNTRY', field: 'country.name' })
    @Type({ type: Types.OBJECT, class: Country })
    country: Country = null;

    @Schemable()
    @Trim()
    @Sortable({ label: 'CODE' })
    @Type({ type: Types.STRING })
    code?: string = null;

}
