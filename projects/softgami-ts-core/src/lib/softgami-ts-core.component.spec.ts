import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftgamiTsCoreComponent } from './softgami-ts-core.component';

describe('SoftgamiTsCoreComponent', () => {
  let component: SoftgamiTsCoreComponent;
  let fixture: ComponentFixture<SoftgamiTsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftgamiTsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftgamiTsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
