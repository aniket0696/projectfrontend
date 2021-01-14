import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinPendingMenuComponent } from './tiffin-pending-menu.component';

describe('TiffinPendingMenuComponent', () => {
  let component: TiffinPendingMenuComponent;
  let fixture: ComponentFixture<TiffinPendingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinPendingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinPendingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
