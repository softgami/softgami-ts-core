import { PASSWORD_VALIDATION_SPECIAL_CHARS } from '../../../auth/password/services/password-validation-special-chars';

export const PASSWORD_SPECIAL_CHARS_REGEX = new RegExp(`(?=.*[${PASSWORD_VALIDATION_SPECIAL_CHARS}])`);
