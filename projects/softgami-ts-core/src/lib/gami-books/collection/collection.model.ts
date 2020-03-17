import { BasicCollection } from './basic-collection.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Index } from '../../core/shared/decorators/index.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';

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
