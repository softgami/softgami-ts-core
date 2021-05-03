import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationTesterComponent } from './publication-tester.component';

describe('PublicationTesterComponent', () => {

    let component: PublicationTesterComponent;
    let fixture: ComponentFixture<PublicationTesterComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [ PublicationTesterComponent ],
        })
            .compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(PublicationTesterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
