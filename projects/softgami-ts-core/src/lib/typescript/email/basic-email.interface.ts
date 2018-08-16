import { EmailType } from './email-type.enum';

export interface BasicEmail {
    type: EmailType;
    address: string;
    isPrimary: boolean;
    isVerified: boolean;
}
