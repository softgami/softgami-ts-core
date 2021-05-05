import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTesterComponent } from './validation-tester.component';

describe('ValidationTesterComponent', () => {

    let component: ValidationTesterComponent;
    let fixture: ComponentFixture<ValidationTesterComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [ ValidationTesterComponent ],
        })
            .compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ValidationTesterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
