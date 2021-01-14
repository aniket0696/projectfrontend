import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinFeedbackComponent } from './tiffin-feedback.component';

describe('TiffinFeedbackComponent', () => {
  let component: TiffinFeedbackComponent;
  let fixture: ComponentFixture<TiffinFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiffinFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
