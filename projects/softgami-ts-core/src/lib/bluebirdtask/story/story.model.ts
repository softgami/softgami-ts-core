import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Project } from '../project/project.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { Sprint } from '../sprint/sprint.model';
import { TaskStatus } from '../task/task-status.enum';
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
    { fields: { status : 1 }, options: { unique : true }},
    { fields: { 'project._id' : 1 }, options: { unique : false }},
    { fields: { 'project.name' : 1 }, options: { unique : false }},
    { fields: { 'project.key' : 1 }, options: { unique : false }},
    { fields: { 'project.status' : 1 }, options: { unique : false }},
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { 'creator.name' : 1 }, options: { unique : false }},
    { fields: { 'sprint._id' : 1 }, options: { unique : false }},
    { fields: { 'sprint.name' : 1 }, options: { unique : false }},
    { fields: { 'sprint.key' : 1 }, options: { unique : false }},
])
@Extends(Thing)
export class Story extends Thing {

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
    @Type({ type: Types.ENUM })
    @Sortable({ label: 'STATUS' })
    @Enum(Object.keys(TaskStatus).map((key: string) => TaskStatus[key]))
    status: TaskStatus = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Sortable({ label: 'PROJECT', field: 'project.name' })
    @Type({ type: Types.OBJECT, class: Project })
    project: Project = null;

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
    @Trim()
    @QueryParam()
    @Unique()
    @Sortable({ label: 'KEY' })
    @Type({ type: Types.STRING })
    key: string = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Sortable({ label: 'SPRINT', field: 'sprint.name' })
    @Type({ type: Types.OBJECT, class: Sprint })
    sprint?: Sprint = null;

}
