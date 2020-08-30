import { Component } from '@angular/core';
import { PasswordValidationErrors } from 'projects/softgami-ts-core/src/lib/core/services/password/password-validation-errors.enum';
import { PasswordUtilsService } from 'projects/softgami-ts-core/src/lib/core/services/password/password-utils.service';
import {
    PASSWORD_VALIDATION_SPECIAL_CHARS
} from 'projects/softgami-ts-core/src/lib/core/services/password/password-validation-special-chars';

@Component({
    selector: 'app-password-tester',
    templateUrl: './password-tester.component.html',
    styleUrls: ['./password-tester.component.scss'],
})
export class PasswordTesterComponent {

    passwordValidation: boolean | PasswordValidationErrors;
    PasswordValidationErrorsEnum = PasswordValidationErrors;
    PASSWORD_VALIDATION_SPECIAL_CHARS = PASSWORD_VALIDATION_SPECIAL_CHARS;
    passwordStrength: number;

    onChangePassword(value: string) {

        this.passwordValidation = PasswordUtilsService.validatePassword(value);

    }

    onChangePasswordStrength(value: string) {

        this.passwordStrength = PasswordUtilsService.getPasswordStrength(value);

    }

}
