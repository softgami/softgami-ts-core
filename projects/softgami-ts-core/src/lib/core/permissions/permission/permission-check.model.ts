import { Actions } from '../action/actions.enum';
import { Enum } from '@lib/core/shared/decorators/enum.decorator';
import { Required } from '@lib/core/shared/decorators/required.decorator';
import { RoleAlias } from '../role/role-alias.enum';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { SkipID } from '@lib/core/shared/decorators/skip-id.decorator';
import { SubjectAlias } from '../subject/subject-alias.enum';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';

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
