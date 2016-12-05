/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListingDetailService } from './listing-detail.service';

describe('ListingDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingDetailService]
    });
  });

  it('should ...', inject([ListingDetailService], (service: ListingDetailService) => {
    expect(service).toBeTruthy();
  }));
});
