/**
 * Created by billreh on 12/17/16.
 */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {FeaturedListingService} from './featured-listing.service';
import {Observable} from 'rxjs/Observable';
import {FeaturedListingDto} from "./featured-listing-dto";

@Injectable()
export class HomeFeaturedListingsResolver implements Resolve<any> {
  constructor(private _featuredListingService: FeaturedListingService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Array<FeaturedListingDto>> {
    return this._featuredListingService.getFeaturedListings();
  }
}
