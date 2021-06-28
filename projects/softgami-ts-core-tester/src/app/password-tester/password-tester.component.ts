import { Component } from '@angular/core';
import { PasswordUtilsService, PasswordValidationErrors, PASSWORD_VALIDATION_SPECIAL_CHARS } from 'softgami-ts-core';

@Component({
    selector: 'app-password-tester',
    templateUrl: './password-tester.component.html',
})
export class PasswordTesterComponent {

    passwordValidation: boolean | PasswordValidationErrors | null = null;
    PasswordValidationErrorsEnum = PasswordValidationErrors;
    PASSWORD_VALIDATION_SPECIAL_CHARS = PASSWORD_VALIDATION_SPECIAL_CHARS;
    passwordStrength: number | null = null;
    validPassword: string | undefined;
    validPasswordLength = PasswordUtilsService.PASSWORD_MIN_LENGTH;

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

    generateValidPassword(length: number): void {

        this.validPassword = PasswordUtilsService.generateValidPassword(length);

    }

}
