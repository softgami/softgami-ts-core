import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { Country } from '../../content-maker/location/country/country.model';
import { Domain } from '../../content-maker/domain/domain.model';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Index } from '../../core/shared/decorators/index.decorator';
import { PersonType } from './person-type.enum';
import { QuantitativeValue } from '../../core/shared/value/quantitative-value.model';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';

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
