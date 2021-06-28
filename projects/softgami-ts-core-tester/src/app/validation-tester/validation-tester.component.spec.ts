import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ValidationTesterComponent } from './validation-tester.component';

describe('ValidationTesterComponent', () => {

    let fixture: ComponentFixture<ValidationTesterComponent>;
    let app: ValidationTesterComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                ValidationTesterComponent,
            ],
        }).compileComponents();

    });

    test('should create the app', () => {

        fixture = TestBed.createComponent(ValidationTesterComponent);
        app = fixture.componentInstance;
        expect(app).toBeTruthy();

    });

});
