import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                AppComponent,
            ],
        }).compileComponents();

    });

    test('should create the app', () => {

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        expect(app).toBeTruthy();
        expect(app.title).toBe('softgami-ts-core-tester');

    });

});
