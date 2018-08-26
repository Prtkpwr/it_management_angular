import { TestBed, inject } from '@angular/core/testing';

import { ComputerServiceService } from './computer-service.service';

describe('ComputerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputerServiceService]
    });
  });

  it('should be created', inject([ComputerServiceService], (service: ComputerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
