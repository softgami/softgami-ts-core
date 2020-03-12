import { AppInstance } from '../../internal';
import { BasicMenu } from '../../internal';
import { CompoundIndex } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { QueryParam } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { Unique } from '../../internal';

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
