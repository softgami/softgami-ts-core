import { BasicUser } from './basic-user.model';
import { CompoundIndex } from '@lib/core/shared/decorators/compound-index.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { QueryParam } from '@lib/core/shared/decorators/query-param.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false }},
    { fields: { 'language.code': 1 }, options: { unique: false }},
    { fields: { isActive: 1 }, options: { unique: false }},
    { fields: { birthDate: 1 }, options: { unique: false }},
    { fields: { gender: 1 }, options: { unique: false }},
    { fields: { 'appInstances._id': 1 }, options: { unique: false }},
    { fields: { 'appInstances.app._id': 1 }, options: { unique: false }},
    { fields: { taxNumber: 1, 'nationality._id': 1 }, options: {
        unique: true,
        partialFilterExpression: {
            taxNumber: { $exists: true },
            'nationality._id': { $exists: true },
        },
    }},
    { fields: { 'creator._id': 1 }, options: { unique: false }},
])
@Extends(BasicUser)
export class User extends BasicUser {

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
