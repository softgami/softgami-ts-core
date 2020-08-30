import { PASSWORD_VALIDATION_SPECIAL_CHARS } from '../../../services/password/password-validation-special-chars';

export const PASSWORD_SPECIAL_CHARS_REGEX: RegExp = new RegExp(`(?=.*[${PASSWORD_VALIDATION_SPECIAL_CHARS}])`);
