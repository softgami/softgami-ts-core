import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { Component } from '@angular/core';
import { User } from '@lib/core/user/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor() {
        const appInstance: AppInstance = new AppInstance();
        appInstance.users = [new User()];
        appInstance.users[0]._id = '123456';
        console.log(appInstance.toQueryParamsObject());
    }

}
