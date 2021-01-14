import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinproviderhomeComponent } from './tiffinproviderhome.component';

describe('TiffinproviderhomeComponent', () => {
  let component: TiffinproviderhomeComponent;
  let fixture: ComponentFixture<TiffinproviderhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinproviderhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinproviderhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
