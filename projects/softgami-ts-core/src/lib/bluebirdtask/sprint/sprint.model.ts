import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { Board } from '../../core/shared/board/board.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
import { Project } from '../project/project.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { SprintStatus } from './sprint-status.enum';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { createdAt: 1 }, options: { unique: false } },
    { fields: { status: 1 }, options: { unique: false } },
    { fields: { key: 1 }, options: { unique: true } },
    { fields: { startedAt: 1 }, options: { unique: false } },
    { fields: { dueDate: 1 }, options: { unique: false } },
    { fields: { finishedAt: 1 }, options: { unique: false } },
    { fields: { 'project._id': 1 }, options: { unique: false } },
    { fields: { 'project.name': 1 }, options: { unique: false } },
    { fields: { 'project.key': 1 }, options: { unique: false } },
    { fields: { 'project.status': 1 }, options: { unique: false } },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { 'creator._id': 1 }, options: { unique: false } },
    { fields: { 'creator.name': 1 }, options: { unique: false } },
    { fields: { 'board._id': 1 }, options: { unique: false } },
    { fields: { 'board.name': 1 }, options: { unique: false } },
    { fields: { incrementalId: 1 }, options: { unique: false } },
    { fields: { incrementalId: 1, 'project._id': 1 }, options: { unique: true } },
])
@Extends(Thing)
export class Sprint extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'STATUS' })
    @Type({ type: Types.ENUM })
    @Enum(Object.keys(SprintStatus).map((key: string) => SprintStatus[key as keyof typeof SprintStatus]))
    status: SprintStatus | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Sortable({ label: 'PROJECT', field: 'project.name' })
    @Type({ type: Types.OBJECT, class: Project })
    project: Project | null = null;

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
    @Trim()
    @QueryParam()
    @Unique()
    @Sortable({ label: 'KEY' })
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    key: string | null = null;

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
    startedAt?: Date | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'FINISH_DATE' })
    @Type({ type: Types.DATE })
    finishedAt?: Date | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Board })
    board?: Board | null = null;

    @Schemable()
    @QueryParam()
    @Type({ type: Types.NUMBER })
    incrementalId?: number | null = null;

}
