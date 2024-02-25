import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgazaComponent } from './agaza.component';

describe('AgazaComponent', () => {
  let component: AgazaComponent;
  let fixture: ComponentFixture<AgazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgazaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
