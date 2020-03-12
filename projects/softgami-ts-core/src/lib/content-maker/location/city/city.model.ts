import { BasicCity } from '../../../internal';
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
    { fields: { name: 1 }, options: { unique: false }},
    { fields: { 'state._id': 1 }, options: { unique: false }},
    { fields: { 'state.name': 1 }, options: { unique: false }},
    { fields: { 'state.code': 1 }, options: { unique: false }},
    { fields: { 'state.country._id': 1 }, options: { unique: false }},
    { fields: { 'state.country.code': 1 }, options: { unique: false }},
    { fields: { 'state.country.name': 1 }, options: { unique: false }},
])
@Extends(BasicCity)
export class City extends BasicCity {

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