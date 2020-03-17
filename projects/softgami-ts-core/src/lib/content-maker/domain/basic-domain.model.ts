import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { DomainType } from './domain-type.enum';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Index } from '../../core/shared/decorators/index.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from '../../core/user/user.model';

// @dynamic
@Extends(Thing)
export class BasicDomain<T extends DomainType> extends Thing {

    @Schemable()
    @Index()
    @Trim()
    @Required()
    @Enum(Object.keys(DomainType).map((key: string) => DomainType[key]))
    @Type({ type: Types.ENUM })
    type: T = null;

    @Schemable()
    @Index()
    @Trim()
    @Required()
    @Type({ type: Types.STRING })
    value: string = null;

    @Schemable()
    @Index()
    @Trim()
    @Type({ type: Types.STRING })
    additionalMetadata?: string = null;

    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User})
    creator?: User = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance})
    appInstance?: AppInstance = null;

}
