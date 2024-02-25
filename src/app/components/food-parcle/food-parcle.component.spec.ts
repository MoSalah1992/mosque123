import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodParcleComponent } from './food-parcle.component';

describe('FoodParcleComponent', () => {
  let component: FoodParcleComponent;
  let fixture: ComponentFixture<FoodParcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodParcleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodParcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
