import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayWithMeComponent } from './pray-with-me.component';

describe('PrayWithMeComponent', () => {
  let component: PrayWithMeComponent;
  let fixture: ComponentFixture<PrayWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayWithMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
