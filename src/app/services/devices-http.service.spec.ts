import { TestBed, inject } from '@angular/core/testing';

import { DevicesHttpService } from './devices-http.service';

describe('DevicesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevicesHttpService]
    });
  });

  it('should be created', inject([DevicesHttpService], (service: DevicesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
