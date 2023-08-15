import { TestBed } from '@angular/core/testing';

import { ApplycomplaintServicesService } from './applycomplaint-services.service';

describe('ApplycomplaintServicesService', () => {
  let service: ApplycomplaintServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplycomplaintServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
