import { Address } from '../../content-maker/location/address/address.model';
import { BaseDomain } from '../../content-maker/domain/base-domain.model';
import { BasePerson } from '../../content-maker/person/base-person.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Credentials } from '../../core/auth/credentials/credentials.model';
import { Currency } from '../../content-maker/currency/currency.model';
import { Default } from '../../core/shared/decorators/default.decorator';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { Email } from '../../core/shared/email/email.model';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Index } from '../../core/shared/decorators/index.decorator';
import { Language } from '../../content-maker/i18n/language/language.model';
import { PersonType } from '../../content-maker/person/person-type.enum';
import { Phone } from '../../core/shared/phone/phone.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Role } from '../../core/permissions/role/role.model';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false }},
    { fields: { 'language.code': 1 }, options: { unique: false }},
    { fields: { isActive: 1 }, options: { unique: false }},
    { fields: { birthDate: 1 }, options: { unique: false }},
    { fields: { gender: 1 }, options: { unique: false }},
    { fields: { 'appInstances._id': 1 }, options: { unique: false }},
    { fields: { 'appInstances.app._id': 1 }, options: { unique: false }},
    { fields: { taxNumber: 1, 'nationality._id': 1 }, options: {
        unique: true,
        partialFilterExpression: {
            taxNumber: { $exists: true },
            'nationality._id': { $exists: true },
        },
    }},
    { fields: { 'creator._id': 1 }, options: { unique: false }},
])
@Extends(BasePerson)
export class User extends BasePerson<PersonType.USER> {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

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
    @Type({ type: Types.OBJECT, class: BaseDomain })
    maritalStatus?: BaseDomain<DomainType.MARITAL_STATUS> = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    occupation?: BaseDomain<DomainType.OCCUPATION> = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    income?: BaseDomain<DomainType.INCOME> = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    educationLevel?: BaseDomain<DomainType.EDUCATION_LEVEL> = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Address, arrayItemType: Types.OBJECT })
    addresses?: Address[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Currency })
    currency?: Currency = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] = null;

}
