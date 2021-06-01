import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '../../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../../core/shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../../core/shared/decorators/sortable.decorator';
import { State } from '../state/state.model';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { 'state._id': 1 }, options: { unique: false } },
    { fields: { 'state.name': 1 }, options: { unique: false } },
    { fields: { 'state.code': 1 }, options: { unique: false } },
    { fields: { 'state.country._id': 1 }, options: { unique: false } },
    { fields: { 'state.country.code': 1 }, options: { unique: false } },
    { fields: { 'state.country.name': 1 }, options: { unique: false } },
])
@Extends(Thing)
@GenerateMongoObjectID()
export class City extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Sortable([
        { label: 'STATE', field: 'state.name' },
        { label: 'COUNTRY', field: 'state.country.name' },
    ])
    @Type({ type: Types.OBJECT, class: State })
    state: State | null = null;

}
