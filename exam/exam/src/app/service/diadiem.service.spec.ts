import { TestBed } from '@angular/core/testing';

import { DiadiemService } from './diadiem.service';

describe('DiadiemService', () => {
  let service: DiadiemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiadiemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
