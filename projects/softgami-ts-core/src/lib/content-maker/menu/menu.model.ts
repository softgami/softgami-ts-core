import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BasicMenu } from './basic-menu.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Index } from '../../core/shared/decorators/index.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';

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
