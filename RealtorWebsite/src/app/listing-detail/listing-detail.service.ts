import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ListingDetailDto} from './listing-detail-dto';

@Injectable()
export class ListingDetailService {

  constructor(private http: Http) { }

  getListingDetail(id: number): Observable<ListingDetailDto> {
    let url = 'http://localhost:8080/Realtor/rest/listing-detail?id=' + id;

    return this.http.get(url, {method: 'Get'}).map( (res) => res.json())
        .map( (listing: any) => {
          let result: ListingDetailDto;
          if (listing) {
            console.log('listing: ' + listing);
            result = ListingDetailDto.fromJson(listing);
            console.log('result: ' + result);
          }
          return result;
        }).catch(this.handleError);
  }

  handleError(error: Response): Observable<any> {
    return Observable.throw(error.json()).error || 'Server not reachable';
  }
}
