import { AppPlanFeature } from '../app-plan-feature/app-plan-feature.interface';
import { Price } from '../../domain/monetary/price.interface';
import { User } from '../../user/user.interface';

export interface BasicAppPlan {
    name: string;
    alias: string;
    description?: string;
    image?: string;
    icon?: string;
    appPlanFeatures?: AppPlanFeature[];
    prices?: Price[];
    pricesHistory?: Price[];
    trialDays?: number;
    creator?: User;
    createdAt?: Date;
    lastUpdate?: Date;
}
