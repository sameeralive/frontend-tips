import { TestBed } from '@angular/core/testing';

import { MtCountryListService } from './mt-country-list.service';

describe('MtCountryListService', () => {
  let service: MtCountryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtCountryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
