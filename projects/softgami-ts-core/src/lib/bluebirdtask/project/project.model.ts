import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { ProjectStatus } from './project-status.enum';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { name : 1 }, options: { unique : false }},
    { fields: { createdAt : 1 }, options: { unique : false }},
    { fields: { key : 1 }, options: { unique : true }},
    { fields: { status : 1 }, options: { unique : false }},
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { 'creator.name' : 1 }, options: { unique : false }},
    { fields: { 'lead._id' : 1 }, options: { unique : false }},
    { fields: { 'lead.name' : 1 }, options: { unique : false }},
    { fields: { 'defaultAssignee._id' : 1 }, options: { unique : false }},
    { fields: { 'defaultAssignee.name' : 1 }, options: { unique : false }},
    { fields: { 'members._id' : 1 }, options: { unique : false }},
    { fields: { 'members.name' : 1 }, options: { unique : false }},
    { fields: { incrementalId : 1 }, options: { unique : false }},
])
@Extends(Thing)
export class Project extends Thing {

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
    @Trim()
    @QueryParam()
    @Unique()
    @Sortable({ label: 'KEY' })
    @Type({ type: Types.STRING })
    key: string = null;

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'STATUS' })
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(ProjectStatus).map((key: string) => ProjectStatus[key]))
    status: ProjectStatus = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance: AppInstance = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator: User = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    lead?: User = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    defaultAssignee?: User = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: User, arrayItemType: Types.OBJECT })
    members?: User[] = null;

    @Schemable()
    @QueryParam()
    @Type({ type: Types.NUMBER })
    incrementalId?: number = null;

}
