import { AppInstance } from '../../core/app/app-instance/app-instance.model';
import { City } from '../../content-maker/location/city/city.model';
import { Collection } from '../collection/collection.model';
import { Default } from '../../core/shared/decorators/default.decorator';
import { Domain } from '../../content-maker/domain/domain.model';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { ExcludeIndexes } from '../../core/shared/decorators/exclude-indexes.decorator';
import { Extends } from '../../core/shared/decorators/extends.decorator';
import { Language } from '../../content-maker/i18n/language/language.model';
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
import { User } from '../../core/user/user.model';

@Extends(Thing)
export class BasicPublication extends Thing {

    @Schemable()
    @Required()
    @Default(true)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isActive: boolean = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'LANGUAGE' })
    @Type({ type: Types.OBJECT, class: Language })
    language: Language = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: User })
    creator: User = null;

    @Schemable()
    @Required()
    @Default(false)
    @QueryParam()
    @Type({ type: Types.BOOLEAN })
    isDigital: boolean = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Default(null)
    @QueryParam()
    @Sortable({ label: 'COLLECTION' })
    @Type({ type: Types.ARRAY, class: Collection, arrayItemType: Types.OBJECT })
    collections: Collection[] = null;

    @Schemable()
    @Required()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: AppInstance })
    appInstance: AppInstance = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    originalName?: string = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Type({ type: Types.STRING })
    subTitle?: string = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    originalSubTitle?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @QueryParam()
    @Type({ type: Types.ARRAY, class: Person, arrayItemType: Types.OBJECT })
    authors?: Person<PersonType.AUTHOR>[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Person, arrayItemType: Types.OBJECT })
    illustrators?: Person<PersonType.ILLUSTRATOR>[] = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Type({ type: Types.OBJECT, class: Publisher })
    publisher?: Publisher = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Publisher })
    originalPublisher?: Publisher = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Person, arrayItemType: Types.OBJECT })
    translators?: Person<PersonType.TRANSLATOR>[] = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    contentRating?: string = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    friendlyUrl?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'DIGITAL_PUBLICATION_FORMAT' })
    @Type({ type: Types.OBJECT, class: Domain })
    digitalPublicationFormat?: Domain<DomainType.DIGITAL_PUBLICATION_FORMAT> = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    sizeBytes?: number = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'QUALITY' })
    @Type({ type: Types.NUMBER })
    quality?: number = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'CODE' })
    @Type({ type: Types.STRING })
    code?: string = null;

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'NUMBER' })
    @Type({ type: Types.STRING })
    number?: string = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'NUMBER_OF_PAGES' })
    @Type({ type: Types.NUMBER })
    numberOfPages?: number = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'YEAR' })
    @Type({ type: Types.NUMBER })
    year?: number = null;

    @Schemable()
    @Type({ type: Types.NUMBER })
    originalYear?: number = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'ISBN10' })
    @Type({ type: Types.STRING })
    isbn10?: string = null;

    @Schemable()
    @QueryParam()
    @Sortable({ label: 'ISBN13' })
    @Type({ type: Types.STRING })
    isbn13?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: QuantitativeValue, arrayItemType: Types.OBJECT })
    dimensions?: QuantitativeValue[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: QuantitativeValue })
    weight?: QuantitativeValue = null;

    @Schemable()
    @ExcludeIndexes()
    @QueryParam()
    @Sortable({ label: 'PUBLICATION_COVER_TYPE' })
    @Type({ type: Types.OBJECT, class: Domain })
    publicationCoverType?: Domain<DomainType.PUBLICATION_COVER_TYPE> = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    edition?: string = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    originalEdition?: string = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: City })
    city?: City = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: City })
    originalCity?: City = null;

    @Schemable()
    @Default(null)
    @Trim()
    @QueryParam()
    @Sortable({ label: 'TAGS' })
    @Type({ type: Types.ARRAY, arrayItemType: Types.STRING })
    tags?: string[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: MonetaryValue })
    price?: MonetaryValue = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    extraContent?: string = null;

    @Schemable()
    @Type({ type: Types.DATE })
    purchasedAt?: Date = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Reader, arrayItemType: Types.OBJECT })
    readers?: Reader[] = null;

    @Schemable()
    @ExcludeIndexes()
    @Type({ type: Types.OBJECT, class: Reader })
    currentReader?: Reader = null;

    @Schemable()
    @ExcludeIndexes()
    @Default(null)
    @Type({ type: Types.ARRAY, class: Reader, arrayItemType: Types.OBJECT })
    waitingList?: Reader[] = null;

    @Schemable()
    @Trim()
    @Type({ type: Types.STRING })
    sourcePublicationId?: string = null;

}
