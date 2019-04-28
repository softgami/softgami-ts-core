import { AppPlanFeature } from '../app-plan-feature/app-plan-feature.interface';
import { MonetaryValue } from '../../domain/monetary/monetary-value.interface';
import { Thing } from '../../shared/thing/thing.interface';
import { User } from '../../user/user.interface';

export interface BasicAppPlan extends Thing {
    alias: string;
    appId: string;
    creator?: User;
    icon?: string;
    appPlanFeatures?: AppPlanFeature[];
    prices?: MonetaryValue[];
    pricesHistory?: MonetaryValue[];
    trialDays?: number;
}
