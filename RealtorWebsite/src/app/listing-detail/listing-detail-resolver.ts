import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {ListingDetailService} from './listing-detail.service';
import {ListingDetailDto} from './listing-detail-dto';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ListingDetailResolver implements Resolve<any> {
  constructor(private _listingDetailService: ListingDetailService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ListingDetailDto> {
    return this._listingDetailService.getListingDetail(route.params['id']);
  }
}
