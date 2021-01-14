import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTiffinProviderComponent } from './update-tiffin-provider.component';

describe('UpdateTiffinProviderComponent', () => {
  let component: UpdateTiffinProviderComponent;
  let fixture: ComponentFixture<UpdateTiffinProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTiffinProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTiffinProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
