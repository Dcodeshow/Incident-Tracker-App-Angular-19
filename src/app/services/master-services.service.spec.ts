import { TestBed } from '@angular/core/testing';

import { MasterServicesService } from './master-services.service';

describe('MasterServicesService', () => {
  let service: MasterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
