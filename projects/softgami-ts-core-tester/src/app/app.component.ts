import { Component } from '@angular/core';
import { Domain } from '@lib/content-maker/domain/domain.model';
import { DomainType } from '@lib/content-maker/domain/domain-type.enum';
import { User } from '@lib/core/user/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor() {
        const d: Domain<DomainType> = new Domain();
        console.log(d);
        const u: User = new User().toCleanObject();
        console.log(u);
    }

}
