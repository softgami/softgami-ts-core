import { Country } from '../../../internal';
import { ExcludeIndexes } from '../../../internal';
import { Extends } from '../../../internal';
import { Index } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Thing } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

@Extends(Thing)
export class BasicState extends Thing {

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Country })
    country: Country = null;

    @Schemable()
    @Trim()
    @Index()
    @Type({ type: Types.STRING })
    code?: string = null;

}
