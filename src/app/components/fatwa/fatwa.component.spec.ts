import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatwaComponent } from './fatwa.component';

describe('FatwaComponent', () => {
  let component: FatwaComponent;
  let fixture: ComponentFixture<FatwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatwaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
