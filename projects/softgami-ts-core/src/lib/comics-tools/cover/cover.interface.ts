import { Thing } from '../../core/shared/thing/thing.interface';

export interface Cover extends Thing {
    index: number;
    totalCovers?: number;
    isLoading?: boolean;
}
