import { TestBed } from '@angular/core/testing';

import { SharAccService } from './shar-acc.service';

describe('SharAccService', () => {
  let service: SharAccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharAccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
