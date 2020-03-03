import { Default } from '../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { PermissionCheck } from '../../core/permissions/permission/permission-check.model';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../core/shared/decorators/skip-id.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

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
