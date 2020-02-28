import { Default } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/default.decorator';
import { ExcludeIndexes } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { PermissionCheck } from 'projects/softgami-ts-core/src/lib/core/permissions/permission/permission-check.model';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { SkipID } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/skip-id.decorator';
import { Thing } from 'projects/softgami-ts-core/src/lib/core/shared/thing/thing.model';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { User } from 'projects/softgami-ts-core/src/lib/core/user/user.model';

@SkipID()
@Extends(Thing)
export class BasicMenu extends Thing {

    @Schemable()
    @Required()
    @Default(1)
    @Type({ type: Types.NUMBER })
    index: number = null;

    @Schemable()
    @Required()
    @Type({ type: Types.BOOLEAN })
    isActive: boolean = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: PermissionCheck })
    permissionCheck?: PermissionCheck = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    icon?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: BasicMenu, arrayItemType: Types.OBJECT, isSelf: true })
    subMenus?: BasicMenu[] = null;

}
