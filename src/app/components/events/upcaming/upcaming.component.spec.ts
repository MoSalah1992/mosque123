import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcamingComponent } from './upcaming.component';

describe('UpcamingComponent', () => {
  let component: UpcamingComponent;
  let fixture: ComponentFixture<UpcamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
