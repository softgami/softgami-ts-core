import { AppInstance } from '../../internal';
import { Country } from '../../internal';
import { Domain } from '../../internal';
import { DomainType } from '../../internal';
import { Enum } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { PersonType } from '../../internal';
import { QuantitativeValue } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Thing } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';

// @dynamic
@Extends(Thing)
export class BasicPerson<T extends PersonType> extends Thing {

    @Schemable()
    @Required()
    @Index()
    @Trim()
    @Enum(Object.keys(PersonType).map((key: string) => PersonType[key]))
    @Type({ type: Types.ENUM })
    type: T = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance?: AppInstance = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Domain })
    gender?: Domain<DomainType.GENDER> = null;

    @Schemable()
    @Type({ type: Types.DATE })
    birthDate?: Date = null;

    @Schemable()
    @Type({ type: Types.DATE })
    deathDate?: Date = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Country })
    birthPlace?: Country = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Country })
    nationality?: Country = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: QuantitativeValue })
    height?: QuantitativeValue = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: QuantitativeValue })
    weight?: QuantitativeValue = null;

    @Schemable()
    @Type({ type: Types.STRING })
    jobTitle?: string = null;

}
