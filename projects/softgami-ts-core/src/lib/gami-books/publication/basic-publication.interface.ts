import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { City } from '../../content-maker/location/city/city.interface';
import { Collection } from '../collection/collection.interface';
import { Domain } from '../../content-maker/domain/domain.interface';
import { DomainType } from '../../content-maker/domain/domain-type.enum';
import { Language } from '../../content-maker/i18n/language/language.interface';
import { MonetaryValue } from '../../core/shared/monetary/monetary-value.interface';
import { Person } from '../../content-maker/person/person.interface';
import { PersonType } from '../../content-maker/person/person-type.enum';
import { Publisher } from '../publisher/publisher.interface';
import { QuantitativeValue } from '../../core/shared/value/quantitative-value.interface';
import { Reader } from '../reader/reader.interface';
import { Thing } from '../../core/shared/thing/thing.interface';
import { User } from '../../core/user/user.interface';

export interface BasicPublication extends Thing {
    isActive: boolean;
    language: Language;
    creator: User;
    isDigital: boolean;
    collections: Collection[];
    appInstance: AppInstance;
    originalName?: string;
    subTitle?: string;
    originalSubTitle?: string;
    authors?: Person<PersonType.AUTHOR>[];
    illustrators?: Person<PersonType.ILLUSTRATOR>[];
    publisher?: Publisher;
    originalPublisher?: Publisher;
    translators?: Person<PersonType.TRANSLATOR>[];
    contentRating?: string;
    friendlyUrl?: string;
    digitalPublicationFormat?: Domain<DomainType.DIGITAL_PUBLICATION_FORMAT>;
    sizeBytes?: number;
    quality?: number;
    code?: string;
    number?: string;
    numberOfPages?: number;
    year?: number;
    originalYear?: number;
    isbn10?: string;
    isbn13?: string;
    dimensions?: QuantitativeValue[];
    weight?: QuantitativeValue;
    publicationCoverType?: Domain<DomainType.PUBLICATION_COVER_TYPE>;
    edition?: string;
    originalEdition?: string;
    city?: City;
    originalCity?: City;
    tags?: string[];
    price?: MonetaryValue;
    extraContent?: string;
    purchasedAt?: Date;
    readers?: Reader[];
    currentReader?: Reader;
    waitingList?: Reader[];
    sourcePublicationId?: string;
}
