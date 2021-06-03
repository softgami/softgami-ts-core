import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BasePerson } from './base-person.model';
import { BaseUser } from '../../core/user/base-user.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { PersonType } from './person-type.enum';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';

// @dynamic
@CompoundIndex([
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance.app._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { type: 1 }, options: { unique: false } },
])
@Extends(BasePerson)
@GenerateMongoObjectID()
export class Person<T extends PersonType> extends BasePerson<T> {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseUser })
    creator?: BaseUser | null = null;

}
