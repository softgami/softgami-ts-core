import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BaseFile } from './base-file.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { FileDownload } from './file-download.model';
import { GenerateMongoObjectID } from '../../core/shared/decorators/generate-mongo-object-id.decorator';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

// @dynamic
@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { isFile: 1 }, options: { unique: false } },
    { fields: { isDirectory: 1 }, options: { unique: false } },
    { fields: { path: 1 }, options: { unique: false } },
    { fields: { isPublic: 1 }, options: { unique: false } },
    { fields: { mimetype: 1 }, options: { unique: false } },
    { fields: { isPersonal: 1 }, options: { unique: false } },
    {
        fields: { name: 1, 'parent._id': 1, isPublic: 1, isPersonal: 1 },
        options: {
            unique: true,
            partialFilterExpression: {
                parent: { $exists: true },
                isPersonal: true,
            },
        },
    },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
])
@Extends(BaseFile)
@GenerateMongoObjectID()
export class File extends BaseFile {

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseFile, isSelf: true })
    parent?: BaseFile | null = null;

    @Schemable()
    @Default(void 0)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: BaseFile, arrayItemType: Types.OBJECT, isSelf: true })
    ancestors?: BaseFile[] | null = null;

    @Schemable()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance | null = null;

    @Schemable()
    @Default(void 0)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: FileDownload, arrayItemType: Types.OBJECT })
    downloads?: FileDownload[] | null = null;

}
