import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeregesterTiffinProviderComponent } from './deregester-tiffin-provider.component';

describe('DeregesterTiffinProviderComponent', () => {
  let component: DeregesterTiffinProviderComponent;
  let fixture: ComponentFixture<DeregesterTiffinProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeregesterTiffinProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeregesterTiffinProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
