import { BasicCollection } from './basic-collection.model';
import { CompoundIndex } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/compound-index.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Index } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/index.decorator';
import { QueryParam } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/query-param.decorator';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { Unique } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { isActive : 1 }, options: { unique : false }},
    { fields: { isCompleted : 1 }, options: { unique : false }},
    { fields: { isFinished : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { 'parent._id' : 1 }, options: { unique : false }},
    { fields: { 'parent.name' : 1 }, options: { unique : false }},
    { fields: { 'ancestors._id' : 1 }, options: { unique : false }},
    { fields: { 'ancestors.name' : 1 }, options: { unique : false }},
])
@Extends(BasicCollection)
export class Collection extends BasicCollection {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

}
