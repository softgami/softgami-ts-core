import { AppInstance } from '../app/app-instance/app-instance.interface';
import { BasicMenu } from './basic-menu.interface';
import { SubMenu } from './sub-menu.interface';

export interface Menu extends BasicMenu {
    _id: string;
    appInstance?: AppInstance;
    subMenus?: SubMenu[];
}
