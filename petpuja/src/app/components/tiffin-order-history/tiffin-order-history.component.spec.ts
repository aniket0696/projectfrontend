import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinOrderHistoryComponent } from './tiffin-order-history.component';

describe('TiffinOrderHistoryComponent', () => {
  let component: TiffinOrderHistoryComponent;
  let fixture: ComponentFixture<TiffinOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
