import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTesterComponent } from './password-tester.component';

describe('PasswordTesterComponent', () => {
    let component: PasswordTesterComponent;
    let fixture: ComponentFixture<PasswordTesterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PasswordTesterComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordTesterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
