import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FeaturedListingDto} from './featured-listing-dto';

@Injectable()
export class FeaturedListingService {

  constructor(private http: Http) { }

  getFeaturedListings(): Observable<Array<FeaturedListingDto>> {
    let url = 'http://localhost:8080/RealtorBackend/rest/featured-listings';

    return this.http.get(url, {method: 'Get'}).map( (res) => res.json())
        .map( (listings: Array<any>) => {
          let result: Array<FeaturedListingDto> = [];
          if (listings) {
            listings.forEach( (data) => result.push(FeaturedListingDto.fromJson(data)));
          }
          return result;
        }).catch(this.handleError);
  }

  handleError(error: Response): Observable<any> {
    return Observable.throw(error.json()).error || 'Server not reachable';
  }
}
