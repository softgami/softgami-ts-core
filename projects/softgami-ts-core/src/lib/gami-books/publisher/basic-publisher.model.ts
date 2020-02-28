import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Organization } from '@lib/core/shared/organization/organization.model';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

@Extends(Organization)
export class BasicPublisher extends Organization {

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance})
    appInstance?: AppInstance = null;

}
