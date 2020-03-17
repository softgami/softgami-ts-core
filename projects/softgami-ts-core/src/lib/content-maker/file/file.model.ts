import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { FileDownload } from './file-download.model';
import { Index } from '../../core/shared/decorators/index.decorator';
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
    { fields: { name: 1, 'parent._id': 1, isPublic: 1 }, options: { unique : true }},
])
@Extends(Thing)
export class File extends Thing {

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
    @Required()
    @Default(true)
    @Index()
    @Type({ type: Types.BOOLEAN })
    isFile: boolean = null;

    @Schemable()
    @Required()
    @Default(false)
    @Index()
    @Type({ type: Types.BOOLEAN })
    isDirectory: boolean = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @Index()
    @Trim()
    @Type({ type: Types.STRING })
    path?: string = null;

    @Schemable()
    @Default(true)
    @Index()
    @Type({ type: Types.BOOLEAN })
    isPublic?: boolean = null;

    @Schemable()
    @Index()
    @Trim()
    @Type({ type: Types.STRING })
    mimetype?: string = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    size?: number = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    totalFilesChildren?: number = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    totalDirectoriesChildren?: number = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: File, isSelf: true })
    parent?: File = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: File, arrayItemType: Types.OBJECT, isSelf: true })
    ancestors?: File[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: FileDownload, arrayItemType: Types.OBJECT })
    downloads?: FileDownload[] = null;

}
