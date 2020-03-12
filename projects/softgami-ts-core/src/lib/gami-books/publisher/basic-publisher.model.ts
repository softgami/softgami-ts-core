import { AppInstance } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { Organization } from '../../internal';
import { Schemable } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';

@Extends(Organization)
export class BasicPublisher extends Organization {

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance})
    appInstance?: AppInstance = null;

}
