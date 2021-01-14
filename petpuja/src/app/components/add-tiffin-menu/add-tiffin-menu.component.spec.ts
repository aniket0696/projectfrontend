import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiffinMenuComponent } from './add-tiffin-menu.component';

describe('AddTiffinMenuComponent', () => {
  let component: AddTiffinMenuComponent;
  let fixture: ComponentFixture<AddTiffinMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTiffinMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTiffinMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
