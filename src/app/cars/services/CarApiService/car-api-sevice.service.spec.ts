import { TestBed } from '@angular/core/testing';

import { CarApiSeviceService } from './car-api-sevice.service';

describe('CarApiSeviceService', () => {
  let service: CarApiSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarApiSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
