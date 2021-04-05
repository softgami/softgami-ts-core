import { App } from '../../core/app/app.model';
import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { PermissionCheck } from '../../core/permissions/permission/permission-check.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { index: 1 }, options: { unique: false } },
    { fields: { isActive: 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { 'permissionCheck.subject': 1 }, options: { unique: false } },
    { fields: { 'permissionCheck.action': 1 }, options: { unique: false } },
    { fields: { 'parent._id': 1 }, options: { unique: false } },
    { fields: { 'parent.name': 1 }, options: { unique: false } },
    { fields: { 'ancestors._id': 1 }, options: { unique: false } },
    { fields: { 'ancestors.name': 1 }, options: { unique: false } },
    { fields: { 'app._id': 1 }, options: { unique: false } },
    { fields: { 'app.alias': 1 }, options: { unique: false } },
])
@Extends(Thing)
export class Menu extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    // tslint:disable-next-line: variable-name
    _id: string = null;

    @Schemable()
    @Required()
    @Default(1)
    @Type({ type: Types.NUMBER })
    index: number = null;

    @Schemable()
    @Required()
    @QueryParam()
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
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Menu, isSelf: true })
    parent?: Menu = null;

    @Schemable()
    @Default(null)
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Menu, arrayItemType: Types.OBJECT, isSelf: true })
    ancestors?: Menu[] = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: App })
    app?: App = null;

}
