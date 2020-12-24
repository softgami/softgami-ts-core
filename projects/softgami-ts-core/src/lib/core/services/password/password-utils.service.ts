import { AT_LEAST_ONE_DIGIT_REGEX } from '../../shared/regex/numbers/at-least-one-digit.regex';
import { AT_LEAST_ONE_LOWERCASE_REGEX } from '../../shared/regex/chars/at-least-one-lowercase.regex';
import { AT_LEAST_ONE_UPPERCASE_REGEX } from '../../shared/regex/chars/at-least-one-uppercase.regex';
import { PASSWORD_SPECIAL_CHARS_REGEX } from '../../shared/regex/password/password-special-chars.regex';
import { PasswordValidationErrors } from './password-validation-errors.enum';
import { VALID_PASSWORD_REGEX } from '../../shared/regex/password/valid-password.regex';
import { PASSWORD_VALIDATION_SPECIAL_CHARS } from './password-validation-special-chars';

export class PasswordUtilsService {

    static validatePassword(password: string): boolean | PasswordValidationErrors {

        if (!password || password.length < 8) return PasswordValidationErrors.MIN_LENGHT_8;

        if (password.length > 20) return PasswordValidationErrors.MAX_LENGHT_20;

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
            if (String.fromCharCode(s.charCodeAt(i) + 1) === s[+i + 1]
                && String.fromCharCode(s.charCodeAt(i) + 2) === s[+i + 2]) return true;
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

        score += [...new Set(chars)].length * differentCharBonus;

        score += [...new Set(chars.filter((c: string) => PASSWORD_VALIDATION_SPECIAL_CHARS.includes(c)))].length * specialCharBonus;

        return Math.floor(score / maxScore * 100);

    }

}
