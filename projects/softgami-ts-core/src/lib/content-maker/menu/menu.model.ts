import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { BasicMenu } from './basic-menu.model';
import { CompoundIndex } from '@lib/core/shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { QueryParam } from '@lib/core/shared/decorators/query-param.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Unique } from '@lib/core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { index : 1 }, options: { unique : false }},
    { fields: { isActive : 1 }, options: { unique : false }},
    { fields: { 'appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { 'permissionCheck.subject' : 1 }, options: { unique : false }},
    { fields: { 'permissionCheck.action' : 1 }, options: { unique : false }},
])
@Extends(BasicMenu)
export class Menu extends BasicMenu {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance = null;

}
