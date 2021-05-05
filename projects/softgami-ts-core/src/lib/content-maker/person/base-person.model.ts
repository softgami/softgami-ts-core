import { BaseDomain } from '../../content-maker/domain/base-domain.model';
import { Country } from '../../content-maker/location/country/country.model';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Enum } from '../../core/shared/decorators/enum.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
import { PersonType } from './person-type.enum';
import { QuantitativeValue } from '../../core/shared/value/quantitative-value.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';

// @dynamic
@Extends(Thing)
export class BasePerson<T extends PersonType> extends Thing {

    @Schemable()
    @QueryParam()
    @Required()
    @Trim()
    @Enum(Object.keys(PersonType).map((key: string) => PersonType[key as keyof typeof PersonType]))
    @Sortable({ label: 'TYPE' })
    @Type({ type: Types.ENUM })
    type: T | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    gender?: BaseDomain<DomainType.GENDER> | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    birthDate?: Date | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    deathDate?: Date | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Country })
    birthPlace?: Country | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Country })
    nationality?: Country | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: QuantitativeValue })
    height?: QuantitativeValue | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: QuantitativeValue })
    weight?: QuantitativeValue | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(50)
    @Type({ type: Types.STRING })
    jobTitle?: string | null = null;

}
