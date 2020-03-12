import { BasicReader } from '../../internal';
import { Extends } from '../../internal';
import { Index } from '../../internal';
import { QueryParam } from '../../internal';
import { Required } from '../../internal';
import { Schemable } from '../../internal';
import { Trim } from '../../internal';
import { Type } from '../../internal';
import { Types } from '../../internal';
import { Unique } from '../../internal';

@Extends(BasicReader)
export class Reader extends BasicReader {

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
