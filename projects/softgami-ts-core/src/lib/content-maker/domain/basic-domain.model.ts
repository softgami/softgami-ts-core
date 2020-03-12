import { AppInstance } from '../../internal';
import { DomainType } from '../../internal';
import { Enum } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Thing } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { User } from '../../internal';

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
