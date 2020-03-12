import { Actions } from '../../../internal';
import { Enum } from '../../../internal';
import { Required } from '../../../internal';
import { RoleAlias } from '../../../internal';
import { Schemable } from '../../../internal';
import { SkipID } from '../../../internal';
import { SubjectAlias } from '../../../internal';
import { Type } from '../../../internal';
import { Types } from '../../../internal';

// @dynamic
@SkipID()
export class PermissionCheck {

    @Schemable()
    @Required()
    @Enum(Object.keys(SubjectAlias).map((key: string) => SubjectAlias[key]))
    @Type({ type: Types.ENUM })
    subject: SubjectAlias;

    @Schemable()
    @Required()
    @Enum(Object.keys(Actions).map((key: string) => Actions[key]))
    @Type({ type: Types.ENUM })
    action: Actions;

    @Schemable()
    @Enum(Object.keys(RoleAlias).map((key: string) => RoleAlias[key]))
    @Type({ type: Types.ENUM })
    role?: RoleAlias;

    @Schemable()
    @Type({ type: Types.BOOLEAN })
    shouldValidateBodyAppInstance?: boolean;

    @Schemable()
    @Type({ type: Types.BOOLEAN })
    shouldValidateQueryAppInstance?: boolean;

}
