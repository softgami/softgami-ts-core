import { ActionAlias } from './action-alias.enum';

export interface BasicAction {
    name: string;
    alias: ActionAlias;
    value: number;
    description?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
