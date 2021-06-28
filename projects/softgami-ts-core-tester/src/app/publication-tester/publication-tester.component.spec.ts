import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PublicationTesterComponent } from './publication-tester.component';

describe('PublicationTesterComponent', () => {

    let fixture: ComponentFixture<PublicationTesterComponent>;
    let app: PublicationTesterComponent;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [
                PublicationTesterComponent,
            ],
        }).compileComponents();

    });

    test('should create the app', () => {

        fixture = TestBed.createComponent(PublicationTesterComponent);
        app = fixture.componentInstance;
        expect(app).toBeTruthy();

    });

});
