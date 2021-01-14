import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinCurrentOrderComponent } from './tiffin-current-order.component';

describe('TiffinCurrentOrderComponent', () => {
  let component: TiffinCurrentOrderComponent;
  let fixture: ComponentFixture<TiffinCurrentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinCurrentOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinCurrentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
