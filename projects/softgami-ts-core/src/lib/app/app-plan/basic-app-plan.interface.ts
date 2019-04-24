import { AppPlanFeature } from '../app-plan-feature/app-plan-feature.interface';
import { MonetaryValue } from '../../domain/monetary/monetary-value.interface';
import { Thing } from '../../shared/thing/thing.interface';

export interface BasicAppPlan extends Thing {
    alias: string;
    appId: string;
    icon?: string;
    appPlanFeatures?: AppPlanFeature[];
    prices?: MonetaryValue[];
    pricesHistory?: MonetaryValue[];
    trialDays?: number;
}
