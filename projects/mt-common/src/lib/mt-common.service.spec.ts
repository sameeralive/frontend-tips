import { TestBed } from '@angular/core/testing';

import { MtCommonService } from './mt-common.service';

describe('MtCommonService', () => {
  let service: MtCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
