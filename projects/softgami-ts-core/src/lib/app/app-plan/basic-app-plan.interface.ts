import { AppPlanFeature } from '../app-plan-feature/app-plan-feature.interface';
import { MonetaryValue } from '../../domain/monetary/monetary-value.interface';
import { User } from '../../user/user.interface';

export interface BasicAppPlan {
    name: string;
    alias: string;
    appId: string;
    description?: string;
    image?: string;
    icon?: string;
    appPlanFeatures?: AppPlanFeature[];
    prices?: MonetaryValue[];
    pricesHistory?: MonetaryValue[];
    trialDays?: number;
    creator?: User;
    createdAt?: Date;
    lastUpdate?: Date;
}
