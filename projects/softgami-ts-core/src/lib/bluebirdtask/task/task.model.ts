import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BoardList } from '../../core/shared/board/board-list.model';
import { BoardListItem } from '../../core/shared/board/board-list-item.interface';
import { Checklist } from '../../core/shared/checklist/checklist.model';
import { Comment } from '../../core/shared/comment/comment.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { File } from '../../content-maker/file/file.model';
import { Max } from '../../core/shared/decorators/max.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { Min } from '../../core/shared/decorators/min.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
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
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { createdAt: 1 }, options: { unique: false } },
    { fields: { type: 1 }, options: { unique: false } },
    { fields: { key: 1 }, options: { unique: true } },
    { fields: { status: 1 }, options: { unique: false } },
    { fields: { isBacklog: 1 }, options: { unique: false } },
    { fields: { percentDone: 1 }, options: { unique: false } },
    { fields: { priority: 1 }, options: { unique: false } },
    { fields: { dueDate: 1 }, options: { unique: false } },
    { fields: { startDate: 1 }, options: { unique: false } },
    { fields: { finishedAt: 1 }, options: { unique: false } },
    { fields: { estimateHours: 1 }, options: { unique: false } },
    { fields: { estimatePoints: 1 }, options: { unique: false } },
    { fields: { timeTrackingHours: 1 }, options: { unique: false } },
    { fields: { tags: 1 }, options: { unique: false } },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { 'creator._id': 1 }, options: { unique: false } },
    { fields: { 'creator.name': 1 }, options: { unique: false } },
    { fields: { 'project._id': 1 }, options: { unique: false } },
    { fields: { 'project.name': 1 }, options: { unique: false } },
    { fields: { 'project.key': 1 }, options: { unique: false } },
    { fields: { 'project.status': 1 }, options: { unique: false } },
    { fields: { 'assignees._id': 1 }, options: { unique: false } },
    { fields: { 'assignees.name': 1 }, options: { unique: false } },
    { fields: { 'reporter._id': 1 }, options: { unique: false } },
    { fields: { 'reporter.name': 1 }, options: { unique: false } },
    { fields: { 'story._id': 1 }, options: { unique: false } },
    { fields: { 'story.key': 1 }, options: { unique: false } },
    { fields: { 'sprint._id': 1 }, options: { unique: false } },
    { fields: { 'sprint.key': 1 }, options: { unique: false } },
    { fields: { 'workLogs._id': 1 }, options: { unique: false } },
    { fields: { 'workLogs.creator._id': 1 }, options: { unique: false } },
    { fields: { 'workLogs.creator.name': 1 }, options: { unique: false } },
    { fields: { 'workLogs.timeTracking': 1 }, options: { unique: false } },
    { fields: { 'workLogs.startDate': 1 }, options: { unique: false } },
    { fields: { 'workLogs.endDate': 1 }, options: { unique: false } },
    { fields: { 'boardLists._id': 1 }, options: { unique: false } },
    { fields: { orderIndex: 1 }, options: { unique: false } },
    { fields: { incrementalId: 1 }, options: { unique: false } },
    { fields: { incrementalId: 1, 'project._id': 1 }, options: { unique: true } },
])
@Extends(Thing)
export class Task extends Thing implements BoardListItem {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    // tslint:disable-next-line: variable-name
    _id: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Type({ type: Types.ENUM })
    @Sortable({ label: 'TYPE' })
    @Enum(Object.keys(TaskType).map((key: string) => TaskType[key as keyof typeof TaskType]))
    type: TaskType | null = null;

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Sortable({ label: 'KEY' })
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    key: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'STATUS' })
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(TaskStatus).map((key: string) => TaskStatus[key as keyof typeof TaskStatus]))
    status: TaskStatus | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance: AppInstance | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator: User | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Sortable({ label: 'PROJECT', field: 'project.name' })
    @Type({ type: Types.OBJECT, class: Project })
    project: Project | null = null;

    @Schemable()
    @Default(true)
    @QueryParam()
    @Sortable({ label: 'BACKLOG' })
    @Type({ type: Types.BOOLEAN })
    isBacklog?: boolean | null = null;

    @Schemable()
    @Sortable({ label: 'PERCENT_DONE' })
    @Min(0)
    @Max(100)
    @Type({ type: Types.NUMBER })
    percentDone?: number | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'STORY', field: 'story.name' })
    @Type({ type: Types.OBJECT, class: Story })
    story?: Story | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: File, arrayItemType: Types.OBJECT })
    attachments?: File[] | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: User, arrayItemType: Types.OBJECT })
    assignees?: User[] | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    reporter?: User | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'PRIORITY' })
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(Priority).map(key => Priority[key as keyof typeof Priority]).filter(value => typeof value === 'number'))
    priority?: Priority | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'SPRINT', field: 'sprint.name' })
    @Type({ type: Types.OBJECT, class: Sprint })
    sprint?: Sprint | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: WorkLog, arrayItemType: Types.OBJECT })
    workLogs?: WorkLog[] | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'DUE_DATE' })
    @Type({ type: Types.DATE })
    dueDate?: Date | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'START_DATE' })
    @Type({ type: Types.DATE })
    startDate?: Date | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'FINISH_DATE' })
    @Type({ type: Types.DATE })
    finishedAt?: Date | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Comment, arrayItemType: Types.OBJECT })
    comments?: Comment[] | null = null;

    @Schemable()
    @Sortable({ label: 'ESTIMATE_HOURS' })
    @Min(0)
    @Max(100)
    @Type({ type: Types.DECIMAL })
    estimateHours?: number | null = null;

    @Schemable()
    @Sortable({ label: 'ESTIMATE_POINTS' })
    @Min(0)
    @Max(34)
    @Type({ type: Types.NUMBER })
    estimatePoints?: number | null = null;

    @Schemable()
    @Sortable({ label: 'TIME_TRACKING_HOURS' })
    @Min(0)
    @Max(100000)
    @Type({ type: Types.DECIMAL })
    timeTrackingHours?: number | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Checklist, arrayItemType: Types.OBJECT })
    checklists?: Checklist[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Trim()
    @MinLength(1)
    @MaxLength(100)
    @Sortable({ label: 'TAGS' })
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    tags?: string[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BoardList })
    boardList?: BoardList | null = null;

    @Schemable()
    @QueryParam()
    @Min(0)
    @Max(1000)
    @Type({ type: Types.NUMBER })
    orderIndex?: number | null = null;

    @Schemable()
    @QueryParam()
    @Type({ type: Types.NUMBER })
    incrementalId?: number | null = null;

}
