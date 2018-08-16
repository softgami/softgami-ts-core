import { BasicAction } from './basic-action.interface';

export interface Action extends BasicAction {
    _id: string;
}
