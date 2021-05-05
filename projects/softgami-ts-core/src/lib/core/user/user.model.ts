import { Address } from '../../content-maker/location/address/address.model';
import { BaseDomain } from '../../content-maker/domain/base-domain.model';
import { BasePerson } from '../../content-maker/person/base-person.model';
import { CompoundIndex } from '../shared/decorators/compound-index.decorator';
import { Country } from '../../content-maker/location/country/country.model';
import { Credentials } from '../auth/credentials/credentials.model';
import { Currency } from '../../content-maker/currency/currency.model';
import { Default } from '../shared/decorators/default.decorator';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { Email } from '../shared/email/email.model';
import { Enum } from '../shared/decorators/enum.decorator';
import { ExcludeIndexes } from '../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../shared/decorators/extends.decorator';
import { Language } from '../../content-maker/i18n/language/language.model';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
import { Override } from '../shared/decorators/override.decorator';
import { PersonType } from '../../content-maker/person/person-type.enum';
import { Phone } from '../shared/phone/phone.model';
import { QueryParam } from '../shared/decorators/query-param.decorator';
import { Required } from '../shared/decorators/required.decorator';
import { Role } from '../permissions/role/role.model';
import { Schemable } from '../shared/decorators/schemable.decorator';
import { Trim } from '../shared/decorators/trim.decorator';
import { Type } from '../shared/decorators/type.decorator';
import { Types } from '../shared/models/types.enum';
import { Unique } from '../shared/decorators/unique.decorator';
import { UserAppInstance } from './user-app-instance.model';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { isActive: 1 }, options: { unique: false } },
    { fields: { 'language._id': 1 }, options: { unique: false } },
    { fields: { 'language.code': 1 }, options: { unique: false } },
    { fields: { isActive: 1 }, options: { unique: false } },
    { fields: { isIndividual: 1 }, options: { unique: false } },
    { fields: { birthDate: 1 }, options: { unique: false } },
    { fields: { gender: 1 }, options: { unique: false } },
    { fields: { 'appInstances._id': 1 }, options: { unique: false } },
    { fields: { 'appInstances.app._id': 1 }, options: { unique: false } },
    {
        fields: { taxNumber: 1, 'nationality._id': 1 },
        options: {
            unique: true,
            partialFilterExpression: {
                taxNumber: { $exists: true },
                'nationality._id': { $exists: true },
            },
        },
    },
    { fields: { 'emails.address': 1 }, options: { unique: true } },
    { fields: { 'emails.isVerified': 1 }, options: { unique: false } },
    { fields: { 'emails.isPrimary': 1 }, options: { unique: false } },
    { fields: { 'emails.type': 1 }, options: { unique: false } },
    { fields: { 'phones.type': 1 }, options: { unique: false } },
    { fields: { 'phones.number': 1 }, options: { unique: false } },
    { fields: { 'phones.isPrimary': 1 }, options: { unique: false } },
    { fields: { 'phones.isVerified': 1 }, options: { unique: false } },
    { fields: { timezone: 1 }, options: { unique: false } },
    { fields: { 'creator._id': 1 }, options: { unique: false } },
    { fields: { 'appInstances.appInstanceId': 1 }, options: { unique: false } },
    { fields: { 'appInstances.roles._id': 1 }, options: { unique: false } },
    { fields: { 'appInstances.roles.alias': 1 }, options: { unique: false } },
    { fields: { 'country._id': 1 }, options: { unique: false } },
    { fields: { 'country.code': 1 }, options: { unique: false } },
])
@Extends(BasePerson)
export class User extends BasePerson<PersonType.USER> {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Trim()
    @Enum([ PersonType.USER ])
    @Override()
    @Type({ type: Types.ENUM })
    type: PersonType.USER | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    isIndividual: boolean | null = null;

    @Schemable()
    @Default(undefined)
    @QueryParam()
    @Type({ type: Types.ARRAY, class: Email, arrayItemType: Types.OBJECT })
    emails?: Email[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Credentials })
    credentials?: Credentials | null = null;

    @Schemable()
    @Default(true)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isActive?: boolean | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: Language })
    language?: Language | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    timezone?: string | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @MinLength(1)
    @MaxLength(40)
    @Type({ type: Types.STRING })
    taxNumber?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: User })
    creator?: User | null = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.ARRAY, class: Phone, arrayItemType: Types.OBJECT })
    phones?: Phone[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    maritalStatus?: BaseDomain<DomainType.MARITAL_STATUS> | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    occupation?: BaseDomain<DomainType.OCCUPATION> | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    income?: BaseDomain<DomainType.INCOME> | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: BaseDomain })
    educationLevel?: BaseDomain<DomainType.EDUCATION_LEVEL> | null = null;

    @Schemable()
    @Default(null)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Address, arrayItemType: Types.OBJECT })
    addresses?: Address[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Currency })
    currency?: Currency | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] | null = null;

    @Schemable()
    @Default(null)
    @QueryParam()
    @Type({ type: Types.ARRAY, class: UserAppInstance, arrayItemType: Types.OBJECT })
    appInstances?: UserAppInstance[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: Country })
    country?: Country | null = null;

}
