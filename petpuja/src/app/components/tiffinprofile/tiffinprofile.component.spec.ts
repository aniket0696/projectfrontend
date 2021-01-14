import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinprofileComponent } from './tiffinprofile.component';

describe('TiffinprofileComponent', () => {
  let component: TiffinprofileComponent;
  let fixture: ComponentFixture<TiffinprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
