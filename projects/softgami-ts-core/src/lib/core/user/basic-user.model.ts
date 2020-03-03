import { Address } from '../../content-maker/location/address/address.model';
import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { BasicPerson } from '../../content-maker/person/basic-person.model';
import { Credentials } from '../../core/auth/credentials/credentials.model';
import { Currency } from '../../content-maker/currency/currency.model';
import { Default } from '../../core/shared/decorators/default.decorator';
import { Domain } from '../../content-maker/domain/domain.model';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { Email } from '../../core/shared/email/email.model';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Language } from '../../content-maker/i18n/language/language.model';
import { PersonType } from '../../content-maker/person/person-type.enum';
import { Phone } from '../../core/shared/phone/phone.model';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { User } from './user.model';

@Extends(BasicPerson)
export class BasicUser extends BasicPerson<PersonType.USER> {

    @Schemable()
    @Required()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isIndividual: boolean = null;

    @Schemable()
    @Default(undefined)
    @Type({ type: Types.ARRAY, class: Email, arrayItemType: Types.OBJECT })
    emails?: Email[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Credentials })
    credentials?: Credentials = null;

    @Schemable()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isActive?: boolean = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Language })
    language?: Language = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    timezone?: string = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    taxNumber?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Phone, arrayItemType: Types.OBJECT })
    phones?: Phone[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Domain })
    maritalStatus?: Domain<DomainType.MARITAL_STATUS> = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Domain })
    occupation?: Domain<DomainType.OCCUPATION> = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Domain })
    income?: Domain<DomainType.INCOME> = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Domain })
    educationLevel?: Domain<DomainType.EDUCATION_LEVEL> = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Address, arrayItemType: Types.OBJECT })
    addresses?: Address[] = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: AppInstance, arrayItemType: Types.OBJECT })
    appInstances?: AppInstance[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Currency })
    currency?: Currency = null;

}
