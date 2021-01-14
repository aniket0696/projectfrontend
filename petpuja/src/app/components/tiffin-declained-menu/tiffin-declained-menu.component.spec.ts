import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinDeclainedMenuComponent } from './tiffin-declained-menu.component';

describe('TiffinDeclainedMenuComponent', () => {
  let component: TiffinDeclainedMenuComponent;
  let fixture: ComponentFixture<TiffinDeclainedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinDeclainedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinDeclainedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
