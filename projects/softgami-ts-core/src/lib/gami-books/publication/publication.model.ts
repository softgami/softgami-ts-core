import { BasicPublication } from './basic-publication.model';
import { CompoundIndex } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/compound-index.decorator';
import { Extends } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/extends.decorator';
import { Index } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/index.decorator';
import { QueryParam } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/query-param.decorator';
import { Required } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/required.decorator';
import { Schemable } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/schemable.decorator';
import { Trim } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/trim.decorator';
import { Type } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/type.decorator';
import { Types } from 'projects/softgami-ts-core/src/lib/core/shared/models/types.enum';
import { Unique } from 'projects/softgami-ts-core/src/lib/core/shared/decorators/unique.decorator';

@CompoundIndex([
    { fields: { 'appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { originalName : 1 }, options: { unique : false }},
    { fields: { isActive : 1 }, options: { unique : false }},
    { fields: { 'language.code': 1 }, options: { unique: false }},
    { fields: { 'language._id': 1 }, options: { unique: false }},
    { fields: { 'creator._id' : 1 }, options: { unique : false }},
    { fields: { isDigital : 1 }, options: { unique : false }},
    { fields: { 'collections._id' : 1 }, options: { unique : false }},
    { fields: { 'collections.name' : 1 }, options: { unique : false }},
    { fields: { 'collections.appInstance._id' : 1 }, options: { unique : false }},
    { fields: { 'collections.appInstance.creator._id' : 1 }, options: { unique : false }},
    { fields: { 'collections.orderIndex' : 1 }, options: { unique : false }},
    { fields: { 'authors._id': 1 }, options: { unique: false }},
    { fields: { 'authors.name': 1 }, options: { unique: false }},
    { fields: { description: 1 }, options: { unique: false }},
    { fields: { subTitle: 1 }, options: { unique: false }},
    { fields: { originalSubTitle: 1 }, options: { unique: false }},
    { fields: { 'publisher._id': 1 }, options: { unique: false }},
    { fields: { 'publisher.name': 1 }, options: { unique: false }},
    { fields: { 'originalPublisher._id': 1 }, options: { unique: false }},
    { fields: { 'originalPublisher.name': 1 }, options: { unique: false }},
    { fields: { 'digitalPublicationFormat._id' : 1 }, options: { unique : false }},
    { fields: { 'digitalPublicationFormat.name' : 1 }, options: { unique : false }},
    { fields: { 'digitalPublicationFormat.value' : 1 }, options: { unique : false }},
    { fields: { quality: 1 }, options: { unique: false }},
    { fields: { code: 1 }, options: { unique: false }},
    { fields: { number: 1 }, options: { unique: false }},
    { fields: { numberOfPages: 1 }, options: { unique: false }},
    { fields: { year: 1 }, options: { unique: false }},
    { fields: { isbn10: 1 }, options: { unique: false }},
    { fields: { isbn13: 1 }, options: { unique: false }},
    { fields: { 'publicationCoverType._id': 1 }, options: { unique: false }},
    { fields: { 'publicationCoverType.name': 1 }, options: { unique: false }},
    { fields: { 'publicationCoverType.value': 1 }, options: { unique: false }},
    { fields: { tags: 1 }, options: { unique: false }},
    { fields: { 'readers._id' : 1 }, options: { unique : false }},
    { fields: { 'readers.readAt' : 1 }, options: { unique : false }},
    { fields: { 'currentReader._id' : 1 }, options: { unique : false }},
    { fields: { 'currentReader.readAt' : 1 }, options: { unique : false }},
    { fields: { 'currentReader.issuedAt' : 1 }, options: { unique : false }},
    { fields: { 'currentReader.dueDate' : 1 }, options: { unique : false }},
    { fields: { 'currentReader.returnedAt' : 1 }, options: { unique : false }},
    { fields: { 'waitingList._id' : 1 }, options: { unique : false }},
    { fields: { 'waitingList.issuedAt' : 1 }, options: { unique : false }},
    { fields: { sourcePublicationId: 1 }, options: { unique: false }},
])
@Extends(BasicPublication)
export class Publication extends BasicPublication {

    @Schemable()
    @Index()
    @Required()
    @Trim()
    @QueryParam()
    @Unique()
    @Type({ type: Types.STRING })
    // tslint:disable-next-line: variable-name
    _id: string = null;

}
