import { BasicTranslation } from './basic-translation.model';
import { CompoundIndex } from '../../../core/shared/decorators/compound-index.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Index } from '../../../core/shared/decorators/index.decorator';
import { QueryParam } from '../../../core/shared/decorators/query-param.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../../core/shared/decorators/trim.decorator';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';
import { Unique } from '../../../core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { 'language._id': 1 }, options: { unique: false }},
    { fields: { 'language.code': 1 }, options: { unique: false }},
    { fields: { name : 1, 'language.code' : 1 }, options: { unique : true }},
    { fields: { 'creator._id': 1 }, options: { unique: false }},
    { fields: { 'appInstance._id': 1 }, options: { unique: false }},
])
@Extends(BasicTranslation)
export class Translation extends BasicTranslation {

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
