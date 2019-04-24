import { Thing } from '../../shared/thing/thing.interface';

export interface BasicAppPlanFeature extends Thing {
    alias: string;
    value?: number;
    info?: string[];
    icon?: string;
}
