import { Actions } from '../action/actions.enum';
import { Default } from '../../../core/shared/decorators/default.decorator';
import { Enum } from '../../../core/shared/decorators/enum.decorator';
import { Extends } from '../../../core/shared/decorators/extends.decorator';
import { Required } from '../../../core/shared/decorators/required.decorator';
import { RoleAlias } from '../role/role-alias.enum';
import { Schemable } from '../../../core/shared/decorators/schemable.decorator';
import { SkipID } from '../../../core/shared/decorators/skip-id.decorator';
import { SubjectAlias } from '../subject/subject-alias.enum';
import { Thing } from '../../../core/shared/thing/thing.model';
import { Type } from '../../../core/shared/decorators/type.decorator';
import { Types } from '../../../core/shared/models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
export class PermissionCheck extends Thing {

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
    @Default(true)
    shouldValidateBodyAppInstance?: boolean;

    @Schemable()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    shouldValidateQueryAppInstance?: boolean;

}
