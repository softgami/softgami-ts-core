import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordTesterComponent } from './password-tester/password-tester.component';
import { PublicationTesterComponent } from './publication-tester/publication-tester.component';
import { ValidationTesterComponent } from './validation-tester/validation-tester.component';

const appRoutes: Routes = [
    {
        path: 'password-tester',
        component: PasswordTesterComponent,
    },
    {
        path: 'publication-tester',
        component: PublicationTesterComponent,
    },
    {
        path: 'validation-tester',
        component: ValidationTesterComponent,
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
