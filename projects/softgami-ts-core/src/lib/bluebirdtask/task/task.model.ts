import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BoardList } from '../../core/shared/board/board-list.model';
import { Checklist } from '../../core/shared/checklist/checklist.model';
import { Comment } from '../../core/shared/comment/comment.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { File } from '../../content-maker/file/file.model';
import { Priority } from '../../core/shared/models/priority.enum';
import { Project } from '../project/project.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { Sprint } from '../sprint/sprint.model';
import { Story } from '../story/story.model';
import { TaskStatus } from './task-status.enum';
import { TaskType } from './task-type.enum';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';
import { WorkLog } from './work-log.model';

// @dynamic
@CompoundIndex([
    { fields: { name : 1 }, options: { unique : false }},
    { fields: { createdAt : 1 }, options: { unique : false }},
    { fields: { type : 1 }, options: { unique : false }},
    { fields: { key : 1 }, options: { unique : true }},
    { fields: { status : 1 }, options: { unique : false }},
    { fields: { isBacklog : 1 }, options: { unique : false }},
    { fields: { percentDone : 1 }, options: { unique : false }},
    { fields: { priority : 1 }, options: { unique : false }},
    { fields: { dueDate : 1 }, options: { unique : false }},
    { fields: { startDate : 1 }, options: { unique : false }},
    { fields: { finishedAt : 1 }, options: { unique : false }},
    { fields: { estimateHours : 1 }, options: { unique : false }},
    { fields: { estimatePoints : 1 }, options: { unique : false }},
    { fields: { timeTrackingHours : 1 }, options: { unique : false }},
    { fields: { tags : 1 }, options: { unique : false }},
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { 'creator.name' : 1 }, options: { unique : false }},
    { fields: { 'project._id' : 1 }, options: { unique : false }},
    { fields: { 'project.name' : 1 }, options: { unique : false }},
    { fields: { 'project.key' : 1 }, options: { unique : false }},
    { fields: { 'project.status' : 1 }, options: { unique : false }},
    { fields: { 'assignees._id' : 1 }, options: { unique : false }},
    { fields: { 'assignees.name' : 1 }, options: { unique : false }},
    { fields: { 'reporter._id' : 1 }, options: { unique : false }},
    { fields: { 'reporter.name' : 1 }, options: { unique : false }},
    { fields: { 'story._id' : 1 }, options: { unique : false }},
    { fields: { 'story.key' : 1 }, options: { unique : false }},
    { fields: { 'sprint._id' : 1 }, options: { unique : false }},
    { fields: { 'sprint.key' : 1 }, options: { unique : false }},
    { fields: { 'column._id' : 1 }, options: { unique : false }},
])
@Extends(Thing)
export class Task extends Thing {

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
    @Sortable({ label: 'TYPE' })
    @Enum(Object.keys(TaskType).map((key: string) => TaskType[key]))
    type: TaskType = null;

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
    @Enum(Object.keys(TaskStatus).map((key: string) => TaskStatus[key]))
    status: TaskStatus = null;

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
    @Sortable({ label: 'PROJECT', field: 'project.name' })
    @Type({ type: Types.OBJECT, class: Project })
    project: Project = null;

    @Schemable()
    @Required()
    @Default(true)
    @QueryParam()
    @Sortable({ label: 'BACKLOG' })
    @Type({ type: Types.BOOLEAN })
    isBacklog: boolean = null;

    @Schemable()
    @Sortable({ label: 'PERCENT_DONE' })
    @Type({ type: Types.NUMBER })
    percentDone?: number = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'STORY', field: 'story.name' })
    @Type({ type: Types.OBJECT, class: Story })
    story?: Story = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: File, arrayItemType: Types.OBJECT })
    attachments?: File[] = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: User, arrayItemType: Types.OBJECT })
    assignees?: User[] = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    reporter?: User = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'PRIORITY' })
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(Priority).map((key: string) => Priority[key]))
    priority?: Priority = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'SPRINT', field: 'sprint.name' })
    @Type({ type: Types.OBJECT, class: Sprint })
    sprint?: Sprint = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: WorkLog, arrayItemType: Types.OBJECT })
    workLogs?: WorkLog[] = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'DUE_DATE' })
    @Type({ type: Types.DATE })
    dueDate?: Date = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'START_DATE' })
    @Type({ type: Types.DATE })
    startDate?: Date = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'FINISH_DATE' })
    @Type({ type: Types.DATE })
    finishedAt?: Date = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Comment, arrayItemType: Types.OBJECT })
    comments?: Comment[] = null;

    @Schemable()
    @Sortable({ label: 'ESTIMATE_HOURS' })
    @Type({ type: Types.NUMBER })
    estimateHours?: number = null;

    @Schemable()
    @Sortable({ label: 'ESTIMATE_POINTS' })
    @Type({ type: Types.NUMBER })
    estimatePoints?: number = null;

    @Schemable()
    @Sortable({ label: 'TIME_TRACKING_HOURS' })
    @Type({ type: Types.NUMBER })
    timeTrackingHours?: number = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Checklist, arrayItemType: Types.OBJECT })
    checklists?: Checklist[] = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Trim()
    @Sortable({ label: 'TAGS' })
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    tags?: string[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BoardList })
    column?: BoardList = null;

}
