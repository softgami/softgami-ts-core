import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordTesterComponent } from './password-tester/password-tester.component';
import { PublicationTesterComponent } from './publication-tester/publication-tester.component';

@NgModule({
    declarations: [
        AppComponent,
        PasswordTesterComponent,
        PublicationTesterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
