import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PasswordTesterComponent } from './password-tester.component';

describe('PasswordTesterComponent', () => {

    let fixture: ComponentFixture<PasswordTesterComponent>;
    let app: PasswordTesterComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                PasswordTesterComponent,
            ],
        }).compileComponents();

    });

    test('should create the app', () => {

        fixture = TestBed.createComponent(PasswordTesterComponent);
        app = fixture.componentInstance;
        expect(app).toBeTruthy();

    });

});
