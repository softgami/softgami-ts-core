import { AT_LEAST_ONE_DIGIT_REGEX } from '../../shared/regex/numbers/at-least-one-digit.regex';
import { AT_LEAST_ONE_LOWERCASE_REGEX } from '../../shared/regex/chars/at-least-one-lowercase.regex';
import { AT_LEAST_ONE_UPPERCASE_REGEX } from '../../shared/regex/chars/at-least-one-uppercase.regex';
import { PASSWORD_SPECIAL_CHARS_REGEX } from '../../shared/regex/password/password-special-chars.regex';
import { PasswordValidationErrors } from './password-validation-errors.enum';
import { VALID_PASSWORD_REGEX } from '../../shared/regex/password/valid-password.regex';
import { PASSWORD_VALIDATION_SPECIAL_CHARS } from './password-validation-special-chars';

export class PasswordUtilsService {

    static readonly PASSWORD_MIN_LENGTH = 8;
    static readonly PASSWORD_MAX_LENGTH = 20;

    static validatePassword(password: string): boolean | PasswordValidationErrors {

        if (!password || password.length < PasswordUtilsService.PASSWORD_MIN_LENGTH) return PasswordValidationErrors.MIN_LENGHT_8;

        if (password.length > PasswordUtilsService.PASSWORD_MAX_LENGTH) return PasswordValidationErrors.MAX_LENGHT_20;

        if (!AT_LEAST_ONE_LOWERCASE_REGEX.test(password)) return PasswordValidationErrors.AT_LEAST_ONE_LOWERCASE_LETTER;

        if (!AT_LEAST_ONE_UPPERCASE_REGEX.test(password)) return PasswordValidationErrors.AT_LEAST_ONE_UPPERCASE_LETTER;

        if (!AT_LEAST_ONE_DIGIT_REGEX.test(password)) return PasswordValidationErrors.AT_LEAST_ONE_NUMBER;

        if (!PASSWORD_SPECIAL_CHARS_REGEX.test(password)) return PasswordValidationErrors.AT_LEAST_ONE_SPECIAL_CHAR;

        if (!VALID_PASSWORD_REGEX.test(password)) return PasswordValidationErrors.INVALID_CHARS;

        if (PasswordUtilsService.testForSequences(password)) return PasswordValidationErrors.SEQUENTIAL_CHARS;

        const chars: string[] = password.split('');
        for (let i = 0; i < chars.length; i++) {

            if (chars[i] === chars[i + 1] && chars[i] === chars[i + 2]) return PasswordValidationErrors.REPEATED_CHARS;

        }

        return true;

    }

    static testForSequences(s: string): boolean {

        for (let i = 0; i < s.length; i++) {

            if (+s[+i + 1] === +s[i] + 1 && +s[+i + 2] === +s[i] + 2) return true;

        }

        for (let i = 0; i < s.length; i++) {

            if (String.fromCharCode(s.charCodeAt(i) + 1) === s[+i + 1] &&
                String.fromCharCode(s.charCodeAt(i) + 2) === s[+i + 2]) return true;

        }

        return false;

    }

    static getPasswordStrength(password: string): number {

        if (!password) {

            return 0;

        }

        let score = 0;
        const maxLength = 20;
        const maxDifferentChars = 20;
        const specialCharBonus = 6;
        const lengthCharBonus = 4;
        const differentCharBonus = 4;
        const maxScore = (maxLength * lengthCharBonus) +
            (maxDifferentChars * differentCharBonus) +
            (PASSWORD_VALIDATION_SPECIAL_CHARS.length * specialCharBonus);

        const chars: string[] = password.split('');

        score += password.length * lengthCharBonus;

        score += [ ...new Set(chars) ].length * differentCharBonus;

        score += [ ...new Set(chars.filter((c: string) => PASSWORD_VALIDATION_SPECIAL_CHARS.includes(c))) ].length * specialCharBonus;

        return Math.floor(score / maxScore * 100);

    }

    static generateValidPassword(length?: number): string {

        if (!length || length < PasswordUtilsService.PASSWORD_MIN_LENGTH) length = PasswordUtilsService.PASSWORD_MIN_LENGTH;
        if (length > PasswordUtilsService.PASSWORD_MAX_LENGTH) length = PasswordUtilsService.PASSWORD_MAX_LENGTH;

        const lowercaseLetters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
        const uppercaseLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
        const digits = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
        const specialChars = PASSWORD_VALIDATION_SPECIAL_CHARS.split('');

        let validPassword = '';

        let lowercaseIndex = Math.floor(Math.random() * (lowercaseLetters.length - 1));
        validPassword += lowercaseLetters[lowercaseIndex];
        let uppercaseIndex = Math.floor(Math.random() * (uppercaseLetters.length - 1));
        validPassword += uppercaseLetters[uppercaseIndex];
        let digitIndex = Math.floor(Math.random() * (digits.length - 1));
        validPassword += digits[digitIndex];
        let specialCharIndex = Math.floor(Math.random() * (specialChars.length - 1));
        validPassword += specialChars[specialCharIndex];

        while (validPassword.length < length) {

            if (validPassword.length < 8) {

                lowercaseIndex = (lowercaseIndex + 5 > lowercaseLetters.length - 1) ? 0 : lowercaseIndex + 5;
                validPassword += lowercaseLetters[lowercaseIndex];

                uppercaseIndex = (uppercaseIndex + 5 > uppercaseLetters.length - 1) ? 0 : uppercaseIndex + 5;
                validPassword += uppercaseLetters[uppercaseIndex];

                digitIndex = (digitIndex + 2 > digits.length - 1) ? 0 : digitIndex + 2;
                validPassword += digits[digitIndex];

                uppercaseIndex = (uppercaseIndex + 5 > uppercaseLetters.length - 1) ? 0 : uppercaseIndex + 5;
                validPassword += uppercaseLetters[uppercaseIndex];

            } else if (validPassword.length < 16) {

                lowercaseIndex = (lowercaseIndex + 5 > lowercaseLetters.length - 1) ? 0 : lowercaseIndex + 5;
                validPassword += lowercaseLetters[lowercaseIndex];

                uppercaseIndex = (uppercaseIndex + 5 > uppercaseLetters.length - 1) ? 0 : uppercaseIndex + 5;
                validPassword += uppercaseLetters[uppercaseIndex];

                digitIndex = (digitIndex + 2 > digits.length - 1) ? 0 : digitIndex + 2;
                validPassword += digits[digitIndex];

                specialCharIndex = Math.floor(Math.random() * (specialChars.length - 1));
                validPassword += specialChars[specialCharIndex];

                lowercaseIndex = (lowercaseIndex + 5 > lowercaseLetters.length - 1) ? 0 : lowercaseIndex + 5;
                validPassword += lowercaseLetters[lowercaseIndex];

                uppercaseIndex = (uppercaseIndex + 5 > uppercaseLetters.length - 1) ? 0 : uppercaseIndex + 5;
                validPassword += uppercaseLetters[uppercaseIndex];

                digitIndex = (digitIndex + 2 > digits.length - 1) ? 0 : digitIndex + 2;
                validPassword += digits[digitIndex];

                uppercaseIndex = (uppercaseIndex + 5 > uppercaseLetters.length - 1) ? 0 : uppercaseIndex + 5;
                validPassword += uppercaseLetters[uppercaseIndex];

            } else {

                lowercaseIndex = (lowercaseIndex + 5 > lowercaseLetters.length - 1) ? 0 : lowercaseIndex + 5;
                validPassword += lowercaseLetters[lowercaseIndex];

                uppercaseIndex = (uppercaseIndex + 5 > uppercaseLetters.length - 1) ? 0 : uppercaseIndex + 5;
                validPassword += uppercaseLetters[uppercaseIndex];

                digitIndex = (digitIndex + 2 > digits.length - 1) ? 0 : digitIndex + 2;
                validPassword += digits[digitIndex];

                specialCharIndex = Math.floor(Math.random() * (specialChars.length - 1));
                validPassword += specialChars[specialCharIndex];

                uppercaseIndex = (uppercaseIndex + 5 > uppercaseLetters.length - 1) ? 0 : uppercaseIndex + 5;
                validPassword += uppercaseLetters[uppercaseIndex];

            }

        }

        validPassword = validPassword.split('').sort(() => Math.random() - 0.5).join('');

        if (PasswordUtilsService.validatePassword(validPassword)) {

            return validPassword;

        } else {

            return PasswordUtilsService.generateValidPassword(length);

        }

    }

}
