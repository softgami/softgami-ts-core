import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordTesterComponent } from './password-tester/password-tester.component';

@NgModule({
    declarations: [
        AppComponent,
        PasswordTesterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
