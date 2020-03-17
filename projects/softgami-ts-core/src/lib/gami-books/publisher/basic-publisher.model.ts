import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Organization } from '../../core/shared/organization/organization.model';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';

@Extends(Organization)
export class BasicPublisher extends Organization {

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance})
    appInstance?: AppInstance = null;

}
