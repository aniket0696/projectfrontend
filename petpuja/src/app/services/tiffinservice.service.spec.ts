import { TestBed } from '@angular/core/testing';

import { TiffinserviceService } from './tiffinservice.service';

describe('TiffinserviceService', () => {
  let service: TiffinserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiffinserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
