import { Author } from '../author/author.interface';
import { City } from '../../core/shared/location/city/city.interface';
import { Collection } from '../collection/collection.interface';
import { Domain } from '../../content-maker/domain/domain.interface';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { Illustrator } from '../illustrator/illustrator.interface';
import { Language } from '../../content-maker/i18n/language/language.interface';
import { MonetaryValue } from '../../core/shared/monetary/monetary-value.interface';
import { Publisher } from '../publisher/publisher.interface';
import { QuantitativeValue } from '../../core/shared/value/quantitative-value.interface';
import { Reader } from '../reader/reader.interface';
import { Thing } from '../../core/shared/thing/thing.interface';
import { Translator } from '../translator/translator.interface';
import { User } from '../../core/user/user.interface';

export interface BasicPublication extends Thing {
    isActive: boolean;
    language: Language;
    creator: User;
    isDigital: boolean;
    parentCollection: Collection;
    subTitle?: string;
    authors?: Array<Author>;
    illustrators?: Array<Illustrator>;
    publisher?: Publisher;
    translators?: Array<Translator>;
    contentRating?: string;
    friendlyUrl?: string;
    digitalPublicationFormat?: Domain<DomainType.DIGITAL_PUBLICATION_FORMAT, string>;
    sizeBytes?: number;
    quality?: number;
    code?: string;
    number?: string;
    numberOfPages?: number;
    year?: number;
    isbn10?: string;
    isbn13?: string;
    dimensions?: Array<QuantitativeValue>;
    weight?: QuantitativeValue;
    publicationCoverType?: Domain<DomainType.PUBLICATION_COVER_TYPE, string>;
    edition?: string;
    city?: City;
    tags?: Array<string>;
    price?: MonetaryValue;
    extraContent?: string;
    purchasedAt?: Date;
    readers?: Array<Reader>;
    currentReader?: Reader;
    waitingList?: Array<Reader>;
    sourcePublicationId?: string;
}
