import { BasicTranslation } from '../../../internal';
import { CompoundIndex } from '../../../internal';
import { Extends } from '../../../internal';
import { Index } from '../../../internal';
import { QueryParam } from '../../../internal';
import { Required } from '../../../internal';
import { Schemable } from '../../../internal';
import { Trim } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';
import { Unique } from '../../../internal';

@CompoundIndex([
    { fields: { 'language._id': 1 }, options: { unique: false }},
    { fields: { 'language.code': 1 }, options: { unique: false }},
    { fields: { name : 1, 'language.code' : 1 }, options: { unique : true }},
    { fields: { 'creator._id': 1 }, options: { unique: false }},
    { fields: { 'appInstance._id': 1 }, options: { unique: false }},
])
@Extends(BasicTranslation)
export class Translation extends BasicTranslation {

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
