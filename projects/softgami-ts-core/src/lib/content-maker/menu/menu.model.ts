import { App } from '../../core/app/app.model';
import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BaseMenu } from './base-menu.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { PermissionCheck } from '../../core/permissions/permission/permission-check.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { index: 1 }, options: { unique: false } },
    { fields: { isActive: 1 }, options: { unique: false } },
    { fields: { 'app._id': 1 }, options: { unique: false } },
    { fields: { 'app.alias': 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { 'permissionCheck.subject': 1 }, options: { unique: false } },
    { fields: { 'permissionCheck.action': 1 }, options: { unique: false } },
    { fields: { 'parent._id': 1 }, options: { unique: false } },
    { fields: { 'parent.name': 1 }, options: { unique: false } },
    { fields: { 'ancestors._id': 1 }, options: { unique: false } },
    { fields: { 'ancestors.name': 1 }, options: { unique: false } },
])
@Extends(BaseMenu)
@GenerateMongoObjectID()
export class Menu extends BaseMenu {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: App })
    app: App | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: PermissionCheck })
    permissionCheck?: PermissionCheck | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseMenu, isSelf: true })
    parent?: BaseMenu | null = null;

    @Schemable()
    @Default(void 0)
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: BaseMenu, arrayItemType: Types.OBJECT, isSelf: true })
    ancestors?: BaseMenu[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance | null = null;

}
