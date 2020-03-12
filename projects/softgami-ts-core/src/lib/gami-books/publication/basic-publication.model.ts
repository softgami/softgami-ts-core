import { AppInstance } from '../../internal';
import { City } from '../../internal';
import { Collection } from '../../internal';
import { Default } from '../../internal';
import { Domain } from '../../internal';
import { DomainType } from '../../internal';
import { ExcludeIndexes } from '../../internal';
import { Extends } from '../../internal';
import { Language } from '../../internal';
import { MonetaryValue } from '../../internal';
import { Person } from '../../internal';
import { PersonType } from '../../internal';
import { Publisher } from '../../internal';
import { QuantitativeValue } from '../../internal';
import { QueryParam } from '../../internal';
import { Reader } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Sortable } from '../../internal';
import { Thing } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { User } from '../../internal';

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
