import { BasicFile } from '../../internal';
import { CompoundIndex } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { QueryParam } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { Unique } from '../../internal';

@CompoundIndex([
    { fields: { name: 1, 'parent._id': 1, isPublic: 1 }, options: { unique : true }},
])
@Extends(BasicFile)
export class File extends BasicFile {

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
