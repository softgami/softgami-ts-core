import { AppInstance } from '../../internal';
import { Default } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { File } from '../../internal';
import { FileDownload } from '../../internal';
import { Index } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Thing } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { User } from '../../internal';

@Extends(Thing)
export class BasicFile extends Thing {

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
