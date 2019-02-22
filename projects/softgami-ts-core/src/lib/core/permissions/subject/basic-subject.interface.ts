import { SubjectAlias } from './subject-alias.enum';

export interface BasicSubject {
    name: string;
    alias: SubjectAlias;
    isActive: boolean;
    description?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
