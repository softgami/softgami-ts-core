import { Address } from '@lib/content-maker/location/address/address.model';
import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { BasicPerson } from '@lib/content-maker/person/basic-person.model';
import { Credentials } from '@lib/core/auth/credentials/credentials.model';
import { Currency } from '@lib/content-maker/currency/currency.model';
import { Default } from '@lib/core/shared/decorators/default.decorator';
import { Domain } from '@lib/content-maker/domain/domain.model';
import { DomainType } from '@lib/content-maker/domain/domain-type.enum';
import { Email } from '@lib/core/shared/email/email.model';
import { ExcludeIndexes } from '@lib/core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '@lib/core/shared/decorators/extends.decorator';
import { Language } from '@lib/content-maker/i18n/language/language.model';
import { PersonType } from '@lib/content-maker/person/person-type.enum';
import { Phone } from '@lib/core/shared/phone/phone.model';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
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
