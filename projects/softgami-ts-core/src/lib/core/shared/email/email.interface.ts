import { EmailType } from './email-type.enum';

export interface Email {
    type: EmailType;
    address: string;
    isPrimary: boolean;
    isVerified?: boolean;
}
