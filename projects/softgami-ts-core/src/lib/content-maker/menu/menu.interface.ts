import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { BasicMenu } from './basic-menu.interface';

export interface Menu extends BasicMenu {
    _id: string;
    appInstance?: AppInstance;
}
