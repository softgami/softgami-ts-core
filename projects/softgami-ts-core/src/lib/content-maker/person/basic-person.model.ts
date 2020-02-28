import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { Country } from '@lib/content-maker/location/country/country.model';
import { Domain } from '@lib/content-maker/domain/domain.model';
import { DomainType } from '@lib/content-maker/domain/domain-type.enum';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Index } from '@lib/core/shared/decorators/index.decorator';
import { PersonType } from './person-type.enum';
import { QuantitativeValue } from '@lib/core/shared/value/quantitative-value.model';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

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
