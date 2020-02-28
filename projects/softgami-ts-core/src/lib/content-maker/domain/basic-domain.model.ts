import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { DomainType } from './domain-type.enum';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { User } from '@lib/core/user/user.model';

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
