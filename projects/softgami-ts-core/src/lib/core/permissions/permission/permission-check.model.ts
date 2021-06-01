import { Actions } from '../action/actions.enum';
import { Default } from '../../shared/decorators/default.decorator';
import { Enum } from '../../shared/decorators/enum.decorator';
import { Extends } from '../../shared/decorators/extends.decorator';
import { GenerateMongoObjectID } from '../../shared/decorators/generate-mongo-object-id.decorator';
import { Required } from '../../shared/decorators/required.decorator';
import { RoleAlias } from '../role/role-alias.enum';
import { Schemable } from '../../shared/decorators/schemable.decorator';
import { SkipID } from '../../shared/decorators/skip-id.decorator';
import { SubjectAlias } from '../subject/subject-alias.enum';
import { Thing } from '../../shared/thing/thing.model';
import { Type } from '../../shared/decorators/type.decorator';
import { Types } from '../../shared/models/types.enum';

// @dynamic
@SkipID()
@Extends(Thing)
@GenerateMongoObjectID(false)
export class PermissionCheck extends Thing {

    @Schemable()
    @Required()
    @Enum(Object.keys(SubjectAlias).map((key: string) => SubjectAlias[key as keyof typeof SubjectAlias]))
    @Type({ type: Types.ENUM })
    subject: SubjectAlias | null = null;

    @Schemable()
    @Required()
    @Enum(Object.keys(Actions).map(key => Actions[key as keyof typeof Actions]).filter(value => typeof value === 'number'))
    @Type({ type: Types.ENUM })
    action: Actions | null = null;

    @Schemable()
    @Enum(Object.keys(RoleAlias).map((key: string) => RoleAlias[key as keyof typeof RoleAlias]))
    @Type({ type: Types.ENUM })
    role?: RoleAlias | null = null;

    @Schemable()
    @Type({ type: Types.BOOLEAN })
    @Default(true)
    shouldValidateBodyAppInstance?: boolean | null = null;

    @Schemable()
    @Default(true)
    @Type({ type: Types.BOOLEAN })
    shouldValidateQueryAppInstance?: boolean | null = null;

}
