import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoftgamiTsCoreModule } from 'softgami-ts-core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SoftgamiTsCoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
