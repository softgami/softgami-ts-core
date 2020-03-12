import { Default } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { PermissionCheck } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { SkipID } from '../../internal';
import { Thing } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { User } from '../../internal';

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
