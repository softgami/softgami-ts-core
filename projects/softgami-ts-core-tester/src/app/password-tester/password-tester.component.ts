import { Component } from '@angular/core';
import { PasswordValidationErrors } from 'projects/softgami-ts-core/src/lib/core/services/password/password-validation-errors.enum';
import { PasswordUtilsService } from 'projects/softgami-ts-core/src/lib/core/services/password/password-utils.service';
import {
    PASSWORD_VALIDATION_SPECIAL_CHARS,
} from 'projects/softgami-ts-core/src/lib/core/services/password/password-validation-special-chars';

@Component({
    selector: 'app-password-tester',
    templateUrl: './password-tester.component.html',
})
export class PasswordTesterComponent {

    passwordValidation: boolean | PasswordValidationErrors | null = null;
    PasswordValidationErrorsEnum = PasswordValidationErrors;
    PASSWORD_VALIDATION_SPECIAL_CHARS = PASSWORD_VALIDATION_SPECIAL_CHARS;
    passwordStrength: number | null = null;

    onChangePassword(element: EventTarget | null): void {

        const inputElement: HTMLInputElement | null = element as HTMLInputElement;
        if (inputElement && inputElement.value) {

            this.passwordValidation = PasswordUtilsService.validatePassword(inputElement.value);

        }

    }

    onChangePasswordStrength(element: EventTarget | null): void {

        const inputElement: HTMLInputElement | null = element as HTMLInputElement;
        if (inputElement && inputElement.value) {

            this.passwordStrength = PasswordUtilsService.getPasswordStrength(inputElement.value);

        }

    }

}
