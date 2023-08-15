import { TestBed } from '@angular/core/testing';

import { ApplyleaveServicesService } from './applyleave-services.service';

describe('ApplyleaveServicesService', () => {
  let service: ApplyleaveServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyleaveServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
