import { SubjectAlias } from './subject-alias.enum';
import { Thing } from '../../../shared/thing/thing.interface';

export interface BasicSubject extends Thing {
    alias: SubjectAlias;
    isActive: boolean;
}
