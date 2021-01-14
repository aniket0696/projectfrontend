import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinMenuComponent } from './tiffin-menu.component';

describe('TiffinMenuComponent', () => {
  let component: TiffinMenuComponent;
  let fixture: ComponentFixture<TiffinMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
