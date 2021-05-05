import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { City } from '../../content-maker/location/city/city.model';
import { Collection } from '../collection/collection.model';
import { CompoundIndex } from '../../core/shared/decorators/compound-index.decorator';
import { Default } from '../../core/shared/decorators/default.decorator';
import { Domain } from '../../content-maker/domain/domain.model';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Language } from '../../content-maker/i18n/language/language.model';
import { Max } from '../../core/shared/decorators/max.decorator';
import { MaxLength } from '../../core/shared/decorators/max-length.decorator';
import { Min } from '../../core/shared/decorators/min.decorator';
import { MinLength } from '../../core/shared/decorators/min-length.decorator';
import { MonetaryValue } from '../../content-maker/currency/monetary-value.model';
import { Person } from '../../content-maker/person/person.model';
import { PersonType } from '../../content-maker/person/person-type.enum';
import { Publisher } from '../publisher/publisher.model';
import { QuantitativeValue } from '../../core/shared/value/quantitative-value.model';
import { QueryParam } from '../../core/shared/decorators/query-param.decorator';
import { Reader } from '../reader/reader.model';
import { Required } from '../../core/shared/decorators/required.decorator';
import { Schemable } from '../../core/shared/decorators/schemable.decorator';
import { Sortable } from '../../core/shared/decorators/sortable.decorator';
import { Thing } from '../../core/shared/thing/thing.model';
import { Trim } from '../../core/shared/decorators/trim.decorator';
import { Type } from '../../core/shared/decorators/type.decorator';
import { Types } from '../../core/shared/models/types.enum';
import { Unique } from '../../core/shared/decorators/unique.decorator';
import { User } from '../../core/user/user.model';

@CompoundIndex([
    { fields: { name: 1 }, options: { unique: false } },
    { fields: { createdAt: 1 }, options: { unique: false } },
    { fields: { 'appInstance._id': 1 }, options: { unique: false } },
    { fields: { 'appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { originalName: 1 }, options: { unique: false } },
    { fields: { isActive: 1 }, options: { unique: false } },
    { fields: { 'language.code': 1 }, options: { unique: false } },
    { fields: { 'language._id': 1 }, options: { unique: false } },
    { fields: { 'originalLanguage._id': 1 }, options: { unique: false } },
    { fields: { 'originalLanguage.code': 1 }, options: { unique: false } },
    { fields: { 'creator._id': 1 }, options: { unique: false } },
    { fields: { isDigital: 1 }, options: { unique: false } },
    { fields: { 'collections._id': 1 }, options: { unique: false } },
    { fields: { 'collections.name': 1 }, options: { unique: false } },
    { fields: { 'collections.appInstance._id': 1 }, options: { unique: false } },
    { fields: { 'collections.appInstance.creator._id': 1 }, options: { unique: false } },
    { fields: { 'collections.orderIndex': 1 }, options: { unique: false } },
    { fields: { 'authors._id': 1 }, options: { unique: false } },
    { fields: { 'authors.name': 1 }, options: { unique: false } },
    { fields: { 'illustrators._id': 1 }, options: { unique: false } },
    { fields: { 'illustrators.name': 1 }, options: { unique: false } },
    { fields: { 'translators._id': 1 }, options: { unique: false } },
    { fields: { 'translators.name': 1 }, options: { unique: false } },
    { fields: { description: 1 }, options: { unique: false } },
    { fields: { subTitle: 1 }, options: { unique: false } },
    { fields: { originalSubTitle: 1 }, options: { unique: false } },
    { fields: { 'publisher._id': 1 }, options: { unique: false } },
    { fields: { 'publisher.name': 1 }, options: { unique: false } },
    { fields: { 'originalPublisher._id': 1 }, options: { unique: false } },
    { fields: { 'originalPublisher.name': 1 }, options: { unique: false } },
    { fields: { 'digitalPublicationFormat._id': 1 }, options: { unique: false } },
    { fields: { 'digitalPublicationFormat.name': 1 }, options: { unique: false } },
    { fields: { 'digitalPublicationFormat.value': 1 }, options: { unique: false } },
    { fields: { quality: 1 }, options: { unique: false } },
    { fields: { code: 1 }, options: { unique: false } },
    { fields: { number: 1 }, options: { unique: false } },
    { fields: { numberOfPages: 1 }, options: { unique: false } },
    { fields: { year: 1 }, options: { unique: false } },
    { fields: { isbn10: 1 }, options: { unique: false } },
    { fields: { isbn13: 1 }, options: { unique: false } },
    { fields: { 'publicationCoverType._id': 1 }, options: { unique: false } },
    { fields: { 'publicationCoverType.name': 1 }, options: { unique: false } },
    { fields: { 'publicationCoverType.value': 1 }, options: { unique: false } },
    { fields: { tags: 1 }, options: { unique: false } },
    { fields: { 'readers._id': 1 }, options: { unique: false } },
    { fields: { 'readers.readAt': 1 }, options: { unique: false } },
    { fields: { 'currentReader._id': 1 }, options: { unique: false } },
    { fields: { 'currentReader.readAt': 1 }, options: { unique: false } },
    { fields: { 'currentReader.issuedAt': 1 }, options: { unique: false } },
    { fields: { 'currentReader.dueDate': 1 }, options: { unique: false } },
    { fields: { 'currentReader.returnedAt': 1 }, options: { unique: false } },
    { fields: { 'waitingList._id': 1 }, options: { unique: false } },
    { fields: { 'waitingList.issuedAt': 1 }, options: { unique: false } },
    { fields: { sourcePublicationId: 1 }, options: { unique: false } },
])
@Extends(Thing)
export class Publication extends Thing {

    @Schemable()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.MONGO_OBJECT_ID })
    _id: string | null = null;

    @Schemable()
    @Required()
    @Default(true)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isActive: boolean | null = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'LANGUAGE', field: 'language.name' })
    @Type({ type: Types.OBJECT, class: Language })
    language: Language | null = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator: User | null = null;

    @Schemable()
    @Required()
    @Default(false)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isDigital: boolean | null = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Default(null)
    @QueryParam()
    @Sortable([
        { label: 'COLLECTION', field: 'collections.name' },
        { label: 'ORDER', field: 'collections.orderIndex' },
    ])
    @Type({ type: Types.ARRAY, class: Collection, arrayItemType: Types.OBJECT })
    collections: Collection[] | null = null;

    @Schemable()
    @Required()
    @QueryParam()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance: AppInstance | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    originalName?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Language })
    originalLanguage?: Language | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    subTitle?: string | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    originalSubTitle?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @QueryParam()
    @Type({ type: Types.ARRAY, class: Person, arrayItemType: Types.OBJECT })
    authors?: Person<PersonType.AUTHOR>[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Person, arrayItemType: Types.OBJECT })
    illustrators?: Person<PersonType.ILLUSTRATOR>[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: Publisher })
    publisher?: Publisher | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Publisher })
    originalPublisher?: Publisher | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Person, arrayItemType: Types.OBJECT })
    translators?: Person<PersonType.TRANSLATOR>[] | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    contentRating?: string | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    friendlyUrl?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'DIGITAL_PUBLICATION_FORMAT', field: 'digitalPublicationFormat.name' })
    @Type({ type: Types.OBJECT, class: Domain })
    digitalPublicationFormat?: Domain<DomainType.DIGITAL_PUBLICATION_FORMAT> | null = null;

    @Schemable()
    @Min(0)
    @Type({ type: Types.NUMBER })
    sizeBytes?: number | null = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'QUALITY' })
    @Min(0)
    @Max(10)
    @Type({ type: Types.NUMBER })
    quality?: number | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @MinLength(1)
    @MaxLength(50)
    @Sortable({ label: 'CODE' })
    @Type({ type: Types.STRING })
    code?: string | null = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @MinLength(1)
    @MaxLength(50)
    @Sortable({ label: 'NUMBER' })
    @Type({ type: Types.STRING })
    number?: string | null = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'NUMBER_OF_PAGES' })
    @Min(1)
    @Type({ type: Types.NUMBER })
    numberOfPages?: number | null = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'YEAR' })
    @Min(1)
    @Type({ type: Types.NUMBER })
    year?: number | null = null;

    @Schemable()
    @Min(1)
    @Type({ type: Types.NUMBER })
    originalYear?: number | null = null;

    @Schemable()
    @QueryParam()
    @MinLength(1)
    @MaxLength(30)
    @Sortable({ label: 'ISBN10' })
    @Type({ type: Types.STRING })
    isbn10?: string | null = null;

    @Schemable()
    @QueryParam()
    @MinLength(1)
    @MaxLength(30)
    @Sortable({ label: 'ISBN13' })
    @Type({ type: Types.STRING })
    isbn13?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: QuantitativeValue, arrayItemType: Types.OBJECT })
    dimensions?: QuantitativeValue[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: QuantitativeValue })
    weight?: QuantitativeValue | null = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'PUBLICATION_COVER_TYPE', field: 'publicationCoverType.name' })
    @Type({ type: Types.OBJECT, class: Domain })
    publicationCoverType?: Domain<DomainType.PUBLICATION_COVER_TYPE> | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    edition?: string | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(20)
    @Type({ type: Types.STRING })
    originalEdition?: string | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: City })
    city?: City | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: City })
    originalCity?: City | null = null;

    @Schemable()
    @Default(null)
    @Trim()
    @QueryParam()
    @Sortable({ label: 'TAGS', field: 'tags' })
    @MinLength(1)
    @MaxLength(30)
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    tags?: string[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: MonetaryValue })
    price?: MonetaryValue | null = null;

    @Schemable()
    @Trim()
    @MinLength(1)
    @MaxLength(200)
    @Type({ type: Types.STRING })
    extraContent?: string | null = null;

    @Schemable()
    @Type({ type: Types.DATE })
    purchasedAt?: Date | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Reader, arrayItemType: Types.OBJECT })
    readers?: Reader[] | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Reader })
    currentReader?: Reader | null = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Reader, arrayItemType: Types.OBJECT })
    waitingList?: Reader[] | null = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.MONGO_OBJECT_ID })
    sourcePublicationId?: string | null = null;

}
