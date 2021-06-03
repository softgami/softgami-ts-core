import { Address } from '../../content-maker/location/address/address.model';
import { BaseDomain } from '../../content-maker/domain/base-domain.model';
import { BaseUser } from './base-user.model';
import { CompoundIndex } from '../shared/decorators/compound-index.decorator';
import { Country } from '../../content-maker/location/country/country.model';
import { Credentials } from '../auth/credentials/credentials.model';
import { Currency } from '../../content-maker/currency/currency.model';
import { Default } from '../shared/decorators/default.decorator';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { ExcludeIndexes } from '../shared/decorators/exclude-indexes.decorator';
import { Extends } from '../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../shared/decorators/generate-mongo-object-id.decorator';
import { Language } from '../../content-maker/i18n/language/language.model';
import { MaxLength } from '../shared/decorators/max-length.decorator';
import { MinLength } from '../shared/decorators/min-length.decorator';
import { Phone } from '../shared/phone/phone.model';
import { QueryParam } from '../shared/decorators/query-param.decorator';
import { Role } from '../permissions/role/role.model';
import { Schemable } from '../shared/decorators/schemable.decorator';
import { Trim } from '../shared/decorators/trim.decorator';
import { Type } from '../shared/decorators/type.decorator';
import { Types } from '../shared/models/types.enum';
import { UserAppInstance } from './user-app-instance.model';

// @dynamic
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
    { fields: { 'appInstances.host._id': 1 }, options: { unique: false } },
    { fields: { 'appInstances.host.name': 1 }, options: { unique: false } },
    { fields: { 'country._id': 1 }, options: { unique: false } },
    { fields: { 'country.code': 1 }, options: { unique: false } },
])
@Extends(BaseUser)
@GenerateMongoObjectID()
export class User extends BaseUser {

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Credentials })
    credentials?: Credentials | null = null;

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
    @Type({ type: Types.OBJECT, class: BaseUser })
    creator?: BaseUser | null = null;

    @Schemable()
    @Default(void 0)
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
    @Default(void 0)
    @ExcludeIndexes()
    @Type({ type: Types.ARRAY, class: Address, arrayItemType: Types.OBJECT })
    addresses?: Address[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Currency })
    currency?: Currency | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(void 0)
    @Type({ type: Types.ARRAY, class: Role, arrayItemType: Types.OBJECT })
    roles?: Role[] | null = null;

    @Schemable()
    @Default(void 0)
    @QueryParam()
    @Type({ type: Types.ARRAY, class: UserAppInstance, arrayItemType: Types.OBJECT })
    appInstances?: UserAppInstance[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: Country })
    country?: Country | null = null;

}
