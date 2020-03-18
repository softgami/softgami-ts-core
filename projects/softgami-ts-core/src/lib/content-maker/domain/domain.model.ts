import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BaseDomain } from './base-domain.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { DomainType } from './domain-type.enum';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';

import { User } from '../../core/user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { name : 1, type : 1, value: 1 }, options: { unique : true }},
])
@Extends(BaseDomain)
export class Domain<T extends DomainType> extends BaseDomain<T> {

    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User})
    creator?: User = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance})
    appInstance?: AppInstance = null;

}
